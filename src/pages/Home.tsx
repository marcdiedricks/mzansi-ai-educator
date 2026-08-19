import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, BookOpen, Brain, CheckCircle2, Globe, Lock, MessageCircle, Video, WifiOff } from 'lucide-react';
import { getOnboardingData } from '../lib/storage';
import { getUserProgress } from '../lib/progress';
import { modules, lessons } from '../lib/curriculum/data';
import { PROGRAMME_LEVELS } from '../lib/programmeLevels';

export function Home() {
  const navigate = useNavigate();
  const onboarding = getOnboardingData();
  const [progress, setProgress] = useState(getUserProgress());

  useEffect(() => {
    const handleUpdate = () => setProgress(getUserProgress());
    window.addEventListener('mzansi_progress_updated', handleUpdate);
    return () => window.removeEventListener('mzansi_progress_updated', handleUpdate);
  }, []);

  const levelOneLessons = lessons.filter((lesson) => lesson.levelId === 'MZAIE-L1');
  const levelOneIds = new Set(levelOneLessons.map((lesson) => lesson.id));
  const levelOneModules = modules.filter((module) => module.lessonIds.some((lessonId) => levelOneIds.has(lessonId)));
  const completedLevelOne = progress.completedLessons.filter((id) => levelOneIds.has(id));
  const totalLevelOne = levelOneLessons.length;
  const levelOnePercent = Math.round((completedLevelOne.length / Math.max(totalLevelOne, 1)) * 100);
  const nextLesson = levelOneLessons.find((lesson) => !progress.completedLessons.includes(lesson.id)) || levelOneLessons[0];
  const nextModule = levelOneModules.find((module) => module.id === nextLesson?.moduleId) || levelOneModules[0];

  const languageLabel = onboarding?.language === 'af' ? 'Afrikaans' : onboarding?.language === 'xh' ? 'isiXhosa' : 'English';

  return (
    <div className="w-full p-4 sm:p-6 pb-24 space-y-5">
      <header className="space-y-2">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#E67E22]">Mzansi AI Educator</p>
            <h1 className="text-2xl font-bold text-[#2D3E50] mt-1">Your AI learning journey</h1>
            <p className="text-sm text-gray-500 mt-1">Understand. Apply. Create. Solve.</p>
          </div>
          <div className="shrink-0 flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-xl px-2.5 py-1.5">
            <WifiOff className="w-3.5 h-3.5" /> Offline ready
          </div>
        </div>
        <div className="flex flex-wrap gap-2 text-[11px] font-bold text-gray-600">
          <span className="px-2.5 py-1 rounded-lg bg-gray-100">Language: {languageLabel}</span>
          <span className="px-2.5 py-1 rounded-lg bg-gray-100">32 modules · 4 levels</span>
        </div>
      </header>

      <section className="bg-[#2D3E50] text-white rounded-2xl p-5 shadow-sm">
        <div className="flex items-center justify-between gap-3 mb-3">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#E67E22]">Continue learning · Level 1</p>
            <h2 className="text-xl font-bold mt-1">{nextLesson?.title || 'AI Foundations'}</h2>
          </div>
          <span className="text-xs font-bold text-gray-300">{completedLevelOne.length}/{totalLevelOne}</span>
        </div>
        <p className="text-sm text-gray-300 mb-4">{nextModule?.title || 'AI Foundations & Responsible Use'}</p>
        <div className="w-full h-2.5 rounded-full bg-white/20 overflow-hidden">
          <div className="h-full rounded-full bg-[#E67E22] transition-all" style={{ width: `${levelOnePercent}%` }} />
        </div>
        <div className="flex items-center justify-between text-[11px] text-gray-300 mt-2">
          <span>{levelOnePercent}% of Level 1 complete</span>
          <span>Understand</span>
        </div>
        <button onClick={() => nextLesson && nextModule && navigate(`/learn/${nextModule.id}/lesson/${nextLesson.id}`)} className="w-full mt-4 bg-[#E67E22] hover:bg-orange-600 text-white font-bold rounded-xl py-3.5 px-4 flex items-center justify-center gap-2">
          Continue learning <ArrowRight className="w-4 h-4" />
        </button>
      </section>

      <section>
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="text-base font-bold text-[#2D3E50]">Your four-level pathway</h2>
            <p className="text-xs text-gray-500 mt-0.5">Only one level opens at a time, so the app stays simple.</p>
          </div>
          <button onClick={() => navigate('/learn')} className="text-xs font-bold text-[#E67E22]">View curriculum</button>
        </div>
        <div className="space-y-2.5">
          {PROGRAMME_LEVELS.map((level) => {
            const isLevelOne = level.id === 1;
            const isLevelOneComplete = isLevelOne && levelOnePercent === 100;
            return (
              <button key={level.id} onClick={() => isLevelOne && navigate('/learn')} disabled={!isLevelOne} className={`w-full rounded-xl p-4 text-left flex items-center gap-3 border-2 ${isLevelOne ? 'bg-white border-[#2D3E50]' : 'bg-[#F8F9FA] border-[#E2E8F0] opacity-75'}`}>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${isLevelOne ? 'bg-[#2D3E50] text-white' : 'bg-gray-200 text-gray-500'}`}>
                  {isLevelOneComplete ? <CheckCircle2 className="w-5 h-5" /> : isLevelOne ? level.id : <Lock className="w-4 h-4" />}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#E67E22]">Level {level.id} · {level.stage}</p>
                    <span className="text-[10px] font-bold text-gray-500">8 modules</span>
                  </div>
                  <h3 className="font-bold text-sm text-[#1A202C] mt-0.5">{level.title}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">{level.outcome}</p>
                </div>
                {isLevelOne && <ArrowRight className="w-4 h-4 text-gray-400 shrink-0" />}
              </button>
            );
          })}
        </div>
      </section>

      <section className="bg-white border-2 border-[#E2E8F0] rounded-2xl p-4 shadow-sm">
        <div className="flex items-start gap-3">
          <div className="w-11 h-11 rounded-xl bg-orange-50 text-[#E67E22] flex items-center justify-center shrink-0"><MessageCircle className="w-6 h-6" /></div>
          <div className="flex-1 min-w-0">
            <h2 className="text-base font-bold text-[#2D3E50]">Ask Mzansi Tutor</h2>
            <p className="text-xs text-gray-600 leading-relaxed mt-1">Get plain explanations, local examples, prompt help and fact-checking guidance.</p>
            <button onClick={() => navigate('/tutor')} className="mt-3 inline-flex items-center gap-2 bg-[#2D3E50] text-white text-sm font-bold py-2.5 px-4 rounded-xl">Open Tutor <ArrowRight className="w-4 h-4" /></button>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-3">
        <button onClick={() => navigate('/practice')} className="bg-white border-2 border-[#E2E8F0] rounded-xl p-4 text-left"><Brain className="w-5 h-5 text-[#E67E22] mb-3" /><div className="font-bold text-sm text-[#2D3E50]">Practise</div><div className="text-xs text-gray-500 mt-1">Activities and AI tasks.</div></button>
        <button onClick={() => navigate('/glossary')} className="bg-white border-2 border-[#E2E8F0] rounded-xl p-4 text-left"><Globe className="w-5 h-5 text-[#E67E22] mb-3" /><div className="font-bold text-sm text-[#2D3E50]">AI words</div><div className="text-xs text-gray-500 mt-1">Terms and local meanings.</div></button>
      </section>

      <button onClick={() => navigate('/video-resources')} className="w-full bg-white border-2 border-[#E2E8F0] rounded-xl p-4 flex items-center gap-3 text-left"><Video className="w-5 h-5 text-[#E67E22]" /><div className="flex-1"><div className="font-bold text-sm text-[#2D3E50]">Lesson Video Links</div><div className="text-xs text-gray-500">Optional external lesson support.</div></div><ArrowRight className="w-4 h-4 text-gray-400" /></button>

      <button onClick={() => navigate('/progress')} className="w-full bg-white border-2 border-[#E2E8F0] rounded-xl p-4 flex items-center gap-3 text-left"><BookOpen className="w-5 h-5 text-[#2D3E50]" /><div className="flex-1"><div className="font-bold text-sm text-[#2D3E50]">See my progress</div><div className="text-xs text-gray-500">Review learning and saved results.</div></div><ArrowRight className="w-4 h-4 text-gray-400" /></button>
    </div>
  );
}
