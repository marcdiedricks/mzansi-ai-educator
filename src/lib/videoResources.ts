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
];

export function getActiveVideoResourcesForLesson(lessonId: string) {
  return videoResources.filter((resource) => resource.lessonId === lessonId && resource.status === 'ACTIVE');
}
