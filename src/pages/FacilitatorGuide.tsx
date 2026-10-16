import { ArrowLeft, Users, Brain, ClipboardCheck, WifiOff, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function FacilitatorGuide() {
  const navigate = useNavigate();
  const sections = [
    { icon: Brain, title: 'Keep the learner thinking', text: 'Use THINK in plain language: try it yourself, ask to understand, check the answer, try again on your own, and say what you learned. AI should help thinking, not replace it.' },
    { icon: Users, title: 'Adapt the delivery, not the curriculum', text: 'The same core lessons can support self-study, an NGO or community group, a classroom, a workshop or structured training. Change examples, pace and discussion to fit the group without creating a different core course.' },
    { icon: ClipboardCheck, title: 'Use checks to teach', text: 'Learning checks are formative. Let learners retry, explain their reasoning and show what they tried. A percentage alone is not proof of competence.' },
    { icon: WifiOff, title: 'Plan for limited connectivity', text: 'Prefer downloaded or built-in activities. Do not make an external video or live AI service essential. Pair or group learners when devices or data are limited.' },
    { icon: ShieldCheck, title: 'Protect people and their information', text: 'Do not ask learners to enter private or sensitive information into AI tools. Keep important decisions with people and discuss fairness, safety and who could be left out.' },
  ];

  return (
    <div className="p-4 sm:p-6 space-y-5 pb-12 max-w-3xl mx-auto">
      <header>
        <button onClick={() => navigate('/more')} className="inline-flex items-center gap-2 text-sm font-bold text-[#2D3E50] mb-4"><ArrowLeft className="w-4 h-4" /> Back to More</button>
        <div className="flex items-center gap-2 text-[#E67E22] mb-1"><Users className="w-5 h-5" /><span className="text-[10px] font-bold uppercase tracking-wider">Delivery Guide</span></div>
        <h1 className="text-2xl font-bold text-[#2D3E50]">Facilitator Guide</h1>
        <p className="text-sm text-gray-600 mt-2">Help people learn with Mzansi AI Educator while keeping the learner's own thinking, judgement and responsibility central.</p>
      </header>

      <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-4">
        <h2 className="font-bold text-[#2D3E50]">One core programme. Multiple delivery contexts.</h2>
        <p className="text-sm text-gray-700 mt-1">Facilitation is a delivery layer. It does not change the four-level curriculum or turn this programme into an accredited qualification.</p>
      </div>

      <section className="space-y-3">
        {sections.map(({ icon: Icon, title, text }) => (
          <div key={title} className="bg-white border-2 border-[#E2E8F0] rounded-2xl p-4 flex gap-3">
            <Icon className="w-5 h-5 text-[#E67E22] shrink-0 mt-0.5" />
            <div><h2 className="font-bold text-[#1A202C]">{title}</h2><p className="text-sm text-gray-600 mt-1 leading-relaxed">{text}</p></div>
          </div>
        ))}
      </section>

      <section className="bg-white border-2 border-[#E2E8F0] rounded-2xl p-4 space-y-3">
        <h2 className="font-bold text-[#2D3E50]">Simple session pattern</h2>
        <ol className="list-decimal pl-5 text-sm text-gray-700 space-y-2">
          <li>Start with a familiar South African example or problem.</li>
          <li>Let learners try or think before showing an AI answer.</li>
          <li>Work through the lesson and discuss what the AI may get wrong.</li>
          <li>Use the learning check as feedback, then retry where useful.</li>
          <li>Ask learners to save what they tried and what they learned in My Learning Evidence.</li>
          <li>Close by asking where a person must stay in control.</li>
        </ol>
      </section>

      <section className="bg-gray-50 border border-gray-200 rounded-2xl p-4">
        <h2 className="font-bold text-[#2D3E50]">What the app records</h2>
        <p className="text-sm text-gray-600 mt-1">Progress, latest quiz scores and learner evidence are stored on the learner's device. The app does not currently provide a central facilitator dashboard, attendance register, verified identity or externally accredited result.</p>
      </section>
    </div>
  );
}
