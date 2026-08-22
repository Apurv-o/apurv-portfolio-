import { useInView } from '../hooks/useInView';

const PORTFOLIO_ITEMS = [
  { label: 'Problems I\'ve noticed.' },
  { label: 'Ideas I\'ve explored.' },
  { label: 'Things I\'ve built.' },
  { label: 'Lessons I\'ve learned.' },
  { label: 'The direction I\'m heading.' },
];

export default function BeyondCV() {
  const [h1Ref, h1Vis] = useInView({ threshold: 0.2 });
  const [contRef, contVis] = useInView({ threshold: 0.15 });

  return (
    <section className="bg-future-section" aria-label="Beyond the CV">
      <div className="section-wrapper">

        <div ref={h1Ref} className={`reveal${h1Vis ? ' visible' : ''}`}>
          <span className="section-number">§ 16 — Beyond the CV</span>

          {/* CV vs Portfolio contrast */}
          <div style={{ marginTop: '1.5rem', marginBottom: '2rem' }}>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              fontWeight: 400,
              color: 'var(--color-muted)',
              letterSpacing: '-0.01em',
              textDecoration: 'line-through',
              marginBottom: '0.5rem',
            }}>
              A resume tells you what someone has done.
            </p>
            <h2
              className="text-display-md"
              style={{ maxWidth: '640px' }}
            >
              A portfolio should show you<br />
              <span style={{ color: 'var(--color-accent)' }}>how someone thinks.</span>
            </h2>
          </div>
        </div>

        {/* Portfolio dimensions */}
        <div
          ref={contRef}
          className={`reveal${contVis ? ' visible' : ''}`}
          style={{ marginTop: '3rem' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {PORTFOLIO_ITEMS.map((item, i) => (
              <div
                key={item.label}
                className={`reveal delay-${i + 1}`}
                style={{
                  padding: '1.25rem 1.5rem',
                  borderTop: '1px solid var(--color-border)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  color: 'var(--color-accent)',
                  minWidth: '1.5rem',
                  opacity: 0.5,
                }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                  fontWeight: 500,
                  color: 'var(--color-off-white)',
                  letterSpacing: '-0.01em',
                }}>
                  {item.label}
                </span>
              </div>
            ))}
            <div style={{ borderBottom: '1px solid var(--color-border)' }} />
          </div>
        </div>

      </div>
    </section>
  );
}
