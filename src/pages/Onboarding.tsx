import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setOnboardingComplete } from '../lib/storage';
import { ArrowLeft } from 'lucide-react';

type Step = 1 | 2 | 3;

export function Onboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>(1);
  const [goal, setGoal] = useState('');
  const [experience, setExperience] = useState('');
  const [dataMode, setDataMode] = useState('');

  const handleNext = () => {
    if (step === 1 && goal) setStep(2);
    else if (step === 2 && experience) setStep(3);
    else if (step === 3 && dataMode) {
      setOnboardingComplete({ goal, experience, dataMode });
      navigate('/home', { replace: true });
    }
  };

  const handleBack = () => {
    if (step === 3) setStep(2);
    else if (step === 2) setStep(1);
    else if (step === 1) navigate('/', { replace: true });
  };

  const isNextDisabled = 
    (step === 1 && !goal) || 
    (step === 2 && !experience) || 
    (step === 3 && !dataMode);

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#1A202C] w-full max-w-md mx-auto sm:border-x sm:border-[#E2E8F0]">
      <header className="flex items-center p-4 border-b border-gray-100">
        <button
          onClick={handleBack}
          className="p-2 -ml-2 text-gray-400 hover:text-[#2D3E50] rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D3E50]"
          aria-label="Go back"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="flex-1 text-center font-bold text-[10px] uppercase tracking-wider text-gray-400 mr-8">
          Step {step} of 3
        </div>
      </header>

      <main className="flex-1 p-6 flex flex-col">
        {step === 1 && (
          <div className="space-y-6 flex-1">
            <div>
              <h2 className="text-2xl font-bold text-[#2D3E50] mb-2">What is your goal?</h2>
              <p className="text-gray-500 font-medium">Select the main reason you want to learn about AI.</p>
            </div>
            <div className="space-y-3">
              {[
                'Learn the basics',
                'School or studies',
                'Teaching',
                'Work',
                'My business',
                'Building AI solutions'
              ].map((option) => (
                <label
                  key={option}
                  className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-colors ${
                    goal === option
                      ? 'border-[#E67E22] bg-[#F8F9FA]'
                      : 'border-[#E2E8F0] hover:border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="goal"
                    value={option}
                    checked={goal === option}
                    onChange={(e) => setGoal(e.target.value)}
                    className="w-5 h-5 text-[#E67E22] border-gray-300 focus:ring-[#E67E22]"
                  />
                  <span className="ml-3 font-bold text-[#2D3E50]">{option}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 flex-1">
            <div>
              <h2 className="text-2xl font-bold text-[#2D3E50] mb-2">Your AI experience</h2>
              <p className="text-gray-500 font-medium">How much have you used AI before?</p>
            </div>
            <div className="space-y-3">
              {[
                'New to AI',
                'I\'ve tried AI',
                'I use AI regularly',
                'I build with AI'
              ].map((option) => (
                <label
                  key={option}
                  className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-colors ${
                    experience === option
                      ? 'border-[#E67E22] bg-[#F8F9FA]'
                      : 'border-[#E2E8F0] hover:border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="experience"
                    value={option}
                    checked={experience === option}
                    onChange={(e) => setExperience(e.target.value)}
                    className="w-5 h-5 text-[#E67E22] border-gray-300 focus:ring-[#E67E22]"
                  />
                  <span className="ml-3 font-bold text-[#2D3E50]">{option}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 flex-1">
            <div>
              <h2 className="text-2xl font-bold text-[#2D3E50] mb-2">Data mode</h2>
              <p className="text-gray-500 font-medium">Choose how the app uses your mobile data. You can change this later.</p>
            </div>
            <div className="space-y-4">
              <label
                className={`block p-4 border-2 rounded-xl cursor-pointer transition-colors ${
                  dataMode === 'Low Data' ? 'border-[#E67E22] bg-[#F8F9FA]' : 'border-[#E2E8F0] hover:border-gray-300'
                }`}
              >
                <div className="flex items-center mb-1">
                  <input
                    type="radio"
                    name="dataMode"
                    value="Low Data"
                    checked={dataMode === 'Low Data'}
                    onChange={(e) => setDataMode(e.target.value)}
                    className="w-5 h-5 text-[#E67E22] border-gray-300 focus:ring-[#E67E22]"
                  />
                  <span className="ml-3 font-bold text-[#2D3E50] text-lg">Low Data</span>
                </div>
                <p className="ml-8 text-sm text-gray-500">Text only. Images and videos will not load automatically.</p>
              </label>

              <label
                className={`block p-4 border-2 rounded-xl cursor-pointer transition-colors ${
                  dataMode === 'Standard' ? 'border-[#E67E22] bg-[#F8F9FA]' : 'border-[#E2E8F0] hover:border-gray-300'
                }`}
              >
                <div className="flex items-center mb-1">
                  <input
                    type="radio"
                    name="dataMode"
                    value="Standard"
                    checked={dataMode === 'Standard'}
                    onChange={(e) => setDataMode(e.target.value)}
                    className="w-5 h-5 text-[#E67E22] border-gray-300 focus:ring-[#E67E22]"
                  />
                  <span className="ml-3 font-bold text-[#2D3E50] text-lg">Standard</span>
                </div>
                <p className="ml-8 text-sm text-gray-500">Loads everything normally. Recommended when on Wi-Fi.</p>
              </label>

              <label
                className={`block p-4 border-2 rounded-xl cursor-pointer transition-colors ${
                  dataMode === 'Mostly Offline' ? 'border-[#E67E22] bg-[#F8F9FA]' : 'border-[#E2E8F0] hover:border-gray-300'
                }`}
              >
                <div className="flex items-center mb-1">
                  <input
                    type="radio"
                    name="dataMode"
                    value="Mostly Offline"
                    checked={dataMode === 'Mostly Offline'}
                    onChange={(e) => setDataMode(e.target.value)}
                    className="w-5 h-5 text-[#E67E22] border-gray-300 focus:ring-[#E67E22]"
                  />
                  <span className="ml-3 font-bold text-[#2D3E50] text-lg">Mostly Offline</span>
                </div>
                <p className="ml-8 text-sm text-gray-500">Downloads lessons when on Wi-Fi for offline use. Uses storage space.</p>
              </label>
            </div>
          </div>
        )}

        <div className="pt-6 mt-auto">
          <button
            onClick={handleNext}
            disabled={isNextDisabled}
            className="w-full bg-[#2D3E50] hover:bg-[#1f2b38] disabled:bg-[#E2E8F0] disabled:text-gray-400 text-white font-bold py-4 px-6 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2D3E50] text-lg"
          >
            {step === 3 ? 'Start My Learning Path' : 'Continue'}
          </button>
        </div>
      </main>
    </div>
  );
}
