import { modules, lessons, level, programme } from './data';
import { validateCurriculumData } from './validation';
import { enhanceLesson } from './lessonEnhancements';

// Run validation upon API initialization
validateCurriculumData();

export const api = {
  getProgramme: () => programme,
  getLevel: () => level,
  getModulesForLevel: () => modules,
  getModule: (moduleId: string) => modules.find((m) => m.id === moduleId),
  getLesson: (lessonId: string) => {
    const lesson = lessons.find((l) => l.id === lessonId);
    return lesson ? enhanceLesson(lesson) : undefined;
  },
  getLessonsForModule: (moduleId: string) => lessons.filter((l) => l.moduleId === moduleId).map(enhanceLesson),
};
