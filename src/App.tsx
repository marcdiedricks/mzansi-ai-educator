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
import { PracticeChallenge } from './pages/PracticeChallenge';
import { Glossary } from './pages/Glossary';
import { Certificates } from './pages/Certificates';
import { More } from './pages/More';
import { FacilitatorGuide } from './pages/FacilitatorGuide';
import { Privacy } from './pages/Privacy';
import { About } from './pages/About';
import { VideoResources } from './pages/VideoResources';
import { Progress } from './pages/Progress';
import { Tutor } from './pages/Tutor';
import { ModuleScreen } from './pages/ModuleScreen';
import { LessonScreen } from './pages/LessonScreen';
import { MadLibsSim } from './pages/labs/MadLibsSim';
import { IntelligentPaper } from './pages/labs/IntelligentPaper';
import { MonsterMapping } from './pages/labs/MonsterMapping';

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<LaunchScreen />} />
        <Route path="/onboarding" element={<Onboarding />} />

        <Route element={<AppShell />}>
          <Route path="/home" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/more" element={<More />} />
          <Route path="/facilitator" element={<FacilitatorGuide />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/about" element={<About />} />
          <Route path="/video-resources" element={<VideoResources />} />
          <Route path="/progress" element={<Progress />} />
        </Route>

        <Route path="/tutor" element={<Tutor />} />
        <Route path="/learn/:moduleId" element={<ModuleScreen />} />
        <Route path="/learn/:moduleId/lesson/:lessonId" element={<LessonScreen />} />
        <Route path="/practice/madlibs-sim" element={<MadLibsSim />} />
        <Route path="/practice/intelligent-paper" element={<IntelligentPaper />} />
        <Route path="/practice/monster-mapping" element={<MonsterMapping />} />
        <Route path="/practice/challenge/:challengeId" element={<PracticeChallenge />} />
        <Route path="/module/:moduleId" element={<ModuleScreen />} />
        <Route path="/lesson/:lessonId" element={<LessonScreen />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
