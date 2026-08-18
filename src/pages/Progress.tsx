import { useEffect, useState } from 'react';
import { Award, Target, BookOpen, Star } from 'lucide-react';
import { getUserProgress } from '../lib/progress';
import { lessons } from '../lib/curriculum/data';

export function Progress() {
  const [progress, setProgress] = useState(getUserProgress());

  useEffect(() => {
    const handleUpdate = () => setProgress(getUserProgress());
    window.addEventListener('mzansi_progress_updated', handleUpdate);
    return () => window.removeEventListener('mzansi_progress_updated', handleUpdate);
  }, []);

  const level1Lessons = lessons.filter((lesson) => lesson.levelId === 'MZAIE-L1');
  const level1LessonIds = new Set(level1Lessons.map((lesson) => lesson.id));
  const completedLevel1Lessons = progress.completedLessons.filter((id) => level1LessonIds.has(id));
  const level1QuizScores: Array<[string, number]> = Object.entries(progress.quizScores).filter(
    ([lessonId]) => level1LessonIds.has(lessonId)
  ) as Array<[string, number]>;

  const totalLessons = level1Lessons.length;
  const completedLessons = completedLevel1Lessons.length;
  const completedActivities = progress.completedLabs.length;
  const percent = Math.round((completedLessons / Math.max(totalLessons, 1)) * 100);
  const averageQuizScore = level1QuizScores.length
    ? Math.round(level1QuizScores.reduce((sum, [, score]) => sum + score, 0) / level1QuizScores.length)
    : 0;

  const competencies = [
    { name: 'AI Fundamentals', earned: completedLessons >= 1 },
    { name: 'Ethical AI Use', earned: completedLessons >= 3 },
    { name: 'Prompt Engineering', earned: completedLessons >= 4 },
    { name: 'Privacy & Security', earned: completedLessons >= 5 },
  ];

  return (
    <div className="p-6 space-y-6 pb-24">
      <header>
        <h1 className="text-2xl font-bold text-[#2D3E50] mb-1">Progress</h1>
        <p className="text-sm font-medium text-gray-500">Track your Level 1 learning journey.</p>
      </header>

      <div className="bg-[#2D3E50] rounded-2xl p-6 text-white text-center shadow-sm relative overflow-hidden">
        <div className="relative z-10">
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/20">
            <Award className="w-8 h-8 text-[#E67E22]" />
          </div>
          <h2 className="text-xl font-bold mb-1">Level 1: AI Foundations</h2>
          <p className="text-[11px] font-medium opacity-80 mb-4">
            {percent === 100 ? 'Level 1 complete.' : 'Keep going to complete Level 1.'}
          </p>

          <div className="w-full bg-white/20 rounded-full h-2 mb-2 overflow-hidden">
            <div className="bg-[#E67E22] rounded-full h-2 transition-all duration-300" style={{ width: `${percent}%` }}></div>
          </div>
          <div className="text-[10px] font-bold uppercase tracking-wider opacity-80 text-right">{percent}% Complete</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white border-2 border-[#E2E8F0] rounded-xl p-5 text-center">
          <BookOpen className="w-6 h-6 text-[#2D3E50] mx-auto mb-2" />
          <div className="text-2xl font-bold text-[#1A202C]">{completedLessons}</div>
          <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Lessons Completed</div>
        </div>
        <div className="bg-white border-2 border-[#E2E8F0] rounded-xl p-5 text-center">
          <Target className="w-6 h-6 text-[#E67E22] mx-auto mb-2" />
          <div className="text-2xl font-bold text-[#1A202C]">{completedActivities}</div>
          <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Activities Done</div>
        </div>
      </div>

      <div className="bg-white border-2 border-[#E2E8F0] rounded-xl p-5">
        <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Average Quiz Score</div>
        <div className="text-2xl font-bold text-[#1A202C]">{averageQuizScore}%</div>
        <div className="text-xs text-gray-500 mt-1">
          Based on {level1QuizScores.length} completed Level 1 quiz{level1QuizScores.length === 1 ? '' : 'zes'}.
        </div>
      </div>

      <section>
        <h3 className="font-bold text-[#2D3E50] mb-3">Competencies</h3>
        <div className="space-y-2">
          {competencies.map((skill) => (
            <div key={skill.name} className={`flex items-center p-4 bg-white border-2 border-[#E2E8F0] rounded-xl ${skill.earned ? '' : 'opacity-60'}`}>
              <Star className={`w-4 h-4 mr-3 ${skill.earned ? 'text-[#E67E22]' : 'text-gray-400'}`} />
              <span className="font-bold text-[#1A202C]">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
