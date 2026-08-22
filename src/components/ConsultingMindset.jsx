import { useState, useEffect, useRef } from 'react';
import { useInView } from '../hooks/useInView';

const STEPS = [
  { num: '01', name: 'Observe', detail: 'Pay attention to what\'s actually happening, not what people say is happening.' },
  { num: '02', name: 'Understand', detail: 'Look for root causes. Ask why, not just what.' },
  { num: '03', name: 'Research', detail: 'Gather context. What has been tried? What works elsewhere?' },
  { num: '04', name: 'Analyze', detail: 'Structure the information. Find patterns, constraints, and opportunities.' },
  { num: '05', name: 'Solve', detail: 'Propose solutions that address the real problem, not just its symptoms.' },
  { num: '06', name: 'Build', detail: 'Turn the idea into something tangible. Imperfect and real beats perfect and imaginary.' },
  { num: '07', name: 'Test', detail: 'Put it in front of real people. Let reality correct the assumptions.' },
  { num: '08', name: 'Improve', detail: 'Use what you learned to make the next version better.' },
];

export default function ConsultingMindset() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [h1Ref, h1Vis] = useInView({ threshold: 0.2 });
  const [stmtRef, stmtVis] = useInView({ threshold: 0.3 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const windowH = window.innerHeight;
      const progress = Math.max(0, (windowH * 0.6 - rect.top) / rect.height);
      const idx = Math.min(STEPS.length - 1, Math.floor(progress * STEPS.length));
      setActiveIndex(idx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="bg-consulting-section" aria-label="Consulting mindset">
      <div className="section-wrapper">

        {/* Heading */}
        <div ref={h1Ref} className={`reveal${h1Vis ? ' visible' : ''}`} style={{ marginBottom: '4rem' }}>
          <span className="section-number">§ 10 — How I Think</span>
          <h2 className="text-display-lg" style={{ maxWidth: '700px', marginTop: '0.75rem' }}>
            I start with the problem.
          </h2>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
            fontWeight: 400,
            color: 'var(--color-accent)',
            marginTop: '0.5rem',
            letterSpacing: '-0.01em',
          }}>
            Not the technology.
          </p>
        </div>

        {/* Process steps */}
        <div ref={containerRef}>
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              className={`process-step${i <= activeIndex ? ' active' : ''}`}
            >
              <div className="process-num">{step.num}</div>
              <div>
                <div className="process-name">{step.name}</div>
                <div className="process-detail">{step.detail}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <div
          ref={stmtRef}
          className={`reveal${stmtVis ? ' visible' : ''}`}
          style={{ marginTop: '5rem', paddingTop: '3rem', borderTop: '1px solid var(--color-border)' }}
        >
          <blockquote style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.3rem, 3.5vw, 2.2rem)',
            fontWeight: 700,
            color: 'var(--color-off-white)',
            lineHeight: 1.25,
            letterSpacing: '-0.025em',
            maxWidth: '700px',
          }}>
            "Good solutions don't begin with technology.
            They begin with understanding."
          </blockquote>
        </div>

      </div>
    </section>
  );
}
