import { Lesson } from './types';

export const levelTwoMathDataLesson: Lesson = {
  id: 'MZAIE-P2-M05-L01',
  title: 'AI for Mathematics, Data & Problem Solving',
  levelId: 'MZAIE-P2',
  moduleId: 'MZAIE-P2-M05',
  locale: 'en-ZA',
  version: '1.0',
  estimatedMinutes: 20,
  objectives: [
    'Use AI to support calculations and structured problem-solving without giving up your own reasoning.',
    'Interpret tables, percentages, averages and simple datasets with appropriate checks.',
    'Spot impossible, inconsistent or weak AI-generated numerical answers.',
    'Use a repeatable process for solving and verifying practical maths and data tasks.'
  ],
  competencyIds: ['CRITICAL_QUESTIONING', 'RESPONSIBLE_AI_USE', 'HUMAN_JUDGEMENT', 'DATA_AWARENESS'],
  activityIds: [],
  assessmentId: null,
  sourceIds: [],
  offlineEligible: true,
  trustState: 'AI_ASSISTED_REVIEWED',
  blocks: [
    { id:'p2m5_b1', type:'objective', variant:'standard', content:'Learn to use AI as a maths and data assistant that helps you understand a problem, check a method and interpret results while you remain responsible for the reasoning and final answer.' },
    { id:'p2m5_b2', type:'explanation', variant:'standard', content:'AI can help break a problem into steps, explain a formula, organise numbers into a table, calculate percentages, compare values or suggest another method. But it can still make arithmetic, logic or interpretation errors.' },
    { id:'p2m5_b3', type:'keyPoint', variant:'standard', content:'A numerical answer is not trustworthy merely because it looks precise. Always ask whether the answer is reasonable, whether the units are correct and whether the calculation matches the question.' },
    { id:'p2m5_b4', type:'application', variant:'plain', content:'Use the SOLVE routine: State the problem. Organise the known information. Lay out the method. Verify the calculation. Explain what the answer means.' },
    { id:'p2m5_b5', type:'example', variant:'SouthAfricanContext', content:'A learner budgeting R600 for transport and food over five school days could ask AI to compare two spending plans. Before accepting the result, the learner should check the daily totals manually and confirm that the final amount does not exceed R600.' },
    { id:'p2m5_b6', type:'explanation', variant:'standard', content:'When working with percentages, averages and ratios, ask what the number actually represents. A 20% increase is not the same as an increase of 20 percentage points. An average can also hide large differences between individual values.' },
    { id:'p2m5_b7', type:'example', variant:'SouthAfricanContext', content:'A TVET learner reviewing workshop test results might use AI to calculate the class average from a small table. The learner should still add the values, divide by the correct number of results and check that no marks were omitted or entered twice.' },
    { id:'p2m5_b8', type:'verification', variant:'standard', content:'Use an independent check whenever the answer matters. Recalculate with a calculator, use a second method, estimate the expected range, or compare the result with the original data. If the AI and your check disagree, investigate before using the answer.' },
    { id:'p2m5_b9', type:'application', variant:'standard', content:'When interpreting a table or chart, identify the title, units, categories, time period and source before drawing a conclusion. A graph can look dramatic because of its scale even when the underlying change is small.' },
    { id:'p2m5_b10', type:'ethicsCheck', variant:'standard', content:'Do not upload confidential marks, payroll data, medical records, banking details or private business spreadsheets into an AI service merely for calculation help. Use anonymised or non-sensitive examples where possible.' },
    { id:'p2m5_b11', type:'activity', variant:'standard', content:'Create a small five-row table using non-sensitive numbers from everyday life, such as weekly data costs or study hours. Ask AI to calculate one total, one average and one percentage change. Then verify every result yourself and note any difference.' },
    { id:'p2m5_b12', type:'reflection', variant:'standard', content:'Which is more dangerous: an obviously wrong answer or a slightly wrong answer that looks convincing? Why does that matter when AI is used for money, marks, measurements or workplace decisions?' },
    { id:'p2m5_b13', type:'keyPoint', variant:'standard', content:'Strong problem-solvers do not outsource judgement. They use AI to support explanation, calculation and comparison, then test the result against the question, the data and common sense.' },
    { id:'p2m5_b14', type:'summary', variant:'standard', content:'State the problem clearly, organise the data, choose a method, use AI carefully, verify the calculation and explain what the result means. Precision is not the same as correctness.' }
  ],
  quiz: [
    { id:'p2m5_q1', question:'What is the best first response to an AI-generated numerical answer?', options:['Accept it if it has decimals.','Check whether the method, units and result make sense.','Assume AI is better at maths than people.','Share it immediately.'], correctIndex:1, explanation:'A numerical answer must be checked for method, units and reasonableness before it is trusted.' },
    { id:'p2m5_q2', question:'What does the V in the SOLVE routine stand for?', options:['View','Verify the calculation','Visualise the app','Value the AI'], correctIndex:1, explanation:'SOLVE includes verifying the calculation before relying on the result.' },
    { id:'p2m5_q3', question:'Why can an average be misleading?', options:['Because averages are always incorrect.','Because it can hide large differences between individual values.','Because percentages cannot be averaged.','Because AI cannot calculate averages.'], correctIndex:1, explanation:'An average summarises a group and may hide important variation inside that group.' },
    { id:'p2m5_q4', question:'Which is a good independent check of an AI calculation?', options:['Ask the same AI to repeat it with more confidence.','Estimate the range or recalculate with another method or calculator.','Ignore the original data.','Add more private information.'], correctIndex:1, explanation:'Independent checking reduces the chance of accepting a confident but incorrect result.' },
    { id:'p2m5_q5', question:'What should you inspect before interpreting a chart?', options:['Only the colours.','The title, units, categories, scale, time period and source.','Only the biggest bar.','Whether AI created it.'], correctIndex:1, explanation:'These features determine what the chart actually represents and whether the visual impression is fair.' }
  ]
};
