import { useMemo, useState } from 'react';
import { ArrowLeft, CheckCircle2, RotateCcw, WifiOff, XCircle } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

type Challenge = {
  title: string;
  module: string;
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

const CHALLENGES: Record<string, Challenge> = {
  hallucination: {
    title: 'Spot the AI Hallucination',
    module: 'Module 1.5',
    prompt:
      'An AI assistant says: “Table Mountain is 3,500 metres high and is the tallest mountain in South Africa.” What should you do?',
    options: [
      'Accept it because AI sounds confident.',
      'Share it immediately with your class.',
      'Check the claim against a trusted source before using it.',
      'Assume every AI answer is false.',
    ],
    correctIndex: 2,
    explanation:
      'AI can produce confident but incorrect information. The safe habit is to verify important claims against trusted sources before using or sharing them.',
  },
  popia: {
    title: 'POPIA Privacy Check Scenario',
    module: 'Module 1.3',
    prompt:
      'A learner wants to paste a class list containing names, ID numbers and phone numbers into a public AI tool to organise the information. What is the safest choice?',
    options: [
      'Paste the full list because the task is educational.',
      'Remove personal information and use made-up sample data instead.',
      'Post the list in a public group first.',
      'Add more personal details so the AI has better context.',
    ],
    correctIndex: 1,
    explanation:
      'Sensitive personal information should not be shared casually with public AI tools. Use anonymous or fictional sample data where possible and follow your organisation’s privacy rules.',
  },
  ubuntu: {
    title: 'Ubuntu Algorithmic Fairness Case',
    module: 'Module 1.4',
    prompt:
      'A school introduces an AI reading tool that works well in English but performs poorly for learners using isiXhosa. Which response best reflects Ubuntu and fair AI design?',
    options: [
      'Use it anyway because most software is English-first.',
      'Exclude learners who struggle with the tool.',
      'Test the system with local-language learners, identify the gap and improve or supplement the tool.',
      'Stop using all technology in the school.',
    ],
    correctIndex: 2,
    explanation:
      'Human-centred and Ubuntu-informed design asks who may be excluded or disadvantaged. A fair response is to test with affected learners and improve the system or provide an inclusive alternative.',
  },
};

export function PracticeChallenge() {
  const navigate = useNavigate();
  const { challengeId } = useParams();
  const challenge = useMemo(() => (challengeId ? CHALLENGES[challengeId] : undefined), [challengeId]);
  const [selected, setSelected] = useState<number | null>(null);

  if (!challenge) {
    return (
      <div className="min-h-screen bg-[#F0F2F5] p-4">
        <div className="max-w-lg mx-auto bg-white rounded-2xl border-2 border-[#E2E8F0] p-5">
          <h1 className="font-bold text-[#2D3E50]">Challenge not found</h1>
          <button onClick={() => navigate('/practice')} className="mt-4 text-sm font-bold text-[#E67E22]">Back to practice</button>
        </div>
      </div>
    );
  }

  const answered = selected !== null;
  const correct = selected === challenge.correctIndex;

  return (
    <div className="min-h-screen bg-[#F0F2F5]">
      <div className="w-full max-w-lg mx-auto min-h-screen bg-white sm:border-x-2 sm:border-[#E2E8F0]">
        <header className="p-4 border-b-2 border-[#E2E8F0] flex items-center gap-3 sticky top-0 bg-white z-10">
          <button onClick={() => navigate('/practice')} className="w-10 h-10 rounded-xl border-2 border-[#E2E8F0] flex items-center justify-center" aria-label="Back to practice">
            <ArrowLeft className="w-5 h-5 text-[#2D3E50]" />
          </button>
          <div className="flex-1">
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#E67E22]">{challenge.module} quick practice</p>
            <h1 className="text-base font-bold text-[#2D3E50]">{challenge.title}</h1>
          </div>
          <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-2 py-1">
            <WifiOff className="w-3 h-3" /> Offline
          </div>
        </header>

        <main className="p-4 sm:p-6 space-y-5 pb-24">
          <section className="bg-[#2D3E50] text-white rounded-2xl p-5">
            <p className="text-[10px] uppercase tracking-wider font-bold text-[#E67E22] mb-2">Scenario</p>
            <p className="text-sm leading-relaxed font-medium">{challenge.prompt}</p>
          </section>

          <section className="space-y-2.5">
            {challenge.options.map((option, index) => {
              const isSelected = selected === index;
              const isCorrectOption = answered && index === challenge.correctIndex;
              const isWrongSelected = answered && isSelected && !isCorrectOption;

              return (
                <button
                  key={option}
                  onClick={() => !answered && setSelected(index)}
                  disabled={answered}
                  className={`w-full text-left rounded-xl border-2 p-4 text-sm font-medium transition-colors ${
                    isCorrectOption
                      ? 'border-emerald-400 bg-emerald-50 text-emerald-900'
                      : isWrongSelected
                        ? 'border-red-300 bg-red-50 text-red-900'
                        : isSelected
                          ? 'border-[#2D3E50] bg-slate-50'
                          : 'border-[#E2E8F0] bg-white text-[#1A202C]'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 font-bold text-xs">{String.fromCharCode(65 + index)}</span>
                    <span className="flex-1">{option}</span>
                    {isCorrectOption && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />}
                    {isWrongSelected && <XCircle className="w-5 h-5 text-red-500 shrink-0" />}
                  </div>
                </button>
              );
            })}
          </section>

          {answered && (
            <section className={`rounded-2xl border-2 p-4 ${correct ? 'bg-emerald-50 border-emerald-200' : 'bg-amber-50 border-amber-200'}`}>
              <h2 className="font-bold text-sm text-[#2D3E50]">{correct ? 'Correct' : 'Good attempt'}</h2>
              <p className="text-xs text-gray-700 leading-relaxed mt-1.5">{challenge.explanation}</p>
              <button onClick={() => setSelected(null)} className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-[#2D3E50]">
                <RotateCcw className="w-4 h-4" /> Try again
              </button>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}
