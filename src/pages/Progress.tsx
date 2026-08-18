import { Award, Target, BookOpen, Star } from 'lucide-react';

export function Progress() {
  return (
    <div className="p-6 space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-[#2D3E50] mb-1">Progress</h1>
        <p className="text-sm font-medium text-gray-500">Track your learning journey.</p>
      </header>

      <div className="bg-[#2D3E50] rounded-2xl p-6 text-white text-center shadow-sm relative overflow-hidden">
        <div className="relative z-10">
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/20">
            <Award className="w-8 h-8 text-[#E67E22]" />
          </div>
          <h2 className="text-xl font-bold mb-1">Level 1 Beginner</h2>
          <p className="text-[11px] font-medium opacity-80 mb-4">Keep going to reach Level 2!</p>
          
          <div className="w-full bg-white/20 rounded-full h-2 mb-2">
            <div className="bg-[#E67E22] rounded-full h-2 w-0"></div>
          </div>
          <div className="text-[10px] font-bold uppercase tracking-wider opacity-80 text-right">0% Complete</div>
        </div>
        <div className="absolute -left-6 -top-6 w-32 h-32 bg-white/5 rounded-full"></div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white border-2 border-[#E2E8F0] rounded-xl p-5 text-center">
          <BookOpen className="w-6 h-6 text-[#2D3E50] mx-auto mb-2" />
          <div className="text-2xl font-bold text-[#1A202C]">0</div>
          <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Lessons Completed</div>
        </div>
        <div className="bg-white border-2 border-[#E2E8F0] rounded-xl p-5 text-center">
          <Target className="w-6 h-6 text-[#E67E22] mx-auto mb-2" />
          <div className="text-2xl font-bold text-[#1A202C]">0</div>
          <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Activities Done</div>
        </div>
      </div>

      <section>
        <h3 className="font-bold text-[#2D3E50] mb-3">Competencies</h3>
        <div className="space-y-2">
          {['AI Fundamentals', 'Ethical AI Use', 'Prompt Engineering', 'Privacy & Security'].map((skill) => (
            <div key={skill} className="flex items-center p-4 bg-white border-2 border-[#E2E8F0] rounded-xl opacity-60">
              <Star className="w-4 h-4 text-gray-400 mr-3" />
              <span className="font-bold text-[#1A202C]">{skill}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
