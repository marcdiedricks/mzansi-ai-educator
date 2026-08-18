import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../lib/curriculum/api';
import { ArrowLeft, BookOpen, Clock } from 'lucide-react';

export function ModuleScreen() {
  const { moduleId } = useParams<{ moduleId: string }>();
  const navigate = useNavigate();

  const moduleData = moduleId ? api.getModule(moduleId) : undefined;
  const lessons = moduleId ? api.getLessonsForModule(moduleId) : [];

  if (!moduleData) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold text-[#2D3E50] mb-2">Module Not Found</h2>
        <button onClick={() => navigate('/learn')} className="text-[#E67E22] font-bold">Go Back</button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-[#F0F2F5]">
      <header className="flex items-center p-4 bg-white border-b-2 border-[#E2E8F0]">
        <button
          onClick={() => navigate('/learn')}
          className="p-2 -ml-2 text-gray-400 hover:text-[#2D3E50] rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D3E50]"
          aria-label="Go back"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="flex-1 text-center font-bold text-[10px] uppercase tracking-wider text-gray-400 mr-8">
          Module {moduleData.order}
        </div>
      </header>

      <div className="p-6 space-y-6 flex-1 overflow-y-auto pb-24">
        <header>
          <h1 className="text-2xl font-bold text-[#2D3E50] mb-2">{moduleData.title}</h1>
          <p className="text-sm font-medium text-gray-500">{moduleData.description}</p>
        </header>

        {lessons.length === 0 ? (
          <div className="bg-white border-2 border-dashed border-[#E2E8F0] rounded-2xl p-8 text-center">
            <BookOpen className="w-8 h-8 text-gray-300 mx-auto mb-3" />
            <p className="text-sm font-bold text-gray-400">Content coming soon</p>
          </div>
        ) : (
          <div className="bg-white border-2 border-[#E2E8F0] rounded-2xl overflow-hidden divide-y-2 divide-[#E2E8F0]">
            {lessons.map((lesson, index) => (
              <button
                key={lesson.id}
                onClick={() => navigate(`/learn/${moduleData.id}/lesson/${lesson.id}`)}
                className="w-full flex items-center p-5 hover:bg-[#F8F9FA] text-left transition-colors focus-visible:outline-none focus-visible:bg-[#F8F9FA] group"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-100 text-gray-600 flex items-center justify-center font-bold mr-4 shrink-0 group-hover:bg-[#2D3E50] group-hover:text-white transition-colors">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-[#1A202C] mb-1">{lesson.title}</h3>
                  <div className="flex items-center text-xs font-medium text-gray-500">
                    <Clock className="w-3.5 h-3.5 mr-1" />
                    {lesson.estimatedMinutes} min
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
