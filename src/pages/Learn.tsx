import { BookOpen, CheckCircle2, Lock } from 'lucide-react';
import { api } from '../lib/curriculum/api';
import { LEVEL_TWO_MODULES, PROGRAMME_LEVELS } from '../lib/programmeLevels';
import { useNavigate } from 'react-router-dom';

export function Learn() {
  const navigate = useNavigate();
  const modules = api.getModulesForLevel();

  const openModule = (moduleId: string, lessonIds: string[]) => {
    if (lessonIds.length === 1) {
      navigate(`/learn/${moduleId}/lesson/${lessonIds[0]}`);
      return;
    }
    navigate(`/learn/${moduleId}`);
  };

  return (
    <div className="p-4 sm:p-6 space-y-6 pb-24">
      <header>
        <p className="text-xs font-bold uppercase tracking-wider text-[#E67E22]">32-module learning journey</p>
        <h1 className="text-2xl font-bold text-[#2D3E50] mt-1">Learn</h1>
        <p className="text-sm font-medium text-gray-500 mt-1">Understand, apply, create, then solve meaningful problems with AI.</p>
      </header>

      <section className="space-y-3">
        {PROGRAMME_LEVELS.map((level) => {
          const isActive = level.id === 1;
          return (
            <div key={level.id} className={`rounded-2xl border-2 p-4 ${isActive ? 'bg-white border-[#2D3E50]' : 'bg-[#F8F9FA] border-[#E2E8F0]'}`}>
              <div className="flex items-start gap-3">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold shrink-0 ${isActive ? 'bg-[#2D3E50] text-white' : 'bg-gray-200 text-gray-500'}`}>
                  {isActive ? <CheckCircle2 className="w-5 h-5" /> : <Lock className="w-5 h-5" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#E67E22]">Level {level.id} · {level.stage}</p>
                    <span className="text-[10px] font-bold text-gray-500">{level.moduleCount} modules</span>
                  </div>
                  <h2 className="font-bold text-[#1A202C] mt-1">{level.title}</h2>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">{level.outcome}</p>
                  {!isActive && <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mt-2">Opens after the previous level</p>}
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <section className="bg-white border-2 border-[#E2E8F0] rounded-2xl overflow-hidden">
        <div className="bg-[#2D3E50] text-white p-5">
          <div className="text-[#E67E22] font-bold text-[10px] uppercase tracking-wider mb-1">Level 1 · Understand</div>
          <h2 className="text-xl font-bold">AI Foundations & Responsible Use</h2>
          <p className="text-xs text-gray-300 mt-1">Your existing Level 1 pathway remains intact.</p>
        </div>

        <div className="divide-y-2 divide-[#E2E8F0]">
          {modules.map((mod, index) => {
            const hasLessons = mod.lessonIds.length > 0;
            const opensDirectly = mod.lessonIds.length === 1;
            return (
              <button
                key={mod.id}
                onClick={() => hasLessons && openModule(mod.id, mod.lessonIds)}
                disabled={!hasLessons}
                className="w-full flex items-center p-5 hover:bg-[#F8F9FA] text-left transition-colors focus-visible:outline-none focus-visible:bg-[#F8F9FA] group disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <div className="w-8 h-8 rounded-lg bg-gray-100 text-gray-600 flex items-center justify-center font-bold mr-4 shrink-0 group-hover:bg-[#2D3E50] group-hover:text-white transition-colors">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-[#1A202C] truncate">{mod.title}</h3>
                  <p className="text-xs font-medium text-gray-500">{!hasLessons ? 'Content coming soon' : opensDirectly ? 'Tap to start lesson' : 'Tap to choose a lesson'}</p>
                </div>
                <BookOpen className="w-5 h-5 text-gray-300 group-hover:text-[#E67E22] transition-colors ml-4" />
              </button>
            );
          })}
        </div>
      </section>

      <section className="bg-white border-2 border-[#E2E8F0] rounded-2xl overflow-hidden">
        <div className="bg-[#F8F9FA] p-5 border-b-2 border-[#E2E8F0]">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="text-[#E67E22] font-bold text-[10px] uppercase tracking-wider mb-1">Level 2 · Apply</div>
              <h2 className="text-xl font-bold text-[#1A202C]">Practical AI Skills</h2>
              <p className="text-xs text-gray-600 mt-1">Modules are being completed one at a time. Level 2 opens after Level 1 is completed.</p>
            </div>
            <Lock className="w-5 h-5 text-gray-400 shrink-0 mt-1" />
          </div>
        </div>

        <div className="divide-y-2 divide-[#E2E8F0]">
          {LEVEL_TWO_MODULES.map((mod, index) => {
            const lessonReady = Boolean(mod.lessonId);
            return (
              <div key={mod.id} className="flex items-start p-5 bg-white">
                <div className="w-8 h-8 rounded-lg bg-gray-100 text-gray-600 flex items-center justify-center font-bold mr-4 shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#E67E22]">Module {mod.code}</p>
                    {lessonReady && <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-md px-2 py-0.5">20 min lesson ready</span>}
                  </div>
                  <h3 className="font-bold text-[#1A202C] mt-0.5">{mod.title}</h3>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">{mod.description}</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mt-2">{lessonReady ? 'Ready · opens after Level 1' : 'Content coming next'}</p>
                </div>
                <Lock className="w-4 h-4 text-gray-300 shrink-0 ml-3 mt-1" />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
