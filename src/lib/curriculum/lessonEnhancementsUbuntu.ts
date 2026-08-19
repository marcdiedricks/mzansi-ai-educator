import { Lesson } from './types';

const ubuntuBlocks: Lesson['blocks'] = [
  { id:'m4_b1', type:'objective', variant:'standard', content:'Use Ubuntu as a practical way to think about human-centred technology: dignity, inclusion, fairness, accessibility, community benefit and responsible human judgement.' },
  { id:'m4_b2', type:'explanation', variant:'standard', content:'Ubuntu is often expressed through the idea that a person becomes fully human through relationships with other people. In technology, this encourages us to ask not only whether a system works, but who benefits, who may be excluded, and whether human dignity is protected.' },
  { id:'m4_b3', type:'explanation', variant:'plain', content:'In plain language: good technology should help people without treating some communities as invisible, less important or disposable.' },
  { id:'m4_b4', type:'keyPoint', variant:'standard', content:'A human-centred AI system should consider dignity, fairness, accessibility, language, affordability, connectivity and the effect of decisions on real people.' },
  { id:'m4_b5', type:'example', variant:'SouthAfricanContext', content:'Imagine an online school service that works well only on expensive phones and fast fibre connections. It may be technically impressive, but it excludes learners who rely on older Android phones, prepaid data or weak connectivity. An Ubuntu-centred design would treat that exclusion as a real design problem.' },
  { id:'m4_b6', type:'example', variant:'SouthAfricanContext', content:'A public-service chatbot that supports only English may work for some people but disadvantage isiXhosa, Afrikaans, isiZulu or Sesotho speakers. Language inclusion is therefore not a decorative extra. It affects who can participate and benefit.' },
  { id:'m4_b7', type:'explanation', variant:'standard', content:'Algorithmic fairness asks whether an automated system produces unjust or uneven outcomes for different groups. Unequal outcomes can arise from incomplete data, biased assumptions, poor design choices or a system being used in a context it was not built to understand.' },
  { id:'m4_b8', type:'example', variant:'SouthAfricanContext', content:'Suppose an AI system helps shortlist applicants for a training opportunity. If its historical data mostly represents applicants from well-resourced schools, it may learn patterns that undervalue people from township, rural or under-resourced schools. Human review is essential when opportunities and rights are affected.' },
  { id:'m4_b9', type:'keyPoint', variant:'standard', content:'Fairness does not mean pretending everyone has identical circumstances. Responsible design notices unequal starting conditions and asks whether technology reduces or deepens existing disadvantage.' },
  { id:'m4_b10', type:'reflection', variant:'standard', content:'Think of one digital service you use. Who might find it difficult to use because of cost, language, disability, literacy, device age or connectivity?' },
  { id:'m4_b11', type:'explanation', variant:'standard', content:'Human-in-the-loop means people remain involved in reviewing, correcting or approving important automated decisions. This matters because AI can make mistakes, miss context and reproduce bias.' },
  { id:'m4_b12', type:'example', variant:'SouthAfricanContext', content:'If an AI system flags a learner, worker or community member as high-risk, a responsible process should not treat that output as a final judgement. A person should examine the evidence, context and possible consequences before acting.' },
  { id:'m4_b13', type:'reflection', variant:'standard', content:'Ask five Ubuntu questions about any AI system: Who benefits? Who may be excluded? What harm could occur? Is there meaningful human review? Does the system strengthen dignity and community well-being?' },
  { id:'m4_b14', type:'summary', variant:'standard', content:'Ubuntu gives us a practical ethical lens for AI. Technology should serve people, respect dignity, include different communities, avoid deepening inequality, and keep human judgement involved where decisions matter.' },
];

const ubuntuQuiz: NonNullable<Lesson['quiz']> = [
  { id:'q1', question:'What is the strongest Ubuntu-centred question to ask about a new AI system?', options:['Does it use the newest technology?','Who benefits, who may be excluded, and how are people affected?','Is the logo attractive?','Can it replace every human decision?'], correctIndex:1, explanation:'Ubuntu-centred design focuses on people, relationships, dignity, inclusion and community impact, not technology for its own sake.' },
  { id:'q2', question:'Why can language support be an ethical issue in South African technology?', options:['Because language affects who can understand and access a service.','Because every service must use only one language.','Because AI cannot work with language.','Because translation automatically removes all bias.'], correctIndex:0, explanation:'Language can determine who can participate. Excluding major local languages can create practical barriers to access and benefit.' },
  { id:'q3', question:'What does algorithmic fairness concern?', options:['Whether an algorithm runs quickly.','Whether automated outcomes may unfairly disadvantage particular people or groups.','Whether the app has enough buttons.','Whether every user receives exactly the same screen brightness.'], correctIndex:1, explanation:'Algorithmic fairness examines whether systems create or reinforce unjust differences in outcomes.' },
  { id:'q4', question:'Why is human review important for high-impact AI decisions?', options:['Because AI outputs can miss context, contain errors or reflect bias.','Because computers are never useful.','Because humans can never make mistakes.','Because AI should only be used for entertainment.'], correctIndex:0, explanation:'Human review helps examine context, evidence and consequences when automated outputs affect people in important ways.' },
  { id:'q5', question:'Which design best reflects an Ubuntu-centred approach?', options:['A learning app that requires high-speed fibre and a new flagship phone.','A service designed for ordinary devices, low data use, understandable language and broad access.','A system that hides how decisions are made.','A tool that removes all human appeal or review.'], correctIndex:1, explanation:'Accessible, affordable and inclusive design better supports dignity and participation across unequal real-world conditions.' },
];

export function enhanceUbuntuLesson(lesson: Lesson): Lesson {
  if (lesson.id !== 'MZAIE-L1-M04-L01') return lesson;

  return {
    ...lesson,
    version: '1.1',
    estimatedMinutes: 20,
    objectives: [
      'Explain how Ubuntu can guide human-centred technology choices.',
      'Identify exclusion risks involving language, affordability, accessibility and connectivity.',
      'Explain algorithmic fairness and why unequal data can produce unequal outcomes.',
      'Understand why human judgement should remain involved in important automated decisions.',
    ],
    blocks: ubuntuBlocks,
    quiz: ubuntuQuiz,
  };
}
