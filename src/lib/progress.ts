export interface UserProgress {
  completedLessons: string[];
  quizScores: Record<string, number>;
  completedLabs: string[];
  lastVisitedLessonId?: string;
  certificateClaimed?: boolean;
  certificateDate?: string;
}

const PROGRESS_STORAGE_KEY = 'mzansi_ai_user_progress';

const emptyProgress = (): UserProgress => ({
  completedLessons: [],
  quizScores: {},
  completedLabs: [],
});

export function getUserProgress(): UserProgress {
  try {
    const raw = localStorage.getItem(PROGRESS_STORAGE_KEY);
    if (!raw) return emptyProgress();

    const parsed = JSON.parse(raw) as Partial<UserProgress>;
    return {
      completedLessons: Array.isArray(parsed.completedLessons) ? parsed.completedLessons : [],
      quizScores: parsed.quizScores && typeof parsed.quizScores === 'object' ? parsed.quizScores : {},
      completedLabs: Array.isArray(parsed.completedLabs) ? parsed.completedLabs : [],
      lastVisitedLessonId: parsed.lastVisitedLessonId,
      certificateClaimed: parsed.certificateClaimed,
      certificateDate: parsed.certificateDate,
    };
  } catch {
    return emptyProgress();
  }
}

export function saveUserProgress(progress: UserProgress) {
  try {
    localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(progress));
    window.dispatchEvent(new Event('mzansi_progress_updated'));
  } catch (e) {
    console.error('Failed to save progress', e);
  }
}

export function toggleLessonCompletion(lessonId: string): boolean {
  const current = getUserProgress();
  const isDone = current.completedLessons.includes(lessonId);
  const updatedLessons = isDone
    ? current.completedLessons.filter((id) => id !== lessonId)
    : [...current.completedLessons, lessonId];

  saveUserProgress({
    ...current,
    completedLessons: updatedLessons,
    lastVisitedLessonId: lessonId,
  });

  return !isDone;
}

export function isLessonCompleted(lessonId: string): boolean {
  return getUserProgress().completedLessons.includes(lessonId);
}

export function recordQuizScore(lessonId: string, score: number) {
  const current = getUserProgress();
  const safeScore = Math.max(0, Math.min(100, Math.round(score)));

  saveUserProgress({
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
