import { Download, ExternalLink, Wifi } from 'lucide-react';

const resources = [
  ['What is AI?', 'AI: What is Machine Learning?', 'Code.org', 'https://www.youtube.com/watch?v=OeU5m6vRyCk'],
  ['AI Around You', 'What is Machine Learning?', 'Code.org', 'https://www.youtube.com/watch?v=KHbwOetbmbs'],
  ['Data, Privacy & Safety', 'Ethics & AI: Privacy & the Future of Work', 'Code.org', 'https://code.org/en-US/resources/videos'],
  ['Ubuntu and Technology', 'Why is ethics crucial in the development of AI?', 'UNESCO', 'https://www.unesco.org/en/artificial-intelligence/recommendation-ethics/cases'],
  ['How Generative AI Works', 'Exploring Generative AI', 'Code.org', 'https://code.org/en-US/resources/videos'],
  ['Effective Prompting (CREO)', 'Exploring Generative AI', 'Code.org', 'https://code.org/en-US/resources/videos'],
  ['AI for Productivity', 'Artificial intelligence and the Futures of Learning', 'UNESCO', 'https://www.unesco.org/en/digital-education/ai-future-learning'],
  ['Critical Fact-Checking & Bias', 'Ethics & AI: Equal Access and Algorithmic Bias', 'Code.org', 'https://www.youtube.com/watch?v=tJQSyzBUAew'],
];

export function VideoResources() {
  return (
    <div className="p-6 pb-12">
      <header className="mb-5">
        <h1 className="text-2xl font-bold text-[#2D3E50] mb-1">Lesson Video Links</h1>
        <p className="text-sm font-medium text-gray-500">Optional trusted videos for each lesson.</p>
      </header>

      <div className="mb-5 p-4 rounded-2xl bg-blue-50 border-2 border-blue-100 flex gap-3">
        <Wifi className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
        <p className="text-sm text-blue-900">Videos open externally and need internet/data. Your built-in lessons still work offline.</p>
      </div>

      <a
        href="/mzansi-ai-educator/VIDEO_LINK_REPOSITORY.md"
        download
        className="mb-6 w-full flex items-center justify-center gap-2 rounded-xl bg-[#2D3E50] text-white font-bold px-4 py-3"
      >
        <Download className="w-5 h-5" /> Download Video Link List
      </a>

      <div className="space-y-3">
        {resources.map(([lesson, title, provider, url], index) => (
          <a key={lesson} href={url} target="_blank" rel="noopener noreferrer" className="block bg-white border-2 border-[#E2E8F0] rounded-2xl p-4 hover:bg-[#F8F9FA]">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-[#EDF2F7] flex items-center justify-center font-bold text-[#2D3E50] shrink-0">{index + 1}</div>
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
    </div>
  );
}
