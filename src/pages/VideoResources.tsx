import { Download, ExternalLink, Wifi } from 'lucide-react';

const levelOneResources = [
  ['1.1 What is AI?', 'AI: What is Machine Learning?', 'Code.org', 'https://www.youtube.com/watch?v=OeU5m6vRyCk'],
  ['1.2 AI Around You', 'What is Machine Learning?', 'Code.org', 'https://www.youtube.com/watch?v=KHbwOetbmbs'],
  ['1.3 Data, Privacy & Safety', 'Ethics & AI: Privacy & the Future of Work', 'Code.org', 'https://code.org/en-US/resources/videos'],
  ['1.4 Ubuntu and Technology', 'Why is ethics crucial in the development of AI?', 'UNESCO', 'https://www.unesco.org/en/artificial-intelligence/recommendation-ethics/cases'],
  ['1.5 How Generative AI Works', 'Exploring Generative AI', 'Code.org', 'https://code.org/en-US/resources/videos'],
  ['1.6 Effective Prompting (CREO)', 'Exploring Generative AI', 'Code.org', 'https://code.org/en-US/resources/videos'],
  ['1.7 AI for Productivity', 'Artificial intelligence and the Futures of Learning', 'UNESCO', 'https://www.unesco.org/en/digital-education/ai-future-learning'],
  ['1.8 Critical Fact-Checking & Bias', 'Ethics & AI: Equal Access and Algorithmic Bias', 'Code.org', 'https://www.youtube.com/watch?v=tJQSyzBUAew'],
];

const levelTwoResources = [
  ['2.1 AI for Learning & Study', 'Artificial intelligence and the Futures of Learning', 'UNESCO', 'https://www.unesco.org/en/digital-education/ai-future-learning'],
  ['2.2 AI for Writing & Communication', 'Exploring Generative AI: inputs, outputs and responsible creation', 'Code.org', 'https://code.org/en-US/resources/videos'],
  ['2.3 Advanced Prompting with CREO', 'Exploring Generative AI: how prompts shape outputs', 'Code.org', 'https://code.org/en-US/resources/videos'],
  ['2.4 AI Research & Source Verification', 'Ethics & AI: Equal Access and Algorithmic Bias', 'Code.org', 'https://www.youtube.com/watch?v=tJQSyzBUAew'],
  ['2.5 AI for Mathematics, Data & Problem Solving', 'What is Machine Learning? Data, patterns and prediction', 'Code.org', 'https://www.youtube.com/watch?v=KHbwOetbmbs'],
  ['2.6 AI for Work & Productivity', 'Build Smarter Workflows with AI for Nonprofits', 'Google for Nonprofits', 'https://help.youtube.com/nonprofits/'],
  ['2.7 AI for Creativity & Content', 'Exploring Generative AI: creativity and content', 'Code.org', 'https://code.org/en-US/resources/videos'],
  ['2.8 AI in South African Communities', 'Why is ethics crucial in the development of AI?', 'UNESCO', 'https://www.unesco.org/en/artificial-intelligence/recommendation-ethics/cases'],
];

const levelThreeResources = [
  ['3.1 From Problem to AI Solution', 'AI Competency Framework for Students: Create and AI system design', 'UNESCO', 'https://www.unesco.org/en/articles/ai-competency-framework-students'],
  ['3.2 Designing AI Assistants & Workflows', 'AI Competency Framework for Students: AI system design', 'UNESCO', 'https://www.unesco.org/en/articles/ai-competency-framework-students'],
  ['3.3 Knowledge, Data & Source Design', 'Guidance for generative AI in education and research', 'UNESCO', 'https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research'],
  ['3.4 Building with No-Code & Low-Code AI', 'Exploring Generative AI video collection', 'Code.org', 'https://code.org/en-US/resources/videos'],
  ['3.5 Conversation & User Experience Design', 'AI Competency Framework for Students: human-centred AI creation', 'UNESCO', 'https://www.unesco.org/en/articles/ai-competency-framework-students'],
  ['3.6 Testing, Evaluation & Bias Checks', 'Ethics & AI: Equal Access and Algorithmic Bias', 'Code.org', 'https://www.youtube.com/watch?v=tJQSyzBUAew'],
  ['3.7 Privacy, Safety & Responsible Deployment', 'Recommendation on the Ethics of Artificial Intelligence', 'UNESCO', 'https://www.unesco.org/en/artificial-intelligence/recommendation-ethics'],
  ['3.8 Build a South African AI Prototype', 'AI Competency Framework for Students: responsible AI co-creation', 'UNESCO', 'https://www.unesco.org/en/articles/ai-competency-framework-students'],
];

function ResourceList({ resources, startIndex = 0 }: { resources: string[][]; startIndex?: number }) {
  return (
    <div className="space-y-3">
      {resources.map(([lesson, title, provider, url], index) => (
        <a key={lesson} href={url} target="_blank" rel="noopener noreferrer" className="block bg-white border-2 border-[#E2E8F0] rounded-2xl p-4 hover:bg-[#F8F9FA]">
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-[#EDF2F7] flex items-center justify-center font-bold text-[#2D3E50] shrink-0">{startIndex + index + 1}</div>
            <div className="min-w-0 flex-1">
              <p className="font-bold text-[#1A202C]">{lesson}</p>
              <p className="text-sm text-gray-600 mt-1">{title}</p>
              <p className="text-xs font-bold text-gray-400 mt-2">{provider} · English</p>
            </div>
            <ExternalLink className="w-5 h-5 text-gray-400 shrink-0" />
          </div>
        </a>
      ))}
    </div>
  );
}

export function VideoResources() {
  return (
    <div className="p-6 pb-12">
      <header className="mb-5">
        <h1 className="text-2xl font-bold text-[#2D3E50] mb-1">Lesson Video Links</h1>
        <p className="text-sm font-medium text-gray-500">Optional trusted video and multimedia support for Levels 1, 2 and 3.</p>
      </header>

      <div className="mb-5 p-4 rounded-2xl bg-blue-50 border-2 border-blue-100 flex gap-3">
        <Wifi className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
        <p className="text-sm text-blue-900">External resources need internet/data. Your built-in lessons remain available offline, so videos never block learning or completion.</p>
      </div>

      <a href="/mzansi-ai-educator/VIDEO_LINK_REPOSITORY.md" download className="mb-7 w-full flex items-center justify-center gap-2 rounded-xl bg-[#2D3E50] text-white font-bold px-4 py-3">
        <Download className="w-5 h-5" /> Download Video Link List
      </a>

      <section className="mb-8">
        <div className="mb-3"><p className="text-xs font-black tracking-wider text-blue-700">LEVEL 1 · UNDERSTAND</p><h2 className="text-lg font-bold text-[#2D3E50]">AI Foundations & Responsible Use</h2></div>
        <ResourceList resources={levelOneResources} />
      </section>

      <section className="mb-8">
        <div className="mb-3"><p className="text-xs font-black tracking-wider text-blue-700">LEVEL 2 · APPLY</p><h2 className="text-lg font-bold text-[#2D3E50]">Practical AI Skills</h2></div>
        <ResourceList resources={levelTwoResources} startIndex={8} />
      </section>

      <section>
        <div className="mb-3"><p className="text-xs font-black tracking-wider text-blue-700">LEVEL 3 · CREATE</p><h2 className="text-lg font-bold text-[#2D3E50]">AI Creator & Builder</h2><p className="text-xs text-gray-500 mt-1">Resources support the build journey. They are optional and do not affect learner progression.</p></div>
        <ResourceList resources={levelThreeResources} startIndex={16} />
      </section>
    </div>
  );
}
