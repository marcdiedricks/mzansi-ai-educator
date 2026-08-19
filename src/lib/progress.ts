export interface UserProgress {
  completedLessons: string[];
  quizScores: Record<string, number>;
  completedLabs: string[];
  lastVisitedLessonId?: string;
  certificateClaimed?: boolean;
  certificateDate?: string;
}

const PROGRESS_STORAGE_KEY = 'mzansi_ai_user_progress';
const LEVEL2_TEST_PREVIEW_KEY = 'mzansi_ai_level2_test_preview';
const LEVEL2_TEST_PROGRESS_KEY = 'mzansi_ai_level2_test_progress';
const LEVEL2_LESSON_PREFIX = 'MZAIE-P2-';

const emptyProgress = (): UserProgress => ({
  completedLessons: [],
  quizScores: {},
  completedLabs: [],
});

const normaliseProgress = (parsed: Partial<UserProgress>): UserProgress => ({
  completedLessons: Array.isArray(parsed.completedLessons) ? parsed.completedLessons : [],
  quizScores: parsed.quizScores && typeof parsed.quizScores === 'object' ? parsed.quizScores : {},
  completedLabs: Array.isArray(parsed.completedLabs) ? parsed.completedLabs : [],
  lastVisitedLessonId: parsed.lastVisitedLessonId,
  certificateClaimed: parsed.certificateClaimed,
  certificateDate: parsed.certificateDate,
});

const isLevel2Lesson = (lessonId: string) => lessonId.startsWith(LEVEL2_LESSON_PREFIX);

function readProgress(key: string): UserProgress {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return emptyProgress();
    return normaliseProgress(JSON.parse(raw) as Partial<UserProgress>);
  } catch {
    return emptyProgress();
  }
}

function writeProgress(key: string, progress: UserProgress) {
  localStorage.setItem(key, JSON.stringify(progress));
}

function migratePreviewContamination() {
  if (!isLevel2TestPreviewEnabled()) return;

  try {
    const learner = readProgress(PROGRESS_STORAGE_KEY);
    const contaminatedLessons = learner.completedLessons.filter(isLevel2Lesson);
    const contaminatedScores = Object.entries(learner.quizScores).filter(([id]) => isLevel2Lesson(id));
    const contaminatedLastVisited = learner.lastVisitedLessonId && isLevel2Lesson(learner.lastVisitedLessonId)
      ? learner.lastVisitedLessonId
      : undefined;

    if (!contaminatedLessons.length && !contaminatedScores.length && !contaminatedLastVisited) return;

    const preview = readProgress(LEVEL2_TEST_PROGRESS_KEY);
    const mergedPreview: UserProgress = {
      ...preview,
      completedLessons: Array.from(new Set([...preview.completedLessons, ...contaminatedLessons])),
      quizScores: { ...preview.quizScores, ...Object.fromEntries(contaminatedScores) },
      lastVisitedLessonId: contaminatedLastVisited || preview.lastVisitedLessonId,
    };

    const cleanLearner: UserProgress = {
      ...learner,
      completedLessons: learner.completedLessons.filter((id) => !isLevel2Lesson(id)),
      quizScores: Object.fromEntries(Object.entries(learner.quizScores).filter(([id]) => !isLevel2Lesson(id))),
      lastVisitedLessonId: contaminatedLastVisited ? undefined : learner.lastVisitedLessonId,
    };

    writeProgress(LEVEL2_TEST_PROGRESS_KEY, mergedPreview);
    writeProgress(PROGRESS_STORAGE_KEY, cleanLearner);
  } catch (e) {
    console.error('Failed to migrate Level 2 preview progress', e);
  }
}

export function getUserProgress(): UserProgress {
  migratePreviewContamination();
  return readProgress(PROGRESS_STORAGE_KEY);
}

export function getLevel2TestProgress(): UserProgress {
  migratePreviewContamination();
  return readProgress(LEVEL2_TEST_PROGRESS_KEY);
}

export function saveUserProgress(progress: UserProgress) {
  try {
    writeProgress(PROGRESS_STORAGE_KEY, progress);
    window.dispatchEvent(new Event('mzansi_progress_updated'));
  } catch (e) {
    console.error('Failed to save progress', e);
  }
}

function saveLevel2TestProgress(progress: UserProgress) {
  try {
    writeProgress(LEVEL2_TEST_PROGRESS_KEY, progress);
    window.dispatchEvent(new Event('mzansi_progress_updated'));
  } catch (e) {
    console.error('Failed to save Level 2 test progress', e);
  }
}

export function isLevel2TestPreviewEnabled(): boolean {
  try {
    return localStorage.getItem(LEVEL2_TEST_PREVIEW_KEY) === 'true';
  } catch {
    return false;
  }
}

export function setLevel2TestPreview(enabled: boolean) {
  try {
    if (enabled) localStorage.setItem(LEVEL2_TEST_PREVIEW_KEY, 'true');
    else localStorage.removeItem(LEVEL2_TEST_PREVIEW_KEY);
    window.dispatchEvent(new Event('mzansi_progress_updated'));
  } catch (e) {
    console.error('Failed to update Level 2 test preview', e);
  }
}

function usePreviewStore(lessonId: string) {
  return isLevel2TestPreviewEnabled() && isLevel2Lesson(lessonId);
}

export function toggleLessonCompletion(lessonId: string): boolean {
  const previewMode = usePreviewStore(lessonId);
  const current = previewMode ? getLevel2TestProgress() : getUserProgress();
  const isDone = current.completedLessons.includes(lessonId);
  const updatedLessons = isDone
    ? current.completedLessons.filter((id) => id !== lessonId)
    : [...current.completedLessons, lessonId];

  const updated = {
    ...current,
    completedLessons: updatedLessons,
    lastVisitedLessonId: lessonId,
  };

  if (previewMode) saveLevel2TestProgress(updated);
  else saveUserProgress(updated);

  return !isDone;
}

export function isLessonCompleted(lessonId: string): boolean {
  const current = usePreviewStore(lessonId) ? getLevel2TestProgress() : getUserProgress();
  return current.completedLessons.includes(lessonId);
}

export function recordQuizScore(lessonId: string, score: number) {
  const previewMode = usePreviewStore(lessonId);
  const current = previewMode ? getLevel2TestProgress() : getUserProgress();
  const safeScore = Math.max(0, Math.min(100, Math.round(score)));
  const updated = {
    ...current,
    quizScores: { ...current.quizScores, [lessonId]: safeScore },
    lastVisitedLessonId: lessonId,
  };

  if (previewMode) saveLevel2TestProgress(updated);
  else saveUserProgress(updated);
}

export function recordLabCompletion(labId: string) {
  const current = getUserProgress();
  if (!current.completedLabs.includes(labId)) {
    saveUserProgress({
      ...current,
      completedLabs: [...current.completedLabs, labId],
    });
  }
}
