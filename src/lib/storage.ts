export type LearnerLanguage = 'en' | 'af' | 'xh';

export interface OnboardingData {
  language: LearnerLanguage;
  goal: string;
  experience: string;
  dataMode: string;
}

const ONBOARDING_COMPLETE_KEY = 'mzansi_onboarding_complete';
const ONBOARDING_DATA_KEY = 'mzansi_onboarding_data';

export function setOnboardingComplete(data: OnboardingData) {
  try {
    localStorage.setItem(ONBOARDING_COMPLETE_KEY, 'true');
    localStorage.setItem(ONBOARDING_DATA_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('Failed to save onboarding data', e);
  }
}

export function isOnboardingComplete(): boolean {
  try {
    return localStorage.getItem(ONBOARDING_COMPLETE_KEY) === 'true';
  } catch (e) {
    return false;
  }
}

export function getOnboardingData(): OnboardingData | null {
  try {
    const data = localStorage.getItem(ONBOARDING_DATA_KEY);
    if (!data) return null;

    const parsed = JSON.parse(data) as Partial<OnboardingData>;
    return {
      language: parsed.language === 'af' || parsed.language === 'xh' ? parsed.language : 'en',
      goal: typeof parsed.goal === 'string' ? parsed.goal : '',
      experience: typeof parsed.experience === 'string' ? parsed.experience : '',
      dataMode: typeof parsed.dataMode === 'string' ? parsed.dataMode : '',
    };
  } catch (e) {
    return null;
  }
}
