import { useState } from 'react';
import { useInView } from '../hooks/useInView';

const EXPERIENCES = [
  {
    period: 'Current',
    role: 'Human Resource Intern',
    company: 'Corenest Tech LLP',
    desc: 'Full-time HR Intern working on talent acquisition, candidate experience, and core HR operations. This is where I noticed the gap between candidate potential and how it\'s communicated — the insight that led to the AI Resume Analyzer.',
    tags: ['Recruitment', 'Candidate Experience', 'HR Processes', 'AI in HR', 'Problem Identification'],
  },
  {
    period: 'Mar 2025 — Feb 2026',
    role: 'Content & Video Creator',
    company: 'Self-Employed',
    desc: 'Managed Instagram, YouTube, and Facebook accounts for clients. Created cohesive video content, reels, and creatives. Developed a deeper understanding of audience, communication, and what makes content resonate.',
    tags: ['Canva', 'YouTube SEO', 'Social Media Strategy', 'Content Planning'],
  },
  {
    period: 'Jan 2024 — Mar 2025',
    role: 'Digital Marketer & UI/UX Designer',
    company: 'Self-Employed',
    desc: 'Designed UI/UX wireframes and prototypes in Figma for client projects. Managed social media platforms to improve engagement. This period built my visual thinking and understanding of digital products.',
    tags: ['Figma', 'Canva', 'UI/UX Prototyping', 'Digital Marketing'],
  },
  {
    period: 'Jul 2023 — Jan 2024',
    role: 'Social Media Manager',
    company: 'Self-Employed',
    desc: 'Managed social accounts across Instagram, YouTube, and Facebook for multiple clients. Increased engagement through content planning and strategy. Monitored performance and optimized campaigns using data insights.',
    tags: ['MS Excel', 'Content Strategy', 'Campaign Optimization', 'Social Media'],
    freelance: [
      { label: 'Contra Portfolio', href: 'https://contra.com/apurv_for_fiverr_p3eckbq4/work?r=apurv_for_fiverr_p3eckbq4' },
      { label: 'Upwork Project 1', href: 'https://www.upwork.com/freelancers/~012287703d5002143e?p=1713249532260237312' },
      { label: 'Upwork Project 2', href: 'https://www.upwork.com/freelancers/~012287703d5002143e?p=1662140174956961792' },
    ],
  },
];

function ExpItem({ exp, index }) {
  const [open, setOpen] = useState(false);
  const [ref, visible] = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`exp-item reveal${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div
        className="exp-header"
        onClick={() => setOpen(o => !o)}
        role="button"
        tabIndex={0}
        aria-expanded={open}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(o => !o); }
        }}
      >
        <div>
          <div style={{
            fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '0.35rem',
          }}>
            {exp.period}
          </div>
          <div style={{
            fontFamily: 'var(--font-display)', fontSize: '1.1rem',
            fontWeight: 600, color: 'var(--color-off-white)', letterSpacing: '-0.01em',
          }}>
            {exp.role}
          </div>
          <div style={{ fontSize: '0.825rem', color: 'var(--color-muted)', marginTop: '0.2rem' }}>
            {exp.company}
          </div>
        </div>
        <div
          className={`exp-toggle${open ? ' open' : ''}`}
          aria-hidden="true"
        />
      </div>

      <div className={`exp-body${open ? ' open' : ''}`}>
        <div style={{ paddingTop: '1rem' }}>
          <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
            {exp.desc}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: exp.freelance ? '1rem' : 0 }}>
            {exp.tags.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
          {exp.freelance && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '0.75rem' }}>
              {exp.freelance.map(f => (
                <a
                  key={f.label}
                  href={f.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: '0.75rem', color: 'var(--color-accent)',
                    textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                  }}
                >
                  {f.label} ↗
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const [h1Ref, h1Vis] = useInView({ threshold: 0.2 });

  return (
    <section id="experience" className="bg-consulting-section" aria-label="Work experience">
      <div className="section-wrapper">

        <div ref={h1Ref} className={`reveal${h1Vis ? ' visible' : ''}`} style={{ marginBottom: '3rem' }}>
          <span className="section-number">§ 02 — Experience</span>
          <h2 className="text-display-md" style={{ maxWidth: '500px', marginTop: '0.75rem' }}>
            Where I've worked.<br />What I've done.
          </h2>
        </div>

        <div>
          {EXPERIENCES.map((exp, i) => (
            <ExpItem key={exp.role + exp.period} exp={exp} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
