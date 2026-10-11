import { ArrowLeft, Info, Brain, Layers, Smartphone, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function About() {
  const navigate = useNavigate();
  return (
    <div className="p-4 sm:p-6 space-y-4 pb-12 max-w-3xl mx-auto">
      <header>
        <button onClick={() => navigate('/more')} className="inline-flex items-center gap-2 text-sm font-bold text-[#2D3E50] mb-4"><ArrowLeft className="w-4 h-4" /> Back to More</button>
        <div className="flex items-center gap-2 text-[#E67E22] mb-1"><Info className="w-5 h-5" /><span className="text-[10px] font-bold uppercase tracking-wider">About</span></div>
        <h1 className="text-2xl font-bold text-[#2D3E50]">Mzansi AI Educator</h1>
        <p className="text-sm text-gray-600 mt-2">An adaptable, inclusive AI education and training programme that teaches people to use AI effectively without surrendering their own thinking, judgement, creativity or responsibility.</p>
      </header>
      <section className="bg-white border-2 border-[#E2E8F0] rounded-2xl p-4 flex gap-3"><Brain className="w-5 h-5 text-[#E67E22] shrink-0" /><div><h2 className="font-bold">THINK</h2><p className="text-sm text-gray-600 mt-1">Try it yourself. Ask to understand. Check the answer. Try again on your own. Say what you learned. AI assists the learner; it does not replace the learner's reasoning or responsibility.</p></div></section>
      <section className="bg-white border-2 border-[#E2E8F0] rounded-2xl p-4 flex gap-3"><Layers className="w-5 h-5 text-[#E67E22] shrink-0" /><div><h2 className="font-bold">Four progressive levels</h2><p className="text-sm text-gray-600 mt-1">Level 1 Understand · Level 2 Use · Level 3 Create · Level 4 Lead & Solve. Learners can progress as far as is useful for their goals.</p></div></section>
      <section className="bg-white border-2 border-[#E2E8F0] rounded-2xl p-4 flex gap-3"><Smartphone className="w-5 h-5 text-[#E67E22] shrink-0" /><div><h2 className="font-bold">Designed for access</h2><p className="text-sm text-gray-600 mt-1">The core programme is designed for ordinary devices, constrained connectivity and low-data or offline learning. English, Afrikaans and isiXhosa lesson support is being developed over the same canonical curriculum.</p></div></section>
      <section className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-4 flex gap-3"><ShieldCheck className="w-5 h-5 text-[#E67E22] shrink-0" /><div><h2 className="font-bold">Programme boundary</h2><p className="text-sm text-gray-700 mt-1">Mzansi AI Educator provides learning activities, formative checks, local progress records and learning evidence. It does not currently claim external accreditation, professional certification or guaranteed learning outcomes.</p></div></section>
    </div>
  );
}
