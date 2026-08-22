import { useInView } from '../hooks/useInView';

export default function Education() {
  const [ref, visible] = useInView({ threshold: 0.2 });

  return (
    <section className="bg-consulting-section" aria-label="Education">
      <div className="section-wrapper" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>

        <span className="section-number">§ 04 — Education</span>

        <div
          ref={ref}
          className={`reveal${visible ? ' visible' : ''}`}
          style={{ marginTop: '1.5rem' }}
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            gap: '2rem',
            alignItems: 'start',
            padding: '2rem',
            border: '1px solid var(--color-border)',
            background: 'rgba(34,211,238,0.02)',
            maxWidth: '600px',
          }}>
            {/* Academic icon */}
            <div style={{
              width: '48px', height: '48px',
              border: '1px solid var(--color-border)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.25rem', color: 'var(--color-accent)',
              flexShrink: 0,
            }}>
              ◎
            </div>

            <div>
              <div style={{
                fontFamily: 'var(--font-display)', fontSize: '1.1rem',
                fontWeight: 700, color: 'var(--color-off-white)',
                letterSpacing: '-0.01em', marginBottom: '0.35rem',
              }}>
                Bachelor of Business Administration
              </div>
              <div style={{
                fontSize: '0.875rem', color: 'var(--color-muted)', marginBottom: '0.5rem',
              }}>
                Pt. Harishankar Shukla Smriti Mahavidyalaya
              </div>
              <div style={{
                fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em',
                textTransform: 'uppercase', color: 'var(--color-accent)',
              }}>
                2024 — 2027
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
