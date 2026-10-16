export interface LessonEvidence {
  activityResponse: string;
  reflectionResponse: string;
  updatedAt: string;
}

export interface LearnerEvidenceStore {
  version: 1;
  lessons: Record<string, LessonEvidence>;
}

const EVIDENCE_STORAGE_KEY = 'mzansi_ai_learner_evidence_v1';

const emptyStore = (): LearnerEvidenceStore => ({ version: 1, lessons: {} });

function readStore(): LearnerEvidenceStore {
  try {
    const raw = localStorage.getItem(EVIDENCE_STORAGE_KEY);
    if (!raw) return emptyStore();
    const parsed = JSON.parse(raw) as Partial<LearnerEvidenceStore>;
    return {
      version: 1,
      lessons: parsed.lessons && typeof parsed.lessons === 'object' ? parsed.lessons : {},
    };
  } catch {
    return emptyStore();
  }
}

export function getLessonEvidence(lessonId: string): LessonEvidence {
  const existing = readStore().lessons[lessonId];
  return {
    activityResponse: typeof existing?.activityResponse === 'string' ? existing.activityResponse : '',
    reflectionResponse: typeof existing?.reflectionResponse === 'string' ? existing.reflectionResponse : '',
    updatedAt: typeof existing?.updatedAt === 'string' ? existing.updatedAt : '',
  };
}

export function saveLessonEvidence(
  lessonId: string,
  evidence: Pick<LessonEvidence, 'activityResponse' | 'reflectionResponse'>,
) {
  try {
    const store = readStore();
    const updated: LearnerEvidenceStore = {
      version: 1,
      lessons: {
        ...store.lessons,
        [lessonId]: {
          activityResponse: evidence.activityResponse,
          reflectionResponse: evidence.reflectionResponse,
          updatedAt: new Date().toISOString(),
        },
      },
    };
    localStorage.setItem(EVIDENCE_STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event('mzansi_evidence_updated'));
  } catch (e) {
    console.error('Failed to save learner evidence', e);
  }
}
