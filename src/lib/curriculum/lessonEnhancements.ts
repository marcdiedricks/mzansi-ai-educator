import { Lesson } from './types';

const foundationBlocks: Lesson['blocks'] = [
  { id:'b1', type:'objective', variant:'standard', content:'Explain artificial intelligence in plain language while keeping the correct AI terms. Understand data, patterns, algorithms and predictions, then connect them to everyday technology.' },
  { id:'b2', type:'explanation', variant:'standard', content:'Artificial intelligence (AI) is a broad term for computer systems designed to perform tasks such as recognising patterns, working with language, making predictions, recommending options or generating content.' },
  { id:'b3', type:'explanation', variant:'plain', content:'In plain language: AI is technology that works with information and patterns to help produce an answer, suggestion, decision or new piece of content.' },
  { id:'b4', type:'keyPoint', variant:'standard', content:'Keep the proper words. Data means the information a system works with. A pattern is something that repeats or has a recognisable relationship. An algorithm is a set of steps or rules. A prediction is an estimate of what is likely to happen or come next.' },
  { id:'b5', type:'example', variant:'SouthAfricanContext', content:'Think about directions to a taxi rank. You follow a sequence of steps: walk to a road, turn at a landmark, cross at a robot and continue to the rank. That step-by-step sequence is a useful everyday way to understand an algorithm.' },
  { id:'b6', type:'example', variant:'SouthAfricanContext', content:'When your phone suggests the next word in a WhatsApp message, predictive text uses patterns in language to estimate what word may come next. “Predictive” does not mean the phone knows the future. It means the system is choosing a likely result from patterns.' },
  { id:'b7', type:'explanation', variant:'standard', content:'AI systems do not all work in the same way. Some follow programmed rules. Some learn statistical patterns from examples called training data. Generative AI uses learned patterns to produce new text, images or other outputs.' },
  { id:'b8', type:'example', variant:'SouthAfricanContext', content:'Everyday examples can include a bank flagging an unusual transaction, a navigation app estimating a faster route around traffic, a streaming service recommending music, or a phone grouping similar photographs. The exact technology differs, but each can involve rules, data or learned patterns.' },
  { id:'b9', type:'keyPoint', variant:'standard', content:'Not every automatic machine is AI. A basic timer that switches a light on at 18:00 can simply follow a fixed rule. An AI system usually performs a task involving patterns, classification, prediction, language, recommendation or generation.' },
  { id:'b10', type:'reflection', variant:'standard', content:'Look at three digital services you used recently. For each one, ask: What information might it use? What pattern might it notice? What suggestion, prediction or decision does it produce?' },
  { id:'b11', type:'keyPoint', variant:'standard', content:'AI can be useful and still be wrong. Its output may reflect incomplete data, weak assumptions or bias. A responsible learner checks important claims and keeps human judgement in the loop.' },
  { id:'b12', type:'reflection', variant:'standard', content:'Imagine an AI system recommends which learners should receive a limited opportunity. What could go wrong if the data mostly represents learners from wealthy, well-connected schools? This is one reason fairness and algorithmic bias matter.' },
  { id:'b13', type:'summary', variant:'standard', content:'AI works with information, rules and patterns to perform tasks. Data supplies information. Algorithms provide steps or methods. Predictions estimate likely outcomes. AI does not automatically understand the world like a person, and its answers should be checked when accuracy or fairness matters.' },
];

const foundationQuiz: NonNullable<Lesson['quiz']> = [
  { id:'q1', question:'Which description of Artificial Intelligence (AI) is most accurate?', options:['A machine that thinks and feels exactly like a person.','Computer systems that use data and computational methods to recognise patterns, make predictions or generate outputs.','Any electronic device that switches on automatically.','A system that can never make a mistake.'], correctIndex:1, explanation:'AI is a broad name for computer systems that perform tasks using data, rules or learned patterns. AI does not need human consciousness to do this.' },
  { id:'q2', question:'What is an algorithm?', options:['A step-by-step set of instructions or rules for carrying out a task.','A special type of smartphone.','A person who checks the internet.','A guarantee that an AI answer is correct.'], correctIndex:0, explanation:'An algorithm is a set of steps or rules. A recipe, a route plan and instructions for sorting information can all help you understand the idea.' },
  { id:'q3', question:'What does “prediction” mean in AI?', options:['The computer knows the future with certainty.','The system chooses a likely result based on patterns in available data.','The computer reads a person’s mind.','The system always selects a random answer.'], correctIndex:1, explanation:'In AI, prediction means estimating what is likely, not knowing the future. Predictive text is a simple example.' },
  { id:'q4', question:'A phone suggests the next word while you type a WhatsApp message. What is the best explanation?', options:['It uses language patterns to estimate a likely next word.','Someone at the phone company is typing the word for you.','It knows exactly what you are thinking.','It works without any rules, data or patterns.'], correctIndex:0, explanation:'Predictive text uses patterns from language data and your typing context to estimate which word may come next.' },
  { id:'q5', question:'Why should a learner still check an answer produced by AI?', options:['AI systems can produce incorrect, incomplete or biased outputs.','AI only works during school hours.','Checking makes the phone battery last longer.','AI cannot process language.'], correctIndex:0, explanation:'AI output is not automatically true or fair. Human judgement, checking reliable sources and asking good questions remain important.' },
];

export function enhanceLesson(lesson: Lesson): Lesson {
  if (lesson.id !== 'MZAIE-L1-M01-L01') return lesson;
  return {
    ...lesson,
    version:'1.1',
    estimatedMinutes:18,
    objectives:[
      'Explain artificial intelligence in plain language while using the correct AI terminology.',
      'Explain data, patterns, algorithms and predictions using familiar everyday examples.',
      'Recognise common AI systems and distinguish AI from ordinary automation.',
      'Understand why AI outputs still require checking and human judgement.',
    ],
    blocks: foundationBlocks,
    quiz: foundationQuiz,
  };
}
