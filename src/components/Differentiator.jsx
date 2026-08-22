import { useInView } from '../hooks/useInView';

const WORDS = [
  { label: 'HR',          fontSize: 'clamp(2rem,5vw,4rem)',   top: '5%',   left: '5%' },
  { label: 'DESIGN',      fontSize: 'clamp(1.5rem,3vw,2.8rem)', top: '10%',  right: '8%' },
  { label: 'MARKETING',   fontSize: 'clamp(1.2rem,2.5vw,2rem)', top: '35%',  left: '2%' },
  { label: 'AI',          fontSize: 'clamp(2.5rem,6vw,5rem)', bottom: '20%', right: '5%' },
  { label: 'BUSINESS',    fontSize: 'clamp(1.5rem,3vw,2.5rem)', bottom: '15%', left: '8%' },
  { label: 'TECHNOLOGY',  fontSize: 'clamp(1rem,2vw,1.8rem)',  top: '65%',  right: '12%' },
];

export default function Differentiator() {
  const [ref, visible] = useInView({ threshold: 0.2 });
  const [h1Ref, h1Vis] = useInView({ threshold: 0.2 });

  return (
    <section className="bg-consulting-section" aria-label="My differentiator">
      <div className="section-wrapper">

        <div ref={h1Ref} className={`reveal${h1Vis ? ' visible' : ''}`} style={{ marginBottom: '3rem' }}>
          <span className="section-number">§ 12 — My Differentiator</span>
          <h2 className="text-display-lg" style={{ maxWidth: '640px', marginTop: '0.75rem' }}>
            I work between<br />disciplines.
          </h2>
          <p className="text-body" style={{ maxWidth: '500px', marginTop: '1rem' }}>
            The most interesting problems don't belong to any single field.
            They live in the gaps between HR, technology, design, and strategy.
            That's where I want to be.
          </p>
        </div>

        {/* Word cloud surrounding central focus */}
        <div
          ref={ref}
          className="diff-words-wrap"
          aria-hidden="true"
        >
          {WORDS.map((w) => (
            <div
              key={w.label}
              className="diff-word"
              style={{
                fontSize: w.fontSize,
                top: w.top || 'auto',
                left: w.left || 'auto',
                right: w.right || 'auto',
                bottom: w.bottom || 'auto',
                opacity: visible ? 0.08 : 0.04,
                transform: visible ? 'scale(0.95)' : 'scale(1)',
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
              }}
            >
              {w.label}
            </div>
          ))}

          {/* Center */}
          <div className="diff-center">
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.5rem, 4vw, 3rem)',
              fontWeight: 700,
              color: 'var(--color-off-white)',
              letterSpacing: '-0.025em',
              lineHeight: 1.1,
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.5s ease-out 0.1s, transform 0.5s ease-out 0.1s',
            }}>
              PROBLEM
            </div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1rem, 2vw, 1.4rem)',
              fontWeight: 400,
              color: 'var(--color-accent)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginTop: '0.25rem',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(8px)',
              transition: 'opacity 0.5s ease-out 0.2s, transform 0.5s ease-out 0.2s',
            }}>
              SOLVING
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
