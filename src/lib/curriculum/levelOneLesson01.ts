import { Lesson } from './types';
export const levelOneLesson01: Lesson = {
  id:'MZAIE-P1-M01-L01', title:'AI Is Already Around You', levelId:'MZAIE-L1', moduleId:'MZAIE-P1-M01',
  locale:'en-ZA', version:'2.0', estimatedMinutes:20,
  objectives:['Recognise common AI systems and distinguish AI from simple automation.'],
  competencyIds:['AI_UNDERSTANDING','CRITICAL_QUESTIONING'], activityIds:[], assessmentId:null, sourceIds:[], offlineEligible:true, trustState:'VERIFIED_CURRICULUM',
  blocks:[
    {id:'o',type:'objective',variant:'standard',content:'Recognise common AI systems and distinguish AI from simple automation.'},
    {id:'e',type:'explanation',variant:'standard',content:'AI systems can recognise patterns, work with language, predict, recommend or generate content. Not every automatic machine is AI.'},
    {id:'t',type:'activity',variant:'standard',content:'THINK — T: Try independently. Name three digital services you used recently and decide which might use AI.'},
    {id:'h',type:'explanation',variant:'plain',content:'THINK — H: Hunt for understanding. Ask what task the system performs and request an explanation if a concept is unclear.'},
    {id:'i',type:'verification',variant:'standard',content:'THINK — I: Investigate. Separate what you can observe from what you are assuming.'},
    {id:'n',type:'application',variant:'standard',content:'THINK — N: Navigate independently. Choose another app and classify its task without assistance.'},
    {id:'k',type:'reflection',variant:'standard',content:'THINK — K: Know what you learned. Explain AI in your own words and include one thing AI is not.'},
    {id:'s',type:'summary',variant:'standard',content:'AI performs particular information tasks; ordinary automation can simply follow fixed rules.'}
  ],
  quiz:[{id:'q1',question:'Which statement is most accurate?',options:['Every automatic device is AI.','AI can perform tasks such as recognising patterns, predicting or generating content.','AI always thinks like a person.'],correctIndex:1,explanation:'AI describes particular computational capabilities, not every automatic device.'}]
};