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
import { ModuleScreen } from './pages/ModuleScreen';
import { LessonScreen } from './pages/LessonScreen';
import { MadLibsSim } from './pages/labs/MadLibsSim';
import { IntelligentPaper } from './pages/labs/IntelligentPaper';
import { MonsterMapping } from './pages/labs/MonsterMapping';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LaunchScreen />} />
        <Route path="/onboarding" element={<Onboarding />} />
        
        {/* Full-screen Unplugged Lab Simulation Engines */}
        <Route path="/practice/madlibs-sim" element={<MadLibsSim />} />
        <Route path="/practice/intelligent-paper" element={<IntelligentPaper />} />
        <Route path="/practice/monster-mapping" element={<MonsterMapping />} />

        {/* Core Application Shell with Bottom Navigation */}
        <Route element={<AppShell />}>
          <Route path="/home" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/learn/:moduleId" element={<ModuleScreen />} />
          <Route path="/learn/:moduleId/lesson/:lessonId" element={<LessonScreen />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/certificates" element={<Certificates />} />
          
          {/* Legacy route redirects */}
          <Route path="/progress" element={<Navigate to="/certificates" replace />} />
          <Route path="/more" element={<Navigate to="/glossary" replace />} />
        </Route>
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
