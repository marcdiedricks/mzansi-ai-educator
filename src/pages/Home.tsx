import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  WifiOff, 
  BookOpen, 
  CheckCircle2, 
  ChevronRight, 
  Sparkles, 
  Brain, 
  FileText, 
  GitBranch, 
  Globe, 
  Award, 
  ArrowRight,
  Info,
  Clock
} from 'lucide-react';
import { getOnboardingData } from '../lib/storage';
import { getUserProgress } from '../lib/progress';
import { modules, lessons } from '../lib/curriculum/data';
import { TERMINOLOGY_DATA, MultilingualTerm } from '../lib/terminology';

export function Home() {
  const navigate = useNavigate();
  const onboarding = getOnboardingData();
  const [progress, setProgress] = useState(getUserProgress());
  
  // Terminology widget state
  const [activeTermIndex, setActiveTermIndex] = useState(0);
  const [isTermExpanded, setIsTermExpanded] = useState(false);
  const [termLang, setTermLang] = useState<'english' | 'isizulu' | 'sesotho' | 'afrikaans'>('english');

  useEffect(() => {
    const handleUpdate = () => setProgress(getUserProgress());
    window.addEventListener('mzansi_progress_updated', handleUpdate);
    return () => window.removeEventListener('mzansi_progress_updated', handleUpdate);
  }, []);

  const completedCount = progress.completedLessons.length;
  const totalCount = lessons.length;
  const progressPercent = Math.round((completedCount / Math.max(totalCount, 1)) * 100);

  // Determine which lesson to resume
  const nextLesson = lessons.find((l) => !progress.completedLessons.includes(l.id)) || lessons[0];
  const nextModule = modules.find((m) => m.id === nextLesson?.moduleId) || modules[0];

  const currentTerm: MultilingualTerm = TERMINOLOGY_DATA[activeTermIndex] || TERMINOLOGY_DATA[0];

  return (
    <div className="flex flex-col gap-4 w-full p-4 sm:p-6 pb-24">
      {/* 1. Header & Status */}
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 w-full">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-[#2D3E50]">
            Sanibonani, {onboarding?.goal ? 'Learner' : 'Explorer'}
          </h1>
          <p className="text-xs font-medium text-gray-500">
            Path: <span className="font-bold text-[#2D3E50]">{onboarding?.goal || 'AI Foundations'}</span>
          </p>
        </div>
        <div className="flex items-center text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200 w-fit">
          <WifiOff className="w-3.5 h-3.5 mr-1.5 text-emerald-600" />
          100% Offline Ready
        </div>
      </header>

      {/* 2. Continue Learning Hero Card */}
      <div className="w-full bg-[#2D3E50] rounded-2xl p-5 text-white shadow-sm border-2 border-slate-700 relative overflow-hidden flex flex-col gap-3">
        <div className="relative z-10 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase font-bold text-[#E67E22] tracking-wider bg-white/10 px-2 py-0.5 rounded">
              Level 1: AI Foundations
            </span>
            <span className="text-xs font-bold text-gray-300">
              {completedCount}/{totalCount} Completed
            </span>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-0.5">
              {nextLesson.title}
            </h2>
            <p className="text-xs text-gray-300">
              Module {nextModule.order}: {nextModule.title} • {nextLesson.estimatedMinutes} min
            </p>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden my-1">
            <div
              className="bg-[#E67E22] h-full rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-gray-300 mb-1">
            <span>{progressPercent}% Complete</span>
            {progressPercent === 100 && (
              <span className="text-[#E67E22] font-bold">🎉 Level 1 Mastered!</span>
            )}
          </div>

          {/* Inline Action Button */}
          <button
            onClick={() => navigate(`/learn/${nextModule.id}/lesson/${nextLesson.id}`)}
            className="w-full bg-[#E67E22] hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-sm"
          >
            <span>{completedCount > 0 ? 'Continue Lesson' : 'Start Lesson 1.1'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 3. Level 1 Curriculum Modules (Single-Column Mobile Stack) */}
      <section className="flex flex-col gap-2.5 w-full">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-[#2D3E50] uppercase tracking-wider">
            Level 1 Curriculum Modules
          </h2>
          <button
            onClick={() => navigate('/learn')}
            className="text-xs font-bold text-[#E67E22] hover:underline"
          >
            View All
          </button>
        </div>

        <div className="flex flex-col gap-2 w-full">
          {modules.map((mod) => {
            const lessonId = mod.lessonIds[0];
            const isDone = lessonId ? progress.completedLessons.includes(lessonId) : false;
            return (
              <button
                key={mod.id}
                onClick={() => {
                  if (lessonId) {
                    navigate(`/learn/${mod.id}/lesson/${lessonId}`);
                  } else {
                    navigate(`/learn/${mod.id}`);
                  }
                }}
                className="w-full flex items-center justify-between p-3.5 bg-white border-2 border-[#E2E8F0] hover:border-[#2D3E50] rounded-xl text-left transition-all group"
              >
                <div className="flex items-center gap-3 flex-1 min-w-0 pr-2">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${
                      isDone
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'bg-gray-100 text-gray-700 group-hover:bg-[#2D3E50] group-hover:text-white'
                    }`}
                  >
                    {isDone ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : mod.order}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-xs sm:text-sm text-[#1A202C] truncate group-hover:text-[#2D3E50]">
                      {mod.title}
                    </h3>
                    <p className="text-[11px] text-gray-500 truncate">
                      {isDone ? 'Completed • Review & Quiz' : 'Full lesson & quiz available'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[10px] font-bold text-gray-400 hidden sm:inline-block">
                    10 min
                  </span>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#E67E22] transition-colors" />
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* 4. Unplugged Lab Interactive Games Section */}
      <section className="flex flex-col gap-2.5 w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-[#2D3E50]">
            <Brain className="w-4 h-4 text-[#E67E22]" />
            <h2 className="text-sm font-bold uppercase tracking-wider">
              Unplugged AI Labs (Offline)
            </h2>
          </div>
          <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            Interactive
          </span>
        </div>

        <div className="flex flex-col gap-2.5 w-full">
          {/* Lab 1: MadLibs Sim */}
          <div className="w-full bg-white border-2 border-[#E2E8F0] hover:border-[#E67E22] rounded-2xl p-4 transition-all">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#E67E22] flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-sm text-[#1A202C]">MadLibs AI Token Sim</h3>
                  {progress.completedLabs.includes('lab-madlibs-sim') && (
                    <span className="text-[10px] font-bold text-emerald-600 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Played
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                  Interactive next-token predictor simulator showing how LLMs generate text based on probabilities and temperature.
                </p>
                <button
                  onClick={() => navigate('/practice/madlibs-sim')}
                  className="mt-3 inline-flex items-center gap-1.5 bg-[#2D3E50] hover:bg-slate-700 text-white text-xs font-bold py-2 px-3.5 rounded-xl transition-colors"
                >
                  <span>Launch Simulator</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Lab 2: Intelligent Piece of Paper */}
          <div className="w-full bg-white border-2 border-[#E2E8F0] hover:border-[#E67E22] rounded-2xl p-4 transition-all">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-sm text-[#1A202C]">Intelligent Piece of Paper</h3>
                  {progress.completedLabs.includes('lab-intelligent-paper') && (
                    <span className="text-[10px] font-bold text-emerald-600 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Played
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                  Play Noughts & Crosses against a 100% deterministic rule-based AI engine that highlights triggered decision logic.
                </p>
                <button
                  onClick={() => navigate('/practice/intelligent-paper')}
                  className="mt-3 inline-flex items-center gap-1.5 bg-[#2D3E50] hover:bg-slate-700 text-white text-xs font-bold py-2 px-3.5 rounded-xl transition-colors"
                >
                  <span>Play Against Paper AI</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Lab 3: Monster Mapping */}
          <div className="w-full bg-white border-2 border-[#E2E8F0] hover:border-[#E67E22] rounded-2xl p-4 transition-all">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                <GitBranch className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-sm text-[#1A202C]">Monster Mapping (Decision Trees)</h3>
                  {progress.completedLabs.includes('lab-monster-mapping') && (
                    <span className="text-[10px] font-bold text-emerald-600 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Played
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                  Classify quirky African mythical beasts by building and evaluating machine learning decision tree models.
                </p>
                <button
                  onClick={() => navigate('/practice/monster-mapping')}
                  className="mt-3 inline-flex items-center gap-1.5 bg-[#2D3E50] hover:bg-slate-700 text-white text-xs font-bold py-2 px-3.5 rounded-xl transition-colors"
                >
                  <span>Classify Creatures</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Multilingual Terminology Widget */}
      <section className="w-full bg-white border-2 border-[#E2E8F0] rounded-2xl p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-[#2D3E50]">
            <Globe className="w-4 h-4 text-[#E67E22]" />
            <h3 className="text-xs font-bold uppercase tracking-wider">
              Multilingual AI Terminology
            </h3>
          </div>
          <button
            onClick={() => navigate('/glossary')}
            className="text-[11px] font-bold text-[#E67E22] hover:underline"
          >
            Full Glossary
          </button>
        </div>

        {/* Term Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          {TERMINOLOGY_DATA.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => {
                setActiveTermIndex(idx);
                setIsTermExpanded(true);
              }}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold whitespace-nowrap transition-all border ${
                activeTermIndex === idx
                  ? 'bg-[#2D3E50] text-white border-[#2D3E50]'
                  : 'bg-gray-50 text-gray-600 border-[#E2E8F0] hover:border-gray-300'
              }`}
            >
              {t.term.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Interactive Term Card */}
        <div className="bg-[#F8F9FA] border-2 border-[#E2E8F0] rounded-xl p-3.5 space-y-2">
          <div
            onClick={() => setIsTermExpanded(!isTermExpanded)}
            className="flex items-center justify-between cursor-pointer"
          >
            <div>
              <span className="text-[9px] font-bold uppercase text-[#E67E22] tracking-wider block">
                {currentTerm.category}
              </span>
              <h4 className="text-sm font-bold text-[#1A202C]">{currentTerm.term}</h4>
            </div>
            <span className="text-xs font-bold text-[#2D3E50] hover:underline">
              {isTermExpanded ? 'Hide Details ▲' : 'Tap to Translate ▼'}
            </span>
          </div>

          <p className="text-xs text-gray-600 leading-relaxed">
            {currentTerm[termLang].definition}
          </p>

          {isTermExpanded && (
            <div className="pt-2 border-t border-[#E2E8F0] space-y-2">
              {/* Language Switcher */}
              <div className="flex gap-1">
                {(['english', 'isizulu', 'sesotho', 'afrikaans'] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setTermLang(lang)}
                    className={`flex-1 py-1 rounded text-[10px] font-bold uppercase ${
                      termLang === lang
                        ? 'bg-[#2D3E50] text-white'
                        : 'bg-white text-gray-600 border border-gray-200'
                    }`}
                  >
                    {lang === 'english' ? 'EN' : lang === 'isizulu' ? 'ZU' : lang === 'sesotho' ? 'ST' : 'AF'}
                  </button>
                ))}
              </div>

              <div className="bg-white p-2.5 rounded-lg border border-gray-200 text-xs">
                <span className="text-[10px] font-bold text-gray-400 block mb-0.5">
                  Everyday Example:
                </span>
                <p className="italic text-gray-700">"{currentTerm[termLang].example}"</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 6. Ask Mzansi Status Card (Marked Coming Later) */}
      <section className="w-full bg-[#F8F9FA] border-2 border-dashed border-[#E2E8F0] p-4 rounded-2xl flex items-center justify-between opacity-75">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-gray-200 text-gray-500 flex items-center justify-center shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xs font-bold text-[#1A202C]">Ask Mzansi Tutor</h3>
              <span className="text-[9px] font-bold bg-gray-200 text-gray-700 px-1.5 py-0.5 rounded">
                Coming in Later Build Stage
              </span>
            </div>
            <p className="text-[11px] text-gray-500 mt-0.5">
              Generative AI tutoring assistant with local language support.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
