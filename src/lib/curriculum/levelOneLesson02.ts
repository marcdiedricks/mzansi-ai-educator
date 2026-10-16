import { Lesson } from './types';
export const levelOneLesson02: Lesson = {
id:'MZAIE-P1-M02-L01',title:'Steps, Patterns and Predictions',levelId:'MZAIE-L1',moduleId:'MZAIE-P1-M02',locale:'en-ZA',version:'2.0',estimatedMinutes:20,objectives:['Understand how clear steps and patterns can be used to sort things or make predictions.'],competencyIds:['AI_UNDERSTANDING','CRITICAL_QUESTIONING'],activityIds:[],assessmentId:null,sourceIds:[],offlineEligible:true,trustState:'VERIFIED_CURRICULUM',
blocks:[
{id:'o',type:'objective',variant:'standard',content:'Understand how clear steps and patterns can be used to sort things or make predictions.'},
{id:'e',type:'explanation',variant:'standard',content:'Many computer tasks follow a set of steps or rules. This is sometimes called an algorithm. AI can also learn patterns from examples. It can use those patterns to predict what may happen or sort something into a group.'},
{id:'t',type:'activity',variant:'standard',content:'THINK — T: Try independently. Write four steps for a familiar task.'},
{id:'h',type:'explanation',variant:'plain',content:'THINK — H: Hunt for understanding. Identify which parts are steps, patterns, predictions or classifications.'},
{id:'i',type:'verification',variant:'standard',content:'THINK — I: Investigate. Test whether another person could follow your steps.'},
{id:'n',type:'application',variant:'standard',content:'THINK — N: Navigate independently. Create one new prediction example and one classification example.'},
{id:'k',type:'reflection',variant:'standard',content:'THINK — K: Know what you learned. Explain prediction and classification in your own words.'},
{id:'s',type:'summary',variant:'standard',content:'Algorithms provide steps; patterns support tasks such as prediction and classification.'}
],quiz:[{id:'q1',question:'What is an algorithm?',options:['A set of steps or rules.','A guarantee of truth.','A random guess.'],correctIndex:0,explanation:'An algorithm is a method or sequence of steps.'},{id:'q2',question:'A system groups messages as spam or not spam. What kind of task is this?',options:['Classification.','Charging a battery.','Printing a page.'],correctIndex:0,explanation:'Classification places an input into a category.'},{id:'q3',question:'Why can pattern-based predictions be wrong?',options:['Patterns always guarantee the future.','New cases may differ from the patterns the system learned.','Computers cannot use patterns.'],correctIndex:1,explanation:'A learned pattern may not represent every new situation correctly.'}]
};