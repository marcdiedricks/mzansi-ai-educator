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
const LEVEL3_TEST_PREVIEW_KEY = 'mzansi_ai_level3_test_preview';
const LEVEL3_TEST_PROGRESS_KEY = 'mzansi_ai_level3_test_progress';
const LEVEL2_LESSON_PREFIX = 'MZAIE-P2-';
const LEVEL3_LESSON_PREFIX = 'MZAIE-P3-';

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
const isLevel3Lesson = (lessonId: string) => lessonId.startsWith(LEVEL3_LESSON_PREFIX);

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
  try {
    const learner = readProgress(PROGRESS_STORAGE_KEY);
    let cleanLearner = learner;

    const migrate = (enabled: boolean, isPreviewLesson: (id: string) => boolean, previewKey: string) => {
      if (!enabled) return;
      const contaminatedLessons = cleanLearner.completedLessons.filter(isPreviewLesson);
      const contaminatedScores = Object.entries(cleanLearner.quizScores).filter(([id]) => isPreviewLesson(id));
      const contaminatedLastVisited = cleanLearner.lastVisitedLessonId && isPreviewLesson(cleanLearner.lastVisitedLessonId)
        ? cleanLearner.lastVisitedLessonId
        : undefined;
      if (!contaminatedLessons.length && !contaminatedScores.length && !contaminatedLastVisited) return;

      const preview = readProgress(previewKey);
      writeProgress(previewKey, {
        ...preview,
        completedLessons: Array.from(new Set([...preview.completedLessons, ...contaminatedLessons])),
        quizScores: { ...preview.quizScores, ...Object.fromEntries(contaminatedScores) },
        lastVisitedLessonId: contaminatedLastVisited || preview.lastVisitedLessonId,
      });

      cleanLearner = {
        ...cleanLearner,
        completedLessons: cleanLearner.completedLessons.filter((id) => !isPreviewLesson(id)),
        quizScores: Object.fromEntries(Object.entries(cleanLearner.quizScores).filter(([id]) => !isPreviewLesson(id))),
        lastVisitedLessonId: contaminatedLastVisited ? undefined : cleanLearner.lastVisitedLessonId,
      };
    };

    migrate(isLevel2TestPreviewEnabled(), isLevel2Lesson, LEVEL2_TEST_PROGRESS_KEY);
    migrate(isLevel3TestPreviewEnabled(), isLevel3Lesson, LEVEL3_TEST_PROGRESS_KEY);

    if (cleanLearner !== learner) writeProgress(PROGRESS_STORAGE_KEY, cleanLearner);
  } catch (e) {
    console.error('Failed to migrate preview progress', e);
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

export function getLevel3TestProgress(): UserProgress {
  migratePreviewContamination();
  return readProgress(LEVEL3_TEST_PROGRESS_KEY);
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

function saveLevel3TestProgress(progress: UserProgress) {
  try {
    writeProgress(LEVEL3_TEST_PROGRESS_KEY, progress);
    window.dispatchEvent(new Event('mzansi_progress_updated'));
  } catch (e) {
    console.error('Failed to save Level 3 test progress', e);
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

export function isLevel3TestPreviewEnabled(): boolean {
  try {
    return localStorage.getItem(LEVEL3_TEST_PREVIEW_KEY) === 'true';
  } catch {
    return false;
  }
}

export function setLevel3TestPreview(enabled: boolean) {
  try {
    if (enabled) localStorage.setItem(LEVEL3_TEST_PREVIEW_KEY, 'true');
    else localStorage.removeItem(LEVEL3_TEST_PREVIEW_KEY);
    window.dispatchEvent(new Event('mzansi_progress_updated'));
  } catch (e) {
    console.error('Failed to update Level 3 test preview', e);
  }
}

function previewStoreForLesson(lessonId: string): 'level2' | 'level3' | null {
  if (isLevel2TestPreviewEnabled() && isLevel2Lesson(lessonId)) return 'level2';
  if (isLevel3TestPreviewEnabled() && isLevel3Lesson(lessonId)) return 'level3';
  return null;
}

function getProgressForLesson(lessonId: string) {
  const preview = previewStoreForLesson(lessonId);
  if (preview === 'level2') return getLevel2TestProgress();
  if (preview === 'level3') return getLevel3TestProgress();
  return getUserProgress();
}

function saveProgressForLesson(lessonId: string, progress: UserProgress) {
  const preview = previewStoreForLesson(lessonId);
  if (preview === 'level2') saveLevel2TestProgress(progress);
  else if (preview === 'level3') saveLevel3TestProgress(progress);
  else saveUserProgress(progress);
}

export function toggleLessonCompletion(lessonId: string): boolean {
  const current = getProgressForLesson(lessonId);
  const isDone = current.completedLessons.includes(lessonId);
  const updatedLessons = isDone
    ? current.completedLessons.filter((id) => id !== lessonId)
    : [...current.completedLessons, lessonId];

  saveProgressForLesson(lessonId, {
    ...current,
    completedLessons: updatedLessons,
    lastVisitedLessonId: lessonId,
  });

  return !isDone;
}

export function isLessonCompleted(lessonId: string): boolean {
  return getProgressForLesson(lessonId).completedLessons.includes(lessonId);
}

export function recordQuizScore(lessonId: string, score: number) {
  const current = getProgressForLesson(lessonId);
  const safeScore = Math.max(0, Math.min(100, Math.round(score)));
  saveProgressForLesson(lessonId, {
    ...current,
    quizScores: { ...current.quizScores, [lessonId]: safeScore },
    lastVisitedLessonId: lessonId,
  });
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
