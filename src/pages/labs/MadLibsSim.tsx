import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Sparkles, RefreshCw, Sliders, Info, CheckCircle2, Play } from 'lucide-react';
import { recordLabCompletion } from '../../lib/progress';

interface TokenChoice {
  token: string;
  probability: number;
  explanation?: string;
}

interface StoryPreset {
  title: string;
  category: string;
  seedText: string;
  tokenSteps: {
    context: string;
    options: TokenChoice[];
  }[];
}

const PRESETS: StoryPreset[] = [
  {
    title: 'The Soweto Robotics Fair',
    category: 'STEM & Community',
    seedText: 'At the Soweto tech expo, learners built an autonomous solar-powered',
    tokenSteps: [
      {
        context: 'At the Soweto tech expo, learners built an autonomous solar-powered',
        options: [
          { token: ' wheelchair', probability: 54, explanation: 'High probability based on community health assistive projects.' },
          { token: ' rover', probability: 28, explanation: 'Common tech contest robotics keyword.' },
          { token: ' drone', probability: 14, explanation: 'Frequent aerospace topic.' },
          { token: ' toaster', probability: 4, explanation: 'Uncommon prediction in robotics.' },
        ],
      },
      {
        context: 'that can navigate busy township streets while helping elderly residents transport',
        options: [
          { token: ' groceries', probability: 62, explanation: 'High contextual relevance to daily community needs.' },
          { token: ' water', probability: 24, explanation: 'Relevant municipal assistance context.' },
          { token: ' computers', probability: 10, explanation: 'Tech school supply context.' },
          { token: ' penguins', probability: 4, explanation: 'Low probability in Soweto context.' },
        ],
      },
      {
        context: 'safely. The judges cheered when the device used an algorithm to avoid a sudden pothole on',
        options: [
          { token: ' Vilakazi Street.', probability: 58, explanation: 'Most famous local geographic reference in training data.' },
          { token: ' the pavement.', probability: 30, explanation: 'General street infrastructure term.' },
          { token: ' the highway.', probability: 9, explanation: 'Alternative roadway.' },
          { token: ' the moon.', probability: 3, explanation: 'Hallucinatory outlier without high temperature.' },
        ],
      },
    ],
  },
  {
    title: 'Minibus Taxi Route AI',
    category: 'Smart Mobility',
    seedText: 'To avoid the morning gridlock on the N1 highway, the driver decided to',
    tokenSteps: [
      {
        context: 'To avoid the morning gridlock on the N1 highway, the driver decided to',
        options: [
          { token: ' take an alternate route', probability: 48, explanation: 'Standard navigation language pattern.' },
          { token: ' consult a real-time traffic app', probability: 36, explanation: 'Tech-enabled transport response.' },
          { token: ' stop for fresh amagwinya', probability: 12, explanation: 'Cultural morning habit.' },
          { token: ' fly over the bridge', probability: 4, explanation: 'Sci-fi outlier.' },
        ],
      },
      {
        context: 'through the neighborhood. An onboard smart device analyzed commuter patterns to estimate the exact arrival time at',
        options: [
          { token: ' Bree Taxi Rank.', probability: 55, explanation: 'Major Johannesburg transit hub.' },
          { token: ' Cape Town Station.', probability: 27, explanation: 'Major Western Cape transport interchange.' },
          { token: ' Durban Central.', probability: 14, explanation: 'KZN commuter hub.' },
          { token: ' the airport runway.', probability: 4, explanation: 'Low probability.' },
        ],
      },
    ],
  },
];

