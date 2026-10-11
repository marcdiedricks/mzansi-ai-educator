import { Module } from './types';

export const LEVEL_ONE_MODULES: Module[] = [
  { id:'MZAIE-P1-M01', title:'1.1 AI Is Already Around You', description:'Recognise everyday AI, what AI is and is not, and keep human judgement active.', order:1, lessonIds:['MZAIE-P1-M01-L01'], competencyIds:['AI_UNDERSTANDING'], version:'2.0' },
  { id:'MZAIE-P1-M02', title:'1.2 Algorithms and Patterns', description:'Understand algorithms, patterns, prediction and classification.', order:2, lessonIds:['MZAIE-P1-M02-L01'], competencyIds:['AI_UNDERSTANDING'], version:'2.0' },
  { id:'MZAIE-P1-M03', title:'1.3 Data, Training Data and Models', description:'Connect data, training data, models, training and inference.', order:3, lessonIds:['MZAIE-P1-M03-L01'], competencyIds:['DATA_AWARENESS'], version:'2.0' },
  { id:'MZAIE-P1-M04', title:'1.4 Generative AI and Language Models', description:'Understand prompts, tokens, generated outputs and hallucinations.', order:4, lessonIds:['MZAIE-P1-M04-L01'], competencyIds:['AI_UNDERSTANDING','CRITICAL_QUESTIONING'], version:'2.0' },
  { id:'MZAIE-P1-M05', title:'1.5 Bias, Representation and African Data', description:'Explore bias, representation, African languages and fair testing.', order:5, lessonIds:['MZAIE-P1-M05-L01'], competencyIds:['HUMAN_JUDGEMENT','UBUNTU_TECHNOLOGY_AWARENESS'], version:'2.0' },
  { id:'MZAIE-P1-M06', title:'1.6 Privacy, Safety and Human Agency', description:'Use safer data habits and keep meaningful human oversight.', order:6, lessonIds:['MZAIE-P1-M06-L01'], competencyIds:['BASIC_PRIVACY','RESPONSIBLE_AI_USE'], version:'2.0' },
  { id:'MZAIE-P1-M07', title:'1.7 Ubuntu, Ethics and Responsible AI', description:'Reason about dignity, community impact and responsible AI use.', order:7, lessonIds:['MZAIE-P1-M07-L01'], competencyIds:['UBUNTU_TECHNOLOGY_AWARENESS','RESPONSIBLE_AI_USE'], version:'2.0' },
  { id:'MZAIE-P1-M08', title:'1.8 Level 1 Applied Challenge', description:'Demonstrate Level 1 understanding on an everyday AI system.', order:8, lessonIds:['MZAIE-P1-M08-L01'], competencyIds:['AI_UNDERSTANDING','CRITICAL_QUESTIONING','HUMAN_JUDGEMENT'], version:'2.0' },
];
