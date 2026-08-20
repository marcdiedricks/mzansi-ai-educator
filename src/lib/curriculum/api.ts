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
import { levelThreeKnowledgeDataLesson } from './levelThreeKnowledgeDataLesson';
import { levelThreeNoCodeLowCodeLesson } from './levelThreeNoCodeLowCodeLesson';
import { levelThreeConversationUxLesson } from './levelThreeConversationUxLesson';
import { levelThreeTestingBiasLesson } from './levelThreeTestingBiasLesson';
import { levelThreePrivacySafetyLesson } from './levelThreePrivacySafetyLesson';
import { levelThreeSouthAfricanPrototypeLesson } from './levelThreeSouthAfricanPrototypeLesson';
import { levelFourCommunityProblemsLesson } from './levelFourCommunityProblemsLesson';
import { levelFourHumanCentredDesignLesson } from './levelFourHumanCentredDesignLesson';
import { levelFourEducationNgosChurchesLesson } from './levelFourEducationNgosChurchesLesson';
import { levelFourSmallBusinessEntrepreneurshipLesson } from './levelFourSmallBusinessEntrepreneurshipLesson';
import { levelFourPublicServiceCivicInnovationLesson } from './levelFourPublicServiceCivicInnovationLesson';
import { levelFourMeasuringImpactEvidenceLesson } from './levelFourMeasuringImpactEvidenceLesson';
import { levelFourLeadershipEthicsGovernanceLesson } from './levelFourLeadershipEthicsGovernanceLesson';
import { levelFourCapstoneSouthAfricanSolutionLesson } from './levelFourCapstoneSouthAfricanSolutionLesson';
import { LEVEL_TWO_MODULES, LEVEL_THREE_MODULES, LEVEL_FOUR_MODULES } from '../programmeLevels';
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
  levelThreeKnowledgeDataLesson,
  levelThreeNoCodeLowCodeLesson,
  levelThreeConversationUxLesson,
  levelThreeTestingBiasLesson,
  levelThreePrivacySafetyLesson,
  levelThreeSouthAfricanPrototypeLesson,
];

const newLevelFourLessons: Lesson[] = [
  levelFourCommunityProblemsLesson,
  levelFourHumanCentredDesignLesson,
  levelFourEducationNgosChurchesLesson,
  levelFourSmallBusinessEntrepreneurshipLesson,
  levelFourPublicServiceCivicInnovationLesson,
  levelFourMeasuringImpactEvidenceLesson,
  levelFourLeadershipEthicsGovernanceLesson,
  levelFourCapstoneSouthAfricanSolutionLesson,
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
  const shell = [...LEVEL_TWO_MODULES, ...LEVEL_THREE_MODULES, ...LEVEL_FOUR_MODULES].find((module) => module.id === moduleId);
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

const extendedLessons = [...newLevelTwoLessons, ...newLevelThreeLessons, ...newLevelFourLessons];

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
