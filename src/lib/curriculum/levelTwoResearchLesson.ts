import { Lesson } from './types';

export const levelTwoResearchLesson: Lesson = {
  id: 'MZAIE-P2-M04-L01',
  title: 'AI Research & Source Verification',
  levelId: 'MZAIE-P2',
  moduleId: 'MZAIE-P2-M04',
  locale: 'en-ZA',
  version: '1.0',
  estimatedMinutes: 20,
  objectives: [
    'Use AI to support research without treating AI output as evidence.',
    'Distinguish primary, secondary and weak sources and choose the strongest source available.',
    'Cross-check important claims, dates, statistics and quotations before using them.',
    'Keep evidence separate from AI summaries, interpretation and opinion.'
  ],
  competencyIds: ['CRITICAL_QUESTIONING', 'RESPONSIBLE_AI_USE', 'HUMAN_JUDGEMENT'],
  activityIds: [], assessmentId: null, sourceIds: [], offlineEligible: true, trustState: 'AI_ASSISTED_REVIEWED',
  blocks: [
    { id:'p2m4_b1', type:'objective', variant:'standard', content:'Learn to use AI as a research assistant while keeping source selection, verification and final judgement in human hands.' },
    { id:'p2m4_b2', type:'explanation', variant:'standard', content:'AI can help you generate search terms, identify questions, compare explanations and organise notes. But an AI answer is not itself proof. Research becomes trustworthy only when claims can be traced to reliable evidence.' },
    { id:'p2m4_b3', type:'keyPoint', variant:'standard', content:'Use the SOURCE routine: Specify the question, Obtain candidate sources, Rank their strength, Check the claim, Use more than one source when needed, Explain what the evidence actually supports.' },
    { id:'p2m4_b4', type:'explanation', variant:'standard', content:'Primary sources are closest to the original evidence or authority, such as legislation, official statistics, original research or an organisation’s own published policy. Secondary sources interpret or report on primary material. Both can be useful, but high-stakes claims should usually be checked against the strongest available primary source.' },
    { id:'p2m4_b5', type:'example', variant:'SouthAfricanContext', content:'If researching a South African bursary, use AI to identify the questions you need answered, then verify eligibility, dates and application rules on the official bursary or institution website rather than relying on a social-media post or AI summary.' },
    { id:'p2m4_b6', type:'explanation', variant:'standard', content:'Recency matters. A source can be reliable but outdated. For changing information such as laws, fees, deadlines, office-holders, software features or statistics, check the publication date and whether a newer official source exists.' },
    { id:'p2m4_b7', type:'verification', variant:'standard', content:'For an important claim, ask: Who published this? What evidence is provided? When was it published? Can I find the original source? Does another independent reliable source agree? Does the source actually support the exact statement I want to make?' },
    { id:'p2m4_b8', type:'keyPoint', variant:'standard', content:'Do not confuse citation with verification. A link or reference can be wrong, irrelevant or invented. Open the source and confirm that it exists and supports the claim.' },
    { id:'p2m4_b9', type:'example', variant:'SouthAfricanContext', content:'A TVET learner researching trade-test requirements could ask AI to organise the topic, but the final rules should be checked against the relevant official occupational, regulatory or training authority material. AI can help navigate the research, not replace the authority.' },
    { id:'p2m4_b10', type:'application', variant:'plain', content:'Separate your notes into three columns: Claim, Evidence, Interpretation. Put the exact fact or statement in Claim, the source-backed information in Evidence, and your own or the AI’s explanation in Interpretation. This prevents opinion from being mistaken for proof.' },
    { id:'p2m4_b11', type:'ethicsCheck', variant:'standard', content:'Do not invent references, quotations, statistics or sources to make research look stronger. If evidence is missing, say that it is missing. Uncertainty is better than false certainty.' },
    { id:'p2m4_b12', type:'activity', variant:'standard', content:'Choose one current question relevant to your studies, work or community. Ask AI for useful search terms and possible source types. Find two real sources, identify which is stronger and why, then write one sentence that states only what the evidence supports.' },
    { id:'p2m4_b13', type:'reflection', variant:'standard', content:'When have you accepted a confident answer because it sounded convincing? What evidence would you now require before repeating that claim to someone else?' },
    { id:'p2m4_b14', type:'summary', variant:'standard', content:'Use AI to accelerate research, not to replace evidence. Start with a clear question, prefer strong and current sources, verify important claims, cross-check when necessary, and keep evidence separate from interpretation.' }
  ],
  quiz: [
    { id:'p2m4_q1', question:'Which is usually the strongest source for the current eligibility rules of a bursary?', options:['An anonymous social-media post.','The official bursary or institution source.','An AI answer with no source.','A six-year-old forum comment.'], correctIndex:1, explanation:'Current eligibility rules should be verified against the official source responsible for the bursary.' },
    { id:'p2m4_q2', question:'What is the main difference between AI output and evidence?', options:['There is no difference.','AI output may summarise or interpret information, while evidence must be traceable to a source that supports the claim.','Evidence is always longer.','AI output is automatically more current.'], correctIndex:1, explanation:'Research requires traceable support for claims. AI can assist, but its wording is not proof.' },
    { id:'p2m4_q3', question:'Why should you open a cited source instead of trusting the citation alone?', options:['To check that the source exists and actually supports the claim.','To make the research take longer.','Because citations are never useful.','Only to check spelling.'], correctIndex:0, explanation:'A citation can be wrong, irrelevant or invented, so the source itself must be checked.' },
    { id:'p2m4_q4', question:'Which factor matters especially for laws, fees, deadlines and other changing information?', options:['Font size.','Recency and whether a newer authoritative source exists.','How confident the AI sounds.','How many words the source contains.'], correctIndex:1, explanation:'Time-sensitive information can become outdated even when the original source was reliable.' },
    { id:'p2m4_q5', question:'What should you do if you cannot find evidence for an important claim?', options:['Invent a reference.','Repeat the claim anyway.','State the uncertainty or leave the claim out until it can be verified.','Ask AI to make the claim sound more certain.'], correctIndex:2, explanation:'Missing evidence should be acknowledged rather than hidden or replaced with false certainty.' }
  ]
};
