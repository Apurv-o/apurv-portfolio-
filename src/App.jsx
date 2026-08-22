import { useEffect, useState, useCallback } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import HRProblem from './components/HRProblem';
import ResumeAnalyzer from './components/ResumeAnalyzer';
import Scout from './components/Scout';
import ProjectComparison from './components/ProjectComparison';
import WhatILearned from './components/WhatILearned';
import ConsultingMindset from './components/ConsultingMindset';
import WhatIBring from './components/WhatIBring';
import Differentiator from './components/Differentiator';
import Experience from './components/Experience';
import FreelanceWork from './components/FreelanceWork';
import Education from './components/Education';
import CurrentlyExploring from './components/CurrentlyExploring';
import ConsultingFuture from './components/ConsultingFuture';
import NoteToEmployers from './components/NoteToEmployers';
import BeyondCV from './components/BeyondCV';
import Contact from './components/Contact';

export default function App() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isLoading, setIsLoading] = useState(true);
  const [isReloading, setIsReloading] = useState(false);
  const [reloadCount, setReloadCount] = useState(0);

  useEffect(() => {
    const handleMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const handleReload = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setReloadCount((c) => c + 1);
    setIsReloading(true);
    setIsLoading(true);
  }, []);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
    setIsReloading(false);
  }, []);

  return (
    <div style={{ background: 'var(--color-base)', overflowX: 'hidden', position: 'relative' }}>
      {/* Cinematic Loading Screen */}
      {isLoading && (
        <LoadingScreen
          key={reloadCount}
          onComplete={handleLoadingComplete}
          isReloading={isReloading}
        />
      )}

      {/* Ambient Cursor Spotlight */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          zIndex: 1,
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(34, 211, 238, 0.035), transparent 80%)`,
          transition: 'background 0.15s ease-out',
        }}
      />

      <Nav onReload={handleReload} />

      {/* ── Chapter 1: Cinematic Intro ── */}
      <Hero />

      {/* ── Chapter 2: The Journey & Track Record ── */}
      <About />
      <Experience />
      <FreelanceWork />
      <Education />

      {/* ── Chapter 3: The Problem & AI Products Built ── */}
      <HRProblem />
      <ResumeAnalyzer />
      <Scout />
      <ProjectComparison />

      {/* ── Chapter 4: How I Think & What I Bring ── */}
      <WhatILearned />
      <ConsultingMindset />
      <WhatIBring />
      <Differentiator />

      {/* ── Chapter 5: Forward & Vision ── */}
      <CurrentlyExploring />
      <ConsultingFuture />
      <NoteToEmployers />
      <BeyondCV />

      {/* ── Final: Connect ── */}
      <Contact />
    </div>
  );
}
