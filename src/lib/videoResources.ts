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

// Link-only repository. No video files are bundled with the PWA.
// Core lessons must remain fully usable without these external resources.
export const videoResources: VideoResource[] = [];

export function getActiveVideoResourcesForLesson(lessonId: string) {
  return videoResources.filter(
    (resource) => resource.lessonId === lessonId && resource.status === 'ACTIVE',
  );
}
