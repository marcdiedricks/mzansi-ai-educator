import { modules, lessons, level, programme } from './data';
import { levelTwoLessons } from './levelTwoLessons';
import { LEVEL_TWO_MODULES } from '../programmeLevels';
import { Lesson, Module } from './types';
import { validateCurriculumData } from './validation';
import { enhanceLesson } from './lessonEnhancements';
import { enhanceUbuntuLesson } from './lessonEnhancementsUbuntu';
import { enhanceGenerativeAiLesson } from './generativeAiEnhancement';
import { enhancePromptingCreoLesson } from './promptingCreoEnhancement';
import { enhanceProductivityLesson } from './productivityEnhancement';
import { enhanceFactCheckingBiasLesson } from './factCheckingBiasEnhancement';

// Run validation upon API initialization
validateCurriculumData();

function enhance(lesson: Lesson) {
  return enhanceFactCheckingBiasLesson(
    enhanceProductivityLesson(
      enhancePromptingCreoLesson(
        enhanceGenerativeAiLesson(
          enhanceUbuntuLesson(
            enhanceLesson(lesson)
          )
        )
      )
    )
  );
}

function getLevelTwoModule(moduleId: string): Module | undefined {
  const shell = LEVEL_TWO_MODULES.find((module) => module.id === moduleId);
  if (!shell) return undefined;

  return {
    id: shell.id,
    title: `${shell.code} ${shell.title}`,
    description: shell.description,
    order: Number(shell.code.split('.')[1]) || 1,
    lessonIds: shell.lessonId ? [shell.lessonId] : [],
    competencyIds: ['RESPONSIBLE_AI_USE'],
    version: '1.0',
  };
}

export const api = {
  getProgramme: () => programme,
  getLevel: () => level,
  getModulesForLevel: () => modules,
  getModule: (moduleId: string) => modules.find((m) => m.id === moduleId) || getLevelTwoModule(moduleId),
  getLesson: (lessonId: string) => {
    const existingLesson = lessons.find((l) => l.id === lessonId);
    if (existingLesson) return enhance(existingLesson);

    return levelTwoLessons.find((l) => l.id === lessonId);
  },
  getLessonsForModule: (moduleId: string) => {
    const existingLessons = lessons.filter((l) => l.moduleId === moduleId).map(enhance);
    if (existingLessons.length > 0) return existingLessons;

    return levelTwoLessons.filter((l) => l.moduleId === moduleId);
  },
};
