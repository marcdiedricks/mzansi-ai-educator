import { Lesson } from './types';

const blocks: Lesson['blocks'] = [
  { id:'m5_b1', type:'objective', variant:'standard', content:'Understand what generative AI is, how prompts and learned patterns shape outputs, why confident answers can still be wrong, and how to use generative AI responsibly.' },
  { id:'m5_b2', type:'explanation', variant:'standard', content:'Generative AI is AI designed to produce new outputs such as text, images, audio or code. It learns statistical patterns from large collections of examples and uses those patterns to generate a response to an instruction or prompt.' },
  { id:'m5_b3', type:'explanation', variant:'plain', content:'In plain language: generative AI does not fetch a perfect answer from a hidden answer book. It creates an output by using patterns it learned and the instructions you give it.' },
  { id:'m5_b4', type:'keyPoint', variant:'standard', content:'A prompt is the instruction or information you give an AI system. Clear context, a clear task and useful constraints usually help the system produce a more relevant response.' },
  { id:'m5_b5', type:'explanation', variant:'standard', content:'Language models process text as tokens, which are pieces of text rather than ideas in a human mind. They estimate likely continuations from patterns in their training and the current conversation. This is why fluent language does not automatically mean genuine understanding or factual accuracy.' },
  { id:'m5_b6', type:'example', variant:'SouthAfricanContext', content:'A learner could ask generative AI to explain photosynthesis using a Cape Town vegetable garden as an example, or ask for an explanation in simpler language. The learner should still compare important facts with trusted school material.' },
  { id:'m5_b7', type:'example', variant:'SouthAfricanContext', content:'A small community organisation might use generative AI to draft a first version of a notice or translate a simple message. A person should review the wording, local meaning, names, dates and sensitive information before it is shared.' },
  { id:'m5_b8', type:'keyPoint', variant:'standard', content:'Generative AI can hallucinate: it can produce information that sounds convincing but is inaccurate, unsupported or invented. Confidence of wording is not proof.' },
  { id:'m5_b9', type:'reflection', variant:'standard', content:'If an AI gives you a statistic about South African unemployment, a legal rule or a medical claim, what evidence would you need before trusting or sharing it?' },
  { id:'m5_b10', type:'keyPoint', variant:'standard', content:'Do not put passwords, PINs, identity numbers or unnecessary private information into prompts. The privacy habits from Lesson 1.3 still apply when using generative AI.' },
  { id:'m5_b11', type:'explanation', variant:'standard', content:'Generative AI is strongest as an assistant for thinking, drafting, explaining, comparing and exploring. Human judgement remains responsible for deciding whether the output is accurate, fair, appropriate and useful.' },
  { id:'m5_b12', type:'reflection', variant:'standard', content:'Take a vague prompt such as “Tell me about AI.” How could you improve it by adding who the explanation is for, what you want explained, the South African context and the format you want?' },
  { id:'m5_b13', type:'summary', variant:'standard', content:'Generative AI creates outputs from learned patterns and prompts. Tokens and statistical prediction help explain how language models generate text. Useful output depends partly on the prompt, but even excellent prompts cannot guarantee truth. Protect private information, verify important claims and keep human judgement in control.' },
];

const quiz: NonNullable<Lesson['quiz']> = [
  { id:'q1', question:'What is generative AI designed to do?', options:['Only store files on a phone.','Produce new outputs such as text, images, audio or code from learned patterns and prompts.','Guarantee that every statement is true.','Replace all human judgement.'], correctIndex:1, explanation:'Generative AI produces new outputs using learned patterns and the instructions or context supplied to it.' },
  { id:'q2', question:'What is a prompt?', options:['An instruction or information given to an AI system.','A guarantee of a correct answer.','A secret password used by every AI model.','The computer screen itself.'], correctIndex:0, explanation:'A prompt is what you give the AI as an instruction, question, context or task.' },
  { id:'q3', question:'Why can a fluent generative AI answer still be wrong?', options:['Fluent wording is not proof of factual accuracy, and the model can generate unsupported or invented information.','AI cannot produce sentences.','Every answer is copied from one website.','Generative AI only works with numbers.'], correctIndex:0, explanation:'Language models can produce convincing text without guaranteeing that each claim is true. This failure is often called hallucination.' },
  { id:'q4', question:'Which is the safer use of generative AI?', options:['Paste your banking PIN into the prompt for context.','Use it to draft or explain, then review and verify important claims.','Assume the first answer is always correct.','Share private learner records so the AI knows everything.'], correctIndex:1, explanation:'Generative AI can assist with drafting and explanation, but privacy, verification and human judgement remain necessary.' },
  { id:'q5', question:'Which prompt is likely to give a more useful learning response?', options:['“AI.”','“Explain machine learning to a beginner in simple English, using one everyday South African example and finish with three check questions.”','“Write anything.”','“Give the perfect answer and never be wrong.”'], correctIndex:1, explanation:'Useful prompts give the system a clear task, audience, context and desired format.' },
];

export function enhanceGenerativeAiLesson(lesson: Lesson): Lesson {
  if (lesson.id !== 'MZAIE-L1-M05-L01') return lesson;
  return {
    ...lesson,
    estimatedMinutes: 20,
    objectives: [
      'Explain generative AI in plain language while using correct terminology.',
      'Understand prompts, tokens and pattern-based generation at beginner level.',
      'Recognise hallucination and why fluent output is not proof of truth.',
      'Use generative AI with privacy, verification and human judgement.'
    ],
    blocks,
    quiz,
  };
}
