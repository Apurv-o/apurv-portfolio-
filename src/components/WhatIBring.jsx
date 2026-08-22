import { useInView } from '../hooks/useInView';

const PILLARS = [
  {
    icon: '◎',
    title: 'People',
    sub: 'HR & Human Understanding',
    skills: ['Recruitment', 'Candidate Perspective', 'Communication', 'Employee Experience', 'HR Processes'],
  },
  {
    icon: '◈',
    title: 'Business',
    sub: 'Strategic Thinking',
    skills: ['Problem Solving', 'Research', 'Client Understanding', 'Business Thinking', 'Analytical Approach'],
  },
  {
    icon: '⬡',
    title: 'AI & Technology',
    sub: 'Tools & Prototyping',
    skills: ['AI Tools', 'AI-Assisted Development', 'Prompting', 'Rapid Prototyping', 'Product Thinking'],
  },
  {
    icon: '◇',
    title: 'Creative',
    sub: 'Design & Communication',
    skills: ['UI/UX Design', 'Digital Marketing', 'Content Creation', 'Canva', 'Figma'],
  },
];

export default function WhatIBring() {
  const [h1Ref, h1Vis] = useInView({ threshold: 0.2 });
  const [gridRef, gridVis] = useInView({ threshold: 0.1 });
  const [centerRef, centerVis] = useInView({ threshold: 0.3 });

  return (
    <section className="bg-consulting-section" aria-label="What I bring">
      <div className="section-wrapper">

        <div ref={h1Ref} className={`reveal${h1Vis ? ' visible' : ''}`} style={{ marginBottom: '3rem' }}>
          <span className="section-number">§ 11 — What I Bring</span>
          <h2 className="text-display-lg" style={{ maxWidth: '600px', marginTop: '0.75rem' }}>
            Four disciplines.<br />One perspective.
          </h2>
        </div>

        {/* Pillars grid */}
        <div
          ref={gridRef}
          className={`reveal${gridVis ? ' visible' : ''}`}
        >
          <div className="pillars-grid">
            {PILLARS.map((p, i) => (
              <div key={p.title} className={`pillar delay-${i + 1}`}>
                <div className="pillar-icon" aria-hidden="true">{p.icon}</div>
                <div className="pillar-title">{p.title}</div>
                <div className="pillar-sub">{p.sub}</div>
                <ul className="pillar-skills" aria-label={`${p.title} skills`}>
                  {p.skills.map(s => (
                    <li key={s} className="pillar-skill">{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Center intersection */}
        <div
          ref={centerRef}
          className={`reveal${centerVis ? ' visible' : ''}`}
          style={{ marginTop: '3rem', textAlign: 'center' }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '1rem 2rem',
            border: '1px solid var(--color-border)',
            background: 'rgba(34,211,238,0.04)',
          }}>
            {['PEOPLE', 'BUSINESS', 'AI', 'CREATIVE'].map((word, i, arr) => (
              <span key={word} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  color: 'var(--color-off-white)',
                }}>
                  {word}
                </span>
                {i < arr.length - 1 && (
                  <span style={{ color: 'var(--color-accent)', fontSize: '0.7rem' }}>×</span>
                )}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
