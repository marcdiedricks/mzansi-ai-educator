import { modules, lessons, level, programme } from './data';
import { validateCurriculumData } from './validation';

// Run validation upon API initialization
validateCurriculumData();

export const api = {
  getProgramme: () => programme,
  getLevel: () => level,
  getModulesForLevel: () => modules,
  getModule: (moduleId: string) => modules.find((m) => m.id === moduleId),
  getLesson: (lessonId: string) => lessons.find((l) => l.id === lessonId),
  getLessonsForModule: (moduleId: string) => lessons.filter((l) => l.moduleId === moduleId),
};
