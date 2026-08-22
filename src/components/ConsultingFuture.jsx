import { useState, useEffect, useRef } from 'react';
import { useInView } from '../hooks/useInView';

const PATH = [
  'People',
  'Technology',
  'AI',
  'Data',
  'Business Strategy',
  'Consulting',
];

const FRAMEWORK = ['Understand', 'Analyze', 'Solve', 'Implement', 'Measure'];

export default function ConsultingFuture() {
  const [h1Ref, h1Vis] = useInView({ threshold: 0.2 });
  const pathRef = useRef(null);
  const [litPath, setLitPath] = useState([]);
  const [fwRef, fwVis] = useInView({ threshold: 0.2 });

  useEffect(() => {
    const container = pathRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const windowH = window.innerHeight;
      const progress = Math.max(0, (windowH * 0.7 - rect.top) / rect.height);
      const count = Math.min(PATH.length, Math.ceil(progress * PATH.length * 1.5));
      setLitPath(PATH.slice(0, count));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="bg-future-section" aria-label="Consulting future">
      <div className="section-wrapper">

        <div ref={h1Ref} className={`reveal${h1Vis ? ' visible' : ''}`} style={{ marginBottom: '4rem' }}>
          <span className="section-number">§ 14 — Where I'm Heading</span>
          <div style={{
            fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: 'var(--color-muted)',
            marginTop: '1rem', marginBottom: '0.75rem',
          }}>
            What I Want to Become
          </div>
          <h2
            className="text-display-lg"
            style={{ maxWidth: '700px', lineHeight: 1.05 }}
          >
            A consultant who<br />understands technology.
          </h2>
        </div>

        {/* Path flow */}
        <div ref={pathRef} className="path-flow">
          {PATH.map((node, i) => (
            <div key={node}>
              <div className="path-node">
                <div
                  className={`path-label${litPath.includes(node) ? ' lit' : ''}`}
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  {node}
                </div>
                {litPath.includes(node) && (
                  <div style={{
                    width: '6px', height: '6px', borderRadius: '50%',
                    background: 'var(--color-accent)',
                    boxShadow: '0 0 8px rgba(34,211,238,0.6)',
                    flexShrink: 0,
                  }} />
                )}
              </div>
              {i < PATH.length - 1 && <div className="path-connector" />}
            </div>
          ))}
        </div>

        {/* Framework */}
        <div
          ref={fwRef}
          className={`reveal${fwVis ? ' visible' : ''}`}
          style={{ marginTop: '5rem' }}
        >
          <div style={{
            fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.2em',
            textTransform: 'uppercase', color: 'var(--color-muted)',
            marginBottom: '1.5rem',
          }}>
            The approach
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0', flexWrap: 'wrap' }}>
            {FRAMEWORK.map((step, i) => (
              <span key={step} style={{ display: 'inline-flex', alignItems: 'center', gap: '0' }}>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
                  fontWeight: 600,
                  color: 'var(--color-off-white)',
                  letterSpacing: '-0.01em',
                  padding: '0.5rem 0',
                }}>
                  {step}
                </span>
                {i < FRAMEWORK.length - 1 && (
                  <span style={{
                    color: 'var(--color-accent)',
                    opacity: 0.4,
                    padding: '0 0.75rem',
                    fontSize: '1rem',
                  }}>
                    →
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
