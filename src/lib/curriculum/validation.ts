import { modules, lessons, level } from './data';
import { BlockType, TrustState } from './types';

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

  if (errors.length > 0) {
    console.warn('Curriculum Validation Errors:', errors);
  } else {
    console.log('Curriculum Data Validated Successfully.');
  }

  return errors;
}
