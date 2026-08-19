import { useEffect, useState } from 'react';
import { BookOpen, CheckCircle2, Lock, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { api } from '../lib/curriculum/api';
import { lessons } from '../lib/curriculum/data';
import { getUserProgress, getLevel2TestProgress, getLevel3TestProgress, isLevel2TestPreviewEnabled, isLevel3TestPreviewEnabled, setLevel2TestPreview, setLevel3TestPreview } from '../lib/progress';
import { LEVEL_TWO_MODULES, LEVEL_THREE_MODULES, LEVEL_FOUR_MODULES, PROGRAMME_LEVELS } from '../lib/programmeLevels';

export function Learn() {
  const navigate = useNavigate();
  const modules = api.getModulesForLevel();
  const [progress, setProgress] = useState(getUserProgress());
  const [level2TestProgress, setLevel2TestProgress] = useState(getLevel2TestProgress());
  const [level3TestProgress, setLevel3TestProgress] = useState(getLevel3TestProgress());
  const [level2Preview, setLevel2Preview] = useState(isLevel2TestPreviewEnabled());
  const [level3Preview, setLevel3Preview] = useState(isLevel3TestPreviewEnabled());

  useEffect(() => {
    const handleUpdate = () => {
      setProgress(getUserProgress());
      setLevel2TestProgress(getLevel2TestProgress());
      setLevel3TestProgress(getLevel3TestProgress());
      setLevel2Preview(isLevel2TestPreviewEnabled());
      setLevel3Preview(isLevel3TestPreviewEnabled());
    };
    window.addEventListener('mzansi_progress_updated', handleUpdate);
    return () => window.removeEventListener('mzansi_progress_updated', handleUpdate);
  }, []);

  const level1Ids = lessons.filter((lesson) => lesson.levelId === 'MZAIE-L1').map((lesson) => lesson.id);
  const level1Complete = level1Ids.length > 0 && level1Ids.every((id) => progress.completedLessons.includes(id));
  const level2Ids = LEVEL_TWO_MODULES.flatMap((module) => module.lessonId ? [module.lessonId] : []);
  const level2Progress = level2Preview && !level1Complete ? level2TestProgress : progress;
  const level2Complete = level2Ids.length === LEVEL_TWO_MODULES.length && level2Ids.every((id) => level2Progress.completedLessons.includes(id));
  const level2RealComplete = level1Complete && level2Ids.length === LEVEL_TWO_MODULES.length && level2Ids.every((id) => progress.completedLessons.includes(id));
  const level2Accessible = level1Complete || level2Preview;

  const level3Ids = LEVEL_THREE_MODULES.flatMap((module) => module.lessonId ? [module.lessonId] : []);
  const level3Progress = level3Preview && !level2RealComplete ? level3TestProgress : progress;
  const level3Complete = level3Ids.length === LEVEL_THREE_MODULES.length && level3Ids.every((id) => level3Progress.completedLessons.includes(id));
  const level3RealComplete = level2RealComplete && level3Ids.length === LEVEL_THREE_MODULES.length && level3Ids.every((id) => progress.completedLessons.includes(id));
  const level3Accessible = level2RealComplete || level3Preview;
  const level4Accessible = level3RealComplete;

  const openModule = (moduleId: string, lessonIds: string[]) => {
    if (lessonIds.length === 1) {
      navigate(`/learn/${moduleId}/lesson/${lessonIds[0]}`);
      return;
    }
    navigate(`/learn/${moduleId}`);
  };

  const toggleLevel2Preview = () => {
    if (!level2Preview) setLevel3TestPreview(false);
    setLevel2TestPreview(!level2Preview);
  };

  const toggleLevel3Preview = () => {
    if (!level3Preview) setLevel2TestPreview(false);
    setLevel3TestPreview(!level3Preview);
  };

  return (
    <div className="p-4 sm:p-6 space-y-6 pb-24">
      <header>
        <p className="text-xs font-bold uppercase tracking-wider text-[#E67E22]">32-module learning journey</p>
        <h1 className="text-2xl font-bold text-[#2D3E50] mt-1">Learn</h1>
        <p className="text-sm font-medium text-gray-500 mt-1">Understand, apply, create, then solve meaningful problems with AI.</p>
      </header>

      {level2Preview && !level1Complete && (
        <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-3 text-xs text-amber-900">
          <strong>LEVEL 2 TEST PREVIEW ACTIVE.</strong> Preview completions and quiz scores are stored separately from learner progress.
        </div>
      )}
      {level3Preview && !level2RealComplete && (
        <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-3 text-xs text-amber-900">
          <strong>LEVEL 3 TEST PREVIEW ACTIVE.</strong> Level 3 is open for build verification only. Test completions and quiz scores are isolated. Level 4 remains locked.
        </div>
      )}

      <section className="space-y-3">
        {PROGRAMME_LEVELS.map((level) => {
          const unlocked = level.id === 1 || (level.id === 2 && level2Accessible) || (level.id === 3 && level3Accessible) || (level.id === 4 && level4Accessible);
          const completed = (level.id === 1 && level1Complete) || (level.id === 2 && level2Complete) || (level.id === 3 && level3Complete);
          const previewComplete = (level.id === 2 && level2Preview && !level1Complete) || (level.id === 3 && level3Preview && !level2RealComplete);
          return (
            <div key={level.id} className={`rounded-2xl border-2 p-4 ${unlocked ? 'bg-white border-[#2D3E50]' : 'bg-[#F8F9FA] border-[#E2E8F0]'}`}>
              <div className="flex items-start gap-3">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold shrink-0 ${unlocked ? 'bg-[#2D3E50] text-white' : 'bg-gray-200 text-gray-500'}`}>
                  {completed ? <CheckCircle2 className="w-5 h-5" /> : unlocked ? level.id : <Lock className="w-5 h-5" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#E67E22]">Level {level.id} · {level.stage}</p>
                    <span className="text-[10px] font-bold text-gray-500">{level.moduleCount} modules</span>
                  </div>
                  <h2 className="font-bold text-[#1A202C] mt-1">{level.title}</h2>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">{level.outcome}</p>
                  {!unlocked && <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mt-2">Opens after the previous level</p>}
                  {unlocked && completed && <p className={`text-[10px] font-bold uppercase tracking-wider mt-2 ${previewComplete ? 'text-amber-700' : 'text-emerald-700'}`}>{previewComplete ? 'Test preview complete · learner gate unchanged' : 'Completed on this device'}</p>}
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <section className="bg-white border-2 border-[#E2E8F0] rounded-2xl overflow-hidden">
        <div className="bg-[#2D3E50] text-white p-5"><div className="text-[#E67E22] font-bold text-[10px] uppercase tracking-wider mb-1">Level 1 · Understand</div><h2 className="text-xl font-bold">AI Foundations & Responsible Use</h2><p className="text-xs text-gray-300 mt-1">Your Level 1 pathway remains intact.</p></div>
        <div className="divide-y-2 divide-[#E2E8F0]">
          {modules.map((mod, index) => <button key={mod.id} onClick={() => mod.lessonIds.length > 0 && openModule(mod.id, mod.lessonIds)} disabled={mod.lessonIds.length === 0} className="w-full flex items-center p-5 hover:bg-[#F8F9FA] text-left transition-colors group disabled:opacity-60 disabled:cursor-not-allowed"><div className="w-8 h-8 rounded-lg bg-gray-100 text-gray-600 flex items-center justify-center font-bold mr-4 shrink-0 group-hover:bg-[#2D3E50] group-hover:text-white transition-colors">{index + 1}</div><div className="flex-1 min-w-0"><h3 className="font-bold text-[#1A202C] truncate">{mod.title}</h3><p className="text-xs font-medium text-gray-500">Tap to open lesson</p></div><BookOpen className="w-5 h-5 text-gray-300 group-hover:text-[#E67E22] ml-4" /></button>)}
        </div>
      </section>

      <section className={`border-2 rounded-2xl overflow-hidden ${level2Accessible ? 'bg-white border-[#2D3E50]' : 'bg-white border-[#E2E8F0]'}`}>
        <div className={`${level2Accessible ? 'bg-[#2D3E50] text-white' : 'bg-[#F8F9FA] text-[#1A202C]'} p-5 border-b-2 border-[#E2E8F0]`}>
          <div className="flex items-start justify-between gap-3"><div><div className="text-[#E67E22] font-bold text-[10px] uppercase tracking-wider mb-1">Level 2 · Apply</div><h2 className="text-xl font-bold">Practical AI Skills</h2><p className={`text-xs mt-1 ${level2Accessible ? 'text-gray-300' : 'text-gray-600'}`}>{level1Complete ? 'Level 2 is unlocked.' : level2Preview ? 'Build preview is active. Test records are isolated.' : 'Complete Level 1 to unlock these eight practical modules.'}</p></div>{level2Accessible ? <Eye className="w-5 h-5 text-amber-300 shrink-0 mt-1" /> : <Lock className="w-5 h-5 text-gray-400 shrink-0 mt-1" />}</div>
          {!level1Complete && <button onClick={toggleLevel2Preview} className={`mt-4 w-full rounded-xl px-4 py-3 text-xs font-bold ${level2Preview ? 'bg-amber-100 text-amber-900' : 'bg-white text-[#2D3E50]'}`}>{level2Preview ? 'Exit Level 2 Test Preview' : 'Open Level 2 Test Preview'}</button>}
        </div>
        <div className="divide-y-2 divide-[#E2E8F0]">
          {LEVEL_TWO_MODULES.map((mod, index) => { const done = Boolean(mod.lessonId && level2Progress.completedLessons.includes(mod.lessonId)); return <button key={mod.id} disabled={!level2Accessible || !mod.lessonId} onClick={() => mod.lessonId && navigate(`/learn/${mod.id}/lesson/${mod.lessonId}`)} className="w-full flex items-start p-5 bg-white text-left hover:bg-[#F8F9FA] disabled:opacity-60 disabled:cursor-not-allowed"><div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold mr-4 shrink-0 ${done ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-600'}`}>{done ? <CheckCircle2 className="w-4 h-4" /> : index + 1}</div><div className="flex-1 min-w-0"><p className="text-[10px] font-bold uppercase tracking-wider text-[#E67E22]">Module {mod.code}</p><h3 className="font-bold text-[#1A202C] mt-0.5">{mod.title}</h3><p className="text-xs text-gray-500 mt-1 leading-relaxed">{mod.description}</p><p className={`text-[10px] font-bold uppercase tracking-wider mt-2 ${done ? 'text-emerald-700' : level2Accessible ? 'text-[#2D3E50]' : 'text-gray-400'}`}>{done ? (level2Preview && !level1Complete ? 'Test completed' : 'Completed') : level2Accessible ? '20 min lesson · Tap to open' : 'Ready · unlocks after Level 1'}</p></div>{level2Accessible ? <BookOpen className="w-4 h-4 text-[#E67E22] shrink-0 ml-3 mt-1" /> : <Lock className="w-4 h-4 text-gray-300 shrink-0 ml-3 mt-1" />}</button>; })}
        </div>
      </section>

      <section className={`border-2 rounded-2xl overflow-hidden ${level3Accessible ? 'bg-white border-[#2D3E50]' : 'bg-white border-[#E2E8F0]'}`}>
        <div className={`${level3Accessible ? 'bg-[#2D3E50] text-white' : 'bg-[#F8F9FA] text-[#1A202C]'} p-5 border-b-2 border-[#E2E8F0]`}>
          <div className="flex items-start justify-between gap-3"><div><div className="text-[#E67E22] font-bold text-[10px] uppercase tracking-wider mb-1">Level 3 · Create</div><h2 className="text-xl font-bold">AI Creator & Builder</h2><p className={`text-xs mt-1 ${level3Accessible ? 'text-gray-300' : 'text-gray-600'}`}>{level2RealComplete ? 'Level 3 is unlocked. Complete the eight creator modules.' : level3Preview ? 'Build preview is active. Level 3 test records are isolated from learner progress.' : 'Complete Levels 1 and 2 as a learner to unlock Level 3.'}</p></div>{level3Accessible ? <Eye className="w-5 h-5 text-amber-300 shrink-0 mt-1" /> : <Lock className="w-5 h-5 text-gray-400 shrink-0 mt-1" />}</div>
          {!level2RealComplete && <button onClick={toggleLevel3Preview} className={`mt-4 w-full rounded-xl px-4 py-3 text-xs font-bold ${level3Preview ? 'bg-amber-100 text-amber-900' : 'bg-white text-[#2D3E50]'}`}>{level3Preview ? 'Exit Level 3 Test Preview' : 'Open Level 3 Test Preview'}</button>}
        </div>
        <div className="divide-y-2 divide-[#E2E8F0]">
          {LEVEL_THREE_MODULES.map((mod, index) => { const done = Boolean(mod.lessonId && level3Progress.completedLessons.includes(mod.lessonId)); return <button key={mod.id} disabled={!level3Accessible || !mod.lessonId} onClick={() => mod.lessonId && navigate(`/learn/${mod.id}/lesson/${mod.lessonId}`)} className="w-full flex items-start p-5 bg-white text-left hover:bg-[#F8F9FA] disabled:opacity-60 disabled:cursor-not-allowed"><div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold mr-4 shrink-0 ${done ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-600'}`}>{done ? <CheckCircle2 className="w-4 h-4" /> : index + 1}</div><div className="flex-1 min-w-0"><p className="text-[10px] font-bold uppercase tracking-wider text-[#E67E22]">Module {mod.code}</p><h3 className="font-bold text-[#1A202C] mt-0.5">{mod.title}</h3><p className="text-xs text-gray-500 mt-1 leading-relaxed">{mod.description}</p><p className={`text-[10px] font-bold uppercase tracking-wider mt-2 ${done ? 'text-emerald-700' : level3Accessible ? 'text-[#2D3E50]' : 'text-gray-400'}`}>{done ? (level3Preview && !level2RealComplete ? 'Test completed' : 'Completed') : level3Accessible ? '20 min lesson · Tap to open' : 'Mapped · unlocks after Level 2'}</p></div>{level3Accessible ? <BookOpen className="w-4 h-4 text-[#E67E22] shrink-0 ml-3 mt-1" /> : <Lock className="w-4 h-4 text-gray-300 shrink-0 ml-3 mt-1" />}</button>; })}
        </div>
      </section>

      <section className={`border-2 rounded-2xl overflow-hidden ${level4Accessible ? 'bg-white border-[#2D3E50]' : 'bg-white border-[#E2E8F0]'}`}>
        <div className={`${level4Accessible ? 'bg-[#2D3E50] text-white' : 'bg-[#F8F9FA] text-[#1A202C]'} p-5 border-b-2 border-[#E2E8F0]`}>
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="text-[#E67E22] font-bold text-[10px] uppercase tracking-wider mb-1">Level 4 · Lead & Solve</div>
              <h2 className="text-xl font-bold">AI Innovation & Problem-Solving</h2>
              <p className={`text-xs mt-1 ${level4Accessible ? 'text-gray-300' : 'text-gray-600'}`}>{level4Accessible ? 'Level 4 is unlocked. Module lessons will be added one at a time.' : 'Complete Levels 1, 2 and 3 as a learner to unlock Level 4.'}</p>
            </div>
            {level4Accessible ? <BookOpen className="w-5 h-5 text-amber-300 shrink-0 mt-1" /> : <Lock className="w-5 h-5 text-gray-400 shrink-0 mt-1" />}
          </div>
        </div>
        <div className="divide-y-2 divide-[#E2E8F0]">
          {LEVEL_FOUR_MODULES.map((mod, index) => (
            <button key={mod.id} disabled={!level4Accessible || !mod.lessonId} onClick={() => mod.lessonId && navigate(`/learn/${mod.id}/lesson/${mod.lessonId}`)} className="w-full flex items-start p-5 bg-white text-left hover:bg-[#F8F9FA] disabled:opacity-60 disabled:cursor-not-allowed">
              <div className="w-8 h-8 rounded-lg bg-gray-100 text-gray-600 flex items-center justify-center font-bold mr-4 shrink-0">{index + 1}</div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#E67E22]">Module {mod.code}</p>
                <h3 className="font-bold text-[#1A202C] mt-0.5">{mod.title}</h3>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">{mod.description}</p>
                <p className="text-[10px] font-bold uppercase tracking-wider mt-2 text-gray-400">Mapped · unlocks after Level 3</p>
              </div>
              <Lock className="w-4 h-4 text-gray-300 shrink-0 ml-3 mt-1" />
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
