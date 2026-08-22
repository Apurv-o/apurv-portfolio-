import { useEffect, useRef } from 'react';
import { useInView } from '../hooks/useInView';

const JOURNEY = [
  {
    year: '2023',
    role: 'Freelancing',
    desc: 'Started as a freelancer on Upwork and Contra — managing social media, creating content, finding my footing in the digital world.',
  },
  {
    year: '2024',
    role: 'Digital Marketing + UI/UX',
    desc: 'Expanded into UI/UX design and digital marketing. Figma became a tool, visual storytelling became a skill.',
  },
  {
    year: '2025',
    role: 'Digital Projects',
    desc: 'Created YouTube content, managed brand accounts, and started thinking more strategically about product and user experience.',
  },
  {
    year: '2026',
    role: 'HR + AI · Joined Corenest Tech LLP',
    desc: 'Joined Corenest Tech LLP as an HR Intern. Discovered the gap between talent and how it\'s communicated. Started building AI-assisted tools to bridge it.',
  },
];

function TimelineItem({ item, index }) {
  const [ref, visible] = useInView({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`timeline-item reveal${visible ? ' visible' : ''} delay-${Math.min(index + 1, 5)}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="timeline-year">{item.year}</div>
      <div className="timeline-role">{item.role}</div>
      <p className="timeline-desc">{item.desc}</p>
    </div>
  );
}

export default function About() {
  const [headerRef, headerVisible] = useInView({ threshold: 0.2 });
  const [statRef, statVisible] = useInView({ threshold: 0.2 });
  const lineRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const line = lineRef.current;
    const container = containerRef.current;
    if (!line || !container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const windowH = window.innerHeight;
      const progress = Math.min(1, Math.max(0,
        (windowH - rect.top) / (rect.height + windowH * 0.5)
      ));
      line.style.height = `${progress * 100}%`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className="bg-warm-section" aria-label="About me">
      <div className="section-wrapper">

        {/* Heading */}
        <div ref={headerRef} className={`reveal${headerVisible ? ' visible' : ''}`}
          style={{ marginBottom: '4rem' }}>
          <span className="text-label">§ 01 — About</span>
          <h2
            className="text-display-lg"
            style={{ marginTop: '0.75rem', maxWidth: '700px' }}
          >
            My journey has not<br />followed a single path.
          </h2>
          <p className="text-body" style={{ maxWidth: '540px', marginTop: '1.5rem' }}>
            I started in digital marketing, moved into design, discovered HR,
            encountered AI, and realised the most valuable space is where
            disciplines intersect — not where they stay separate.
          </p>
        </div>

        {/* Stats */}
        <div
          ref={statRef}
          className={`reveal${statVisible ? ' visible' : ''}`}
          style={{
            display: 'flex', gap: '3rem', flexWrap: 'wrap',
            marginBottom: '5rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid var(--color-border)',
          }}
        >
          {[
            { n: '2+', label: 'Years Freelancing' },
            { n: '2',  label: 'AI Products Built' },
          ].map(({ n, label }) => (
            <div key={label}>
              <div style={{
                fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,5vw,3rem)',
                fontWeight: 700, color: 'var(--color-off-white)', lineHeight: 1,
                letterSpacing: '-0.03em',
              }}>
                {n}
              </div>
              <div style={{
                fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: 'var(--color-muted)', marginTop: '0.35rem',
              }}>
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div ref={containerRef} className="timeline-container">
          <div className="timeline-line" />
          <div className="timeline-line-fill" ref={lineRef} />

          {JOURNEY.map((item, i) => (
            <TimelineItem key={item.year} item={item} index={i} />
          ))}
        </div>

        {/* Languages */}
        <div
          style={{
            marginTop: '4rem',
            paddingTop: '3rem',
            borderTop: '1px solid var(--color-border)',
          }}
        >
          <span className="text-label" style={{ marginBottom: '1rem', display: 'block' }}>
            Languages
          </span>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {['Hindi — Native', 'English — Professional', 'Japanese — N5'].map(l => (
              <span key={l} className="tag">{l}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
