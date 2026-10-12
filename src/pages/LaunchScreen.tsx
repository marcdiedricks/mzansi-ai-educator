import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isOnboardingComplete } from '../lib/storage';

export function LaunchScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    if (isOnboardingComplete()) {
      navigate('/home', { replace: true });
    }
  }, [navigate]);

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#1A202C] w-full max-w-md mx-auto sm:border-x sm:border-[#E2E8F0]">
      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <img src={`${import.meta.env.BASE_URL}mzansi-ai-educator-icon-v2-512.png`} alt="Mzansi AI Educator" className="w-32 h-32 rounded-2xl object-cover mb-8 shadow-sm" />
        
        <h1 className="text-3xl font-bold tracking-tight text-[#2D3E50] mb-4">
          Mzansi AI <span className="text-[#E67E22]">Educator</span>
        </h1>
        <p className="text-lg text-gray-600 mb-12 font-medium">
          Learn AI. Use it responsibly. Build for Africa.
        </p>

        <div className="w-full space-y-4">
          <button
            onClick={() => navigate('/onboarding')}
            className="w-full bg-[#2D3E50] hover:bg-[#1f2b38] text-white font-bold py-4 px-6 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2D3E50] text-lg shadow-sm"
          >
            Start Learning
          </button>
          
          <button
            onClick={() => navigate('/onboarding')}
            className="w-full bg-white hover:bg-gray-50 text-[#2D3E50] border-2 border-[#E2E8F0] font-bold py-4 px-6 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2D3E50] text-lg"
          >
            I already know some AI
          </button>
        </div>
      </main>

      <footer className="p-6 flex justify-around text-xs font-bold uppercase tracking-widest text-gray-400">
        <button className="hover:text-gray-600 focus-visible:outline-none focus-visible:underline">
          Language
        </button>
        <button className="hover:text-gray-600 focus-visible:outline-none focus-visible:underline">
          Accessibility
        </button>
        <button className="hover:text-gray-600 focus-visible:outline-none focus-visible:underline">
          Offline info
        </button>
      </footer>
    </div>
  );
}
