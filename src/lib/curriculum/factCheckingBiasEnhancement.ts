import { Lesson } from './types';

const blocks: Lesson['blocks'] = [
  { id:'m8d_b1', type:'objective', variant:'standard', content:'Learn a repeatable method to check AI answers for factual errors, unsupported claims, missing context and unfair bias before you trust or share them.' },
  { id:'m8d_b2', type:'explanation', variant:'standard', content:'AI can produce fluent answers that are incomplete, outdated or wrong. A confident tone is not evidence. Treat an AI answer as a starting point that may need verification, especially when the claim could affect learning, money, rights, safety or another person.' },
  { id:'m8d_b3', type:'keyPoint', variant:'standard', content:'Use the CHECK routine: Claim, Hunt for evidence, Examine the source, Compare independent sources, Keep or correct the conclusion. Important claims should survive this process before you rely on them.' },
  { id:'m8d_b4', type:'explanation', variant:'standard', content:'Start by isolating the claim. Ask: What exactly is being asserted? Is it a fact that can be checked, an opinion, a prediction, or an interpretation? Breaking a long AI response into individual claims makes verification easier.' },
  { id:'m8d_b5', type:'example', variant:'SouthAfricanContext', content:'Suppose an AI answer says a South African learner automatically qualifies for a particular bursary. Do not act on the sentence alone. Identify the bursary, check the current official eligibility rules, dates and application requirements, then compare the AI answer with that evidence.' },
  { id:'m8d_b6', type:'explanation', variant:'standard', content:'Examine source quality. Prefer the original or responsible authority for laws, policies, school rules, statistics and official programmes. Check the publication date, author or institution, evidence offered and whether the page actually supports the claim you are testing.' },
  { id:'m8d_b7', type:'keyPoint', variant:'standard', content:'A hallucination is generated information that appears plausible but is false, unsupported or fabricated. Warning signs include invented citations, precise details without evidence, links or titles that cannot be found, and answers that change materially when questioned.' },
  { id:'m8d_b8', type:'example', variant:'standard', content:'If an AI gives you the title of a research report, search for the report itself rather than trusting the citation. Confirm that the author, title, date and claimed finding exist and match what the AI said.' },
  { id:'m8d_b9', type:'explanation', variant:'standard', content:'Bias is not only an offensive statement. AI systems can produce systematically skewed outcomes because training data, labels, design choices, evaluation methods or deployment conditions represent some groups and contexts better than others.' },
  { id:'m8d_b10', type:'example', variant:'SouthAfricanContext', content:'A language system trained mainly on international English may perform better on familiar English phrasing than on isiXhosa, isiZulu, Afrikaans varieties, township expressions or code-switching. Poor performance should not be mistaken for lower intelligence or ability in the person using the language.' },
  { id:'m8d_b11', type:'keyPoint', variant:'standard', content:'When checking for bias, ask who is represented, who may be missing, whose language and context are treated as normal, whether different groups receive different quality of results, and who could be harmed if the output is accepted without review.' },
  { id:'m8d_b12', type:'reflection', variant:'standard', content:'Take one AI answer you received recently. Identify its most important factual claim. What source would be closest to the original authority, and what second independent source could you use to cross-check it?' },
  { id:'m8d_b13', type:'reflection', variant:'standard', content:'Imagine an AI tool works well for formal English but poorly for a local language or community expression. What evidence would you collect before deciding whether the problem is the user, the data, the model or the way the system was tested?' },
  { id:'m8d_b14', type:'summary', variant:'standard', content:'Do not equate fluency with truth. Isolate important claims, verify them against strong and current evidence, compare sources, inspect citations, look for missing context and test whether performance is fair across relevant people, languages and communities. Human judgement remains responsible for the final decision.' },
];

const quiz: NonNullable<Lesson['quiz']> = [
  { id:'q1', question:'An AI answer sounds confident and gives a precise statistic. What should you do first if the statistic matters?', options:['Trust it because it is precise.','Identify the claim and verify it against a reliable source.','Share it immediately.','Ask the AI to make the number more convincing.'], correctIndex:1, explanation:'Confidence and precision are not evidence. Important factual claims should be checked against reliable sources.' },
  { id:'q2', question:'Which is a warning sign of a possible AI hallucination?', options:['The answer clearly says it is uncertain.','A cited report cannot be found and its details do not match any reliable source.','The answer uses short sentences.','The answer asks you to verify an important claim.'], correctIndex:1, explanation:'Fabricated or untraceable citations are a common warning sign that generated information may be unsupported.' },
  { id:'q3', question:'What is the strongest source for checking the current eligibility rules of an official programme?', options:['An anonymous social-media post.','The responsible official authority or programme source.','A forwarded message with no date.','A random AI-generated summary.'], correctIndex:1, explanation:'For official rules, the responsible authority is normally the closest source to the original information.' },
  { id:'q4', question:'Which question is useful when auditing an AI system for bias?', options:['Does the interface look modern?','Who is represented or missing, and do different groups receive comparable quality of results?','Does the answer contain many words?','Was the response generated quickly?'], correctIndex:1, explanation:'Bias auditing considers representation, context and whether outcomes differ unfairly across relevant groups.' },
  { id:'q5', question:'A language model performs poorly on local expressions but well on international English. What is the best conclusion?', options:['The local-language users are less capable.','The result may reflect gaps in training data, design or evaluation and should be investigated.','Local languages should not be used with technology.','The model must be unbiased because it is software.'], correctIndex:1, explanation:'Uneven performance can result from data and system-design choices. The user should not be blamed without evidence.' },
];

export function enhanceFactCheckingBiasLesson(lesson: Lesson): Lesson {
  if (lesson.id !== 'MZAIE-L2-M03-L01') return lesson;
  return {
    ...lesson,
    estimatedMinutes: 20,
    objectives: [
      'Apply a repeatable method to verify important factual claims in AI answers.',
      'Recognise warning signs of hallucinated or unsupported information.',
      'Evaluate source authority, currency and whether evidence actually supports a claim.',
      'Identify possible algorithmic bias through representation, language, context and outcome differences.',
      'Keep human judgement responsible for decisions based on AI-generated information.'
    ],
    blocks,
    quiz,
  };
}
