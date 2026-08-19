import { Lesson } from './types';

const blocks: Lesson['blocks'] = [
  { id:'m7_b1', type:'objective', variant:'standard', content:'Learn to use AI as a practical productivity assistant for study, writing, planning and everyday work while keeping human judgement in control.' },
  { id:'m7_b2', type:'explanation', variant:'standard', content:'AI productivity tools can help you start, organise, transform or review work. Useful tasks include summarising notes, creating a first draft, turning information into a checklist, generating study questions, comparing options and explaining difficult ideas in simpler language.' },
  { id:'m7_b3', type:'keyPoint', variant:'standard', content:'Use AI to assist your work, not to replace your responsibility. You remain responsible for the instructions you give, the information you share, the facts you accept and the final result you submit or use.' },
  { id:'m7_b4', type:'example', variant:'SouthAfricanContext', content:'A TVET learner preparing for a practical assessment could paste their own non-sensitive revision notes into an AI tool and ask for a short checklist of the main concepts, five practice questions and a plain-language explanation of one difficult term.' },
  { id:'m7_b5', type:'explanation', variant:'standard', content:'A useful productivity workflow has four steps: define the task, give relevant context, inspect the response, then improve or verify it. If the first answer is weak, refine the instruction rather than copying the response immediately.' },
  { id:'m7_b6', type:'example', variant:'standard', content:'For writing support, ask AI to help with structure before asking it to write everything. For example: “Organise these five points into a clear email outline. Keep my meaning and use plain professional English.” Then review and rewrite the result in your own voice.' },
  { id:'m7_b7', type:'keyPoint', variant:'standard', content:'Summaries can omit important details. Generated text can contain errors. Coding suggestions can fail. Study answers can sound confident while being wrong. Productivity gains are useful only when you still check the output.' },
  { id:'m7_b8', type:'explanation', variant:'standard', content:'Protect privacy while working faster. Do not paste passwords, identity numbers, confidential workplace information, private learner records, banking details or other sensitive information into an AI service unless the service and your organisation explicitly permit it.' },
  { id:'m7_b9', type:'example', variant:'SouthAfricanContext', content:'A community organisation planning a food-drive could ask AI to turn a public list of tasks into a volunteer roster template, a WhatsApp announcement and a collection-day checklist. Names, phone numbers and private beneficiary information should be added locally afterwards, not supplied unnecessarily to the AI.' },
  { id:'m7_b10', type:'reflection', variant:'standard', content:'Choose one task you repeat every week. Which part could AI help you start, organise or review? Which part still needs your judgement, local knowledge or personal responsibility?' },
  { id:'m7_b11', type:'keyPoint', variant:'standard', content:'The best productivity use is often augmentation: let the tool handle repetitive transformation while you provide goals, context, judgement and final approval.' },
  { id:'m7_b12', type:'reflection', variant:'standard', content:'Try a three-stage workflow on a safe task: ask AI for a first result, identify one weakness, then give a follow-up instruction that improves it. Compare the two outputs and decide what changed.' },
  { id:'m7_b13', type:'summary', variant:'standard', content:'AI can support summarising, drafting, planning, studying and problem-solving. Start with a clear task, protect sensitive information, inspect and refine the response, verify important claims and keep human judgement responsible for the final output.' },
];

const quiz: NonNullable<Lesson['quiz']> = [
  { id:'q1', question:'Which is the strongest use of AI for productivity?', options:['Copy every response without checking it.','Use AI to help organise or transform work, then review the result yourself.','Share private information so the answer is more detailed.','Let AI make every important decision for you.'], correctIndex:1, explanation:'AI can accelerate parts of a task, but the user should review, verify and approve the final result.' },
  { id:'q2', question:'What should you do after receiving an AI-generated summary?', options:['Assume nothing important was omitted.','Check it against the original material when accuracy matters.','Delete the original material immediately.','Publish it without reading it.'], correctIndex:1, explanation:'Summaries can omit or distort details, so important points should be checked against the source.' },
  { id:'q3', question:'Which information should generally NOT be pasted into a public AI tool?', options:['A public weather forecast.','A fictional practice paragraph.','Passwords, ID numbers or confidential records.','A list of generic study topics.'], correctIndex:2, explanation:'Sensitive and confidential information should not be shared unnecessarily with external AI services.' },
  { id:'q4', question:'If the first AI response is not useful, what is a good next step?', options:['Copy it anyway.','Refine the instruction and explain what needs to improve.','Add unrelated private details.','Assume AI cannot help with the task.'], correctIndex:1, explanation:'Iterative follow-up instructions can improve clarity, format and relevance.' },
  { id:'q5', question:'What does human-in-the-loop productivity mean in practice?', options:['A person keeps judgement and final responsibility while AI assists parts of the work.','The AI works without any human review.','A person must type every word manually.','Only computer programmers may use AI.'], correctIndex:0, explanation:'Human-in-the-loop use keeps a person responsible for goals, checking and final decisions.' },
];

export function enhanceProductivityLesson(lesson: Lesson): Lesson {
  if (lesson.id !== 'MZAIE-L2-M02-L01') return lesson;
  return {
    ...lesson,
    estimatedMinutes: 20,
    objectives: [
      'Identify practical AI uses for study, writing, planning and everyday work.',
      'Apply a simple define, generate, inspect and refine workflow.',
      'Protect sensitive information when using external AI services.',
      'Keep human judgement and verification responsible for final outputs.'
    ],
    blocks,
    quiz,
  };
}
