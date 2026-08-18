import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, RefreshCw, CheckCircle2, GitBranch, Sparkles, HelpCircle } from 'lucide-react';
import { recordLabCompletion } from '../../lib/progress';

interface Monster {
  id: string;
  name: string;
  species: string;
  hasWings: boolean;
  hasHorns: boolean;
  isNocturnal: boolean;
  habitat: 'Savannah' | 'Digital' | 'River';
  color: string;
  icon: string;
}

const TRAINING_DATA: Monster[] = [
  { id: 'm1', name: 'Zazi', species: 'Solar Meerkat', hasWings: false, hasHorns: false, isNocturnal: false, habitat: 'Savannah', color: 'bg-amber-100 border-amber-300 text-amber-800', icon: '🐾' },
  { id: 'm2', name: 'Kwezi', species: 'Lightning Bird (Impundulu)', hasWings: true, hasHorns: false, isNocturnal: true, habitat: 'River', color: 'bg-purple-100 border-purple-300 text-purple-800', icon: '⚡' },
  { id: 'm3', name: 'Thabo', species: 'Cyber Leopard', hasWings: false, hasHorns: false, isNocturnal: true, habitat: 'Digital', color: 'bg-emerald-100 border-emerald-300 text-emerald-800', icon: '🐆' },
  { id: 'm4', name: 'Nyami', species: 'Mamlambo River Serpent', hasWings: false, hasHorns: true, isNocturnal: true, habitat: 'River', color: 'bg-cyan-100 border-cyan-300 text-cyan-800', icon: '🌊' },
  { id: 'm5', name: 'Sipho', species: 'Horned Falcon', hasWings: true, hasHorns: true, isNocturnal: false, habitat: 'Savannah', color: 'bg-orange-100 border-orange-300 text-orange-800', icon: '🦅' },
];

const MYSTERY_TESTS: Monster[] = [
  { id: 't1', name: 'Mystery Beast A', species: 'Lightning Bird (Impundulu)', hasWings: true, hasHorns: false, isNocturnal: true, habitat: 'River', color: 'bg-indigo-100 border-indigo-300 text-indigo-800', icon: '❓' },
  { id: 't2', name: 'Mystery Beast B', species: 'Solar Meerkat', hasWings: false, hasHorns: false, isNocturnal: false, habitat: 'Savannah', color: 'bg-yellow-100 border-yellow-300 text-yellow-800', icon: '❓' },
  { id: 't3', name: 'Mystery Beast C', species: 'Mamlambo River Serpent', hasWings: false, hasHorns: true, isNocturnal: true, habitat: 'River', color: 'bg-blue-100 border-blue-300 text-blue-800', icon: '❓' },
];

