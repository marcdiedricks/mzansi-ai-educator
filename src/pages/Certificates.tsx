import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Award, CheckCircle2, Star, BookOpen, Lock } from 'lucide-react';
import { getUserProgress } from '../lib/progress';
import { getOnboardingData } from '../lib/storage';
import { modules } from '../lib/curriculum/data';
import { LEVEL_TWO_MODULES, LEVEL_THREE_MODULES, LEVEL_FOUR_MODULES } from '../lib/programmeLevels';

export function Certificates() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(getUserProgress());
  const onboarding = getOnboardingData();

  useEffect(() => {
    const handleUpdate = () => setProgress(getUserProgress());
    window.addEventListener('mzansi_progress_updated', handleUpdate);
    return () => window.removeEventListener('mzansi_progress_updated', handleUpdate);
  }, []);

  const level1Ids = modules.flatMap((module) => module.lessonIds);
  const level2Ids = LEVEL_TWO_MODULES.flatMap((module) => module.lessonId ? [module.lessonId] : []);
  const level3Ids = LEVEL_THREE_MODULES.flatMap((module) => module.lessonId ? [module.lessonId] : []);
  const level4Ids = LEVEL_FOUR_MODULES.flatMap((module) => module.lessonId ? [module.lessonId] : []);
  const completed1 = level1Ids.filter((id) => progress.completedLessons.includes(id)).length;
  const completed2 = level2Ids.filter((id) => progress.completedLessons.includes(id)).length;
  const completed3 = level3Ids.filter((id) => progress.completedLessons.includes(id)).length;
  const completed4 = level4Ids.filter((id) => progress.completedLessons.includes(id)).length;
  const percent1 = Math.round((completed1 / Math.max(level1Ids.length, 1)) * 100);
  const percent2 = Math.round((completed2 / Math.max(level2Ids.length, 1)) * 100);
  const percent3 = Math.round((completed3 / Math.max(level3Ids.length, 1)) * 100);
  const percent4 = Math.round((completed4 / Math.max(level4Ids.length, 1)) * 100);
  const level1Complete = level1Ids.length > 0 && completed1 === level1Ids.length;
  const level2Complete = level1Complete && level2Ids.length === LEVEL_TWO_MODULES.length && completed2 === level2Ids.length;
  const level3Complete = level2Complete && level3Ids.length === LEVEL_THREE_MODULES.length && completed3 === level3Ids.length;
  const level4Complete = level3Complete && level4Ids.length === LEVEL_FOUR_MODULES.length && completed4 === level4Ids.length;
  const learnerLabel = onboarding?.goal ? 'Mzansi AI Scholar' : 'AI Explorer';

  const CompletionCard = ({ level, title, completed, total, completedCount, percent, unlocked, lockedMessage }: { level: number; title: string; completed: boolean; total: number; completedCount: number; percent: number; unlocked: boolean; lockedMessage: string }) => (
    <div className={`rounded-2xl p-6 text-center shadow-md relative overflow-hidden border-2 ${unlocked ? 'bg-[#2D3E50] text-white border-slate-700' : 'bg-gray-50 text-gray-500 border-gray-200'}`}>
      <div className="space-y-3">
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto border-2 ${unlocked ? 'bg-white/10 border-[#E67E22]/50' : 'bg-gray-100 border-gray-200'}`}>{unlocked ? <Award className="w-8 h-8 text-[#E67E22]" /> : <Lock className="w-7 h-7 text-gray-400" />}</div>
        <div><span className="text-[10px] font-bold uppercase tracking-widest text-[#E67E22] block mb-1">Completion Record</span><h2 className="text-xl font-bold">Level {level}: {title}</h2><p className={`text-xs ${unlocked ? 'text-gray-300' : 'text-gray-400'}`}>Mzansi AI Educator learning programme</p></div>
        <div className={`w-full rounded-full h-2.5 overflow-hidden ${unlocked ? 'bg-white/20' : 'bg-gray-200'}`}><div className="bg-[#E67E22] h-full rounded-full" style={{ width: `${unlocked ? percent : 0}%` }} /></div>
        <div className={`flex items-center justify-between text-[11px] font-bold ${unlocked ? 'text-gray-300' : 'text-gray-400'}`}><span>{unlocked ? `${completedCount} of ${total} lessons completed` : 'Locked'}</span><span className="text-[#E67E22]">{unlocked ? `${percent}%` : '—'}</span></div>
        {unlocked && completed ? <div className="bg-white/10 p-3 rounded-xl border border-white/20 text-left"><div className="flex items-center gap-2 text-emerald-300 font-bold text-xs mb-1"><CheckCircle2 className="w-4 h-4" /> Level {level} completed</div><p className="text-[10px] text-gray-300 leading-relaxed">{learnerLabel} has completed all Level {level} lessons recorded on this device. This is an in-app completion record, not an externally accredited qualification.</p></div> : unlocked ? <button onClick={() => navigate('/learn')} className="w-full bg-white text-[#2D3E50] font-bold text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-2"><BookOpen className="w-4 h-4 text-[#E67E22]" /> Continue Level {level}</button> : <p className="text-xs text-gray-500">{lockedMessage}</p>}
      </div>
    </div>
  );

  return (
    <div className="p-4 sm:p-6 space-y-5 pb-24">
      <header><div className="flex items-center gap-2 text-[#E67E22] mb-1"><Award className="w-5 h-5" /><span className="text-[10px] font-bold uppercase tracking-wider">Learning Milestones</span></div><h1 className="text-2xl font-bold text-[#2D3E50] mb-1">Certificates & Badges</h1><p className="text-xs font-medium text-gray-500">Track completion milestones earned inside Mzansi AI Educator.</p></header>

      <CompletionCard level={1} title="AI Foundations" completed={level1Complete} total={level1Ids.length} completedCount={completed1} percent={percent1} unlocked={true} lockedMessage="" />
      <CompletionCard level={2} title="Practical AI Skills" completed={level2Complete} total={level2Ids.length} completedCount={completed2} percent={percent2} unlocked={level1Complete} lockedMessage="Complete Level 1 to unlock the Level 2 completion record." />
      <CompletionCard level={3} title="AI Creator & Builder" completed={level3Complete} total={level3Ids.length} completedCount={completed3} percent={percent3} unlocked={level2Complete} lockedMessage="Complete Levels 1 and 2 as a learner to unlock the Level 3 completion record. Test Preview does not count." />
      <CompletionCard level={4} title="AI Innovation & Problem-Solving" completed={level4Complete} total={level4Ids.length} completedCount={completed4} percent={percent4} unlocked={level3Complete} lockedMessage="Complete Levels 1, 2 and 3 as a learner to unlock the Level 4 completion record." />

      <section className="space-y-3"><h3 className="text-sm font-bold text-[#2D3E50]">Competency Badges</h3><div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{[
        { id: 'b_ai', name: 'AI Foundations', desc: 'Understanding core AI concepts and patterns', earned: completed1 >= 1 },
        { id: 'b_ubuntu', name: 'Ubuntu Tech Ethics', desc: 'Human-first, community-centred AI', earned: completed1 >= 4 },
        { id: 'b_apply', name: 'Practical AI User', desc: 'Applied AI skills across Level 2', earned: level1Complete && completed2 >= 4 },
        { id: 'b_create', name: 'Responsible AI Builder', desc: 'Creator and prototype skills across Level 3', earned: level2Complete && completed3 >= 4 },
        { id: 'b_lead', name: 'Community AI Problem Solver', desc: 'Leadership and impact skills across Level 4', earned: level3Complete && completed4 >= 4 },
        { id: 'b_lab', name: 'Unplugged Experimenter', desc: 'Completed an interactive offline lab activity', earned: progress.completedLabs.length >= 1 },
      ].map((badge) => <div key={badge.id} className={`p-4 rounded-2xl border-2 transition-all flex items-start gap-3 ${badge.earned ? 'bg-white border-[#E2E8F0] shadow-sm' : 'bg-gray-50 border-gray-200 opacity-60'}`}><div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${badge.earned ? 'bg-orange-50 text-[#E67E22]' : 'bg-gray-200 text-gray-400'}`}><Star className="w-5 h-5 fill-current" /></div><div><div className="flex items-center gap-1.5"><h4 className="font-bold text-xs text-[#1A202C]">{badge.name}</h4>{badge.earned && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}</div><p className="text-[11px] text-gray-500 mt-0.5">{badge.desc}</p></div></div>)}</div></section>
    </div>
  );
}
