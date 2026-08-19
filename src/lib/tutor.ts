import { TERMINOLOGY_DATA } from './terminology';
import { SOURCE_BACKED_TERMS } from './terminologyExpansion';
import { lessons, modules } from './curriculum/data';
import { api as curriculumApi } from './curriculum/api';

export type TutorMode = 'connected' | 'local';

export interface TutorAnswer {
  text: string;
  mode: TutorMode;
}

const LOCAL_RESPONSES = [
  {
    keywords: ['algorithm', 'algorithms'],
    answer:
      'An algorithm is a set of instructions or rules used to complete a task or make a decision. Think of following a recipe, planning a taxi route, or deciding the order of steps in a school activity. In AI, algorithms help a system process data, find patterns, and produce an output.',
  },
  {
    keywords: ['bias', 'biased', 'algorithmic bias'],
    answer:
      'Algorithmic bias happens when an AI system produces unfair or skewed results because of the data, assumptions, or design choices behind it. A South African example is a language system that performs well in English but poorly in isiXhosa because the training data contains much less isiXhosa.',
  },
  {
    keywords: ['training data'],
    answer:
      'Training data is information used to help an AI system learn patterns. Quality, variety and relevance matter. If South African languages, places, people or situations are missing, the system may perform poorly for local users.',
  },
  {
    keywords: ['creo'],
    answer:
      'CREO is a practical prompting framework: Context, Request, Examples and Output. Context gives the relevant situation, Request states the task, Examples show what a useful result can look like when needed, and Output specifies the format or result you want.',
  },
  {
    keywords: ['predictive', 'prediction'],
    answer:
      'Prediction in AI means estimating what is likely to happen or what is likely to come next, based on patterns in data. Predictive text on a phone is a simple example. It does not know the future. It estimates a likely next word.',
  },
  {
    keywords: ['generative ai', 'token'],
    answer:
      'Generative AI creates new outputs such as text or images from patterns learned during training. It can still make mistakes, so important claims must be checked.',
  },
];

function normalize(value: string) {
  return value.toLowerCase().trim();
}

function glossaryAnswer(question: string): string | undefined {
  const q = normalize(question);

  const baseItem = TERMINOLOGY_DATA.find((term) => {
    const candidates = [term.term, term.afrikaans.term, term.isizulu.term, term.sesotho.term, term.isixhosa?.term].filter(Boolean) as string[];
    return candidates.some((candidate) => q.includes(normalize(candidate))) || q.includes(normalize(term.id.replace(/-/g, ' ')));
  });

  if (baseItem) {
    return `${baseItem.term}: ${baseItem.english.definition}\n\nEveryday example: ${baseItem.english.example}`;
  }

  const expandedItem = SOURCE_BACKED_TERMS.find((term) => {
    const candidates = [term.term, term.afrikaans.term, term.isixhosa.term, term.isizulu.term];
    return candidates.some((candidate) => q.includes(normalize(candidate))) || q.includes(normalize(term.id.replace(/-/g, ' ')));
  });

  if (expandedItem) {
    return `${expandedItem.term}: ${expandedItem.english.definition}\n\nEveryday example: ${expandedItem.english.example}\n\nThis term is included in the source-backed Mzansi AI glossary.`;
  }

  return undefined;
}

function curriculumAnswer(question: string): string | undefined {
  const q = normalize(question);

  const baseLesson = lessons.find((candidate) =>
    q.includes(normalize(candidate.title)) ||
    candidate.blocks.some((block) => normalize(block.content).includes(q) || q.includes(normalize(block.content).slice(0, 28)))
  );

  if (baseLesson) {
    const lesson = curriculumApi.getLesson(baseLesson.id) || baseLesson;
    const usefulBlocks = lesson.blocks
      .filter((block) => ['explanation', 'keyPoint', 'example', 'summary'].includes(block.type))
      .slice(0, 3)
      .map((block) => block.content);
    return `${lesson.title}\n\n${usefulBlocks.join('\n\n')}`;
  }

  const module = modules.find((candidate) => q.includes(normalize(candidate.title)));
  if (module) return `${module.title}: ${module.description}`;

  return undefined;
}

function studySupport(question: string): string | undefined {
  const q = normalize(question);

  if (q.includes('simpler') || q.includes('plain language') || q.includes('easy words')) {
    return 'Send me the AI term, sentence or idea you want simplified. I will keep the correct technical term, explain it in plain language, and connect it to an everyday South African example.';
  }

  if (q.includes('compare') || q.includes('difference between')) {
    return 'Tell me the two AI ideas you want compared. I will explain what each one means, how they differ, and give you a practical example.';
  }

  if (q.includes('quiz me') || q.includes('test me') || q.includes('practice question')) {
    return 'Choose a topic such as AI foundations, algorithms, data, bias, generative AI, prompting or fact-checking. I will give you a short practice question, then explain the answer after you respond.';
  }

  if (q.includes('improve my prompt') || q.includes('fix my prompt')) {
    return 'Paste your prompt. I will help you strengthen its Context, Request, Examples and Output using CREO, while keeping your original goal.';
  }

  if (q.includes('fact check') || q.includes('fact-check') || q.includes('is this true')) {
    return 'Paste the claim you want to check. Offline, I can help you identify what needs verification and what kind of reliable source to look for. When the connected tutor is available, it can support a broader evidence-checking workflow.';
  }

  return undefined;
}

export function answerLocally(question: string): TutorAnswer {
  const normalized = normalize(question);
  const direct = LOCAL_RESPONSES.find((item) => item.keywords.some((keyword) => normalized.includes(keyword)));
  const answer = direct?.answer || glossaryAnswer(question) || curriculumAnswer(question) || studySupport(question);

  return {
    mode: 'local',
    text:
      answer ||
      'I can help with AI concepts, glossary terms, lesson explanations, comparisons, practice questions, CREO prompt improvement, study guidance and fact-checking habits. My local glossary now also covers terms such as hallucination, LLM, computer vision, NLP, explainable AI, fairness and human-in-the-loop. If the connected tutor is available, I can also answer broader questions beyond the local course knowledge.',
  };
}

export async function askTutor(question: string, language: string): Promise<TutorAnswer> {
  if (typeof navigator !== 'undefined' && navigator.onLine) {
    try {
      const response = await fetch('/api/tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question, language }),
      });

      if (response.ok) {
        const payload = (await response.json()) as { answer?: string };
        if (payload.answer?.trim()) return { mode: 'connected', text: payload.answer.trim() };
      }
    } catch {
      // Deliberately fall through to the resilient local tutor.
    }
  }

  return answerLocally(question);
}