export function MadLibsSim() {
  const navigate = useNavigate();
  const [selectedPresetIndex, setSelectedPresetIndex] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [generatedTokens, setGeneratedTokens] = useState<string[]>([]);
  const [temperature, setTemperature] = useState<number>(0.3); // 0.1 (strict) to 1.0 (creative)
  const [isCompleted, setIsCompleted] = useState(false);

  const preset = PRESETS[selectedPresetIndex];
  const currentStep = preset.tokenSteps[currentStepIndex];

  const handleSelectToken = (token: string) => {
    const updated = [...generatedTokens, token];
    setGeneratedTokens(updated);

    if (currentStepIndex + 1 < preset.tokenSteps.length) {
      setCurrentStepIndex(currentStepIndex + 1);
    } else {
      setIsCompleted(true);
      recordLabCompletion('lab-madlibs-sim');
    }
  };

  const handleAutoPredict = () => {
    if (!currentStep) return;

    // Apply temperature to sample
    const rand = Math.random();
    let chosen: TokenChoice;

    if (temperature < 0.4) {
      // Deterministic / Greedy: always pick #1
      chosen = currentStep.options[0];
    } else if (temperature < 0.7) {
      // Balanced: pick #1 (70%) or #2 (30%)
      chosen = rand < 0.7 ? currentStep.options[0] : currentStep.options[1];
    } else {
      // High temperature / Creative: random weighted pick across all
      const options = currentStep.options;
      const idx = Math.floor(Math.random() * options.length);
      chosen = options[idx];
    }

    handleSelectToken(chosen.token);
  };

  const handleReset = (presetIdx: number = selectedPresetIndex) => {
    setSelectedPresetIndex(presetIdx);
    setCurrentStepIndex(0);
    setGeneratedTokens([]);
    setIsCompleted(false);
  };

  // Calculate story display
  const currentStoryText = preset.seedText + generatedTokens.join('');

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
          <h1 className="text-sm font-bold text-[#2D3E50]">MadLibs AI Token Simulator</h1>
        </div>
        <button
          onClick={() => handleReset()}
          className="p-2 text-gray-500 hover:text-[#2D3E50] rounded-lg"
          title="Restart Simulation"
        >
          <RefreshCw className="w-5 h-5" />
        </button>
      </header>

      <main className="p-4 sm:p-6 flex flex-col gap-4 w-full max-w-2xl mx-auto">
        {/* Concept Banner */}
        <div className="bg-[#2D3E50] text-white p-4 rounded-2xl flex items-start gap-3 shadow-sm">
          <Sparkles className="w-6 h-6 text-[#E67E22] shrink-0 mt-0.5" />
          <div className="text-xs">
            <h2 className="font-bold text-sm text-white mb-1">How Next-Token Prediction Works</h2>
            <p className="text-gray-300 leading-relaxed">
              Generative AI systems (like ChatGPT) do not "think". They calculate probability distributions for which word or token should come next based on previous text context.
            </p>
          </div>
        </div>

        {/* Preset Selector */}
        <div className="bg-white p-4 rounded-2xl border-2 border-[#E2E8F0]">
          <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-2">
            Select Training Prompt
          </label>
          <div className="flex flex-col sm:flex-row gap-2 w-full">
            {PRESETS.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleReset(idx)}
                className={`flex-1 p-3 rounded-xl border-2 text-left transition-all ${
                  selectedPresetIndex === idx
                    ? 'border-[#2D3E50] bg-slate-50 font-bold text-[#2D3E50]'
                    : 'border-[#E2E8F0] hover:border-gray-300 text-gray-600'
                }`}
              >
                <div className="text-xs font-bold">{p.title}</div>
                <div className="text-[10px] text-gray-400">{p.category}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Story Workspace */}
        <div className="bg-white p-5 rounded-2xl border-2 border-[#E2E8F0]">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
              Live Generated Output
            </span>
            <span className="text-xs font-bold text-[#E67E22] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Step {Math.min(currentStepIndex + 1, preset.tokenSteps.length)} of {preset.tokenSteps.length}
            </span>
          </div>

          <div className="p-4 bg-[#F8F9FA] border-2 border-[#E2E8F0] rounded-xl text-base leading-relaxed text-[#1A202C]">
            <span className="text-gray-700">{preset.seedText}</span>
            {generatedTokens.map((token, idx) => (
              <span
                key={idx}
                className="bg-orange-100 text-[#2D3E50] font-bold px-1.5 py-0.5 rounded mx-0.5 animate-pulse inline-block"
              >
                {token}
              </span>
            ))}
            {!isCompleted && <span className="inline-block w-2 h-4 bg-[#E67E22] ml-1 animate-ping"></span>}
          </div>
        </div>

        {/* Temperature / Creativity Control */}
        <div className="bg-white p-4 rounded-2xl border-2 border-[#E2E8F0]">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <Sliders className="w-4 h-4 text-[#2D3E50]" />
              <label className="text-xs font-bold text-[#2D3E50]">Model Temperature: {temperature.toFixed(1)}</label>
            </div>
            <span className="text-[10px] font-bold uppercase text-gray-400">
              {temperature < 0.4 ? 'Deterministic (Safe)' : temperature < 0.7 ? 'Balanced' : 'High Creativity'}
            </span>
          </div>
          <input
            type="range"
            min="0.1"
            max="1.0"
            step="0.1"
            value={temperature}
            onChange={(e) => setTemperature(parseFloat(e.target.value))}
            className="w-full accent-[#E67E22] cursor-pointer"
          />
          <p className="text-[11px] text-gray-500 mt-1">
            Low temperature favors high-probability tokens. High temperature samples from less probable, creative candidates.
          </p>
        </div>

        {/* Interactive Prediction Options */}
        {!isCompleted && currentStep && (
          <div className="bg-white p-5 rounded-2xl border-2 border-[#E2E8F0]">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="text-sm font-bold text-[#2D3E50]">Next Token Candidates</h3>
                <p className="text-[11px] text-gray-500">Tap a token to append it or use the auto-predict model.</p>
              </div>
              <button
                onClick={handleAutoPredict}
                className="flex items-center gap-1.5 bg-[#2D3E50] text-white text-xs font-bold px-3 py-2 rounded-xl hover:bg-slate-700 transition-colors shadow-sm"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                AI Predict
              </button>
            </div>

            <div className="flex flex-col gap-2.5">
              {currentStep.options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectToken(opt.token)}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl border-2 border-[#E2E8F0] hover:border-[#E67E22] hover:bg-orange-50/40 text-left transition-all group"
                >
                  <div className="flex items-center gap-2 mb-1 sm:mb-0">
                    <span className="w-6 h-6 rounded-md bg-gray-100 group-hover:bg-[#E67E22] group-hover:text-white flex items-center justify-center text-xs font-bold text-gray-600 transition-colors">
                      {idx + 1}
                    </span>
                    <span className="font-bold text-[#1A202C] text-sm group-hover:text-[#2D3E50]">
                      "{opt.token.trim()}"
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    {opt.explanation && (
                      <span className="text-[11px] text-gray-400 hidden sm:inline-block max-w-xs truncate">
                        {opt.explanation}
                      </span>
                    )}
                    <div className="flex items-center gap-1.5 shrink-0">
                      <div className="w-16 bg-gray-100 h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-[#E67E22] h-full rounded-full"
                          style={{ width: `${opt.probability}%` }}
                        ></div>
                      </div>
                      <span className="text-xs font-bold text-[#2D3E50] w-9 text-right">{opt.probability}%</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Completion Message */}
        {isCompleted && (
          <div className="bg-emerald-50 border-2 border-emerald-300 p-5 rounded-2xl text-center space-y-3">
            <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
            <h3 className="text-base font-bold text-emerald-900">Sequence Generation Complete!</h3>
            <p className="text-xs text-emerald-800 max-w-md mx-auto">
              You experienced how large language models predict tokens sequentially. Try changing the prompt or adjusting the temperature slider!
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center pt-2">
              <button
                onClick={() => handleReset()}
                className="bg-[#2D3E50] text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-slate-700"
              >
                Run Again
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
      </main>
    </div>
  );
}
