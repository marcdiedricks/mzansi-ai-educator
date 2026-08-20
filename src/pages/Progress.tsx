import { useEffect, useState } from 'react';
import { Award, Target, BookOpen, Star, Eye } from 'lucide-react';
import { getUserProgress, getLevel2TestProgress, getLevel3TestProgress, isLevel2TestPreviewEnabled, isLevel3TestPreviewEnabled } from '../lib/progress';
import { modules } from '../lib/curriculum/data';
import { LEVEL_TWO_MODULES, LEVEL_THREE_MODULES, LEVEL_FOUR_MODULES } from '../lib/programmeLevels';

export function Progress() {
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

  const level1Ids = modules.flatMap((module) => module.lessonIds);
  const level2Ids = LEVEL_TWO_MODULES.flatMap((module) => module.lessonId ? [module.lessonId] : []);
  const level3Ids = LEVEL_THREE_MODULES.flatMap((module) => module.lessonId ? [module.lessonId] : []);
  const level4Ids = LEVEL_FOUR_MODULES.flatMap((module) => module.lessonId ? [module.lessonId] : []);
  const completed1 = level1Ids.filter((id) => progress.completedLessons.includes(id)).length;
  const level1Complete = level1Ids.length > 0 && completed1 === level1Ids.length;
  const level2RealComplete = level1Complete && level2Ids.length === LEVEL_TWO_MODULES.length && level2Ids.every((id) => progress.completedLessons.includes(id));
  const level2Progress = level2Preview && !level1Complete ? level2TestProgress : progress;
  const level3Progress = level3Preview && !level2RealComplete ? level3TestProgress : progress;
  const completed2 = level2Ids.filter((id) => level2Progress.completedLessons.includes(id)).length;
  const completed3 = level3Ids.filter((id) => level3Progress.completedLessons.includes(id)).length;
  const level3RealComplete = level2RealComplete && level3Ids.length === LEVEL_THREE_MODULES.length && level3Ids.every((id) => progress.completedLessons.includes(id));
  const completed4 = level4Ids.filter((id) => progress.completedLessons.includes(id)).length;
  const percent1 = Math.round((completed1 / Math.max(level1Ids.length, 1)) * 100);
  const percent2 = Math.round((completed2 / Math.max(level2Ids.length, 1)) * 100);
  const percent3 = Math.round((completed3 / Math.max(level3Ids.length, 1)) * 100);
  const percent4 = Math.round((completed4 / Math.max(level4Ids.length, 1)) * 100);
  const level2Visible = level1Complete || level2Preview;
  const level3Visible = level2RealComplete || level3Preview;
  const level4Visible = level3RealComplete;

  const level1QuizScores = Object.entries(progress.quizScores).filter(([id]) => level1Ids.includes(id));
  const level2QuizScores = Object.entries(level2Progress.quizScores).filter(([id]) => level2Ids.includes(id));
  const level3QuizScores = Object.entries(level3Progress.quizScores).filter(([id]) => level3Ids.includes(id));
  const level4QuizScores = Object.entries(progress.quizScores).filter(([id]) => level4Ids.includes(id));
  const average = (scores: Array<[string, number]>) => scores.length ? Math.round(scores.reduce((sum, [, score]) => sum + score, 0) / scores.length) : 0;

  const competencies = [
    { name: 'AI Fundamentals', earned: completed1 >= 1 },
    { name: 'Ethical AI Use', earned: completed1 >= 3 },
    { name: 'Prompt Engineering', earned: completed1 >= 4 || (level1Complete && completed2 >= 3) },
    { name: 'Practical AI Application', earned: level1Complete && completed2 >= 1 },
    { name: 'AI Solution Leadership', earned: level3RealComplete && completed4 >= 1 },
  ];

  return (
    <div className="p-6 space-y-6 pb-24">
      <header><h1 className="text-2xl font-bold text-[#2D3E50] mb-1">Progress</h1><p className="text-sm font-medium text-gray-500">Track your progress across the Mzansi AI Educator pathway.</p></header>

      {level2Preview && !level1Complete && <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-3 flex gap-2 text-xs text-amber-900"><Eye className="w-4 h-4 shrink-0" /><span><strong>LEVEL 2 TEST PREVIEW ACTIVE.</strong> Test activity is stored separately.</span></div>}
      {level3Preview && !level2RealComplete && <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-3 flex gap-2 text-xs text-amber-900"><Eye className="w-4 h-4 shrink-0" /><span><strong>LEVEL 3 TEST PREVIEW ACTIVE.</strong> Level 3 test activity is isolated. Learner progress, certificates and Level 4 remain unchanged.</span></div>}

      <div className="bg-[#2D3E50] rounded-2xl p-6 text-white shadow-sm">
        <div className="flex items-center gap-3 mb-4"><div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/20"><Award className="w-6 h-6 text-[#E67E22]" /></div><div><h2 className="text-lg font-bold">Level 1 · Understand</h2><p className="text-xs text-gray-300">AI Foundations & Responsible Use</p></div></div>
        <div className="w-full bg-white/20 rounded-full h-2 mb-2 overflow-hidden"><div className="bg-[#E67E22] rounded-full h-2" style={{ width: `${percent1}%` }} /></div><div className="text-[11px] text-gray-300 flex justify-between"><span>{completed1}/{level1Ids.length} lessons</span><span>{percent1}%</span></div>
      </div>

      <div className={`rounded-2xl p-6 border-2 ${level2Visible ? 'bg-white border-[#2D3E50]' : 'bg-gray-50 border-gray-200 opacity-70'}`}>
        <div className="flex items-center gap-3 mb-4"><div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center"><Target className="w-6 h-6 text-[#E67E22]" /></div><div><h2 className="text-lg font-bold text-[#2D3E50]">Level 2 · Apply</h2><p className="text-xs text-gray-500">Practical AI Skills{level2Preview && !level1Complete ? ' · Isolated Test Preview' : ''}</p></div></div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-2 overflow-hidden"><div className="bg-[#E67E22] rounded-full h-2" style={{ width: `${percent2}%` }} /></div><div className="text-[11px] text-gray-500 flex justify-between"><span>{level2Visible ? `${completed2}/${level2Ids.length} lessons` : 'Locked until Level 1 is complete'}</span><span>{level2Visible ? `${percent2}%` : 'Locked'}</span></div>
      </div>

      <div className={`rounded-2xl p-6 border-2 ${level3Visible ? 'bg-white border-[#2D3E50]' : 'bg-gray-50 border-gray-200 opacity-70'}`}>
        <div className="flex items-center gap-3 mb-4"><div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center"><Target className="w-6 h-6 text-[#E67E22]" /></div><div><h2 className="text-lg font-bold text-[#2D3E50]">Level 3 · Create</h2><p className="text-xs text-gray-500">AI Creator & Builder{level3Preview && !level2RealComplete ? ' · Isolated Test Preview' : ''}</p></div></div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-2 overflow-hidden"><div className="bg-[#E67E22] rounded-full h-2" style={{ width: `${percent3}%` }} /></div><div className="text-[11px] text-gray-500 flex justify-between"><span>{level3Visible ? `${completed3}/${level3Ids.length} lessons` : 'Locked until Level 2 is complete'}</span><span>{level3Visible ? `${percent3}%` : 'Locked'}</span></div>
        {level3Preview && !level2RealComplete && completed3 === level3Ids.length && <div className="mt-3 bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs font-bold text-amber-900">Level 3 test preview complete. Learner progression and Level 4 remain locked.</div>}
      </div>

      <div className={`rounded-2xl p-6 border-2 ${level4Visible ? 'bg-white border-[#2D3E50]' : 'bg-gray-50 border-gray-200 opacity-70'}`}>
        <div className="flex items-center gap-3 mb-4"><div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center"><Target className="w-6 h-6 text-[#E67E22]" /></div><div><h2 className="text-lg font-bold text-[#2D3E50]">Level 4 · Lead & Solve</h2><p className="text-xs text-gray-500">AI Innovation & Problem-Solving</p></div></div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-2 overflow-hidden"><div className="bg-[#E67E22] rounded-full h-2" style={{ width: `${percent4}%` }} /></div><div className="text-[11px] text-gray-500 flex justify-between"><span>{level4Visible ? `${completed4}/${level4Ids.length} lessons` : 'Locked until Level 3 is complete'}</span><span>{level4Visible ? `${percent4}%` : 'Locked'}</span></div>
      </div>

      <div className="grid grid-cols-2 gap-3"><div className="bg-white border-2 border-[#E2E8F0] rounded-xl p-5 text-center"><BookOpen className="w-6 h-6 text-[#2D3E50] mx-auto mb-2" /><div className="text-2xl font-bold text-[#1A202C]">{completed1 + (level1Complete ? completed2 : 0) + (level2RealComplete ? completed3 : 0) + (level3RealComplete ? completed4 : 0)}</div><div className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Learner Lessons Completed</div></div><div className="bg-white border-2 border-[#E2E8F0] rounded-xl p-5 text-center"><Target className="w-6 h-6 text-[#E67E22] mx-auto mb-2" /><div className="text-2xl font-bold text-[#1A202C]">{progress.completedLabs.length}</div><div className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Activities Done</div></div></div>

      {level3Preview && !level2RealComplete && <div className="bg-white border-2 border-amber-200 rounded-xl p-5 text-center"><div className="text-2xl font-bold text-amber-800">{completed3}</div><div className="text-[10px] font-bold uppercase tracking-wider text-amber-700">Level 3 Test Lessons Completed</div></div>}

      <div className="bg-white border-2 border-[#E2E8F0] rounded-xl p-5 space-y-3"><div><div className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Level 1 Average Quiz Score</div><div className="text-xl font-bold text-[#1A202C]">{average(level1QuizScores as Array<[string, number]>)}%</div></div><div className="border-t border-gray-200 pt-3"><div className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Level 2 Average Quiz Score</div><div className="text-xl font-bold text-[#1A202C]">{level2Visible ? `${average(level2QuizScores as Array<[string, number]>)}%` : 'Locked'}</div></div><div className="border-t border-gray-200 pt-3"><div className="text-[10px] font-bold uppercase tracking-wider text-gray-400">{level3Preview && !level2RealComplete ? 'Level 3 Test Quiz Average' : 'Level 3 Average Quiz Score'}</div><div className="text-xl font-bold text-[#1A202C]">{level3Visible ? `${average(level3QuizScores as Array<[string, number]>)}%` : 'Locked'}</div></div><div className="border-t border-gray-200 pt-3"><div className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Level 4 Average Quiz Score</div><div className="text-xl font-bold text-[#1A202C]">{level4Visible ? `${average(level4QuizScores as Array<[string, number]>)}%` : 'Locked'}</div></div></div>

      <section><h3 className="font-bold text-[#2D3E50] mb-3">Competencies</h3><div className="space-y-2">{competencies.map((skill) => <div key={skill.name} className={`flex items-center p-4 bg-white border-2 border-[#E2E8F0] rounded-xl ${skill.earned ? '' : 'opacity-60'}`}><Star className={`w-4 h-4 mr-3 ${skill.earned ? 'text-[#E67E22]' : 'text-gray-400'}`} /><span className="font-bold text-[#1A202C]">{skill.name}</span></div>)}</div></section>
    </div>
  );
}
