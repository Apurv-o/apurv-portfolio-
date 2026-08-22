import { useInView } from '../hooks/useInView';

export default function ProjectComparison() {
  const [h1Ref, h1Vis] = useInView({ threshold: 0.2 });
  const [gridRef, gridVis] = useInView({ threshold: 0.15 });
  const [tagRef, tagVis] = useInView({ threshold: 0.3 });

  return (
    <section className="bg-business-section" aria-label="Project comparison">
      <div className="section-wrapper">

        <div ref={h1Ref} className={`reveal${h1Vis ? ' visible' : ''}`}>
          <span className="section-number">§ 08 — The Pattern</span>
          <h2 className="text-display-md" style={{ marginTop: '0.75rem', marginBottom: '0.5rem' }}>
            Different Problems.
          </h2>
          <h2
            className="text-display-md"
            style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}
          >
            Same Mindset.
          </h2>
        </div>

        {/* Comparison */}
        <div
          ref={gridRef}
          className={`reveal${gridVis ? ' visible' : ''}`}
          style={{ marginTop: '3rem' }}
        >
          <div className="comparison-grid">
            {/* Left */}
            <div className="cmp-col">
              <div className="cmp-title">AI Resume Analyzer</div>
              <div className="cmp-flow">
                <div className="cmp-item">HR problem</div>
                <div className="cmp-arrow">↓</div>
                <div className="cmp-item">AI-assisted analysis</div>
                <div className="cmp-arrow">↓</div>
                <div className="cmp-item">Resume improvement</div>
                <div className="cmp-arrow">↓</div>
                <div className="cmp-item">Better candidate representation</div>
              </div>
            </div>

            {/* VS */}
            <div className="cmp-vs">vs</div>

            {/* Right */}
            <div className="cmp-col">
              <div className="cmp-title">Scout</div>
              <div className="cmp-flow">
                <div className="cmp-item">Search problem</div>
                <div className="cmp-arrow">↓</div>
                <div className="cmp-item">AI-assisted discovery</div>
                <div className="cmp-arrow">↓</div>
                <div className="cmp-item">Information clarity</div>
                <div className="cmp-arrow">↓</div>
                <div className="cmp-item">Faster understanding</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mindset statement */}
        <div
          ref={tagRef}
          className={`reveal${tagVis ? ' visible' : ''}`}
          style={{ marginTop: '4rem', textAlign: 'center' }}
        >
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(0.8rem, 2vw, 1rem)',
            fontWeight: 500,
            color: 'var(--color-muted)',
            letterSpacing: '0.05em',
            marginBottom: '2rem',
          }}>
            The approach that connects them
          </div>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
            {['Find', 'Understand', 'Explore', 'Build', 'Improve'].map((word, i, arr) => (
              <span key={word} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
                  fontWeight: 700,
                  color: 'var(--color-off-white)',
                  letterSpacing: '-0.01em',
                }}>
                  {word}
                </span>
                {i < arr.length - 1 && (
                  <span style={{ color: 'var(--color-accent)', opacity: 0.4, fontSize: '0.9rem' }}>→</span>
                )}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