export function MonsterMapping() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'training' | 'tree' | 'test'>('training');
  const [selectedSplit1, setSelectedSplit1] = useState<'hasWings' | 'hasHorns' | 'isNocturnal'>('hasWings');
  const [testIndex, setTestIndex] = useState(0);
  const [classifiedResults, setClassifiedResults] = useState<{ id: string; predicted: string; correct: boolean }[]>([]);

  const currentTest = MYSTERY_TESTS[testIndex];

  const handleClassifyTest = (predictedSpecies: string) => {
    if (!currentTest) return;
    const isCorrect = currentTest.species === predictedSpecies;
    const nextResults = [...classifiedResults, { id: currentTest.id, predicted: predictedSpecies, correct: isCorrect }];
    setClassifiedResults(nextResults);

    if (testIndex + 1 < MYSTERY_TESTS.length) {
      setTestIndex(testIndex + 1);
    } else {
      recordLabCompletion('lab-monster-mapping');
    }
  };

  const handleReset = () => {
    setClassifiedResults([]);
    setTestIndex(0);
    setActiveTab('training');
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F0F2F5] pb-24">
      {/* Header */}
      <header className="bg-white border-b-2 border-[#E2E8F0] p-4 sticky top-0 z-20 flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="p-2 -ml-2 text-gray-500 hover:text-[#2D3E50] rounded-lg focus-visible:ring-2 focus-visible:ring-[#2D3E50]"
          aria-label="Go back"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="text-center">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#E67E22] block">Unplugged Lab</span>
          <h1 className="text-sm font-bold text-[#2D3E50]">Monster Mapping (Decision Trees)</h1>
        </div>
        <button
          onClick={handleReset}
          className="p-2 text-gray-500 hover:text-[#2D3E50] rounded-lg"
          title="Reset Lab"
        >
          <RefreshCw className="w-5 h-5" />
        </button>
      </header>

      <main className="p-4 sm:p-6 flex flex-col gap-4 w-full max-w-2xl mx-auto">
        {/* Banner */}
        <div className="bg-[#2D3E50] text-white p-4 rounded-2xl flex items-start gap-3 shadow-sm">
          <GitBranch className="w-6 h-6 text-[#E67E22] shrink-0 mt-0.5" />
          <div className="text-xs">
            <h2 className="font-bold text-sm text-white mb-1">Supervised Learning & Decision Trees</h2>
            <p className="text-gray-300 leading-relaxed">
              Machine Learning classifiers look at labeled creature features (wings, horns, sleep cycles) and construct logical decision paths to categorize new, unknown samples!
            </p>
          </div>
        </div>

        {/* Lab Step Tabs */}
        <div className="flex bg-white p-1 rounded-xl border-2 border-[#E2E8F0] w-full">
          <button
            onClick={() => setActiveTab('training')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-colors ${
              activeTab === 'training' ? 'bg-[#2D3E50] text-white' : 'text-gray-600 hover:text-[#2D3E50]'
            }`}
          >
            1. Training Data
          </button>
          <button
            onClick={() => setActiveTab('tree')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-colors ${
              activeTab === 'tree' ? 'bg-[#2D3E50] text-white' : 'text-gray-600 hover:text-[#2D3E50]'
            }`}
          >
            2. Decision Tree
          </button>
          <button
            onClick={() => setActiveTab('test')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-colors ${
              activeTab === 'test' ? 'bg-[#2D3E50] text-white' : 'text-gray-600 hover:text-[#2D3E50]'
            }`}
          >
            3. Test Classifier
          </button>
        </div>

        {/* Tab 1: Training Data */}
        {activeTab === 'training' && (
          <div className="bg-white p-5 rounded-2xl border-2 border-[#E2E8F0] space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-[#2D3E50]">Labeled Creature Dataset</h3>
                <p className="text-[11px] text-gray-500">Each entry has specific categorical features.</p>
              </div>
              <span className="text-[10px] font-bold bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md">
                5 Records
              </span>
            </div>

            <div className="flex flex-col gap-2.5">
              {TRAINING_DATA.map((monster) => (
                <div
                  key={monster.id}
                  className={`p-3.5 rounded-xl border-2 flex items-center justify-between ${monster.color}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{monster.icon}</span>
                    <div>
                      <h4 className="font-bold text-xs">{monster.name} ({monster.species})</h4>
                      <p className="text-[10px] opacity-80">Habitat: {monster.habitat}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-[10px] font-bold">
                    <span className={`px-2 py-0.5 rounded ${monster.hasWings ? 'bg-black/10' : 'bg-transparent line-through opacity-50'}`}>
                      Wings
                    </span>
                    <span className={`px-2 py-0.5 rounded ${monster.hasHorns ? 'bg-black/10' : 'bg-transparent line-through opacity-50'}`}>
                      Horns
                    </span>
                    <span className={`px-2 py-0.5 rounded ${monster.isNocturnal ? 'bg-black/10' : 'bg-transparent line-through opacity-50'}`}>
                      Night
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setActiveTab('tree')}
              className="w-full bg-[#2D3E50] text-white font-bold text-xs py-3 rounded-xl hover:bg-slate-700 transition-colors"
            >
              Continue to Step 2: Build Decision Tree
            </button>
          </div>
        )}

        {/* Tab 2: Decision Tree Visualizer */}
        {activeTab === 'tree' && (
          <div className="bg-white p-5 rounded-2xl border-2 border-[#E2E8F0] space-y-4">
            <div>
              <h3 className="text-sm font-bold text-[#2D3E50]">Root Feature Split</h3>
              <p className="text-[11px] text-gray-500">Choose the primary question to branch our classifier.</p>
            </div>

            <div className="flex gap-2">
              {[
                { key: 'hasWings', label: 'Does it have Wings?' },
                { key: 'hasHorns', label: 'Does it have Horns?' },
                { key: 'isNocturnal', label: 'Is it Nocturnal?' },
              ].map((split) => (
                <button
                  key={split.key}
                  onClick={() => setSelectedSplit1(split.key as any)}
                  className={`flex-1 p-2.5 rounded-xl border-2 text-xs font-bold text-center transition-all ${
                    selectedSplit1 === split.key
                      ? 'border-[#E67E22] bg-orange-50 text-[#E67E22]'
                      : 'border-[#E2E8F0] hover:border-gray-300 text-gray-600'
                  }`}
                >
                  {split.label}
                </button>
              ))}
            </div>

            {/* Visual Tree Diagram */}
            <div className="p-4 bg-[#F8F9FA] border-2 border-[#E2E8F0] rounded-xl flex flex-col items-center space-y-3">
              <div className="bg-[#2D3E50] text-white text-xs font-bold px-4 py-2 rounded-xl shadow-sm">
                Root: {selectedSplit1 === 'hasWings' ? 'Wings = True?' : selectedSplit1 === 'hasHorns' ? 'Horns = True?' : 'Nocturnal = True?'}
              </div>

              <div className="w-full flex items-center justify-around">
                <div className="flex flex-col items-center">
                  <span className="text-[10px] font-bold text-emerald-600 mb-1">YES branch</span>
                  <div className="w-0.5 h-6 bg-emerald-500"></div>
                  <div className="bg-white border-2 border-emerald-300 p-2.5 rounded-xl text-center text-xs">
                    <p className="font-bold text-emerald-800">
                      {selectedSplit1 === 'hasWings' ? 'Birds & Falcons' : selectedSplit1 === 'hasHorns' ? 'River Serpents' : 'Night Creatures'}
                    </p>
                    <p className="text-[9px] text-gray-500">
                      {TRAINING_DATA.filter((m) => (m as any)[selectedSplit1]).length} matches
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <span className="text-[10px] font-bold text-rose-600 mb-1">NO branch</span>
                  <div className="w-0.5 h-6 bg-rose-500"></div>
                  <div className="bg-white border-2 border-rose-300 p-2.5 rounded-xl text-center text-xs">
                    <p className="font-bold text-rose-800">
                      {selectedSplit1 === 'hasWings' ? 'Land/River Beasts' : selectedSplit1 === 'hasHorns' ? 'Meerkats & Leopards' : 'Day Creatures'}
                    </p>
                    <p className="text-[9px] text-gray-500">
                      {TRAINING_DATA.filter((m) => !(m as any)[selectedSplit1]).length} matches
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => setActiveTab('test')}
              className="w-full bg-[#2D3E50] text-white font-bold text-xs py-3 rounded-xl hover:bg-slate-700 transition-colors"
            >
              Ready to Test Mystery Creatures!
            </button>
          </div>
        )}

        {/* Tab 3: Testing Classifier */}
        {activeTab === 'test' && (
          <div className="bg-white p-5 rounded-2xl border-2 border-[#E2E8F0] space-y-4">
            {testIndex < MYSTERY_TESTS.length ? (
              <>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-[#2D3E50]">Classify Unknown Creature</h3>
                    <p className="text-[11px] text-gray-500">
                      Sample {testIndex + 1} of {MYSTERY_TESTS.length}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-[#E67E22] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                    Test Mode
                  </span>
                </div>

                {/* Mystery Card */}
                <div className="bg-indigo-50 border-2 border-indigo-200 p-4 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">🐾</span>
                    <div>
                      <h4 className="font-bold text-sm text-indigo-950">{currentTest.name}</h4>
                      <p className="text-xs text-indigo-700">Habitat: {currentTest.habitat}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 text-[10px] font-bold text-right">
                    <span>Wings: {currentTest.hasWings ? '✅ Yes' : '❌ No'}</span>
                    <span>Horns: {currentTest.hasHorns ? '✅ Yes' : '❌ No'}</span>
                    <span>Nocturnal: {currentTest.isNocturnal ? '✅ Yes' : '❌ No'}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-bold text-[#2D3E50]">Select Predicted Species:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {['Solar Meerkat', 'Lightning Bird (Impundulu)', 'Mamlambo River Serpent', 'Cyber Leopard'].map((sp) => (
                      <button
                        key={sp}
                        onClick={() => handleClassifyTest(sp)}
                        className="p-3 rounded-xl border-2 border-[#E2E8F0] hover:border-[#E67E22] hover:bg-orange-50/50 text-left text-xs font-bold text-[#1A202C] transition-all"
                      >
                        {sp}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center space-y-3 py-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-base font-bold text-[#2D3E50]">Classifier Evaluation Complete!</h3>
                <p className="text-xs text-gray-600 max-w-sm mx-auto">
                  You successfully tested your decision tree classification model against unseen test samples!
                </p>

                <div className="bg-[#F8F9FA] p-3 rounded-xl border-2 border-[#E2E8F0] space-y-1 text-left text-xs">
                  {classifiedResults.map((res, i) => (
                    <div key={i} className="flex items-center justify-between py-1">
                      <span className="font-medium text-gray-700">Sample {i + 1}: {res.predicted}</span>
                      <span className={`font-bold ${res.correct ? 'text-emerald-600' : 'text-rose-600'}`}>
                        {res.correct ? '✅ 100% Match' : '❌ Misclassified'}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2 justify-center pt-2">
                  <button
                    onClick={handleReset}
                    className="bg-[#2D3E50] text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-slate-700"
                  >
                    Try Again
                  </button>
                  <button
                    onClick={() => navigate('/practice')}
                    className="bg-white text-[#2D3E50] border-2 border-[#E2E8F0] text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-gray-50"
                  >
                    Back to Lab Hub
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
