import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

type BuildVersion = { sha?: string };

async function refreshIfNewBuildExists() {
  const currentBuild = import.meta.env.VITE_BUILD_SHA as string | undefined;
  if (!currentBuild) return;

  try {
    const versionUrl = `${import.meta.env.BASE_URL}version.json?t=${Date.now()}`;
    const response = await fetch(versionUrl, { cache: 'no-store' });
    if (!response.ok) return;

    const deployed = (await response.json()) as BuildVersion;
    if (!deployed.sha || deployed.sha === currentBuild) return;

    const url = new URL(window.location.href);
    const deployedShort = deployed.sha.slice(0, 12);
    if (url.searchParams.get('build') === deployedShort) return;

    url.searchParams.set('build', deployedShort);
    window.location.replace(url.toString());
  } catch {
    // Stay usable offline or during a transient network failure.
  }
}

void refreshIfNewBuildExists();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
