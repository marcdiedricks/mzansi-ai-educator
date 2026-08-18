import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Award, CheckCircle2, ShieldCheck, Download, Share2, Star, Sparkles, BookOpen } from 'lucide-react';
import { getUserProgress, saveUserProgress } from '../lib/progress';
import { getOnboardingData } from '../lib/storage';
import { modules, lessons } from '../lib/curriculum/data';

export function Certificates() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(getUserProgress());
  const onboarding = getOnboardingData();

  useEffect(() => {
    const handleUpdate = () => setProgress(getUserProgress());
    window.addEventListener('mzansi_progress_updated', handleUpdate);
    return () => window.removeEventListener('mzansi_progress_updated', handleUpdate);
  }, []);

  const totalLessons = lessons.length;
  const completedCount = progress.completedLessons.length;
  const percent = Math.round((completedCount / Math.max(totalLessons, 1)) * 100);
  const isLevel1Complete = percent >= 100 || completedCount >= 5;

  const learnerName = onboarding?.goal ? "Mzansi AI Scholar" : "AI Explorer";
  const issueDate = progress.certificateDate || new Date().toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' });

  const handleClaimCertificate = () => {
    saveUserProgress({
      ...progress,
      certificateClaimed: true,
      certificateDate: issueDate,
    });
    setProgress(getUserProgress());
  };

  return (
    <div className="p-4 sm:p-6 space-y-5 pb-24">
      {/* Header */}
      <header>
        <div className="flex items-center gap-2 text-[#E67E22] mb-1">
          <Award className="w-5 h-5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Accredited Milestones</span>
        </div>
        <h1 className="text-2xl font-bold text-[#2D3E50] mb-1">Certificates & Badges</h1>
        <p className="text-xs font-medium text-gray-500">
          Earn verified foundational certificates as you complete Level 1 modules and unplugged labs.
        </p>
      </header>

      {/* Main Certificate Card */}
      <div className="bg-[#2D3E50] rounded-2xl p-6 text-white text-center shadow-md relative overflow-hidden border-2 border-slate-700">
        <div className="relative z-10 space-y-3">
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto border-2 border-[#E67E22]/50 shadow-inner">
            <Award className="w-8 h-8 text-[#E67E22]" />
          </div>

          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#E67E22] block mb-1">
              Certificate of Completion
            </span>
            <h2 className="text-xl font-bold">Level 1: AI Foundations</h2>
            <p className="text-xs text-gray-300">Mzansi AI Educator • South African Curriculum</p>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-white/20 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-[#E67E22] h-full rounded-full transition-all duration-500"
              style={{ width: `${percent}%` }}
            ></div>
          </div>

          <div className="flex items-center justify-between text-[11px] font-bold text-gray-300">
            <span>{completedCount} of {totalLessons} Modules Completed</span>
            <span className="text-[#E67E22]">{percent}%</span>
          </div>

          {/* Certificate Action Button */}
          {isLevel1Complete ? (
            <div className="pt-2">
              <div className="bg-white/10 p-3 rounded-xl border border-white/20 mb-3 text-left">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs mb-1">
                  <ShieldCheck className="w-4 h-4" /> Verified Learner: {learnerName}
                </div>
                <div className="text-[10px] text-gray-300">
                  Issued: {issueDate} • Certificate ID: MZAIE-L1-{Math.abs(learnerName.length * 4821).toString(16).toUpperCase()}
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => alert(`Certificate downloaded for ${learnerName}! Verified under MZAIE-L1 curriculum.`)}
                  className="flex-1 bg-[#E67E22] hover:bg-orange-600 text-white font-bold text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <Download className="w-4 h-4" /> Download Certificate
                </button>
              </div>
            </div>
          ) : (
            <div className="pt-2">
              <p className="text-xs text-gray-300 mb-3">
                Complete all 5 Level 1 modules to claim and download your verified certificate!
              </p>
              <button
                onClick={() => navigate('/learn')}
                className="w-full bg-white text-[#2D3E50] hover:bg-gray-100 font-bold text-xs py-3 px-4 rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-[#E67E22]" /> Continue Modules ({5 - completedCount} left)
              </button>
            </div>
          )}
        </div>
        <div className="absolute -left-10 -top-10 w-36 h-36 bg-[#E67E22]/10 rounded-full blur-xl"></div>
        <div className="absolute -right-10 -bottom-10 w-36 h-36 bg-white/5 rounded-full blur-xl"></div>
      </div>

      {/* Unlocked Badges */}
      <section className="space-y-3">
        <h3 className="text-sm font-bold text-[#2D3E50]">Earned Competency Badges</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { id: 'b_ai', name: 'AI Foundations', desc: 'Understanding core AI concepts & patterns', earned: completedCount >= 1 },
            { id: 'b_ubuntu', name: 'Ubuntu Tech Ethics', desc: 'Human-first, community centered AI', earned: completedCount >= 4 },
            { id: 'b_privacy', name: 'POPIA Privacy Guardian', desc: 'Data protection & safe prompt hygiene', earned: completedCount >= 3 },
            { id: 'b_lab', name: 'Unplugged Experimenter', desc: 'Completed interactive offline lab games', earned: progress.completedLabs.length >= 1 },
          ].map((badge) => (
            <div
              key={badge.id}
              className={`p-4 rounded-2xl border-2 transition-all flex items-start gap-3 ${
                badge.earned
                  ? 'bg-white border-[#E2E8F0] shadow-sm'
                  : 'bg-gray-50 border-gray-200 opacity-60'
              }`}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                  badge.earned ? 'bg-orange-50 text-[#E67E22]' : 'bg-gray-200 text-gray-400'
                }`}
              >
                <Star className="w-5 h-5 fill-current" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="font-bold text-xs text-[#1A202C]">{badge.name}</h4>
                  {badge.earned && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
                </div>
                <p className="text-[11px] text-gray-500 mt-0.5">{badge.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
