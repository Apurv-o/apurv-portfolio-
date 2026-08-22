import { useState, useEffect } from 'react';

export default function LoadingScreen({ onComplete, isReloading = false }) {
  const [progress, setProgress] = useState(0);
  const [phaseText, setPhaseText] = useState('INITIALIZING ENVIRONMENT...');
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const duration = isReloading ? 1100 : 1500; // Fast and snappy for reloads, cinematic on first load

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min(100, Math.floor((elapsed / duration) * 100));

      setProgress(currentProgress);

      if (currentProgress < 30) {
        setPhaseText('INITIALIZING ENVIRONMENT...');
      } else if (currentProgress < 65) {
        setPhaseText('LOADING AI INTERFACES & CASE STUDIES...');
      } else if (currentProgress < 90) {
        setPhaseText('CALIBRATING CONSULTING FRAMEWORKS...');
      } else {
        setPhaseText('SYSTEM READY');
      }

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 600); // Wait for exit animation
        }, 200);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [isReloading, onComplete]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#050A14',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        pointerEvents: isExiting ? 'none' : 'auto',
        opacity: isExiting ? 0 : 1,
        transform: isExiting ? 'scale(1.02) translateY(-20px)' : 'scale(1) translateY(0)',
        transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      aria-label="Loading portfolio"
    >
      {/* Background ambient radial glow */}
      <div
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(34, 211, 238, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
          animation: 'pulse-accent 3s ease-in-out infinite',
        }}
      />

      {/* Decorative Corner Grid Marks */}
      <div style={{ position: 'absolute', top: '2rem', left: '2rem', fontSize: '0.65rem', fontFamily: 'monospace', color: 'rgba(34, 211, 238, 0.4)', letterSpacing: '0.15em' }}>
        SYS.INIT // v2.0
      </div>
      <div style={{ position: 'absolute', top: '2rem', right: '2rem', fontSize: '0.65rem', fontFamily: 'monospace', color: 'rgba(34, 211, 238, 0.4)', letterSpacing: '0.15em' }}>
        APURV.PORTFOLIO
      </div>
      <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', fontSize: '0.65rem', fontFamily: 'monospace', color: 'rgba(255, 255, 255, 0.2)', letterSpacing: '0.1em' }}>
        LATENCY: 0.02ms
      </div>
      <div style={{ position: 'absolute', bottom: '2rem', right: '2rem', fontSize: '0.65rem', fontFamily: 'monospace', color: 'rgba(255, 255, 255, 0.2)', letterSpacing: '0.1em' }}>
        STATUS: 200 OK
      </div>

      {/* Center Main Stage */}
      <div style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 1.5rem',
        maxWidth: '500px',
        width: '100%',
      }}>
        {/* Pulsing Core Glyph */}
        <div style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          border: '1px solid rgba(34, 211, 238, 0.35)',
          background: 'rgba(34, 211, 238, 0.05)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '2rem',
          position: 'relative',
          boxShadow: '0 0 30px rgba(34, 211, 238, 0.15)',
        }}>
          <div style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            background: 'var(--color-accent)',
            boxShadow: '0 0 14px var(--color-accent)',
            animation: 'pulse-accent 1.2s ease-in-out infinite',
          }} />
        </div>

        {/* Name Title */}
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.5rem, 5vw, 2.25rem)',
          fontWeight: 700,
          color: 'var(--color-off-white)',
          letterSpacing: '-0.02em',
          margin: 0,
          marginBottom: '0.4rem',
        }}>
          APURV PRASAD
        </h1>

        {/* Subtitle pill */}
        <div style={{
          fontSize: '0.7rem',
          fontFamily: 'var(--font-display)',
          fontWeight: 600,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'var(--color-accent)',
          marginBottom: '2.5rem',
          opacity: 0.9,
        }}>
          HR × AI × Consulting
        </div>

        {/* Progress Counter & Phase Text */}
        <div style={{ width: '100%', maxWidth: '340px' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.7rem',
            fontFamily: 'monospace',
            marginBottom: '0.6rem',
          }}>
            <span style={{ color: 'var(--color-muted)', letterSpacing: '0.08em', fontSize: '0.65rem' }}>
              {phaseText}
            </span>
            <span style={{ color: 'var(--color-accent)', fontWeight: 700 }}>
              {progress.toString().padStart(2, '0')}%
            </span>
          </div>

          {/* Progress Track */}
          <div style={{
            height: '3px',
            width: '100%',
            background: 'rgba(255, 255, 255, 0.08)',
            borderRadius: '2px',
            overflow: 'hidden',
            position: 'relative',
          }}>
            <div style={{
              height: '100%',
              width: `${progress}%`,
              background: 'linear-gradient(90deg, var(--color-accent-dim), var(--color-accent))',
              boxShadow: '0 0 10px rgba(34, 211, 238, 0.8)',
              transition: 'width 0.05s linear',
            }} />
          </div>
        </div>
      </div>
    </div>
  );
}
