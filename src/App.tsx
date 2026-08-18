/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LaunchScreen } from './pages/LaunchScreen';
import { Onboarding } from './pages/Onboarding';
import { AppShell } from './components/AppShell';
import { Home } from './pages/Home';
import { Learn } from './pages/Learn';
import { Practice } from './pages/Practice';
import { Glossary } from './pages/Glossary';
import { Certificates } from './pages/Certificates';
import { More } from './pages/More';
import { Progress } from './pages/Progress';
import { ModuleScreen } from './pages/ModuleScreen';
import { LessonScreen } from './pages/LessonScreen';

export default function App() {
  return (
    <BrowserRouter basename="/mzansi-ai-educator">
      <Routes>
        <Route path="/" element={<LaunchScreen />} />
        <Route path="/onboarding" element={<Onboarding />} />
        
        {/* App Shell Routes */}
        <Route element={<AppShell />}>
          <Route path="/home" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/more" element={<More />} />
          <Route path="/progress" element={<Progress />} />
        </Route>

        {/* Learning Flow Routes */}
        <Route path="/module/:moduleId" element={<ModuleScreen />} />
        <Route path="/lesson/:lessonId" element={<LessonScreen />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
