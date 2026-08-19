import { modules, lessons, level, programme } from './data';
import { levelTwoLessons } from './levelTwoLessons';
import { levelTwoWritingLesson } from './levelTwoWritingLesson';
import { levelTwoAdvancedCreoLesson } from './levelTwoAdvancedCreoLesson';
import { levelTwoResearchLesson } from './levelTwoResearchLesson';
import { levelTwoMathDataLesson } from './levelTwoMathDataLesson';
import { levelTwoWorkProductivityLesson } from './levelTwoWorkProductivityLesson';
import { levelTwoCreativityLesson } from './levelTwoCreativityLesson';
import { levelTwoCommunitiesLesson } from './levelTwoCommunitiesLesson';
import { levelThreeProblemSolutionLesson } from './levelThreeProblemSolutionLesson';
import { levelThreeAssistantsWorkflowsLesson } from './levelThreeAssistantsWorkflowsLesson';
import { LEVEL_TWO_MODULES, LEVEL_THREE_MODULES } from '../programmeLevels';
import { Lesson, Module } from './types';
import { validateCurriculumData } from './validation';
import { enhanceLesson } from './lessonEnhancements';
import { enhanceUbuntuLesson } from './lessonEnhancementsUbuntu';
import { enhanceGenerativeAiLesson } from './generativeAiEnhancement';
import { enhancePromptingCreoLesson } from './promptingCreoEnhancement';
import { enhanceProductivityLesson } from './productivityEnhancement';
import { enhanceFactCheckingBiasLesson } from './factCheckingBiasEnhancement';

validateCurriculumData();

const newLevelTwoLessons: Lesson[] = [
  ...levelTwoLessons,
  levelTwoWritingLesson,
  levelTwoAdvancedCreoLesson,
  levelTwoResearchLesson,
  levelTwoMathDataLesson,
  levelTwoWorkProductivityLesson,
  levelTwoCreativityLesson,
  levelTwoCommunitiesLesson,
];

const newLevelThreeLessons: Lesson[] = [
  levelThreeProblemSolutionLesson,
  levelThreeAssistantsWorkflowsLesson,
];

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

function getProgrammeModule(moduleId: string): Module | undefined {
  const shell = [...LEVEL_TWO_MODULES, ...LEVEL_THREE_MODULES].find((module) => module.id === moduleId);
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

const extendedLessons = [...newLevelTwoLessons, ...newLevelThreeLessons];

export const api = {
  getProgramme: () => programme,
  getLevel: () => level,
  getModulesForLevel: () => modules,
  getModule: (moduleId: string) => modules.find((m) => m.id === moduleId) || getProgrammeModule(moduleId),
  getLesson: (lessonId: string) => {
    const existingLesson = lessons.find((l) => l.id === lessonId);
    if (existingLesson) return enhance(existingLesson);
    return extendedLessons.find((l) => l.id === lessonId);
  },
  getLessonsForModule: (moduleId: string) => {
    const existingLessons = lessons.filter((l) => l.moduleId === moduleId).map(enhance);
    if (existingLessons.length > 0) return existingLessons;
    return extendedLessons.filter((l) => l.moduleId === moduleId);
  },
};
