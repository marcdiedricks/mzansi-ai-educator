export type TrustState = 'VERIFIED_CURRICULUM' | 'AI_ASSISTED_REVIEWED' | 'LIVE_AI';

export type Competency =
  | 'AI_UNDERSTANDING'
  | 'DATA_AWARENESS'
  | 'CRITICAL_QUESTIONING'
  | 'RESPONSIBLE_AI_USE'
  | 'BASIC_PRIVACY'
  | 'HUMAN_JUDGEMENT'
  | 'UBUNTU_TECHNOLOGY_AWARENESS';

export type SourceClassification = 'A' | 'B' | 'C' | 'D' | 'E' | 'U';

export interface Source {
  id: string;
  title: string;
  publisher: string;
  classification: SourceClassification;
  reference: string;
  reviewStatus: string;
}

export type BlockType =
  | 'objective'
  | 'explanation'
  | 'example'
  | 'keyPoint'
  | 'activity'
  | 'reflection'
  | 'ethicsCheck'
  | 'verification'
  | 'application'
  | 'summary';

export type BlockVariant = 'standard' | 'plain' | 'SouthAfricanContext' | 'educatorExtension';

export interface LessonBlock {
  id: string;
  type: BlockType;
  variant: BlockVariant;
  content: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Lesson {
  id: string;
  title: string;
  levelId: string;
  moduleId: string;
  locale: string;
  version: string;
  estimatedMinutes: number;
  objectives: string[];
  competencyIds: Competency[];
  blocks: LessonBlock[];
  activityIds: string[];
  assessmentId: string | null;
  sourceIds: string[];
  offlineEligible: boolean;
  trustState: TrustState;
  quiz?: QuizQuestion[];
}

export interface Module {
  id: string;
  title: string;
  description: string;
  order: number;
  lessonIds: string[];
  competencyIds: Competency[];
  version: string;
  iconName?: string;
}

export interface Level {
  id: string;
  title: string;
  competencyStage: string;
  version: string;
  moduleIds: string[];
}

export interface Programme {
  id: string;
  title: string;
  version: string;
  defaultLocale: string;
  activeLevelId: string;
}
