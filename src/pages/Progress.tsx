import { useEffect, useState } from 'react';
import { Award, Target, BookOpen, Star } from 'lucide-react';
import { getUserProgress } from '../lib/progress';
import { lessons } from '../lib/curriculum/data';
import { LEVEL_TWO_MODULES } from '../lib/programmeLevels';

export function Progress() {
  const [progress, setProgress] = useState(getUserProgress());

  useEffect(() => {
    const handleUpdate = () => setProgress(getUserProgress());
    window.addEventListener('mzansi_progress_updated', handleUpdate);
    return () => window.removeEventListener('mzansi_progress_updated', handleUpdate);
  }, []);

  const level1Ids = lessons.filter((lesson) => lesson.levelId === 'MZAIE-L1').map((lesson) => lesson.id);
  const level2Ids = LEVEL_TWO_MODULES.flatMap((module) => module.lessonId ? [module.lessonId] : []);
  const completed1 = level1Ids.filter((id) => progress.completedLessons.includes(id)).length;
  const completed2 = level2Ids.filter((id) => progress.completedLessons.includes(id)).length;
  const percent1 = Math.round((completed1 / Math.max(level1Ids.length, 1)) * 100);
  const percent2 = Math.round((completed2 / Math.max(level2Ids.length, 1)) * 100);
  const level1Complete = level1Ids.length > 0 && completed1 === level1Ids.length;

  const level1QuizScores = Object.entries(progress.quizScores).filter(([id]) => level1Ids.includes(id));
  const level2QuizScores = Object.entries(progress.quizScores).filter(([id]) => level2Ids.includes(id));
  const average = (scores: Array<[string, number]>) => scores.length ? Math.round(scores.reduce((sum, [, score]) => sum + score, 0) / scores.length) : 0;

  const competencies = [
    { name: 'AI Fundamentals', earned: completed1 >= 1 },
    { name: 'Ethical AI Use', earned: completed1 >= 3 },
    { name: 'Prompt Engineering', earned: completed1 >= 4 || completed2 >= 3 },
    { name: 'Practical AI Application', earned: completed2 >= 1 },
  ];

  return (
    <div className="p-6 space-y-6 pb-24">
      <header><h1 className="text-2xl font-bold text-[#2D3E50] mb-1">Progress</h1><p className="text-sm font-medium text-gray-500">Track your progress across the Mzansi AI Educator pathway.</p></header>

      <div className="bg-[#2D3E50] rounded-2xl p-6 text-white shadow-sm">
        <div className="flex items-center gap-3 mb-4"><div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/20"><Award className="w-6 h-6 text-[#E67E22]" /></div><div><h2 className="text-lg font-bold">Level 1 · Understand</h2><p className="text-xs text-gray-300">AI Foundations & Responsible Use</p></div></div>
        <div className="w-full bg-white/20 rounded-full h-2 mb-2 overflow-hidden"><div className="bg-[#E67E22] rounded-full h-2" style={{ width: `${percent1}%` }} /></div><div className="text-[11px] text-gray-300 flex justify-between"><span>{completed1}/{level1Ids.length} lessons</span><span>{percent1}%</span></div>
      </div>

      <div className={`rounded-2xl p-6 border-2 ${level1Complete ? 'bg-white border-[#2D3E50]' : 'bg-gray-50 border-gray-200 opacity-70'}`}>
        <div className="flex items-center gap-3 mb-4"><div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center"><Target className="w-6 h-6 text-[#E67E22]" /></div><div><h2 className="text-lg font-bold text-[#2D3E50]">Level 2 · Apply</h2><p className="text-xs text-gray-500">Practical AI Skills</p></div></div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-2 overflow-hidden"><div className="bg-[#E67E22] rounded-full h-2" style={{ width: `${percent2}%` }} /></div><div className="text-[11px] text-gray-500 flex justify-between"><span>{level1Complete ? `${completed2}/${level2Ids.length} lessons` : 'Locked until Level 1 is complete'}</span><span>{level1Complete ? `${percent2}%` : 'Locked'}</span></div>
      </div>

      <div className="grid grid-cols-2 gap-3"><div className="bg-white border-2 border-[#E2E8F0] rounded-xl p-5 text-center"><BookOpen className="w-6 h-6 text-[#2D3E50] mx-auto mb-2" /><div className="text-2xl font-bold text-[#1A202C]">{completed1 + completed2}</div><div className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Lessons Completed</div></div><div className="bg-white border-2 border-[#E2E8F0] rounded-xl p-5 text-center"><Target className="w-6 h-6 text-[#E67E22] mx-auto mb-2" /><div className="text-2xl font-bold text-[#1A202C]">{progress.completedLabs.length}</div><div className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Activities Done</div></div></div>

      <div className="bg-white border-2 border-[#E2E8F0] rounded-xl p-5 space-y-3"><div><div className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Level 1 Average Quiz Score</div><div className="text-xl font-bold text-[#1A202C]">{average(level1QuizScores as Array<[string, number]>)}%</div></div><div className="border-t border-gray-200 pt-3"><div className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Level 2 Average Quiz Score</div><div className="text-xl font-bold text-[#1A202C]">{level1Complete ? `${average(level2QuizScores as Array<[string, number]>)}%` : 'Locked'}</div></div></div>

      <section><h3 className="font-bold text-[#2D3E50] mb-3">Competencies</h3><div className="space-y-2">{competencies.map((skill) => <div key={skill.name} className={`flex items-center p-4 bg-white border-2 border-[#E2E8F0] rounded-xl ${skill.earned ? '' : 'opacity-60'}`}><Star className={`w-4 h-4 mr-3 ${skill.earned ? 'text-[#E67E22]' : 'text-gray-400'}`} /><span className="font-bold text-[#1A202C]">{skill.name}</span></div>)}</div></section>
    </div>
  );
}
