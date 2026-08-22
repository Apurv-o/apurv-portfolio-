import { useInView } from '../hooks/useInView';

export default function HRProblem() {
  const [line1Ref, line1Vis] = useInView({ threshold: 0.3 });
  const [line2Ref, line2Vis] = useInView({ threshold: 0.3 });
  const [line3Ref, line3Vis] = useInView({ threshold: 0.3 });
  const [qRef, qVis] = useInView({ threshold: 0.3 });

  return (
    <section id="journey" className="bg-ai-section" aria-label="The HR problem">
      <div className="section-wrapper">

        <span className="section-number">§ 05 — The Problem I Noticed</span>

        {/* Statement 1 */}
        <div
          ref={line1Ref}
          className={`reveal${line1Vis ? ' visible' : ''}`}
          style={{ marginBottom: '3rem' }}
        >
          <h2 className="text-display-lg" style={{ maxWidth: '700px' }}>
            I noticed<br />a problem.
          </h2>
        </div>

        {/* Statement 2 */}
        <div
          ref={line2Ref}
          className={`reveal${line2Vis ? ' visible' : ''}`}
          style={{
            maxWidth: '600px',
            marginBottom: '3rem',
            paddingLeft: '2rem',
            borderLeft: '1px solid var(--color-border)',
          }}
        >
          <p
            className="text-body"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', lineHeight: 1.7, color: 'var(--color-off-white)', opacity: 0.8 }}
          >
            Many candidates have genuine skills and real experience —
            but their resumes don't communicate their value effectively.
            The gap between talent and representation creates friction
            for both candidates and recruiters.
          </p>
        </div>

        {/* Visual: Resume → Gap → Recruiter */}
        <div
          ref={line3Ref}
          className={`reveal${line3Vis ? ' visible' : ''}`}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0',
            marginBottom: '5rem',
            flexWrap: 'wrap',
          }}
        >
          {[
            { label: 'CANDIDATE', sub: 'Has skills & experience' },
            null,
            { label: 'RESUME', sub: 'Fails to communicate' },
            null,
            { label: 'RECRUITER', sub: 'Opportunity missed' },
          ].map((item, i) =>
            item === null ? (
              <div key={i} style={{
                flex: 1, height: '1px',
                background: 'linear-gradient(90deg, var(--color-accent-dim), transparent)',
                minWidth: '40px', opacity: 0.4, margin: '0 0.5rem',
              }} />
            ) : (
              <div key={i} style={{
                padding: '1.25rem 1.5rem',
                border: '1px solid var(--color-border)',
                background: 'rgba(34,211,238,0.03)',
                textAlign: 'center',
                minWidth: '130px',
              }}>
                <div style={{
                  fontFamily: 'var(--font-display)', fontSize: '0.7rem',
                  fontWeight: 700, letterSpacing: '0.15em',
                  color: 'var(--color-off-white)', marginBottom: '0.35rem',
                }}>
                  {item.label}
                </div>
                <div style={{ fontSize: '0.7rem', color: 'var(--color-muted)' }}>
                  {item.sub}
                </div>
              </div>
            )
          )}
        </div>

        {/* The question */}
        <div
          ref={qRef}
          className={`reveal${qVis ? ' visible' : ''}`}
          style={{ textAlign: 'center', paddingTop: '2rem' }}
        >
          <div style={{
            fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.2em',
            textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: '1.5rem',
          }}>
            The question I asked
          </div>
          <h3
            className="text-display-md"
            style={{
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              color: 'var(--color-accent)',
              letterSpacing: '-0.03em',
              fontWeight: 700,
            }}
          >
            Can AI help?
          </h3>
          <div style={{
            width: '40px', height: '1px',
            background: 'var(--color-accent)',
            margin: '1.5rem auto 0',
            opacity: 0.5,
          }} />
        </div>

      </div>
    </section>
  );
}
