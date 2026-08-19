export type ProgrammeLevelStatus = 'active' | 'locked';

export interface ProgrammeLevelSummary {
  id: 1 | 2 | 3 | 4;
  title: string;
  shortTitle: string;
  stage: string;
  outcome: string;
  moduleCount: number;
  status: ProgrammeLevelStatus;
}

export interface ProgrammeModuleShell {
  id: string;
  code: string;
  title: string;
  description: string;
  lessonId?: string;
}

export const PROGRAMME_LEVELS: ProgrammeLevelSummary[] = [
  {
    id: 1,
    title: 'AI Foundations & Responsible Use',
    shortTitle: 'AI Foundations',
    stage: 'Understand',
    outcome: 'Understand AI and use it safely and critically.',
    moduleCount: 8,
    status: 'active',
  },
  {
    id: 2,
    title: 'Practical AI Skills',
    shortTitle: 'Practical AI Skills',
    stage: 'Apply',
    outcome: 'Use AI effectively for learning, work and everyday problem-solving.',
    moduleCount: 8,
    status: 'locked',
  },
  {
    id: 3,
    title: 'AI Creator & Builder',
    shortTitle: 'AI Creator',
    stage: 'Create',
    outcome: 'Design, build and test a simple responsible AI solution.',
    moduleCount: 8,
    status: 'locked',
  },
  {
    id: 4,
    title: 'AI Innovation & Problem-Solving',
    shortTitle: 'AI Problem Solver',
    stage: 'Lead & Solve',
    outcome: 'Use AI responsibly to address meaningful South African challenges.',
    moduleCount: 8,
    status: 'locked',
  },
];

export const LEVEL_TWO_MODULES: ProgrammeModuleShell[] = [
  {
    id: 'MZAIE-P2-M01',
    code: '2.1',
    title: 'AI for Learning & Study',
    description: 'Use AI to explain, revise, plan and practise while keeping your own thinking active.',
    lessonId: 'MZAIE-P2-M01-L01',
  },
  {
    id: 'MZAIE-P2-M02',
    code: '2.2',
    title: 'AI for Writing & Communication',
    description: 'Use AI to improve emails, reports, applications, presentations and everyday communication.',
    lessonId: 'MZAIE-P2-M02-L01',
  },
  {
    id: 'MZAIE-P2-M03',
    code: '2.3',
    title: 'Advanced Prompting with CREO',
    description: 'Build stronger multi-step prompts using Context, Request, Examples and Output.',
    lessonId: 'MZAIE-P2-M03-L01',
  },
  {
    id: 'MZAIE-P2-M04',
    code: '2.4',
    title: 'AI Research & Source Verification',
    description: 'Research with AI, compare sources, check evidence and verify important claims before using them.',
  },
  {
    id: 'MZAIE-P2-M05',
    code: '2.5',
    title: 'AI for Mathematics, Data & Problem Solving',
    description: 'Use AI to support calculations, tables, data interpretation and structured problem-solving.',
  },
  {
    id: 'MZAIE-P2-M06',
    code: '2.6',
    title: 'AI for Work & Productivity',
    description: 'Apply AI to planning, administration, task breakdowns, workplace communication and practical workflows.',
  },
  {
    id: 'MZAIE-P2-M07',
    code: '2.7',
    title: 'AI for Creativity & Content',
    description: 'Use AI responsibly for ideas, stories, visual concepts, presentations and creative development.',
  },
  {
    id: 'MZAIE-P2-M08',
    code: '2.8',
    title: 'AI in South African Communities',
    description: 'Apply AI thinking to real needs in schools, TVET colleges, NGOs, churches, small businesses and communities.',
  },
];
