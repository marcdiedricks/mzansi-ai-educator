import { modules, lessons, level } from './data';
import { BlockType, Lesson, TrustState } from './types';
import { LEVEL_ONE_MODULES } from './levelOneCanonical';
import { LEVEL_TWO_MODULES, LEVEL_THREE_MODULES, LEVEL_FOUR_MODULES } from '../programmeLevels';
import { levelOneLesson01 } from './levelOneLesson01';
import { levelOneLesson02 } from './levelOneLesson02';
import { levelOneLesson03 } from './levelOneLesson03';
import { levelOneLesson04 } from './levelOneLesson04';
import { levelOneLesson05 } from './levelOneLesson05';
import { levelOneLesson06 } from './levelOneLesson06';
import { levelOneLesson07 } from './levelOneLesson07';
import { levelOneLesson08 } from './levelOneLesson08';
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

const VALID_BLOCK_TYPES: BlockType[] = [
  'objective',
  'explanation',
  'example',
  'keyPoint',
  'activity',
  'reflection',
  'ethicsCheck',
  'verification',
  'application',
  'summary',
];

const VALID_TRUST_STATES: TrustState[] = [
  'VERIFIED_CURRICULUM',
  'AI_ASSISTED_REVIEWED',
  'LIVE_AI',
];

const CANONICAL_LESSONS: Lesson[] = [
  levelOneLesson01, levelOneLesson02, levelOneLesson03, levelOneLesson04, levelOneLesson05, levelOneLesson06, levelOneLesson07, levelOneLesson08,
  ...levelTwoLessons, levelTwoWritingLesson, levelTwoAdvancedCreoLesson, levelTwoResearchLesson, levelTwoMathDataLesson, levelTwoWorkProductivityLesson, levelTwoCreativityLesson, levelTwoCommunitiesLesson,
  levelThreeProblemSolutionLesson, levelThreeAssistantsWorkflowsLesson, levelThreeKnowledgeDataLesson, levelThreeNoCodeLowCodeLesson, levelThreeConversationUxLesson, levelThreeTestingBiasLesson, levelThreePrivacySafetyLesson, levelThreeSouthAfricanPrototypeLesson,
  levelFourCommunityProblemsLesson, levelFourHumanCentredDesignLesson, levelFourEducationNgosChurchesLesson, levelFourSmallBusinessEntrepreneurshipLesson, levelFourPublicServiceCivicInnovationLesson, levelFourMeasuringImpactEvidenceLesson, levelFourLeadershipEthicsGovernanceLesson, levelFourCapstoneSouthAfricanSolutionLesson,
];

