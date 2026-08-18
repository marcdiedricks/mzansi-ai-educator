import { FormEvent, useMemo, useState } from 'react';
import { ArrowLeft, MessageCircle, Send, WifiOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getOnboardingData } from '../lib/storage';

type Message = {
  sender: 'learner' | 'tutor';
  text: string;
};

const LOCAL_RESPONSES = [
  {
    keywords: ['algorithm', 'algorithms'],
    answer:
      'An algorithm is a set of instructions or rules used to complete a task or make a decision. Think of following a recipe, planning a taxi route, or deciding the order of steps in a school activity. In AI, algorithms help a system process data, find patterns, and produce an output.',
  },
  {
    keywords: ['bias', 'biased', 'algorithmic bias'],
    answer:
      'Algorithmic bias happens when an AI system produces unfair or skewed results because of the data, assumptions, or design choices behind it. A South African example is a language system that performs well in English but poorly in isiXhosa because the training data contains much less isiXhosa.',
  },
  {
    keywords: ['training data', 'data'],
    answer:
      'Training data is the information used to help an AI system learn patterns. The quality, variety, and relevance of that data matter. If important South African languages, places, people, or situations are missing, the system may perform poorly for local users.',
  },
  {
    keywords: ['model', 'ai model'],
    answer:
      'An AI model is the trained system that uses patterns learned from data to make predictions, classify information, or generate outputs. The model is not a human mind. It works from mathematical patterns and the way it was designed and trained.',
  },
  {
    keywords: ['creo', 'prompt', 'prompting'],
    answer:
      'CREO is a structured prompting framework: Context, Role, Explicit instructions, and Output format. It helps you give an AI system clearer instructions so the response is more relevant and easier to check.',
  },
  {
    keywords: ['offline', 'internet', 'data cost', 'low data'],
    answer:
      'Mzansi AI Educator is designed so the core learning pathway can remain useful when connectivity is weak or unavailable. This local tutor shell also works without an external AI service. Some future advanced tutor features may require connectivity, but the course must not depend on them.',
  },
  {
    keywords: ['predictive', 'prediction'],
    answer:
      'Prediction in AI means estimating what is likely to happen or what is likely to come next, based on patterns in data. Predictive text on a phone is a simple example. It looks at language patterns and suggests the next word you may want to type.',
  },
  {
    keywords: ['generative ai', 'llm', 'large language model', 'token'],
    answer:
      'Generative AI creates new outputs such as text or images from patterns learned during training. A large language model, or LLM, generates text by working with pieces of language called tokens and predicting likely continuations. It can still make mistakes, so important claims must be checked.',
  },
];

function answerLocally(question: string): string {
  const normalized = question.toLowerCase();
  const match = LOCAL_RESPONSES.find((item) => item.keywords.some((keyword) => normalized.includes(keyword)));

  return match?.answer ||
    'I can currently help offline with AI foundations such as algorithms, training data, models, prediction, generative AI, bias, CREO prompting, and offline learning. Try asking: “What is an algorithm?” or “Explain bias with a South African example.”';
}

export function Tutor() {
  const navigate = useNavigate();
  const onboarding = getOnboardingData();
  const [input, setInput] = useState('');

  const languageLabel = useMemo(() => {
    if (onboarding?.language === 'af') return 'Afrikaans';
    if (onboarding?.language === 'xh') return 'isiXhosa';
    return 'English';
  }, [onboarding?.language]);

  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'tutor',
      text: 'Sawubona. I am Ask Mzansi Tutor. I can explain core AI ideas in plain language and connect them to everyday South African examples. This first restored version works from a local knowledge layer, so it does not need an external AI service.',
    },
  ]);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const question = input.trim();
    if (!question) return;

    setMessages((current) => [
      ...current,
      { sender: 'learner', text: question },
      { sender: 'tutor', text: answerLocally(question) },
    ]);
    setInput('');
  };

  return (
    <div className="min-h-screen bg-[#F0F2F5]">
      <div className="w-full max-w-lg mx-auto min-h-screen bg-white flex flex-col sm:border-x-2 sm:border-[#E2E8F0]">
        <header className="p-4 border-b-2 border-[#E2E8F0] flex items-center gap-3 sticky top-0 bg-white z-10">
          <button
            onClick={() => navigate('/home')}
            className="w-10 h-10 rounded-xl border-2 border-[#E2E8F0] flex items-center justify-center text-[#2D3E50]"
            aria-label="Back to dashboard"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <h1 className="font-bold text-[#2D3E50]">Ask Mzansi Tutor</h1>
            <p className="text-xs text-gray-500">Plain explanations. South African context. {languageLabel} profile.</p>
          </div>
          <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-2 py-1">
            <WifiOff className="w-3 h-3" />
            Local
          </div>
        </header>

        <main className="flex-1 p-4 space-y-3 overflow-y-auto">
          {messages.map((message, index) => (
            <div
              key={`${message.sender}-${index}`}
              className={`flex ${message.sender === 'learner' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  message.sender === 'learner'
                    ? 'bg-[#2D3E50] text-white rounded-br-md'
                    : 'bg-[#F8F9FA] border-2 border-[#E2E8F0] text-[#1A202C] rounded-bl-md'
                }`}
              >
                {message.sender === 'tutor' && (
                  <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-bold text-[#E67E22] mb-1.5">
                    <MessageCircle className="w-3.5 h-3.5" />
                    Mzansi Tutor
                  </div>
                )}
                {message.text}
              </div>
            </div>
          ))}
        </main>

        <form onSubmit={submit} className="p-4 border-t-2 border-[#E2E8F0] bg-white">
          <div className="flex items-end gap-2">
            <label className="flex-1">
              <span className="sr-only">Ask a question</span>
              <textarea
                value={input}
                onChange={(event) => setInput(event.target.value)}
                rows={2}
                placeholder="Ask about an algorithm, bias, training data..."
                className="w-full resize-none rounded-xl border-2 border-[#E2E8F0] px-3 py-2.5 text-sm focus:outline-none focus:border-[#2D3E50]"
              />
            </label>
            <button
              type="submit"
              className="w-11 h-11 rounded-xl bg-[#E67E22] text-white flex items-center justify-center shrink-0"
              aria-label="Send question"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          <p className="text-[10px] text-gray-500 mt-2">
            Local tutor answers are limited to the built-in learning knowledge. Important claims should still be checked against the course and trusted sources.
          </p>
        </form>
      </div>
    </div>
  );
}
