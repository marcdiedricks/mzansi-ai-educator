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
  { id: 1, title: 'AI Foundations & Responsible Use', shortTitle: 'AI Foundations', stage: 'Understand', outcome: 'Understand AI and use it safely and critically.', moduleCount: 8, status: 'active' },
  { id: 2, title: 'Practical AI Skills', shortTitle: 'Practical AI Skills', stage: 'Apply', outcome: 'Use AI effectively for learning, work and everyday problem-solving.', moduleCount: 8, status: 'locked' },
  { id: 3, title: 'AI Creator & Builder', shortTitle: 'AI Creator', stage: 'Create', outcome: 'Design, build and test a simple responsible AI solution.', moduleCount: 8, status: 'locked' },
  { id: 4, title: 'AI Innovation & Problem-Solving', shortTitle: 'AI Problem Solver', stage: 'Lead & Solve', outcome: 'Use AI responsibly to address meaningful South African challenges.', moduleCount: 8, status: 'locked' },
];

export const LEVEL_TWO_MODULES: ProgrammeModuleShell[] = [
  { id: 'MZAIE-P2-M01', code: '2.1', title: 'AI for Learning & Study', description: 'Use AI to explain, revise, plan and practise while keeping your own thinking active.', lessonId: 'MZAIE-P2-M01-L01' },
  { id: 'MZAIE-P2-M02', code: '2.2', title: 'AI for Writing & Communication', description: 'Use AI to improve emails, reports, applications, presentations and everyday communication.', lessonId: 'MZAIE-P2-M02-L01' },
  { id: 'MZAIE-P2-M03', code: '2.3', title: 'Advanced Prompting with CREO', description: 'Build stronger multi-step prompts using Context, Request, Examples and Output.', lessonId: 'MZAIE-P2-M03-L01' },
  { id: 'MZAIE-P2-M04', code: '2.4', title: 'AI Research & Source Verification', description: 'Research with AI, compare sources, check evidence and verify important claims before using them.', lessonId: 'MZAIE-P2-M04-L01' },
  { id: 'MZAIE-P2-M05', code: '2.5', title: 'AI for Mathematics, Data & Problem Solving', description: 'Use AI to support calculations, tables, data interpretation and structured problem-solving.', lessonId: 'MZAIE-P2-M05-L01' },
  { id: 'MZAIE-P2-M06', code: '2.6', title: 'AI for Work & Productivity', description: 'Apply AI to planning, administration, task breakdowns, workplace communication and practical workflows.', lessonId: 'MZAIE-P2-M06-L01' },
  { id: 'MZAIE-P2-M07', code: '2.7', title: 'AI for Creativity & Content', description: 'Use AI responsibly for ideas, stories, visual concepts, presentations and creative development.', lessonId: 'MZAIE-P2-M07-L01' },
  { id: 'MZAIE-P2-M08', code: '2.8', title: 'AI in South African Communities', description: 'Apply AI thinking to real needs in schools, TVET colleges, NGOs, churches, small businesses and communities.', lessonId: 'MZAIE-P2-M08-L01' },
];

export const LEVEL_THREE_MODULES: ProgrammeModuleShell[] = [
  { id: 'MZAIE-P3-M01', code: '3.1', title: 'From Problem to AI Solution', description: 'Define a real problem, identify who it affects and decide whether AI is actually useful.', lessonId: 'MZAIE-P3-M01-L01' },
  { id: 'MZAIE-P3-M02', code: '3.2', title: 'Designing AI Assistants & Workflows', description: 'Map a useful assistant or workflow with clear inputs, steps, outputs and human checkpoints.' },
  { id: 'MZAIE-P3-M03', code: '3.3', title: 'Knowledge, Data & Source Design', description: 'Choose trustworthy knowledge and data, organise sources and set boundaries for what the solution may use.' },
  { id: 'MZAIE-P3-M04', code: '3.4', title: 'Building with No-Code & Low-Code AI', description: 'Turn a design into a simple working prototype using accessible tools and reusable building blocks.' },
  { id: 'MZAIE-P3-M05', code: '3.5', title: 'Conversation & User Experience Design', description: 'Design clear prompts, screens, instructions and feedback for people using the AI solution.' },
  { id: 'MZAIE-P3-M06', code: '3.6', title: 'Testing, Evaluation & Bias Checks', description: 'Test accuracy, usefulness, failure cases and unfair outcomes before trusting the prototype.' },
  { id: 'MZAIE-P3-M07', code: '3.7', title: 'Privacy, Safety & Responsible Deployment', description: 'Protect personal information, reduce risk and define human oversight before real-world use.' },
  { id: 'MZAIE-P3-M08', code: '3.8', title: 'Build a South African AI Prototype', description: 'Combine the Level 3 skills into a small responsible prototype for a genuine South African need.' },
];
