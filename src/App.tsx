import React, { useState } from 'react';
import { LEVELS, MZANSI_KNOWLEDGE_BASE, Lesson, Level } from './curriculumData';

export default function App() {
  const [activeTab, setActiveTab] = useState<'learn' | 'tutor'>('learn');
  const [selectedLevelId, setSelectedLevelId] = useState<number>(1);
  const [selectedLessonId, setSelectedLessonId] = useState<string>('l1-1');

  // Quiz state
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [showExplanation, setShowExplanation] = useState<Record<string, boolean>>({});

  // Tutor chat state
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'tutor'; text: string }>>([
    {
      sender: 'tutor',
      text: 'Sawubona! I am your offline Mzansi AI Tutor. Ask me anything about AI fundamentals, prompting with CREO, bias in Africa, or building PWAs.'
    }
  ]);
  const [inputQuery, setInputQuery] = useState('');

  const currentLevel: Level = LEVELS.find((lvl) => lvl.id === selectedLevelId) || LEVELS[0];
  const currentLesson: Lesson =
    currentLevel.lessons.find((les) => les.id === selectedLessonId) || currentLevel.lessons[0];

  const handleAnswerSelect = (lessonId: string, qIndex: number, optionIndex: number) => {
    const key = `${lessonId}-${qIndex}`;
    setSelectedAnswers((prev) => ({ ...prev, [key]: optionIndex }));
    setShowExplanation((prev) => ({ ...prev, [key]: true }));
  };

  const handleAskTutor = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputQuery.trim()) return;

    const userText = inputQuery.trim();
    const cleanQuery = userText.toLowerCase();

    // Offline matching logic based on keywords
    let match = MZANSI_KNOWLEDGE_BASE.find((item) =>
      item.keywords.some((keyword) => cleanQuery.includes(keyword))
    );

    let tutorReply = match
      ? match.answer
      : "That's a thoughtful question! While I am running offline in your browser, try asking me about: 'What is AI?', 'How to prompt with CREO', 'Algorithmic bias in Africa', or 'What is a PWA?'.";

    setMessages((prev) => [
      ...prev,
      { sender: 'user', text: userText },
      { sender: 'tutor', text: tutorReply }
    ]);
    setInputQuery('');
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      {/* Header */}
      <header className="bg-slate-950 border-b border-slate-800 sticky top-0 z-20 px-4 py-3 sm:px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="/mzansi-ai-educator/icon.svg" alt="Logo" className="w-9 h-9 rounded-lg" />
            <div>
              <h1 className="text-lg font-bold text-amber-400 leading-tight">Mzansi AI Educator</h1>
              <p className="text-xs text-slate-400">Offline-First • Contextualized • Practical</p>
            </div>
          </div>
          {/* Navigation Tabs */}
          <div className="flex space-x-2">
            <button
              onClick={() => setActiveTab('learn')}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition ${
                activeTab === 'learn'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              📚 Curriculum
            </button>
            <button
              onClick={() => setActiveTab('tutor')}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition ${
                activeTab === 'tutor'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              🤖 Mzansi Tutor
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-4 sm:p-6">
        {activeTab === 'learn' ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Sidebar: Levels and Lesson List */}
            <div className="space-y-4">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Learning Pathways
              </h2>
              <div className="space-y-2">
                {LEVELS.map((lvl) => {
                  const isSelected = lvl.id === selectedLevelId;
                  return (
                    <div
                      key={lvl.id}
                      className={`rounded-lg border transition ${
                        isSelected
                          ? 'border-amber-500/50 bg-slate-800/80 shadow-sm'
                          : 'border-slate-800 bg-slate-950/40 hover:border-slate-700'
                      }`}
                    >
                      <button
                        onClick={() => {
                          setSelectedLevelId(lvl.id);
                          setSelectedLessonId(lvl.lessons[0].id);
                        }}
                        className="w-full text-left p-3 flex items-center justify-between"
                      >
                        <span className="font-semibold text-sm text-slate-200">{lvl.title}</span>
                        <span className="text-xs px-2 py-0.5 rounded bg-slate-700 text-amber-300">
                          {lvl.badge}
                        </span>
                      </button>

                      {/* Sub-lessons */}
                      {isSelected && (
                        <div className="px-3 pb-3 space-y-1 border-t border-slate-700/50 pt-2">
                          {lvl.lessons.map((les) => (
                            <button
                              key={les.id}
                              onClick={() => setSelectedLessonId(les.id)}
                              className={`w-full text-left text-xs px-2.5 py-1.5 rounded transition ${
                                selectedLessonId === les.id
                                  ? 'bg-amber-500/20 text-amber-300 font-medium'
                                  : 'text-slate-400 hover:text-slate-200'
                              }`}
                            >
                              {les.title}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Area: Lesson Content & Quiz */}
            <div className="md:col-span-2 space-y-6">
              <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-5 sm:p-6 space-y-4">
                <div>
                  <span className="text-xs text-amber-400 font-semibold uppercase">
                    {currentLevel.title}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-100 mt-1">
                    {currentLesson.title}
                  </h2>
                  <p className="text-sm text-slate-400 italic mt-0.5">{currentLesson.subtitle}</p>
                </div>

                <div className="border-t border-slate-800 pt-4 text-slate-300 text-sm leading-relaxed whitespace-pre-line">
                  {currentLesson.content}
                </div>

                {/* Key Takeaway Callout */}
                <div className="bg-amber-950/30 border border-amber-500/30 rounded-lg p-4 mt-4">
                  <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                    💡 Key Takeaway
                  </div>
                  <div className="text-sm text-amber-200">{currentLesson.takeaway}</div>
                </div>
              </div>

              {/* Quiz Module */}
              <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-5 sm:p-6 space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300">
                  🎯 Quick Knowledge Check
                </h3>

                {currentLesson.quiz.map((q, qIndex) => {
                  const key = `${currentLesson.id}-${qIndex}`;
                  const selected = selectedAnswers[key];
                  const revealed = showExplanation[key];

                  return (
                    <div key={qIndex} className="space-y-3">
                      <p className="text-sm font-medium text-slate-200">{q.question}</p>
                      <div className="space-y-2">
                        {q.options.map((opt, optIndex) => {
                          let btnStyle = 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800';

                          if (revealed) {
                            if (optIndex === q.correctIndex) {
                              btnStyle = 'bg-emerald-950/60 border-emerald-500 text-emerald-200';
                            } else if (selected === optIndex) {
                              btnStyle = 'bg-rose-950/60 border-rose-500 text-rose-200';
                            }
                          }

                          return (
                            <button
                              key={optIndex}
                              onClick={() => handleAnswerSelect(currentLesson.id, qIndex, optIndex)}
                              className={`w-full text-left text-xs sm:text-sm p-3 rounded-lg border transition ${btnStyle}`}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>

                      {revealed && (
                        <div
                          className={`text-xs p-3 rounded-lg border mt-2 ${
                            selected === q.correctIndex
                              ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300'
                              : 'bg-rose-950/40 border-rose-500/40 text-rose-300'
                          }`}
                        >
                          <span className="font-bold">
                            {selected === q.correctIndex ? '✓ Correct! ' : '✕ Not quite. '}
                          </span>
                          {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          /* Mzansi Tutor Chat Interface */
          <div className="max-w-2xl mx-auto flex flex-col h-[75vh] bg-slate-950/70 border border-slate-800 rounded-xl overflow-hidden shadow-lg">
            {/* Tutor Header */}
            <div className="bg-slate-900 p-3.5 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-sm font-semibold text-slate-200">Mzansi Offline Tutor</span>
              </div>
              <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                Data-Free Mode
              </span>
            </div>

            {/* Chat History */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 text-sm">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-xl px-4 py-2.5 leading-relaxed ${
                      m.sender === 'user'
                        ? 'bg-amber-500 text-slate-950 font-medium'
                        : 'bg-slate-800 text-slate-200 border border-slate-700'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input Bar */}
            <form onSubmit={handleAskTutor} className="p-3 bg-slate-900 border-t border-slate-800 flex gap-2">
              <input
                type="text"
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                placeholder="Ask about AI, prompting, bias, or PWAs..."
                className="flex-1 bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400"
              />
              <button
                type="submit"
                className="bg-amber-500 text-slate-950 font-semibold px-4 py-2 rounded-lg text-sm hover:bg-amber-400 transition"
              >
                Send
              </button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}
