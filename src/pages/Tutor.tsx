import { FormEvent, useMemo, useState } from 'react';
import { ArrowLeft, MessageCircle, Send, WifiOff, Wifi, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getOnboardingData } from '../lib/storage';
import { askTutor, TutorMode } from '../lib/tutor';

type Message = {
  sender: 'learner' | 'tutor';
  text: string;
  mode?: TutorMode;
};

export function Tutor() {
  const navigate = useNavigate();
  const onboarding = getOnboardingData();
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [lastMode, setLastMode] = useState<TutorMode>('local');

  const languageLabel = useMemo(() => {
    if (onboarding?.language === 'af') return 'Afrikaans';
    if (onboarding?.language === 'xh') return 'isiXhosa';
    return 'English';
  }, [onboarding?.language]);

  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'tutor',
      mode: 'local',
      text: 'Sawubona. I am Ask Mzansi Tutor. Ask me about AI, a difficult term, a lesson, a comparison, a prompt you want improved, or something you want explained in simpler language. When connected AI is available I can answer more broadly. If not, I automatically continue with the local learning layer.',
    },
  ]);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    const question = input.trim();
    if (!question || busy) return;

    setMessages((current) => [...current, { sender: 'learner', text: question }]);
    setInput('');
    setBusy(true);

    const answer = await askTutor(question, onboarding?.language || 'en');
    setLastMode(answer.mode);
    setMessages((current) => [...current, { sender: 'tutor', text: answer.text, mode: answer.mode }]);
    setBusy(false);
  };

  return (
    <div className="min-h-screen bg-[#F0F2F5]">
      <div className="w-full max-w-lg mx-auto min-h-screen bg-white flex flex-col sm:border-x-2 sm:border-[#E2E8F0]">
        <header className="p-4 border-b-2 border-[#E2E8F0] flex items-center gap-3 sticky top-0 bg-white z-10">
          <button onClick={() => navigate('/home')} className="w-10 h-10 rounded-xl border-2 border-[#E2E8F0] flex items-center justify-center text-[#2D3E50]" aria-label="Back to dashboard">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex-1 min-w-0">
            <h1 className="font-bold text-[#2D3E50]">Ask Mzansi Tutor</h1>
            <p className="text-xs text-gray-500">Plain explanations. South African context. {languageLabel} profile.</p>
          </div>
          <div className={`flex items-center gap-1 text-[10px] font-bold rounded-lg px-2 py-1 border ${lastMode === 'connected' ? 'text-blue-700 bg-blue-50 border-blue-200' : 'text-emerald-700 bg-emerald-50 border-emerald-200'}`}>
            {lastMode === 'connected' ? <Wifi className="w-3 h-3" /> : <WifiOff className="w-3 h-3" />}
            {lastMode === 'connected' ? 'Connected AI' : 'Local fallback'}
          </div>
        </header>

        <main className="flex-1 p-4 space-y-3 overflow-y-auto">
          {messages.map((message, index) => (
            <div key={`${message.sender}-${index}`} className={`flex ${message.sender === 'learner' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-line ${message.sender === 'learner' ? 'bg-[#2D3E50] text-white rounded-br-md' : 'bg-[#F8F9FA] border-2 border-[#E2E8F0] text-[#1A202C] rounded-bl-md'}`}>
                {message.sender === 'tutor' && (
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-bold text-[#E67E22]"><MessageCircle className="w-3.5 h-3.5" />Mzansi Tutor</div>
                    {message.mode && <span className="text-[9px] font-bold uppercase text-gray-400">{message.mode === 'connected' ? 'Connected' : 'Local'}</span>}
                  </div>
                )}
                {message.text}
              </div>
            </div>
          ))}
          {busy && <div className="flex items-center gap-2 text-xs text-gray-500"><Loader2 className="w-4 h-4 animate-spin" />Mzansi Tutor is thinking…</div>}
        </main>

        <form onSubmit={submit} className="p-4 border-t-2 border-[#E2E8F0] bg-white">
          <div className="flex items-end gap-2">
            <label className="flex-1">
              <span className="sr-only">Ask a question</span>
              <textarea value={input} onChange={(event) => setInput(event.target.value)} rows={2} placeholder="Ask about AI, a lesson, a prompt, a difficult term, or something you want explained…" className="w-full resize-none rounded-xl border-2 border-[#E2E8F0] px-3 py-2.5 text-sm focus:outline-none focus:border-[#2D3E50]" />
            </label>
            <button type="submit" disabled={busy || !input.trim()} className="w-11 h-11 rounded-xl bg-[#E67E22] disabled:opacity-50 text-white flex items-center justify-center shrink-0" aria-label="Send question">
              {busy ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
            </button>
          </div>
          <p className="text-[10px] text-gray-500 mt-2">Connected answers may go beyond the course. Local fallback remains available when connectivity or the AI service is unavailable. Important claims should still be checked against trusted sources.</p>
        </form>
      </div>
    </div>
  );
}
