import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../lib/curriculum/api';
import { ArrowLeft, Clock, CheckCircle2, Info, Lightbulb, MessageSquare, Bookmark, HelpCircle, CheckSquare, Square } from 'lucide-react';
import { LessonBlock } from '../lib/curriculum/types';
import { isLessonCompleted, toggleLessonCompletion, recordQuizScore } from '../lib/progress';

function renderBlock(block: LessonBlock) {
  switch (block.type) {
    case 'objective': return <div key={block.id} className="bg-[#2D3E50] text-white p-4 sm:p-5 rounded-2xl shadow-sm"><div className="flex items-center mb-1.5 text-[#E67E22]"><CheckCircle2 className="w-4 h-4 mr-2" /><h3 className="text-[10px] font-bold uppercase tracking-wider">What You'll Learn</h3></div><p className="text-xs sm:text-sm font-medium text-gray-100 leading-relaxed">{block.content}</p></div>;
    case 'explanation': return <div key={block.id} className="space-y-1.5">{block.variant === 'plain' && <div className="text-[10px] font-bold uppercase tracking-wider text-[#E67E22] flex items-center"><Info className="w-3.5 h-3.5 mr-1" /> In Plain Language</div>}<p className={`text-[#1A202C] leading-relaxed ${block.variant === 'plain' ? 'text-sm sm:text-base font-semibold bg-orange-50/50 p-3.5 rounded-xl border border-orange-200' : 'text-xs sm:text-sm font-normal text-gray-700'}`}>{block.content}</p></div>;
    case 'example': return <div key={block.id} className="bg-amber-50 border-2 border-amber-200 p-4 sm:p-5 rounded-2xl"><div className="flex items-center mb-1.5 text-[#E67E22]"><Lightbulb className="w-4 h-4 mr-2" /><h3 className="text-[10px] font-bold uppercase tracking-wider">{block.variant === 'SouthAfricanContext' ? 'Mzansi Everyday Context' : 'Example'}</h3></div><p className="text-xs sm:text-sm font-medium text-[#2D3E50] leading-relaxed">{block.content}</p></div>;
    case 'keyPoint': return <div key={block.id} className="bg-blue-50 border-l-4 border-[#2D3E50] p-4 rounded-r-2xl"><div className="flex items-center mb-1 text-[#2D3E50]"><Bookmark className="w-4 h-4 mr-2 text-[#E67E22]" /><h3 className="text-[10px] font-bold uppercase tracking-wider">Key Takeaway</h3></div><p className="text-xs sm:text-sm font-bold text-[#1A202C] leading-relaxed">{block.content}</p></div>;
    case 'reflection': return <div key={block.id} className="bg-gray-100 p-4 sm:p-5 rounded-2xl border-2 border-[#E2E8F0]"><div className="flex items-center mb-1.5 text-gray-600"><MessageSquare className="w-4 h-4 mr-2 text-[#E67E22]" /><h3 className="text-[10px] font-bold uppercase tracking-wider">Reflection Question</h3></div><p className="text-xs sm:text-sm font-medium text-[#2D3E50] italic leading-relaxed">{block.content}</p></div>;
    case 'summary': return <div key={block.id} className="bg-[#F8F9FA] border-2 border-[#E2E8F0] p-4 sm:p-5 rounded-2xl mt-4"><h3 className="text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">Summary</h3><p className="text-xs sm:text-sm font-medium text-[#1A202C] leading-relaxed">{block.content}</p></div>;
    default: return <div key={block.id} className="p-3 border-2 border-dashed border-gray-300 rounded-xl"><p className="text-xs text-gray-500">{block.content}</p></div>;
  }
}

