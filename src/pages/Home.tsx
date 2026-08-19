import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle2,
  Globe,
  MessageCircle,
  ShieldCheck,
  Video,
  WifiOff,
} from 'lucide-react';
import { getOnboardingData } from '../lib/storage';
import { getUserProgress } from '../lib/progress';
import { modules, lessons } from '../lib/curriculum/data';

export function Home() {
  const navigate = useNavigate();
  const onboarding = getOnboardingData();
  const [progress, setProgress] = useState(getUserProgress());

  useEffect(() => {
    const handleUpdate = () => setProgress(getUserProgress());
    window.addEventListener('mzansi_progress_updated', handleUpdate);
    return () => window.removeEventListener('mzansi_progress_updated', handleUpdate);
  }, []);

  const discoverLessons = lessons.filter((lesson) => lesson.levelId === 'MZAIE-L1');
  const discoverLessonIds = new Set(discoverLessons.map((lesson) => lesson.id));
  const discoverModules = modules.filter((module) =>
    module.lessonIds.some((lessonId) => discoverLessonIds.has(lessonId))
  );
  const completedDiscover = progress.completedLessons.filter((id) => discoverLessonIds.has(id));
  const totalDiscover = discoverLessons.length;
  const progressPercent = Math.round((completedDiscover.length / Math.max(totalDiscover, 1)) * 100);
  const nextLesson = discoverLessons.find((lesson) => !progress.completedLessons.includes(lesson.id)) || discoverLessons[0];
  const nextModule = discoverModules.find((module) => module.id === nextLesson?.moduleId) || discoverModules[0];

  const languageLabel = onboarding?.language === 'af'
    ? 'Afrikaans'
    : onboarding?.language === 'xh'
      ? 'isiXhosa'
      : 'English';

  return (
    <div className="w-full p-4 sm:p-6 pb-24 space-y-5">
      <header className="space-y-2">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#E67E22]">Mzansi AI Educator</p>
            <h1 className="text-2xl font-bold text-[#2D3E50] mt-1">Welcome back</h1>
            <p className="text-sm text-gray-500 mt-1">One pathway. Same AI language. Deeper understanding as you progress.</p>
          </div>
          <div className="shrink-0 flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-xl px-2.5 py-1.5">
            <WifiOff className="w-3.5 h-3.5" />
            Offline ready
          </div>
        </div>

        <div className="flex flex-wrap gap-2 text-[11px] font-bold text-gray-600">
          <span className="px-2.5 py-1 rounded-lg bg-gray-100">Language: {languageLabel}</span>
          <span className="px-2.5 py-1 rounded-lg bg-gray-100">Current level: DISCOVER</span>
        </div>
      </header>

      <section className="bg-[#2D3E50] text-white rounded-2xl p-5 shadow-sm">
        <div className="flex items-center justify-between gap-3 mb-3">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#E67E22]">Continue learning</p>
            <h2 className="text-xl font-bold mt-1">{nextLesson?.title || 'AI Foundations'}</h2>
          </div>
          <span className="text-xs font-bold text-gray-300">{completedDiscover.length}/{totalDiscover}</span>
        </div>

        <p className="text-sm text-gray-300 mb-4">
          {nextModule?.title || 'Start with the foundations of artificial intelligence.'}
        </p>

        <div className="w-full h-2.5 rounded-full bg-white/20 overflow-hidden">
          <div className="h-full rounded-full bg-[#E67E22] transition-all" style={{ width: `${progressPercent}%` }} />
        </div>
        <div className="flex items-center justify-between text-[11px] text-gray-300 mt-2">
          <span>{progressPercent}% of DISCOVER complete</span>
          <span>{languageLabel}</span>
        </div>

        <button
          onClick={() => nextLesson && nextModule && navigate(`/learn/${nextModule.id}/lesson/${nextLesson.id}`)}
          className="w-full mt-4 bg-[#E67E22] hover:bg-orange-600 text-white font-bold rounded-xl py-3.5 px-4 flex items-center justify-center gap-2"
        >
          {completedDiscover.length > 0 ? 'Continue learning' : 'Start DISCOVER'}
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>

      <section className="bg-white border-2 border-[#E2E8F0] rounded-2xl p-4 shadow-sm">
        <div className="flex items-start gap-3">
          <div className="w-11 h-11 rounded-xl bg-orange-50 text-[#E67E22] flex items-center justify-center shrink-0">
            <MessageCircle className="w-6 h-6" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-base font-bold text-[#2D3E50]">Ask Mzansi Tutor</h2>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-2 py-1">Local tutor</span>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed mt-1">
              Ask about AI terms, CREO prompting, bias, training data, generative AI, or request a South African everyday example. This restored tutor works from a built-in local knowledge layer.
            </p>
            <button
              onClick={() => navigate('/tutor')}
              className="mt-3 inline-flex items-center gap-2 bg-[#2D3E50] hover:bg-slate-700 text-white text-sm font-bold py-2.5 px-4 rounded-xl transition-colors"
            >
              Open Ask Mzansi Tutor
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="text-base font-bold text-[#2D3E50]">Your DISCOVER pathway</h2>
            <p className="text-xs text-gray-500 mt-0.5">Learn the terms, connect them to everyday life, then use them.</p>
          </div>
          <button onClick={() => navigate('/learn')} className="text-xs font-bold text-[#E67E22]">View all</button>
        </div>

        <div className="space-y-2.5">
          {discoverModules.map((module, index) => {
            const lessonId = module.lessonIds.find((id) => discoverLessonIds.has(id));
            const lesson = discoverLessons.find((item) => item.id === lessonId);
            const isDone = lessonId ? progress.completedLessons.includes(lessonId) : false;

            return (
              <button
                key={module.id}
                onClick={() => lessonId && navigate(`/learn/${module.id}/lesson/${lessonId}`)}
                className="w-full bg-white border-2 border-[#E2E8F0] rounded-xl p-4 text-left flex items-center gap-3 hover:border-[#2D3E50] transition-colors"
              >
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 ${isDone ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-[#2D3E50]'}`}>
                  {isDone ? <CheckCircle2 className="w-5 h-5" /> : index + 1}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-sm text-[#1A202C]">{module.title}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">{lesson?.title || module.description}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 shrink-0" />
              </button>
            );
          })}
        </div>
      </section>

      <section className="grid grid-cols-2 gap-3">
        <button onClick={() => navigate('/practice')} className="bg-white border-2 border-[#E2E8F0] rounded-xl p-4 text-left">
          <Brain className="w-5 h-5 text-[#E67E22] mb-3" />
          <div className="font-bold text-sm text-[#2D3E50]">Practise</div>
          <div className="text-xs text-gray-500 mt-1">Try offline activities and unplugged AI tasks.</div>
        </button>
        <button onClick={() => navigate('/glossary')} className="bg-white border-2 border-[#E2E8F0] rounded-xl p-4 text-left">
          <Globe className="w-5 h-5 text-[#E67E22] mb-3" />
          <div className="font-bold text-sm text-[#2D3E50]">AI words</div>
          <div className="text-xs text-gray-500 mt-1">Learn the proper term, plain meaning and local connection.</div>
        </button>
      </section>

      <button onClick={() => navigate('/video-resources')} className="w-full bg-white border-2 border-[#E2E8F0] rounded-xl p-4 flex items-center gap-3 text-left">
        <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#E67E22] flex items-center justify-center shrink-0">
          <Video className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <div className="font-bold text-sm text-[#2D3E50]">Lesson Video Links</div>
          <div className="text-xs text-gray-500">Optional external videos for all eight DISCOVER lessons. Internet/data required.</div>
        </div>
        <ArrowRight className="w-4 h-4 text-gray-400" />
      </button>

      <section className="bg-[#F8F9FA] border-2 border-[#E2E8F0] rounded-2xl p-4">
        <div className="flex gap-3">
          <ShieldCheck className="w-5 h-5 text-[#2D3E50] shrink-0 mt-0.5" />
          <div>
            <h2 className="font-bold text-sm text-[#2D3E50]">How Mzansi AI Educator teaches</h2>
            <p className="text-xs text-gray-600 leading-relaxed mt-1">
              We keep important AI terms such as algorithm, training data and bias. We explain what they mean, connect them to everyday South African life, then help you use the terms with confidence.
            </p>
          </div>
        </div>
      </section>

      <button onClick={() => navigate('/progress')} className="w-full bg-white border-2 border-[#E2E8F0] rounded-xl p-4 flex items-center gap-3 text-left">
        <BookOpen className="w-5 h-5 text-[#2D3E50]" />
        <div className="flex-1">
          <div className="font-bold text-sm text-[#2D3E50]">See my progress</div>
          <div className="text-xs text-gray-500">Review completed learning and saved quiz results.</div>
        </div>
        <ArrowRight className="w-4 h-4 text-gray-400" />
      </button>
    </div>
  );
}
