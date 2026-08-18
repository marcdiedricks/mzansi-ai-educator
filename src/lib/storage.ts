export interface OnboardingData {
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
    return data ? JSON.parse(data) : null;
  } catch (e) {
    return null;
  }
}
