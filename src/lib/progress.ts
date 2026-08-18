export interface UserProgress {
  completedLessons: string[];
  quizScores: Record<string, number>;
  completedLabs: string[];
  lastVisitedLessonId?: string;
  certificateClaimed?: boolean;
  certificateDate?: string;
}

const PROGRESS_STORAGE_KEY = 'mzansi_ai_user_progress';

export function getUserProgress(): UserProgress {
  try {
    const raw = localStorage.getItem(PROGRESS_STORAGE_KEY);
    if (!raw) {
      return {
        completedLessons: [],
        quizScores: {},
        completedLabs: [],
      };
    }
    return JSON.parse(raw);
  } catch (e) {
    return {
      completedLessons: [],
      quizScores: {},
      completedLabs: [],
    };
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
  const current = getUserProgress();
  return current.completedLessons.includes(lessonId);
}

export function recordQuizScore(lessonId: string, score: number) {
  const current = getUserProgress();
  const updatedScores = { ...current.quizScores, [lessonId]: score };
  const updatedLessons = current.completedLessons.includes(lessonId)
    ? current.completedLessons
    : [...current.completedLessons, lessonId];

  saveUserProgress({
    ...current,
    quizScores: updatedScores,
    completedLessons: updatedLessons,
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
