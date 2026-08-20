export type VideoResourceStatus = 'ACTIVE' | 'UNDER_REVIEW' | 'RETIRED';

export type VideoResource = {
  id: string;
  lessonId: string;
  title: string;
  provider: string;
  language: string;
  durationMinutes?: number;
  url: string;
  dataWarning: string;
  lastChecked: string;
  status: VideoResourceStatus;
};

const warning = 'External video: internet connection and mobile data may be required. The built-in lesson remains available offline.';

export const videoResources: VideoResource[] = [
  { id:'video-m01-01', lessonId:'MZAIE-L1-M01-L01', title:'AI: What is Machine Learning?', provider:'Code.org', language:'English', url:'https://www.youtube.com/watch?v=OeU5m6vRyCk', dataWarning:warning, lastChecked:'2026-08-19', status:'ACTIVE' },
  { id:'video-m02-01', lessonId:'MZAIE-L1-M02-L01', title:'What is Machine Learning?', provider:'Code.org', language:'English', url:'https://www.youtube.com/watch?v=KHbwOetbmbs', dataWarning:warning, lastChecked:'2026-08-19', status:'ACTIVE' },
  { id:'video-m03-01', lessonId:'MZAIE-L1-M03-L01', title:'Ethics & AI: Privacy & the Future of Work', provider:'Code.org', language:'English', url:'https://code.org/en-US/resources/videos', dataWarning:warning, lastChecked:'2026-08-19', status:'ACTIVE' },
  { id:'video-m04-01', lessonId:'MZAIE-L1-M04-L01', title:'Why is ethics crucial in the development of AI?', provider:'UNESCO', language:'English', url:'https://www.unesco.org/en/artificial-intelligence/recommendation-ethics/cases', dataWarning:warning, lastChecked:'2026-08-19', status:'ACTIVE' },
  { id:'video-m05-01', lessonId:'MZAIE-L1-M05-L01', title:'Exploring Generative AI', provider:'Code.org', language:'English', url:'https://code.org/en-US/resources/videos', dataWarning:warning, lastChecked:'2026-08-19', status:'ACTIVE' },
  { id:'video-m06-01', lessonId:'MZAIE-L1-M06-L01', title:'Exploring Generative AI', provider:'Code.org', language:'English', url:'https://code.org/en-US/resources/videos', dataWarning:warning, lastChecked:'2026-08-19', status:'ACTIVE' },
  { id:'video-m07-01', lessonId:'MZAIE-L1-M07-L01', title:'Artificial intelligence and the Futures of Learning', provider:'UNESCO', language:'English', url:'https://www.unesco.org/en/digital-education/ai-future-learning', dataWarning:warning, lastChecked:'2026-08-19', status:'ACTIVE' },
  { id:'video-m08-01', lessonId:'MZAIE-L1-M08-L01', title:'Ethics & AI: Equal Access and Algorithmic Bias', provider:'Code.org', language:'English', url:'https://www.youtube.com/watch?v=tJQSyzBUAew', dataWarning:warning, lastChecked:'2026-08-19', status:'ACTIVE' },

  { id:'video-p2m01-01', lessonId:'MZAIE-P2-M01-L01', title:'Artificial intelligence and the Futures of Learning', provider:'UNESCO', language:'English', url:'https://www.unesco.org/en/digital-education/ai-future-learning', dataWarning:warning, lastChecked:'2026-08-19', status:'ACTIVE' },
  { id:'video-p2m02-01', lessonId:'MZAIE-P2-M02-L01', title:'Exploring Generative AI: inputs, outputs and responsible creation', provider:'Code.org', language:'English', url:'https://code.org/en-US/resources/videos', dataWarning:warning, lastChecked:'2026-08-19', status:'ACTIVE' },
  { id:'video-p2m03-01', lessonId:'MZAIE-P2-M03-L01', title:'Exploring Generative AI: how prompts shape outputs', provider:'Code.org', language:'English', url:'https://code.org/en-US/resources/videos', dataWarning:warning, lastChecked:'2026-08-19', status:'ACTIVE' },
  { id:'video-p2m04-01', lessonId:'MZAIE-P2-M04-L01', title:'Ethics & AI: Equal Access and Algorithmic Bias', provider:'Code.org', language:'English', url:'https://www.youtube.com/watch?v=tJQSyzBUAew', dataWarning:warning, lastChecked:'2026-08-19', status:'ACTIVE' },
  { id:'video-p2m05-01', lessonId:'MZAIE-P2-M05-L01', title:'What is Machine Learning? Data, patterns and prediction', provider:'Code.org', language:'English', url:'https://www.youtube.com/watch?v=KHbwOetbmbs', dataWarning:warning, lastChecked:'2026-08-19', status:'ACTIVE' },
  { id:'video-p2m06-01', lessonId:'MZAIE-P2-M06-L01', title:'Build Smarter Workflows with AI for Nonprofits', provider:'Google for Nonprofits', language:'English', url:'https://help.youtube.com/nonprofits/', dataWarning:warning, lastChecked:'2026-08-19', status:'ACTIVE' },
  { id:'video-p2m07-01', lessonId:'MZAIE-P2-M07-L01', title:'Exploring Generative AI: creativity and content', provider:'Code.org', language:'English', url:'https://code.org/en-US/resources/videos', dataWarning:warning, lastChecked:'2026-08-19', status:'ACTIVE' },
  { id:'video-p2m08-01', lessonId:'MZAIE-P2-M08-L01', title:'Why is ethics crucial in the development of AI?', provider:'UNESCO', language:'English', url:'https://www.unesco.org/en/artificial-intelligence/recommendation-ethics/cases', dataWarning:warning, lastChecked:'2026-08-19', status:'ACTIVE' },
  // South Africa & Africa context resources. These add local credibility without replacing the global backbone.
  { id:'video-sa-l1m03-01', lessonId:'MZAIE-L1-M03-L01', title:'South Africa AI readiness, POPIA and governance context', provider:'UNESCO South Africa', language:'English', url:'https://www.unesco.org/ethics-ai/en/southafrica', dataWarning:'External reference: internet connection and mobile data may be required. The built-in lesson remains available offline.', lastChecked:'2026-08-20', status:'ACTIVE' },
  { id:'video-sa-l1m04-01', lessonId:'MZAIE-L1-M04-L01', title:'South Africa country profile for responsible AI', provider:'UNESCO Global AI Ethics Observatory', language:'English', url:'https://www.unesco.org/ethics-ai/en/southafrica', dataWarning:'External reference: internet connection and mobile data may be required. The built-in lesson remains available offline.', lastChecked:'2026-08-20', status:'ACTIVE' },
  { id:'video-af-l1m07-01', lessonId:'MZAIE-L1-M07-L01', title:'Artificial Intelligence and Education Systems in Africa', provider:'UNESCO IICBA', language:'English', url:'https://www.iicba.unesco.org/en/artificial-intelligence-and-education-systems', dataWarning:'External reference: internet connection and mobile data may be required. The built-in lesson remains available offline.', lastChecked:'2026-08-20', status:'ACTIVE' },
  { id:'video-sa-p2m04-01', lessonId:'MZAIE-P2-M04-L01', title:'AI in South African schooling: access, language, privacy and inequality', provider:'South African Journal of Education', language:'English', url:'https://scielo.org.za/scielo.php?pid=S2520-98682025000100003&script=sci_arttext', dataWarning:'External research article: internet connection and mobile data may be required. The built-in lesson remains available offline.', lastChecked:'2026-08-20', status:'ACTIVE' },
  { id:'video-sa-p2m08-01', lessonId:'MZAIE-P2-M08-L01', title:'AI helps South African children read in Sepedi, isiZulu and English', provider:'CSIR / YouTube', language:'English', url:'https://www.youtube.com/watch?v=gmQiqx8x0J8', dataWarning:warning, lastChecked:'2026-08-20', status:'ACTIVE' },
  { id:'video-af-p4m03-01', lessonId:'MZAIE-P4-M03-L01', title:'Generative AI in African learning contexts', provider:'RAIN-Africa / YouTube', language:'English', url:'https://www.youtube.com/watch?v=4L3UUe6GDbE', dataWarning:warning, lastChecked:'2026-08-20', status:'ACTIVE' },
  { id:'video-sa-p4m05-01', lessonId:'MZAIE-P4-M05-L01', title:'South Africa National Artificial Intelligence Policy Framework', provider:'OECD.AI Policy Observatory', language:'English', url:'https://oecd.ai/en/dashboards/policy-initiatives/south-africa-national-artificial-intelligence-policy-framework', dataWarning:'External policy reference: internet connection and mobile data may be required. The built-in lesson remains available offline.', lastChecked:'2026-08-20', status:'ACTIVE' },
  { id:'video-af-p4m07-01', lessonId:'MZAIE-P4-M07-L01', title:'AI education systems, ethics and learner protection in Africa', provider:'UNESCO IICBA', language:'English', url:'https://www.iicba.unesco.org/en/artificial-intelligence-and-education-systems', dataWarning:'External reference: internet connection and mobile data may be required. The built-in lesson remains available offline.', lastChecked:'2026-08-20', status:'ACTIVE' },
  { id:'video-sa-p4m08-01', lessonId:'MZAIE-P4-M08-L01', title:'South Africa responsible AI profile: inclusion, skills and governance', provider:'UNESCO Global AI Ethics Observatory', language:'English', url:'https://www.unesco.org/ethics-ai/en/southafrica', dataWarning:'External reference: internet connection and mobile data may be required. The built-in lesson remains available offline.', lastChecked:'2026-08-20', status:'ACTIVE' },

];

export function getActiveVideoResourcesForLesson(lessonId: string) {
  return videoResources.filter((resource) => resource.lessonId === lessonId && resource.status === 'ACTIVE');
}
