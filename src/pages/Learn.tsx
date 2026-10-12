import { useEffect, useState } from 'react';
import { BookOpen, CheckCircle2, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { api } from '../lib/curriculum/api';
import { getUserProgress, getLevel2TestProgress, getLevel3TestProgress, getLevel4TestProgress, isLevel2TestPreviewEnabled, isLevel3TestPreviewEnabled, isLevel4TestPreviewEnabled, setLevel2TestPreview, setLevel3TestPreview, setLevel4TestPreview } from '../lib/progress';
import { LEVEL_TWO_MODULES, LEVEL_THREE_MODULES, LEVEL_FOUR_MODULES, PROGRAMME_LEVELS } from '../lib/programmeLevels';

export function Learn() {
  const navigate = useNavigate();
  const modules = api.getModulesForLevel();
  const [progress, setProgress] = useState(getUserProgress());
  const [selectedLevel, setSelectedLevel] = useState(1);
  const [level2TestProgress, setLevel2TestProgress] = useState(getLevel2TestProgress());
  const [level3TestProgress, setLevel3TestProgress] = useState(getLevel3TestProgress());
  const [level4TestProgress, setLevel4TestProgress] = useState(getLevel4TestProgress());
  const [level2Preview, setLevel2Preview] = useState(isLevel2TestPreviewEnabled());
  const [level3Preview, setLevel3Preview] = useState(isLevel3TestPreviewEnabled());
  const [level4Preview, setLevel4Preview] = useState(isLevel4TestPreviewEnabled());

  useEffect(() => {
    const handleUpdate = () => {
      setProgress(getUserProgress());
      setLevel2TestProgress(getLevel2TestProgress());
      setLevel3TestProgress(getLevel3TestProgress());
      setLevel4TestProgress(getLevel4TestProgress());
      setLevel2Preview(isLevel2TestPreviewEnabled());
      setLevel3Preview(isLevel3TestPreviewEnabled());
      setLevel4Preview(isLevel4TestPreviewEnabled());
    };
    window.addEventListener('mzansi_progress_updated', handleUpdate);
    return () => window.removeEventListener('mzansi_progress_updated', handleUpdate);
  }, []);

  const level1Ids = modules.flatMap((module) => module.lessonIds);
  const level1Complete = level1Ids.length > 0 && level1Ids.every((id) => progress.completedLessons.includes(id));
  const level2Ids = LEVEL_TWO_MODULES.flatMap((module) => module.lessonId ? [module.lessonId] : []);
  const level2Progress = level2Preview && !level1Complete ? level2TestProgress : progress;
  const level2Complete = level2Ids.length === LEVEL_TWO_MODULES.length && level2Ids.every((id) => level2Progress.completedLessons.includes(id));
  const level2RealComplete = level1Complete && level2Ids.length === LEVEL_TWO_MODULES.length && level2Ids.every((id) => progress.completedLessons.includes(id));
  const level2Accessible = level1Complete || level2Preview;

  const level3Ids = LEVEL_THREE_MODULES.flatMap((module) => module.lessonId ? [module.lessonId] : []);
  const level3Progress = level3Preview && !level2RealComplete ? level3TestProgress : progress;
  const level3Complete = level3Ids.length === LEVEL_THREE_MODULES.length && level3Ids.every((id) => level3Progress.completedLessons.includes(id));
  const level3RealComplete = level2RealComplete && level3Ids.length === LEVEL_THREE_MODULES.length && level3Ids.every((id) => progress.completedLessons.includes(id));
  const level3Accessible = level2RealComplete || level3Preview;
  const level4Progress = level4Preview && !level3RealComplete ? level4TestProgress : progress;
  const level4Accessible = level3RealComplete || level4Preview;

  const openModule = (moduleId: string, lessonIds: string[]) => {
    if (lessonIds.length === 1) {
      navigate(`/learn/${moduleId}/lesson/${lessonIds[0]}`);
      return;
    }
    navigate(`/learn/${moduleId}`);
  };

  const toggleLevel2Preview = () => {
    if (!level2Preview) {
      setLevel3TestPreview(false);
      setLevel4TestPreview(false);
    }
    setLevel2TestPreview(!level2Preview);
  };

  const toggleLevel3Preview = () => {
    if (!level3Preview) {
      setLevel2TestPreview(false);
      setLevel4TestPreview(false);
    }
    setLevel3TestPreview(!level3Preview);
  };

  const toggleLevel4Preview = () => {
    if (!level4Preview) {
      setLevel2TestPreview(false);
      setLevel3TestPreview(false);
    }
    setLevel4TestPreview(!level4Preview);
  };

  return (
    <div className="p-4 sm:p-6 space-y-6 pb-24">
      <header>
        <p className="text-xs font-bold uppercase tracking-wider text-[#E67E22]">32-module learning journey</p>
        <h1 className="text-2xl font-bold text-[#2D3E50] mt-1">Learn</h1>
        <p className="text-sm font-medium text-gray-500 mt-1">Understand, apply, create, then solve meaningful problems with AI.</p>
      </header>

      {level2Preview && !level1Complete && (
        <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-3 text-xs text-amber-900">
          <strong>LEVEL 2 TEST PREVIEW ACTIVE.</strong> Preview completions and quiz scores are stored separately from learner progress.
        </div>
      )}
      {level3Preview && !level2RealComplete && (
        <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-3 text-xs text-amber-900">
          <strong>LEVEL 3 TEST PREVIEW ACTIVE.</strong> Level 3 is open for build verification only. Test completions and quiz scores are isolated. Level 4 remains locked.
        </div>
      )}
      {level4Preview && !level3RealComplete && (
        <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-3 text-xs text-amber-900">
          <strong>LEVEL 4 TEST PREVIEW ACTIVE.</strong> Level 4 is open for build verification only. Test completions and quiz scores are isolated from learner progress.
        </div>
      )}

      <section aria-label="Choose a learning level">
        <h2 className="text-base font-bold text-[#2D3E50] mb-3">Choose your level</h2>
        <div className="grid grid-cols-2 gap-3">
          {PROGRAMME_LEVELS.map((level) => {
            const unlocked = level.id === 1 || (level.id === 2 && level2Accessible) || (level.id === 3 && level3Accessible) || (level.id === 4 && level4Accessible);
            const ids = level.id === 1 ? level1Ids : level.id === 2 ? level2Ids : level.id === 3 ? level3Ids : LEVEL_FOUR_MODULES.flatMap((m) => m.lessonId ? [m.lessonId] : []);
            const levelProgress = level.id === 2 ? level2Progress : level.id === 3 ? level3Progress : level.id === 4 ? level4Progress : progress;
            const count = ids.filter((id) => levelProgress.completedLessons.includes(id)).length;
            return <button key={level.id} type="button" disabled={!unlocked} onClick={() => setSelectedLevel(level.id)} aria-pressed={selectedLevel === level.id} className={`rounded-2xl border-2 p-3 text-left min-h-[132px] flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 ${selectedLevel === level.id ? 'border-[#E67E22] bg-orange-50' : unlocked ? 'border-[#DCE3E9] bg-white' : 'border-gray-200 bg-gray-50 opacity-70'}`}>
              <div className="flex items-center justify-between"><span className="w-9 h-9 rounded-xl bg-[#2D3E50] text-white flex items-center justify-center font-bold">{level.id}</span>{!unlocked ? <Lock className="w-4 h-4 text-gray-500" /> : count === ids.length && ids.length > 0 ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <BookOpen className="w-4 h-4 text-[#E67E22]" />}</div>
              <div><p className="text-xs font-bold uppercase text-[#2D3E50] mt-2">{level.stage}</p><p className="text-[11px] text-gray-600 leading-snug mt-1">{level.title}</p><p className="text-[11px] font-semibold text-gray-500 mt-2">{count}/{ids.length || 8} modules {!unlocked ? '· Locked' : ''}</p></div>
            </button>;
          })}
        </div>
      </section>

      <section aria-label="Modules for selected level" className="space-y-3">
        <div className="flex items-center justify-between gap-3"><h2 className="text-base font-bold text-[#2D3E50]">Level {selectedLevel} · 8 modules</h2><span className="text-xs text-gray-500">Tap a module</span></div>
        <div className="grid grid-cols-2 gap-3">
          {(selectedLevel === 1 ? modules : selectedLevel === 2 ? LEVEL_TWO_MODULES : selectedLevel === 3 ? LEVEL_THREE_MODULES : LEVEL_FOUR_MODULES).map((mod, index) => {
            const ids = 'lessonIds' in mod ? mod.lessonIds : mod.lessonId ? [mod.lessonId] : [];
            const currentProgress = selectedLevel === 2 ? level2Progress : selectedLevel === 3 ? level3Progress : selectedLevel === 4 ? level4Progress : progress;
            const done = ids.length > 0 && ids.every((id) => currentProgress.completedLessons.includes(id));
            const accessible = selectedLevel === 1 || (selectedLevel === 2 && level2Accessible) || (selectedLevel === 3 && level3Accessible) || (selectedLevel === 4 && level4Accessible);
            return <button key={mod.id} type="button" disabled={!accessible || ids.length === 0} onClick={() => openModule(mod.id, ids)} className="rounded-xl border-2 border-[#E2E8F0] bg-white p-3 text-left min-h-[115px] flex flex-col justify-between disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500">
              <div className="flex items-center justify-between"><span className="text-[10px] font-bold uppercase text-[#E67E22]">Module {index + 1}</span>{done ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : !accessible ? <Lock className="w-4 h-4 text-gray-400" /> : <BookOpen className="w-4 h-4 text-[#2D3E50]" />}</div>
              <h3 className="text-sm font-bold text-[#2D3E50] leading-snug mt-2">{mod.title}</h3>
              <p className="text-[11px] text-gray-500 mt-2">{done ? 'Completed' : accessible ? 'Open lesson' : 'Locked'}</p>
            </button>;
          })}
        </div>
      </section>

      {selectedLevel === 2 && !level1Complete && <button onClick={toggleLevel2Preview} className="w-full rounded-xl border-2 border-amber-300 bg-amber-50 text-amber-900 p-3 text-xs font-bold">{level2Preview ? 'Exit Level 2 Test Preview' : 'Open Level 2 Test Preview'}</button>}
      {selectedLevel === 3 && !level2RealComplete && <button onClick={toggleLevel3Preview} className="w-full rounded-xl border-2 border-amber-300 bg-amber-50 text-amber-900 p-3 text-xs font-bold">{level3Preview ? 'Exit Level 3 Test Preview' : 'Open Level 3 Test Preview'}</button>}
      {selectedLevel === 4 && !level3RealComplete && <button onClick={toggleLevel4Preview} className="w-full rounded-xl border-2 border-amber-300 bg-amber-50 text-amber-900 p-3 text-xs font-bold">{level4Preview ? 'Exit Level 4 Test Preview' : 'Open Level 4 Test Preview'}</button>}
    </div>
  );
}
