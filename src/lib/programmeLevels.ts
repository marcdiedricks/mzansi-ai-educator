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
  { id: 'MZAIE-P2-M03', code: '2.3', title: 'Ask AI Better Questions', description: 'Give AI clearer instructions using Context, Request, Examples and Output. This simple method is called CREO.', lessonId: 'MZAIE-P2-M03-L01' },
  { id: 'MZAIE-P2-M04', code: '2.4', title: 'Research with AI and Check the Facts', description: 'Use AI to help research, compare reliable sources and check important claims before using or sharing them.', lessonId: 'MZAIE-P2-M04-L01' },
  { id: 'MZAIE-P2-M05', code: '2.5', title: 'AI for Numbers and Problem Solving', description: 'Use AI to help with calculations, tables, understanding information and solving problems step by step.', lessonId: 'MZAIE-P2-M05-L01' },
  { id: 'MZAIE-P2-M06', code: '2.6', title: 'AI for Work & Productivity', description: 'Apply AI to planning, administration, task breakdowns, workplace communication and practical workflows.', lessonId: 'MZAIE-P2-M06-L01' },
  { id: 'MZAIE-P2-M07', code: '2.7', title: 'AI for Creativity & Content', description: 'Use AI responsibly for ideas, stories, visual concepts, presentations and creative development.', lessonId: 'MZAIE-P2-M07-L01' },
  { id: 'MZAIE-P2-M08', code: '2.8', title: 'AI in South African Communities', description: 'Apply AI thinking to real needs in schools, TVET colleges, NGOs, churches, small businesses and communities.', lessonId: 'MZAIE-P2-M08-L01' },
];

export const LEVEL_THREE_MODULES: ProgrammeModuleShell[] = [
  { id: 'MZAIE-P3-M01', code: '3.1', title: 'From Problem to AI Solution', description: 'Define a real problem, identify who it affects and decide whether AI is actually useful.', lessonId: 'MZAIE-P3-M01-L01' },
  { id: 'MZAIE-P3-M02', code: '3.2', title: 'Plan an AI Helper Step by Step', description: 'Plan what goes in, what the AI helps with, what comes out and where a person must check or decide.', lessonId: 'MZAIE-P3-M02-L01' },
  { id: 'MZAIE-P3-M03', code: '3.3', title: 'Knowledge, Data & Source Design', description: 'Choose trustworthy knowledge and data, organise sources and set boundaries for what the solution may use.', lessonId: 'MZAIE-P3-M03-L01' },
  { id: 'MZAIE-P3-M04', code: '3.4', title: 'Build a Simple AI Tool', description: 'Turn your plan into a small working test using the simplest suitable tools, with or without coding.', lessonId: 'MZAIE-P3-M04-L01' },
  { id: 'MZAIE-P3-M05', code: '3.5', title: 'Make the AI Tool Easy to Use', description: 'Design clear questions, screens, instructions and feedback so ordinary users know what to do next.', lessonId: 'MZAIE-P3-M05-L01' },
  { id: 'MZAIE-P3-M06', code: '3.6', title: 'Test What Works and What Goes Wrong', description: 'Check whether the tool is accurate, useful and fair, including what happens when things go wrong.', lessonId: 'MZAIE-P3-M06-L01' },
  { id: 'MZAIE-P3-M07', code: '3.7', title: 'Keep People Safe Before Real-World Use', description: 'Protect personal information, reduce risk and decide where people must check or take control before wider use.', lessonId: 'MZAIE-P3-M07-L01' },
  { id: 'MZAIE-P3-M08', code: '3.8', title: 'Build and Test a South African AI Idea', description: 'Bring the Level 3 skills together in a small working test for a real South African need.', lessonId: 'MZAIE-P3-M08-L01' },
];

export const LEVEL_FOUR_MODULES: ProgrammeModuleShell[] = [
  { id: 'MZAIE-P4-M01', code: '4.1', title: 'Solving Real Community Problems', description: 'Frame a meaningful local challenge, identify who is affected and define what useful improvement would look like.', lessonId: 'MZAIE-P4-M01-L01' },
  { id: 'MZAIE-P4-M02', code: '4.2', title: 'Design AI Around People', description: 'Start with people, their needs, dignity, access and real-life conditions before choosing the technology. This approach is often called human-centred design.', lessonId: 'MZAIE-P4-M02-L01' },
  { id: 'MZAIE-P4-M03', code: '4.3', title: 'AI for Education, NGOs & Churches', description: 'Design responsible AI-supported services for learning, community organisations, faith communities and social support settings.', lessonId: 'MZAIE-P4-M03-L01' },
  { id: 'MZAIE-P4-M04', code: '4.4', title: 'Small Business & Entrepreneurship', description: 'Use AI to improve practical small-business workflows, customer service, planning and opportunity discovery without removing human accountability.', lessonId: 'MZAIE-P4-M04-L01' },
  { id: 'MZAIE-P4-M05', code: '4.5', title: 'AI for Public and Community Services', description: 'Explore how AI may help people access public information and community services while protecting rights and fairness. Improving services in this way is sometimes called civic innovation.', lessonId: 'MZAIE-P4-M05-L01' },
  { id: 'MZAIE-P4-M06', code: '4.6', title: 'Check Whether the Solution Really Helps', description: 'Decide what useful change should happen, collect suitable evidence and judge whether the AI-supported solution is actually helping people.', lessonId: 'MZAIE-P4-M06-L01' },
  { id: 'MZAIE-P4-M07', code: '4.7', title: 'Lead Responsible AI Use', description: 'Set clear rules for who is responsible, who checks important decisions, what happens when something goes wrong and how AI is controlled in an organisation or community.', lessonId: 'MZAIE-P4-M07-L01' },
  { id: 'MZAIE-P4-M08', code: '4.8', title: 'Final Challenge: Present a South African AI Solution', description: 'Bring the programme together in a tested solution proposal for a real South African need, supported by evidence and presented responsibly.', lessonId: 'MZAIE-P4-M08-L01' },
];
