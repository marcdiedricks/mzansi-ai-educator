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
