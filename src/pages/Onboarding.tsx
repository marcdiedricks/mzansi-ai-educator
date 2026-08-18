import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setOnboardingComplete, type LearnerLanguage } from '../lib/storage';
import { ArrowLeft } from 'lucide-react';

type Step = 1 | 2 | 3 | 4;

const languageOptions: Array<{ code: LearnerLanguage; name: string; welcome: string }> = [
  { code: 'en', name: 'English', welcome: 'Learn in English' },
  { code: 'af', name: 'Afrikaans', welcome: 'Leer in Afrikaans' },
  { code: 'xh', name: 'isiXhosa', welcome: 'Funda ngesiXhosa' },
];

export function Onboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>(1);
  const [language, setLanguage] = useState<LearnerLanguage | ''>('');
  const [goal, setGoal] = useState('');
  const [experience, setExperience] = useState('');
  const [dataMode, setDataMode] = useState('');

  const handleNext = () => {
    if (step === 1 && language) setStep(2);
    else if (step === 2 && goal) setStep(3);
    else if (step === 3 && experience) setStep(4);
    else if (step === 4 && dataMode && language) {
      setOnboardingComplete({ language, goal, experience, dataMode });
      navigate('/home', { replace: true });
    }
  };

  const handleBack = () => {
    if (step > 1) setStep((step - 1) as Step);
    else navigate('/', { replace: true });
  };

  const isNextDisabled =
    (step === 1 && !language) ||
    (step === 2 && !goal) ||
    (step === 3 && !experience) ||
    (step === 4 && !dataMode);

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#1A202C] w-full max-w-md mx-auto sm:border-x sm:border-[#E2E8F0]">
      <header className="flex items-center p-4 border-b border-gray-100">
        <button onClick={handleBack} className="p-2 -ml-2 text-gray-400 hover:text-[#2D3E50] rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D3E50]" aria-label="Go back">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="flex-1 text-center font-bold text-[10px] uppercase tracking-wider text-gray-400 mr-8">Step {step} of 4</div>
      </header>

      <main className="flex-1 p-6 flex flex-col">
        {step === 1 && (
          <div className="space-y-6 flex-1">
            <div>
              <h2 className="text-2xl font-bold text-[#2D3E50] mb-2">Choose your learning language</h2>
              <p className="text-gray-500 font-medium">Kies jou leertaal · Khetha ulwimi lokufunda</p>
              <p className="text-sm text-gray-500 mt-3">AI terms stay consistent. Explanations will help you understand and use the correct terminology.</p>
            </div>
            <div className="space-y-3">
              {languageOptions.map((option) => (
                <label key={option.code} className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-colors ${language === option.code ? 'border-[#E67E22] bg-[#F8F9FA]' : 'border-[#E2E8F0] hover:border-gray-300'}`}>
                  <input type="radio" name="language" value={option.code} checked={language === option.code} onChange={() => setLanguage(option.code)} className="w-5 h-5 text-[#E67E22] border-gray-300 focus:ring-[#E67E22]" />
                  <div className="ml-3">
                    <div className="font-bold text-[#2D3E50]">{option.name}</div>
                    <div className="text-sm text-gray-500">{option.welcome}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 flex-1">
            <div><h2 className="text-2xl font-bold text-[#2D3E50] mb-2">What is your goal?</h2><p className="text-gray-500 font-medium">Select the main reason you want to learn about AI.</p></div>
            <div className="space-y-3">
              {['Learn the basics', 'School or studies', 'Teaching', 'Work', 'My business', 'Building AI solutions'].map((option) => (
                <label key={option} className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-colors ${goal === option ? 'border-[#E67E22] bg-[#F8F9FA]' : 'border-[#E2E8F0] hover:border-gray-300'}`}>
                  <input type="radio" name="goal" value={option} checked={goal === option} onChange={(e) => setGoal(e.target.value)} className="w-5 h-5 text-[#E67E22] border-gray-300 focus:ring-[#E67E22]" />
                  <span className="ml-3 font-bold text-[#2D3E50]">{option}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 flex-1">
            <div><h2 className="text-2xl font-bold text-[#2D3E50] mb-2">Your AI experience</h2><p className="text-gray-500 font-medium">How much have you used AI before?</p></div>
            <div className="space-y-3">
              {['New to AI', "I've tried AI", 'I use AI regularly', 'I build with AI'].map((option) => (
                <label key={option} className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-colors ${experience === option ? 'border-[#E67E22] bg-[#F8F9FA]' : 'border-[#E2E8F0] hover:border-gray-300'}`}>
                  <input type="radio" name="experience" value={option} checked={experience === option} onChange={(e) => setExperience(e.target.value)} className="w-5 h-5 text-[#E67E22] border-gray-300 focus:ring-[#E67E22]" />
                  <span className="ml-3 font-bold text-[#2D3E50]">{option}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6 flex-1">
            <div><h2 className="text-2xl font-bold text-[#2D3E50] mb-2">Data mode</h2><p className="text-gray-500 font-medium">Choose how the app uses your mobile data. You can change this later.</p></div>
            <div className="space-y-4">
              {[
                ['Low Data', 'Uses as little mobile data as possible.'],
                ['Standard', 'Loads the full learning experience when connectivity is available.'],
                ['Mostly Offline', 'Prioritises downloaded and locally available learning content.'],
              ].map(([name, description]) => (
                <label key={name} className={`block p-4 border-2 rounded-xl cursor-pointer transition-colors ${dataMode === name ? 'border-[#E67E22] bg-[#F8F9FA]' : 'border-[#E2E8F0] hover:border-gray-300'}`}>
                  <div className="flex items-center mb-1">
                    <input type="radio" name="dataMode" value={name} checked={dataMode === name} onChange={(e) => setDataMode(e.target.value)} className="w-5 h-5 text-[#E67E22] border-gray-300 focus:ring-[#E67E22]" />
                    <span className="ml-3 font-bold text-[#2D3E50] text-lg">{name}</span>
                  </div>
                  <p className="ml-8 text-sm text-gray-500">{description}</p>
                </label>
              ))}
            </div>
          </div>
        )}

        <div className="pt-6 mt-auto">
          <button onClick={handleNext} disabled={isNextDisabled} className="w-full bg-[#2D3E50] hover:bg-[#1f2b38] disabled:bg-[#E2E8F0] disabled:text-gray-400 text-white font-bold py-4 px-6 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2D3E50] text-lg">
            {step === 4 ? 'Start My Learning Path' : 'Continue'}
          </button>
        </div>
      </main>
    </div>
  );
}
