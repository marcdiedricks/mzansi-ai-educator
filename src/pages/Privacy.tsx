import { ArrowLeft, Shield, Smartphone, Wifi, Database } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Privacy() {
  const navigate = useNavigate();
  return (
    <div className="p-4 sm:p-6 space-y-4 pb-12 max-w-3xl mx-auto">
      <header>
        <button onClick={() => navigate('/more')} className="inline-flex items-center gap-2 text-sm font-bold text-[#2D3E50] mb-4"><ArrowLeft className="w-4 h-4" /> Back to More</button>
        <div className="flex items-center gap-2 text-[#E67E22] mb-1"><Shield className="w-5 h-5" /><span className="text-[10px] font-bold uppercase tracking-wider">Privacy & Data</span></div>
        <h1 className="text-2xl font-bold text-[#2D3E50]">Your learning data</h1>
        <p className="text-sm text-gray-600 mt-2">Mzansi AI Educator is designed so the core learning programme can work without an account or central learner database.</p>
      </header>
      <section className="bg-white border-2 border-[#E2E8F0] rounded-2xl p-4 flex gap-3"><Smartphone className="w-5 h-5 text-[#E67E22] shrink-0" /><div><h2 className="font-bold">Stored on this device</h2><p className="text-sm text-gray-600 mt-1">Your onboarding choices, lesson progress, latest quiz scores, completed offline labs and My Learning Evidence are stored in this browser on this device.</p></div></section>
      <section className="bg-white border-2 border-[#E2E8F0] rounded-2xl p-4 flex gap-3"><Database className="w-5 h-5 text-[#E67E22] shrink-0" /><div><h2 className="font-bold">No central learner record in the current app</h2><p className="text-sm text-gray-600 mt-1">The current app does not provide learner accounts, verified identity, a central facilitator dashboard or an accredited results database. Local records can be lost if browser or site data is cleared.</p></div></section>
      <section className="bg-white border-2 border-[#E2E8F0] rounded-2xl p-4 flex gap-3"><Wifi className="w-5 h-5 text-[#E67E22] shrink-0" /><div><h2 className="font-bold">Optional connected tutor</h2><p className="text-sm text-gray-600 mt-1">The built-in tutor can work locally. If a deployment provides the optional connected AI service and you use it while online, your tutor question and selected language profile may be sent to that service to produce an answer. Do not enter private or sensitive information into tutor questions.</p></div></section>
      <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-4"><h2 className="font-bold text-[#2D3E50]">Keep personal information private</h2><p className="text-sm text-gray-700 mt-1">Use made-up examples when practising. Do not enter passwords, identity numbers, private health information, banking details or another person's private information.</p></div>
    </div>
  );
}