export function validateCurriculumData() {
  const errors: string[] = [];
  const moduleIds = new Set<string>();
  const lessonIds = new Set<string>();

  // Validate Level module references
  level.moduleIds.forEach((mId) => {
    if (!modules.find((m) => m.id === mId)) {
      errors.push(`Level ${level.id} references unknown module ${mId}`);
    }
  });

  // Validate Modules
  modules.forEach((module) => {
    if (!module.id) errors.push(`Module missing ID`);
    if (moduleIds.has(module.id)) {
      errors.push(`Duplicate module ID found: ${module.id}`);
    }
    moduleIds.add(module.id);

    module.lessonIds.forEach((lId) => {
      if (!lessons.find((l) => l.id === lId)) {
        errors.push(`Module ${module.id} references unknown lesson ${lId}`);
      }
    });
  });

  // Validate Lessons
  lessons.forEach((lesson) => {
    if (!lesson.id) errors.push(`Lesson missing ID`);
    if (lessonIds.has(lesson.id)) {
      errors.push(`Duplicate lesson ID found: ${lesson.id}`);
    }
    lessonIds.add(lesson.id);

    if (!modules.find((m) => m.id === lesson.moduleId)) {
      errors.push(`Lesson ${lesson.id} references unknown module ${lesson.moduleId}`);
    }

    if (!VALID_TRUST_STATES.includes(lesson.trustState)) {
      errors.push(`Lesson ${lesson.id} has invalid trust state ${lesson.trustState}`);
    }

    lesson.blocks.forEach((block) => {
      if (!VALID_BLOCK_TYPES.includes(block.type)) {
        errors.push(`Lesson ${lesson.id} contains unsupported block type ${block.type}`);
      }
    });
  });

  // Validate the canonical four-level programme used by the current learner pathway.
  const canonicalModules = [
    ...LEVEL_ONE_MODULES.map((module) => ({ id: module.id, lessonId: module.lessonIds[0] })),
    ...LEVEL_TWO_MODULES,
    ...LEVEL_THREE_MODULES,
    ...LEVEL_FOUR_MODULES,
  ];
  if (canonicalModules.length !== 32) errors.push(`Expected 32 canonical modules; found ${canonicalModules.length}`);
  if (CANONICAL_LESSONS.length !== 32) errors.push(`Expected 32 canonical lessons; found ${CANONICAL_LESSONS.length}`);

  const canonicalModuleIds = new Set<string>();
  const canonicalLessonIds = new Set<string>();

  canonicalModules.forEach((module) => {
    if (canonicalModuleIds.has(module.id)) errors.push(`Duplicate canonical module ID found: ${module.id}`);
    canonicalModuleIds.add(module.id);
    if (!module.lessonId) errors.push(`Canonical module ${module.id} has no lesson ID`);
  });

  CANONICAL_LESSONS.forEach((lesson) => {
    if (canonicalLessonIds.has(lesson.id)) errors.push(`Duplicate canonical lesson ID found: ${lesson.id}`);
    canonicalLessonIds.add(lesson.id);
    if (!canonicalModuleIds.has(lesson.moduleId)) errors.push(`Canonical lesson ${lesson.id} references unknown module ${lesson.moduleId}`);
    const expectedLevelId = lesson.moduleId.replace(/-M\\d+$/, '');
    if (lesson.levelId !== expectedLevelId) errors.push(`Canonical lesson ${lesson.id} has levelId ${lesson.levelId}; expected ${expectedLevelId}`);
    if (!VALID_TRUST_STATES.includes(lesson.trustState)) errors.push(`Canonical lesson ${lesson.id} has invalid trust state ${lesson.trustState}`);
    lesson.blocks.forEach((block) => {
      if (!VALID_BLOCK_TYPES.includes(block.type)) errors.push(`Canonical lesson ${lesson.id} contains unsupported block type ${block.type}`);
    });
    lesson.quiz?.forEach((question) => {
      if (question.options.length < 2) errors.push(`Quiz ${question.id} in ${lesson.id} needs at least two options`);
      if (question.correctIndex < 0 || question.correctIndex >= question.options.length) errors.push(`Quiz ${question.id} in ${lesson.id} has invalid correctIndex ${question.correctIndex}`);
    });
  });

  [1, 2, 3, 4].forEach((levelNumber) => {
    const modulePrefix = `MZAIE-P${levelNumber}-M`;
    const levelId = `MZAIE-P${levelNumber}`;
    if (canonicalModules.filter((module) => module.id.startsWith(modulePrefix)).length !== 8) errors.push(`Level ${levelNumber} does not contain exactly 8 canonical modules`);
    if (CANONICAL_LESSONS.filter((lesson) => lesson.levelId === levelId).length !== 8) errors.push(`Level ${levelNumber} does not contain exactly 8 canonical lessons`);
  });

  canonicalModules.forEach((module) => {
    if (module.lessonId && !canonicalLessonIds.has(module.lessonId)) errors.push(`Canonical module ${module.id} references unknown lesson ${module.lessonId}`);
    const wiredLesson = CANONICAL_LESSONS.find((lesson) => lesson.id === module.lessonId);
    if (wiredLesson && wiredLesson.moduleId !== module.id) errors.push(`Canonical module ${module.id} points to lesson ${wiredLesson.id} owned by ${wiredLesson.moduleId}`);
  });

  if (errors.length > 0) {
    console.warn('Curriculum Validation Errors:', errors);
  } else {
    console.log('Curriculum Data Validated Successfully.');
  }

  return errors;
}
