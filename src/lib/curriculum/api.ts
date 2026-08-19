import { modules, lessons, level, programme } from './data';
import { validateCurriculumData } from './validation';
import { enhanceLesson } from './lessonEnhancements';
import { enhanceUbuntuLesson } from './lessonEnhancementsUbuntu';
import { enhanceGenerativeAiLesson } from './generativeAiEnhancement';
import { enhancePromptingCreoLesson } from './promptingCreoEnhancement';
import { enhanceProductivityLesson } from './productivityEnhancement';

// Run validation upon API initialization
validateCurriculumData();

function enhance(lesson: (typeof lessons)[number]) {
  return enhanceProductivityLesson(
    enhancePromptingCreoLesson(
      enhanceGenerativeAiLesson(
        enhanceUbuntuLesson(
          enhanceLesson(lesson)
        )
      )
    )
  );
}

export const api = {
  getProgramme: () => programme,
  getLevel: () => level,
  getModulesForLevel: () => modules,
  getModule: (moduleId: string) => modules.find((m) => m.id === moduleId),
  getLesson: (lessonId: string) => {
    const lesson = lessons.find((l) => l.id === lessonId);
    return lesson ? enhance(lesson) : undefined;
  },
  getLessonsForModule: (moduleId: string) => lessons.filter((l) => l.moduleId === moduleId).map(enhance),
};