export function LessonScreen() {
  const { moduleId, lessonId } = useParams<{ moduleId: string; lessonId: string }>();
  const navigate = useNavigate();
  const lesson = lessonId ? api.getLesson(lessonId) : undefined;
  const moduleData = moduleId ? api.getModule(moduleId) : undefined;
  const [completed, setCompleted] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState<number | null>(null);

  useEffect(() => {
    if (lessonId) {
      setCompleted(isLessonCompleted(lessonId));
      setSelectedAnswers({});
      setQuizSubmitted(false);
      setQuizScore(null);
    }
  }, [lessonId]);

  if (!lesson) return <div className="p-6 text-center space-y-4"><h2 className="text-xl font-bold text-[#2D3E50]">Lesson Not Found</h2><p className="text-xs text-gray-500">The requested curriculum content is not available.</p><button onClick={() => navigate('/learn')} className="bg-[#2D3E50] text-white text-xs font-bold px-4 py-2 rounded-xl">Return to Curriculum</button></div>;

  const handleToggleCompleted = () => {
    if (!lessonId) return;
    setCompleted(toggleLessonCompletion(lessonId));
  };

  const handleSubmitQuiz = () => {
    if (!lesson.quiz?.length || !lessonId) return;
    const correctCount = lesson.quiz.reduce((count, q) => count + (selectedAnswers[q.id] === q.correctIndex ? 1 : 0), 0);
    const scorePct = Math.round((correctCount / lesson.quiz.length) * 100);
    recordQuizScore(lessonId, scorePct);
    setQuizScore(scorePct);
    setQuizSubmitted(true);
  };

  const allQuestionsAnswered = lesson.quiz ? lesson.quiz.every((q) => selectedAnswers[q.id] !== undefined) : true;

  return <div className="flex flex-col min-h-screen bg-white pb-24">
    <header className="flex items-center justify-between p-4 border-b-2 border-[#E2E8F0] bg-white sticky top-0 z-20">
      <button onClick={() => navigate(moduleId ? `/learn/${moduleId}` : '/learn')} className="p-2 -ml-2 text-gray-500 hover:text-[#2D3E50] rounded-lg" aria-label="Go back"><ArrowLeft className="w-6 h-6" /></button>
      <div className="text-center"><span className="text-[9px] font-bold uppercase tracking-wider text-gray-400 block">{moduleData?.title || 'Level 1'}</span><span className="text-xs font-bold text-[#2D3E50] truncate max-w-[200px] block">{lesson.title}</span></div>
      <button onClick={handleToggleCompleted} className={`p-2 rounded-lg ${completed ? 'text-emerald-600' : 'text-gray-400'}`} aria-label={completed ? 'Mark lesson incomplete' : 'Mark lesson complete'}>{completed ? <CheckSquare className="w-5 h-5" /> : <Square className="w-5 h-5" />}</button>
    </header>

    <main className="flex-1 p-4 sm:p-6 space-y-5 max-w-xl mx-auto w-full">
      <div className="space-y-2"><div className="flex items-center gap-2"><span className="text-xs font-bold text-[#E67E22] bg-orange-50 border border-orange-200 px-2.5 py-1 rounded-md">Curriculum Content</span><div className="flex items-center text-xs font-bold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md"><Clock className="w-3.5 h-3.5 mr-1" />{lesson.estimatedMinutes} min</div></div><h1 className="text-xl sm:text-2xl font-bold text-[#2D3E50] leading-tight">{lesson.title}</h1></div>
      <div className="space-y-4">{lesson.blocks.map(renderBlock)}</div>

      {lesson.quiz && lesson.quiz.length > 0 && <section className="mt-8 pt-6 border-t-2 border-[#E2E8F0] space-y-4">
        <div className="flex items-center gap-2"><HelpCircle className="w-5 h-5 text-[#E67E22]" /><h2 className="text-base font-bold text-[#2D3E50]">Quick Knowledge Check</h2></div>
        <p className="text-xs text-gray-500">Answer every question. Your score is saved on this device.</p>
        <div className="space-y-4">{lesson.quiz.map((q, qIndex) => <div key={q.id} className="bg-[#F8F9FA] border-2 border-[#E2E8F0] p-4 rounded-2xl space-y-3"><div className="text-xs font-bold text-[#1A202C]"><span className="text-[#E67E22] mr-1.5">Q{qIndex + 1}.</span>{q.question}</div><div className="space-y-2">{q.options.map((opt, optIdx) => {
          const selected = selectedAnswers[q.id] === optIdx;
          const correct = optIdx === q.correctIndex;
          let style = 'border-[#E2E8F0] bg-white text-gray-700';
          if (quizSubmitted && correct) style = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold';
          else if (quizSubmitted && selected && !correct) style = 'border-rose-400 bg-rose-50 text-rose-800';
          else if (selected) style = 'border-[#2D3E50] bg-slate-100 text-[#2D3E50] font-bold';
          return <button key={optIdx} disabled={quizSubmitted} onClick={() => setSelectedAnswers((prev) => ({ ...prev, [q.id]: optIdx }))} className={`w-full p-3 rounded-xl border-2 text-left text-xs ${style}`}><span className="font-bold mr-2">{String.fromCharCode(65 + optIdx)}.</span>{opt}</button>;
        })}</div>{quizSubmitted && <div className="p-3 bg-white border border-gray-200 rounded-xl text-xs"><div className="font-bold text-[#2D3E50]">Explanation</div><p className="text-gray-600 leading-relaxed">{q.explanation}</p></div>}</div>)}</div>
        {!quizSubmitted ? <button disabled={!allQuestionsAnswered} onClick={handleSubmitQuiz} className="w-full bg-[#2D3E50] disabled:opacity-50 text-white font-bold py-3.5 px-4 rounded-xl text-xs sm:text-sm">Submit Answers & Check Feedback</button> : <div className="p-3.5 bg-emerald-50 border-2 border-emerald-200 rounded-2xl text-center"><div className="text-emerald-800 font-bold text-sm">Quiz score: {quizScore}%</div><p className="text-[11px] text-emerald-700 mt-1">Score saved. Mark the lesson complete when you have finished reviewing the content.</p></div>}
      </section>}

      <div className="pt-6 border-t-2 border-[#E2E8F0] flex flex-col gap-2.5">
        <button onClick={handleToggleCompleted} className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 ${completed ? 'bg-emerald-600 text-white' : 'bg-white border-2 border-[#2D3E50] text-[#2D3E50]'}`}>{completed ? <CheckCircle2 className="w-4 h-4" /> : <Square className="w-4 h-4" />}<span>{completed ? 'Lesson Completed • Mark Incomplete' : 'Mark Lesson as Completed'}</span></button>
        <button onClick={() => navigate('/home')} className="w-full bg-gray-100 text-gray-700 font-bold py-3 px-4 rounded-xl text-xs">Return to Dashboard</button>
      </div>
    </main>
  </div>;
}
