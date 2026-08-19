import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, BookOpen, Brain, CheckCircle2, Globe, Lock, MessageCircle, Video, WifiOff } from 'lucide-react';
import { getOnboardingData } from '../lib/storage';
import { getUserProgress } from '../lib/progress';
import { modules, lessons } from '../lib/curriculum/data';
import { LEVEL_TWO_MODULES, PROGRAMME_LEVELS } from '../lib/programmeLevels';

export function Home() {
  const navigate = useNavigate();
  const onboarding = getOnboardingData();
  const [progress, setProgress] = useState(getUserProgress());

  useEffect(() => {
    const handleUpdate = () => setProgress(getUserProgress());
    window.addEventListener('mzansi_progress_updated', handleUpdate);
    return () => window.removeEventListener('mzansi_progress_updated', handleUpdate);
  }, []);

  const level1Lessons = lessons.filter((lesson) => lesson.levelId === 'MZAIE-L1');
  const level1Ids = level1Lessons.map((lesson) => lesson.id);
  const level1Modules = modules.filter((module) => module.lessonIds.some((lessonId) => level1Ids.includes(lessonId)));
  const completedLevel1 = level1Ids.filter((id) => progress.completedLessons.includes(id));
  const level1Percent = Math.round((completedLevel1.length / Math.max(level1Ids.length, 1)) * 100);
  const level1Complete = level1Ids.length > 0 && completedLevel1.length === level1Ids.length;

  const level2Ids = LEVEL_TWO_MODULES.flatMap((module) => module.lessonId ? [module.lessonId] : []);
  const completedLevel2 = level2Ids.filter((id) => progress.completedLessons.includes(id));
  const level2Percent = Math.round((completedLevel2.length / Math.max(level2Ids.length, 1)) * 100);
  const level2Complete = level2Ids.length === LEVEL_TWO_MODULES.length && completedLevel2.length === level2Ids.length;

  const nextLevel1Lesson = level1Lessons.find((lesson) => !progress.completedLessons.includes(lesson.id));
  const nextLevel1Module = level1Modules.find((module) => module.id === nextLevel1Lesson?.moduleId);
  const nextLevel2Module = LEVEL_TWO_MODULES.find((module) => module.lessonId && !progress.completedLessons.includes(module.lessonId));

  const activeLevel = !level1Complete ? 1 : 2;
  const activePercent = activeLevel === 1 ? level1Percent : level2Percent;
  const activeCompleted = activeLevel === 1 ? completedLevel1.length : completedLevel2.length;
  const activeTotal = activeLevel === 1 ? level1Ids.length : level2Ids.length;
  const activeStage = activeLevel === 1 ? 'Understand' : 'Apply';
  const hasStartedActive = activeCompleted > 0;

  const continueEyebrow = level2Complete ? 'Level 2 complete' : hasStartedActive ? 'Continue learning' : activeLevel === 1 ? 'Start your learning journey' : 'Level 2 unlocked';
  const continueMeta = level2Complete ? 'Next: Level 3 · Create' : activeLevel === 1 ? `Level 1 · Module ${Math.min(activeCompleted + 1, activeTotal || 1)} of ${activeTotal || 8}` : `Level 2 · Module ${Math.min(activeCompleted + 1, activeTotal || 1)} of ${activeTotal || 8}`;
  const continueTitle = level2Complete ? 'AI Creator & Builder' : activeLevel === 1 ? (nextLevel1Lesson?.title || 'AI Foundations & Responsible Use') : (nextLevel2Module?.title || 'Practical AI Skills');
  const continueButton = level2Complete ? 'View curriculum' : activeLevel === 1 ? (hasStartedActive ? 'Continue learning' : 'Start Level 1') : (hasStartedActive ? 'Continue Level 2' : 'Start Level 2');

  const handleContinue = () => {
    if (level2Complete) return navigate('/learn');
    if (activeLevel === 1 && nextLevel1Lesson && nextLevel1Module) return navigate(`/learn/${nextLevel1Module.id}/lesson/${nextLevel1Lesson.id}`);
    if (activeLevel === 2 && nextLevel2Module?.lessonId) return navigate(`/learn/${nextLevel2Module.id}/lesson/${nextLevel2Module.lessonId}`);
    navigate('/learn');
  };

  const languageLabel = onboarding?.language === 'af' ? 'Afrikaans' : onboarding?.language === 'xh' ? 'isiXhosa' : 'English';

  return (
    <div className="w-full p-4 sm:p-6 pb-24 space-y-5">
      <header className="space-y-2">
        <div className="flex items-start justify-between gap-3"><div><p className="text-xs font-bold uppercase tracking-wider text-[#E67E22]">Mzansi AI Educator</p><h1 className="text-2xl font-bold text-[#2D3E50] mt-1">Your AI learning journey</h1><p className="text-sm text-gray-500 mt-1">Understand. Apply. Create. Solve.</p></div><div className="shrink-0 flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-xl px-2.5 py-1.5"><WifiOff className="w-3.5 h-3.5" /> Offline ready</div></div>
        <div className="flex flex-wrap gap-2 text-[11px] font-bold text-gray-600"><span className="px-2.5 py-1 rounded-lg bg-gray-100">Language: {languageLabel}</span><span className="px-2.5 py-1 rounded-lg bg-gray-100">32 modules · 4 levels</span></div>
      </header>

      <section className="bg-[#2D3E50] text-white rounded-2xl p-5 shadow-sm">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#E67E22]">{continueEyebrow}</p>
        <div className="flex items-start justify-between gap-3 mt-1"><div className="min-w-0 flex-1"><p className="text-sm text-gray-300">{continueMeta}</p><h2 className="text-xl font-bold mt-1">{continueTitle}</h2></div>{!level2Complete && <span className="text-xs font-bold text-gray-300 shrink-0">{activeCompleted}/{activeTotal}</span>}</div>
        <div className="w-full h-2.5 rounded-full bg-white/20 overflow-hidden mt-4"><div className="h-full rounded-full bg-[#E67E22] transition-all" style={{ width: `${activePercent}%` }} /></div>
        <div className="flex items-center justify-between text-[11px] text-gray-300 mt-2"><span>{level2Complete ? 'Level 2 completed' : `${activePercent}% of Level ${activeLevel} complete`}</span><span>{level2Complete ? 'Next: Create' : activeStage}</span></div>
        <button onClick={handleContinue} className="w-full mt-4 bg-[#E67E22] hover:bg-orange-600 text-white font-bold rounded-xl py-3.5 px-4 flex items-center justify-center gap-2">{continueButton} <ArrowRight className="w-4 h-4" /></button>
      </section>

      <section>
        <div className="flex items-center justify-between mb-3"><div><h2 className="text-base font-bold text-[#2D3E50]">Your four-level pathway</h2><p className="text-xs text-gray-500 mt-0.5">Only one new level opens at a time, so the app stays simple.</p></div><button onClick={() => navigate('/learn')} className="text-xs font-bold text-[#E67E22]">View curriculum</button></div>
        <div className="space-y-2.5">
          {PROGRAMME_LEVELS.map((level) => {
            const unlocked = level.id === 1 || (level.id === 2 && level1Complete);
            const completed = (level.id === 1 && level1Complete) || (level.id === 2 && level2Complete);
            return <button key={level.id} onClick={() => unlocked && navigate('/learn')} disabled={!unlocked} className={`w-full rounded-xl p-4 text-left flex items-center gap-3 border-2 ${unlocked ? 'bg-white border-[#2D3E50]' : 'bg-[#F8F9FA] border-[#E2E8F0] opacity-75'}`}><div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${unlocked ? 'bg-[#2D3E50] text-white' : 'bg-gray-200 text-gray-500'}`}>{completed ? <CheckCircle2 className="w-5 h-5" /> : unlocked ? level.id : <Lock className="w-4 h-4" />}</div><div className="min-w-0 flex-1"><div className="flex items-center justify-between gap-2"><p className="text-[10px] font-bold uppercase tracking-wider text-[#E67E22]">Level {level.id} · {level.stage}</p><span className="text-[10px] font-bold text-gray-500">8 modules</span></div><h3 className="font-bold text-sm text-[#1A202C] mt-0.5">{level.title}</h3><p className="text-xs text-gray-500 mt-0.5">{level.outcome}</p></div>{unlocked && <ArrowRight className="w-4 h-4 text-gray-400 shrink-0" />}</button>;
          })}
        </div>
      </section>

      <section className="bg-white border-2 border-[#E2E8F0] rounded-2xl p-4 shadow-sm"><div className="flex items-start gap-3"><div className="w-11 h-11 rounded-xl bg-orange-50 text-[#E67E22] flex items-center justify-center shrink-0"><MessageCircle className="w-6 h-6" /></div><div className="flex-1 min-w-0"><h2 className="text-base font-bold text-[#2D3E50]">Ask Mzansi Tutor</h2><p className="text-xs text-gray-600 leading-relaxed mt-1">Get plain explanations, local examples, prompt help and fact-checking guidance.</p><button onClick={() => navigate('/tutor')} className="mt-3 inline-flex items-center gap-2 bg-[#2D3E50] text-white text-sm font-bold py-2.5 px-4 rounded-xl">Open Tutor <ArrowRight className="w-4 h-4" /></button></div></div></section>
      <section className="grid grid-cols-2 gap-3"><button onClick={() => navigate('/practice')} className="bg-white border-2 border-[#E2E8F0] rounded-xl p-4 text-left"><Brain className="w-5 h-5 text-[#E67E22] mb-3" /><div className="font-bold text-sm text-[#2D3E50]">Practise</div><div className="text-xs text-gray-500 mt-1">Activities and AI tasks.</div></button><button onClick={() => navigate('/glossary')} className="bg-white border-2 border-[#E2E8F0] rounded-xl p-4 text-left"><Globe className="w-5 h-5 text-[#E67E22] mb-3" /><div className="font-bold text-sm text-[#2D3E50]">AI words</div><div className="text-xs text-gray-500 mt-1">Terms and local meanings.</div></button></section>
      <button onClick={() => navigate('/video-resources')} className="w-full bg-white border-2 border-[#E2E8F0] rounded-xl p-4 flex items-center gap-3 text-left"><Video className="w-5 h-5 text-[#E67E22]" /><div className="flex-1"><div className="font-bold text-sm text-[#2D3E50]">Lesson Video Links</div><div className="text-xs text-gray-500">Optional external lesson support.</div></div><ArrowRight className="w-4 h-4 text-gray-400" /></button>
      <button onClick={() => navigate('/progress')} className="w-full bg-white border-2 border-[#E2E8F0] rounded-xl p-4 flex items-center gap-3 text-left"><BookOpen className="w-5 h-5 text-[#2D3E50]" /><div className="flex-1"><div className="font-bold text-sm text-[#2D3E50]">See my progress</div><div className="text-xs text-gray-500">Review learning and saved results.</div></div><ArrowRight className="w-4 h-4 text-gray-400" /></button>
    </div>
  );
}
