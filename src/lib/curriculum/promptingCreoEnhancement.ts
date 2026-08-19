import { Lesson } from './types';

const blocks: Lesson['blocks'] = [
  { id:'m6_b1', type:'objective', variant:'standard', content:'Learn to design stronger prompts using CREO: Context, Request, Examples and Output, then improve a prompt by testing and refining it.' },
  { id:'m6_b2', type:'explanation', variant:'standard', content:'Prompting is the skill of giving an AI system useful instructions and context. A strong prompt does not need complicated language. It needs enough relevant information for the system to understand the task.' },
  { id:'m6_b3', type:'keyPoint', variant:'standard', content:'CREO is a practical prompt framework: Context tells the AI the situation, Request states the task, Examples show what good looks like when useful, and Output specifies the format or result you want.' },
  { id:'m6_b4', type:'example', variant:'standard', content:'Weak prompt: “Help me study.” Stronger CREO prompt: Context: I am a Grade 10 learner revising photosynthesis. Request: Explain the process simply. Examples: Use a vegetable garden as the example. Output: Give five bullet points and three quiz questions.' },
  { id:'m6_b5', type:'explanation', variant:'standard', content:'Context should include only information that helps with the task. More information is not automatically better. Do not add passwords, identity numbers, private learner records or other sensitive details just to make a prompt longer.' },
  { id:'m6_b6', type:'example', variant:'SouthAfricanContext', content:'A youth organisation in Khayelitsha could ask AI to draft a simple WhatsApp notice for a Saturday clean-up. The prompt can specify the audience, plain English, a friendly tone, the date and a short mobile-friendly format without exposing private participant information.' },
  { id:'m6_b7', type:'keyPoint', variant:'standard', content:'Examples can guide style and structure, but they are optional. Use them when the AI needs to understand a pattern, tone or expected type of answer.' },
  { id:'m6_b8', type:'explanation', variant:'standard', content:'Output instructions reduce ambiguity. You can ask for a table, checklist, short explanation, study questions, step-by-step guide or another useful format. You can also specify length and language level.' },
  { id:'m6_b9', type:'reflection', variant:'standard', content:'Improve this prompt with CREO: “Tell me about climate change.” What context, request, example and output would make it useful for a South African secondary-school learner?' },
  { id:'m6_b10', type:'keyPoint', variant:'standard', content:'Prompting is iterative. Read the first response, identify what is missing or unclear, then refine the prompt. A follow-up instruction such as “Use simpler language and give one local example” can be more efficient than starting over.' },
  { id:'m6_b11', type:'explanation', variant:'standard', content:'A better prompt can improve relevance, but it cannot guarantee truth. Important claims still need verification. Prompt quality and fact-checking are separate skills.' },
  { id:'m6_b12', type:'reflection', variant:'standard', content:'Write a CREO prompt for a real task you have this week. Remove any unnecessary personal information. Then check whether another person could understand exactly what result you want.' },
  { id:'m6_b13', type:'summary', variant:'standard', content:'Effective prompting is clear, relevant and purposeful. CREO gives you four useful checks: Context, Request, Examples and Output. Protect private information, refine prompts when needed and verify important factual claims even when the response sounds convincing.' },
];

const quiz: NonNullable<Lesson['quiz']> = [
  { id:'q1', question:'What does CREO stand for?', options:['Context, Request, Examples, Output.','Computer, Robot, Engine, Online.','Create, Repeat, Enter, Open.','Context, Result, Evidence, Opinion.'], correctIndex:0, explanation:'CREO stands for Context, Request, Examples and Output.' },
  { id:'q2', question:'Which is the best use of Context in a prompt?', options:['Add every private detail you know.','Give relevant background that helps the AI understand the task.','Leave the task completely unclear.','Use only complicated technical words.'], correctIndex:1, explanation:'Useful context helps the system understand the situation without adding unnecessary or sensitive information.' },
  { id:'q3', question:'Why specify an Output?', options:['To tell the AI the format or kind of result you need.','To guarantee that every fact is true.','To reveal your password.','To make the prompt as long as possible.'], correctIndex:0, explanation:'Output instructions can specify a checklist, table, short explanation, quiz, length, language level or another useful format.' },
  { id:'q4', question:'What should you do if the first AI response is too complicated?', options:['Assume it cannot be improved.','Refine the prompt, for example by asking for simpler language and a relevant example.','Share private data so it tries harder.','Copy it without reading it.'], correctIndex:1, explanation:'Prompting is iterative. Follow-up instructions can improve relevance and clarity.' },
  { id:'q5', question:'Does a strong CREO prompt guarantee a factual answer?', options:['Yes, always.','No. Good prompting improves direction, but important claims still need verification.','Only if the prompt is very long.','Only when examples are included.'], correctIndex:1, explanation:'Prompt quality and factual verification are different responsibilities.' },
];

export function enhancePromptingCreoLesson(lesson: Lesson): Lesson {
  if (lesson.id !== 'MZAIE-L1-M06-L01') return lesson;
  return {
    ...lesson,
    estimatedMinutes: 20,
    objectives: [
      'Explain the purpose of clear prompting.',
      'Use Context, Request, Examples and Output to structure a prompt.',
      'Refine an AI response through useful follow-up instructions.',
      'Protect private information and verify important claims while prompting.'
    ],
    blocks,
    quiz,
  };
}
