import { useInView } from '../hooks/useInView';

function ScoutStageCard({ item, delay }) {
  const [ref, visible] = useInView({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`reveal${visible ? ' visible' : ''}`}
      style={{
        transitionDelay: `${delay}s`,
        padding: '2rem 1.75rem',
        background: 'var(--color-base)',
        position: 'relative',
      }}
    >
      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize: '0.65rem',
        fontWeight: 700,
        letterSpacing: '0.15em',
        color: 'var(--color-accent)',
        marginBottom: '0.85rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
      }}>
        <span style={{
          display: 'inline-block',
          width: '4px',
          height: '4px',
          borderRadius: '50%',
          background: 'var(--color-accent)',
          opacity: 0.7,
        }} />
        {item.step}
      </div>
      <p style={{
        fontSize: '0.875rem',
        color: 'var(--color-muted)',
        lineHeight: 1.75,
      }}>
        {item.desc}
      </p>
    </div>
  );
}

export default function Scout() {
  const [h1Ref, h1Vis] = useInView({ threshold: 0.2 });

  return (
    <section className="bg-business-section" aria-label="Scout project case study">
      <div className="section-wrapper">

        {/* Chapter intro */}
        <div ref={h1Ref} className={`reveal${h1Vis ? ' visible' : ''}`}>
          <span className="section-number">§ 07 — AI Products Built · 02</span>

          <div style={{ marginBottom: '1.5rem', marginTop: '0.75rem' }}>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
              fontWeight: 500,
              color: 'var(--color-muted)',
              letterSpacing: '-0.01em',
              lineHeight: 1.4,
            }}>
              A DIFFERENT PROBLEM.<br />A DIFFERENT SOLUTION.
            </p>
          </div>

          <div className="project-badge">
            <span>AI</span><span>Search</span><span>Product</span>
          </div>

          <h2 className="text-display-lg" style={{ maxWidth: '600px' }}>
            SCOUT
          </h2>
          <p className="text-body" style={{ maxWidth: '520px', marginTop: '1rem' }}>
            Information discovery is fragmented. Searching for something means
            jumping between tabs, losing context, and stitching results together manually.
            Scout explores a cleaner, AI-assisted approach to finding and understanding information.
          </p>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.6rem',
            marginTop: '1.5rem',
            marginBottom: '1rem',
          }}>
            {['Information Architecture', 'Context Retention', 'Fast Discovery', 'AI Search Paradigm'].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>

          <a
            href="https://scout-app-lake-pi.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
            style={{ marginTop: '1.25rem', display: 'inline-flex' }}
          >
            Explore Scout ↗
          </a>
        </div>

        {/* ============================================================
            WEBSITE ART / INTERFACE SHOWCASE (Scout Discovery Engine)
           ============================================================ */}
        <div
          style={{
            marginTop: '3.5rem',
            borderRadius: '8px',
            border: '1px solid rgba(34, 211, 238, 0.2)',
            background: 'linear-gradient(180deg, #0a1628 0%, #060d19 100%)',
            boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 40px -10px rgba(34, 211, 238, 0.1)',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {/* Top Window Bar */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.85rem 1.25rem',
            borderBottom: '1px solid rgba(34, 211, 238, 0.12)',
            background: '#060d1a',
            flexWrap: 'wrap',
            gap: '0.5rem',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#FF5F57' }} />
              <div style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#FFBD2E' }} />
              <div style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#28CA41' }} />
              <span style={{
                marginLeft: '0.75rem',
                fontSize: '0.65rem',
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                letterSpacing: '0.12em',
                color: 'var(--color-off-white)',
                textTransform: 'uppercase',
                opacity: 0.9,
              }}>
                Scout · AI Discovery Interface
              </span>
            </div>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.25rem 0.65rem',
              borderRadius: '20px',
              background: 'rgba(34, 211, 238, 0.08)',
              border: '1px solid rgba(34, 211, 238, 0.2)',
              fontSize: '0.65rem',
              color: 'var(--color-accent)',
              fontFamily: 'monospace',
            }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--color-accent)', boxShadow: '0 0 6px var(--color-accent)' }} />
              scout-app-lake-pi.vercel.app
            </div>
          </div>

          {/* Interactive UI Artwork Body */}
          <div style={{ padding: 'clamp(1.25rem, 3vw, 2rem)' }}>
            {/* Search Input Bar Mock */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              padding: '0.85rem 1.25rem',
              background: 'rgba(5, 10, 20, 0.75)',
              border: '1px solid rgba(34, 211, 238, 0.25)',
              borderRadius: '6px',
              marginBottom: '1.5rem',
              boxShadow: '0 0 20px rgba(34, 211, 238, 0.05)',
            }}>
              <span style={{ color: 'var(--color-accent)', fontSize: '1rem', fontWeight: 'bold' }}>⌕</span>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(0.8rem, 2vw, 0.95rem)',
                color: 'var(--color-off-white)',
                fontWeight: 500,
                letterSpacing: '-0.01em',
                flex: 1,
              }}>
                "How do early-career professionals bridge HR and AI into consulting?"
              </span>
              <span style={{
                fontSize: '0.65rem',
                fontFamily: 'monospace',
                color: 'var(--color-accent)',
                padding: '0.25rem 0.6rem',
                background: 'rgba(34, 211, 238, 0.1)',
                border: '1px solid rgba(34, 211, 238, 0.25)',
                borderRadius: '3px',
              }}>
                SYNTHESIZE ↵
              </span>
            </div>

            {/* Synthesized Insights Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}>
              {[
                {
                  tag: 'SYNTHESIS · 01',
                  title: 'Discipline Intersection',
                  summary: 'High-value opportunities lie at the boundary where human talent understanding meets AI tooling and strategic business thinking.',
                },
                {
                  tag: 'SYNTHESIS · 02',
                  title: 'Rapid Prototyping Mindset',
                  summary: 'Building tangible experiments (like Scout & Resume Analyzer) proves practical problem-solving ability over abstract theory.',
                },
                {
                  tag: 'SYNTHESIS · 03',
                  title: 'Actionable Consulting',
                  summary: 'Transform raw data into structured recommendations that business stakeholders can implement immediately.',
                },
              ].map((card) => (
                <div
                  key={card.title}
                  style={{
                    background: 'rgba(34, 211, 238, 0.03)',
                    border: '1px solid rgba(34, 211, 238, 0.15)',
                    padding: '1.25rem',
                    borderRadius: '6px',
                    position: 'relative',
                  }}
                >
                  <div style={{
                    fontSize: '0.6rem',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    color: 'var(--color-accent)',
                    textTransform: 'uppercase',
                    marginBottom: '0.4rem',
                  }}>
                    {card.tag}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: 'var(--color-off-white)',
                    marginBottom: '0.4rem',
                  }}>
                    {card.title}
                  </div>
                  <div style={{
                    fontSize: '0.78rem',
                    color: 'var(--color-muted)',
                    lineHeight: 1.6,
                  }}>
                    {card.summary}
                  </div>
                </div>
              ))}
            </div>

            {/* Live Knowledge Query Metrics Bar */}
            <div style={{
              padding: '0.75rem 1rem',
              borderTop: '1px solid rgba(34, 211, 238, 0.1)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '0.75rem',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', fontSize: '0.7rem', color: 'var(--color-muted)', fontFamily: 'monospace' }}>
                <span>⚡ Latency: <strong style={{ color: 'var(--color-accent)' }}>280ms</strong></span>
                <span>📚 Sources: <strong style={{ color: 'var(--color-off-white)' }}>Multi-Index</strong></span>
                <span>✦ Confidence: <strong style={{ color: 'var(--color-accent)' }}>99.2%</strong></span>
              </div>

              <a
                href="https://scout-app-lake-pi.vercel.app/"
                target="_blank"
                rel="noreferrer"
                style={{
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  color: 'var(--color-accent)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                }}
              >
                Launch Scout App ↗
              </a>
            </div>
          </div>
        </div>

        {/* Scout 3-stage case study */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1px',
          background: 'var(--color-border)',
          border: '1px solid var(--color-border)',
          marginTop: '3.5rem',
        }}>
          {[
            {
              step: '01 — The Frustration',
              desc: 'Standard search engines return links, not answers. Users spend precious cognitive load opening 10 tabs, parsing noise, and assembling conclusions by hand.',
            },
            {
              step: '02 — The Concept',
              desc: 'Scout acts as a focused search assistant that synthesizes knowledge and returns context-aware insights in a distraction-free, minimalist UI.',
            },
            {
              step: '03 — The Principle',
              desc: 'The best tools don\'t overwhelm the user with volume; they accelerate clarity. Built to experiment with rapid discovery and intuitive query flows.',
            },
          ].map((item, i) => (
            <ScoutStageCard key={item.step} item={item} delay={i * 0.1} />
          ))}
        </div>

      </div>
    </section>
  );
}
