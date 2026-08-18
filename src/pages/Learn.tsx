import { BookOpen, Lock } from 'lucide-react';
import { api } from '../lib/curriculum/api';
import { useNavigate } from 'react-router-dom';

export function Learn() {
  const navigate = useNavigate();
  const level = api.getLevel();
  const modules = api.getModulesForLevel();

  return (
    <div className="p-6 space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-[#2D3E50] mb-1">Learn</h1>
        <p className="text-sm font-medium text-gray-500">Master the basics of Artificial Intelligence.</p>
      </header>

      <div className="bg-white border-2 border-[#E2E8F0] rounded-2xl overflow-hidden">
        <div className="bg-[#F8F9FA] p-5 border-b-2 border-[#E2E8F0]">
          <div className="text-[#E67E22] font-bold text-[10px] uppercase tracking-wider mb-1">{level.title}</div>
          <h2 className="text-xl font-bold text-[#1A202C]">Level 1</h2>
        </div>
        
        <div className="divide-y-2 divide-[#E2E8F0]">
          {modules.map((mod, index) => {
            const hasLessons = mod.lessonIds.length > 0;
            return (
              <button 
                key={mod.id}
                onClick={() => navigate(`/learn/${mod.id}`)}
                className="w-full flex items-center p-5 hover:bg-[#F8F9FA] text-left transition-colors focus-visible:outline-none focus-visible:bg-[#F8F9FA] group"
              >
                <div className="w-8 h-8 rounded-lg bg-gray-100 text-gray-600 flex items-center justify-center font-bold mr-4 shrink-0 group-hover:bg-[#2D3E50] group-hover:text-white transition-colors">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-[#1A202C] truncate">{mod.title}</h3>
                  <p className="text-xs font-medium text-gray-500">{hasLessons ? 'Tap to view lessons' : 'Content coming soon'}</p>
                </div>
                <div className="ml-4 text-gray-300 group-hover:text-[#E67E22] transition-colors">
                  <BookOpen className="w-5 h-5" />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="bg-[#F8F9FA] border-2 border-dashed border-[#E2E8F0] rounded-2xl p-5 text-center opacity-60">
        <div className="w-10 h-10 bg-gray-200 text-gray-500 rounded-lg flex items-center justify-center mx-auto mb-3">
          <Lock className="w-5 h-5" />
        </div>
        <h3 className="font-bold text-[#1A202C] mb-1">Level 2: AI Tools</h3>
        <div className="inline-block bg-gray-200 text-gray-600 text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded">
          Coming Later
        </div>
      </div>
    </div>
  );
}
