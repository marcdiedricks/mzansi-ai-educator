import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Sparkles,
  FileText,
  GitBranch,
  CheckCircle2,
  ArrowRight,
  Brain,
  WifiOff,
  Target,
  Shield,
  Search,
} from 'lucide-react';
import { getUserProgress } from '../lib/progress';

export function Practice() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(getUserProgress());

  useEffect(() => {
    const handleUpdate = () => setProgress(getUserProgress());
    window.addEventListener('mzansi_progress_updated', handleUpdate);
    return () => window.removeEventListener('mzansi_progress_updated', handleUpdate);
  }, []);

  const unpluggedLabs = [
    {
      id: 'madlibs-sim',
      title: 'MadLibs AI Token Sim',
      subtitle: 'Generative AI & Token Prediction',
      desc: 'Simulate how LLMs predict probabilities for next words step-by-step with South African story prompts and temperature controls.',
      icon: Sparkles,
      iconColor: 'text-[#E67E22]',
      iconBg: 'bg-orange-50',
      route: '/practice/madlibs-sim',
      completed: progress.completedLabs.includes('lab-madlibs-sim'),
    },
    {
      id: 'intelligent-paper',
      title: 'Intelligent Piece of Paper',
      subtitle: 'Rule-Based Algorithmic AI',
      desc: 'Play Noughts & Crosses against a purely rule-based algorithm that reveals the exact heuristic logic behind each computational choice.',
      icon: FileText,
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-50',
      route: '/practice/intelligent-paper',
      completed: progress.completedLabs.includes('lab-intelligent-paper'),
    },
    {
      id: 'monster-mapping',
      title: 'Monster Mapping (Decision Trees)',
      subtitle: 'Machine Learning Classification',
      desc: 'Classify legendary and digital African creatures by training and testing decision tree branch features.',
      icon: GitBranch,
      iconColor: 'text-purple-600',
      iconBg: 'bg-purple-50',
      route: '/practice/monster-mapping',
      completed: progress.completedLabs.includes('lab-monster-mapping'),
    },
  ];

  const quickChallenges = [
    { id: 'hallucination', title: 'Spot the AI Hallucination', icon: Search, tag: 'Module 1.5' },
    { id: 'popia', title: 'POPIA Privacy Check Scenario', icon: Shield, tag: 'Module 1.3' },
    { id: 'ubuntu', title: 'Ubuntu Algorithmic Fairness Case', icon: Target, tag: 'Module 1.4' },
  ];

  return (
    <div className="flex flex-col gap-4 w-full p-4 sm:p-6 pb-24">
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 w-full">
        <div>
          <div className="flex items-center gap-2 text-[#E67E22] mb-1">
            <Brain className="w-5 h-5" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Hands-on Experiments</span>
          </div>
          <h1 className="text-2xl font-bold text-[#2D3E50] mb-1">Unplugged AI Lab</h1>
          <p className="text-xs font-medium text-gray-500">
            Interactive offline simulation engines to experience core AI mechanics with zero external API calls.
          </p>
        </div>
        <div className="flex items-center text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200 w-fit">
          <WifiOff className="w-3.5 h-3.5 mr-1.5 text-emerald-600" />
          Offline Ready
        </div>
      </header>

      <section className="flex flex-col gap-3 w-full">
        <h2 className="text-xs font-bold uppercase tracking-wider text-gray-400">
          Featured Interactive Lab Engines
        </h2>

        <div className="flex flex-col gap-3 w-full">
          {unpluggedLabs.map((lab) => {
            const Icon = lab.icon;
            return (
              <div
                key={lab.id}
                className="w-full bg-white border-2 border-[#E2E8F0] hover:border-[#2D3E50] rounded-2xl p-4 sm:p-5 transition-all shadow-sm flex flex-col gap-3"
              >
                <div className="flex items-start gap-3">
                  <div className={`w-12 h-12 rounded-2xl ${lab.iconBg} ${lab.iconColor} flex items-center justify-center shrink-0`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-sm sm:text-base text-[#1A202C]">{lab.title}</h3>
                      {lab.completed && (
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> Completed
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] font-bold text-[#E67E22] uppercase tracking-wider block mb-1">{lab.subtitle}</span>
                    <p className="text-xs text-gray-600 leading-relaxed">{lab.desc}</p>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#E2E8F0] flex justify-end">
                  <button
                    onClick={() => navigate(lab.route)}
                    className="w-full sm:w-auto bg-[#2D3E50] hover:bg-slate-700 text-white font-bold text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm"
                  >
                    <span>{lab.completed ? 'Replay Lab Engine' : 'Launch Interactive Lab'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="flex flex-col gap-2.5 w-full mt-2">
        <h2 className="text-xs font-bold uppercase tracking-wider text-gray-400">
          Curriculum Quick Practice Challenges
        </h2>
        <p className="text-[11px] text-gray-500">Short offline scenarios with immediate feedback.</p>

        <div className="flex flex-col gap-2 w-full">
          {quickChallenges.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => navigate(`/practice/challenge/${item.id}`)}
                className="w-full flex items-center justify-between p-3.5 bg-white border-2 border-[#E2E8F0] hover:border-[#E67E22] rounded-xl text-left transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gray-100 group-hover:bg-orange-50 group-hover:text-[#E67E22] flex items-center justify-center text-gray-600 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-[#1A202C]">{item.title}</h4>
                    <span className="text-[10px] text-gray-400 font-medium">{item.tag}</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#E67E22] transition-colors" />
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
}
