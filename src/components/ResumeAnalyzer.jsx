import { useState, useEffect } from 'react';
import { useInView } from '../hooks/useInView';

const FLOW_NODES = [
  'Problem', 'Idea', 'AI Assistance', 'Prototype', 'Test', 'Iterate', 'Product',
];

function FlowDiagram() {
  const [lit, setLit] = useState(-1);
  const [ref, visible] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (!visible) return;
    let i = 0;
    const interval = setInterval(() => {
      setLit(i);
      i++;
      if (i >= FLOW_NODES.length) clearInterval(interval);
    }, 350);
    return () => clearInterval(interval);
  }, [visible]);

  return (
    <div ref={ref} className="flow-steps" style={{ flexWrap: 'wrap', gap: '0' }}>
      {FLOW_NODES.map((node, i) => (
        <div key={node} className="flow-step">
          <div className={`flow-node${lit >= i ? ' lit' : ''}`}>{node}</div>
          {i < FLOW_NODES.length - 1 && (
            <span className="flow-arrow">→</span>
          )}
        </div>
      ))}
    </div>
  );
}

function StageCard({ stage, delay }) {
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
        transition: 'background 0.3s ease',
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
        {stage.label}
      </div>
      <p style={{
        fontSize: '0.875rem',
        color: 'var(--color-muted)',
        lineHeight: 1.75,
      }}>
        {stage.content}
      </p>
    </div>
  );
}

export default function ResumeAnalyzer() {
  const [h1Ref, h1Vis] = useInView({ threshold: 0.2 });
  const [aiRef, aiVis] = useInView({ threshold: 0.2 });

  const STAGES = [
    {
      label: '01 — The Problem',
      content: 'Candidates often spend hours on resumes that don\'t reflect their true potential. HR teams receive hundreds of submissions and can only skim. The mismatch wastes time on both sides.',
    },
    {
      label: '02 — The Question',
      content: 'Could an AI tool help candidates understand how their resume reads — not just grammatically, but strategically? Could it surface what\'s missing and what could be stronger?',
    },
    {
      label: '03 — The Solution',
      content: 'An AI Resume Analyzer — a web app that takes a resume, analyzes its content against job-relevant criteria, and provides structured, actionable feedback. No jargon. Just clarity.',
    },
    {
      label: '04 — What I Learned',
      content: 'Building something real forces clarity. I learned about user flow, feedback loops, and what it means to make AI output genuinely useful — not just technically functional.',
    },
  ];

  return (
    <section id="work" className="bg-ai-section" aria-label="AI Resume Analyzer case study">
      <div className="section-wrapper">

        {/* Heading */}
        <div ref={h1Ref} className={`reveal${h1Vis ? ' visible' : ''}`}>
          <span className="section-number">§ 06 — AI Products Built · 01</span>
          <div className="project-badge" style={{ marginTop: '0.75rem' }}>
            <span>HR</span><span>AI</span><span>Product</span>
          </div>
          <h2 className="text-display-lg" style={{ maxWidth: '700px' }}>
            AI Resume<br />Analyzer
          </h2>
          <p className="text-body" style={{ maxWidth: '520px', marginTop: '1rem' }}>
            A web application that analyzes resumes and provides structured,
            AI-powered feedback to help candidates communicate their value more effectively.
          </p>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.6rem',
            marginTop: '1.5rem',
            marginBottom: '1rem',
          }}>
            {['HR Problem Identification', 'AI Evaluation Logic', 'Actionable Feedback Engine', 'Rapid Prototyping'].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>

          <a
            href="https://resume-analyzer-rosy-gamma.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
            style={{ marginTop: '1.25rem', display: 'inline-flex' }}
          >
            View Live Project ↗
          </a>
        </div>

        {/* ============================================================
            WEBSITE ART / INTERFACE SHOWCASE (AI Resume Analyzer)
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
                AI Resume Analyzer · Dashboard
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
              resume-analyzer-rosy-gamma.vercel.app
            </div>
          </div>

          {/* Interactive UI Artwork Body */}
          <div style={{ padding: 'clamp(1.25rem, 3vw, 2rem)' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}>
              {/* Left Column: ATS Score & Document Analysis */}
              <div style={{
                background: 'rgba(34, 211, 238, 0.03)',
                border: '1px solid rgba(34, 211, 238, 0.15)',
                padding: '1.5rem',
                borderRadius: '6px',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                  <div>
                    <div style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-accent)' }}>
                      Evaluated Document
                    </div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-off-white)', marginTop: '0.2rem' }}>
                      Resume_Apurv_Prasad.pdf
                    </div>
                  </div>
                  <div style={{
                    padding: '0.4rem 0.75rem',
                    background: 'rgba(34, 211, 238, 0.1)',
                    border: '1px solid rgba(34, 211, 238, 0.3)',
                    borderRadius: '4px',
                    textAlign: 'center',
                  }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-accent)', lineHeight: 1 }}>
                      94%
                    </div>
                    <div style={{ fontSize: '0.55rem', fontWeight: 600, letterSpacing: '0.1em', color: 'var(--color-off-white)', textTransform: 'uppercase', marginTop: '0.2rem' }}>
                      ATS Score
                    </div>
                  </div>
                </div>

                {/* Score Bars */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {[
                    { label: 'Impact & Quantification', score: '91%' },
                    { label: 'HR & Role Keyword Alignment', score: '96%' },
                    { label: 'Clarity & Conciseness', score: '89%' },
                    { label: 'Action Verb Strength', score: '94%' },
                  ].map((metric) => (
                    <div key={metric.label}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--color-muted)', marginBottom: '0.35rem' }}>
                        <span>{metric.label}</span>
                        <span style={{ color: 'var(--color-accent)', fontWeight: 600, fontFamily: 'monospace' }}>{metric.score}</span>
                      </div>
                      <div style={{ height: '4px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '2px', overflow: 'hidden' }}>
                        <div style={{
                          width: metric.score,
                          height: '100%',
                          background: 'linear-gradient(90deg, var(--color-accent-dim), var(--color-accent))',
                          boxShadow: '0 0 8px rgba(34, 211, 238, 0.4)',
                        }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: AI Strategic Recommendations */}
              <div style={{
                background: 'rgba(34, 211, 238, 0.03)',
                border: '1px solid rgba(34, 211, 238, 0.15)',
                padding: '1.5rem',
                borderRadius: '6px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <span style={{ color: 'var(--color-accent)', fontSize: '0.9rem' }}>✦</span>
                    <span style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-accent)' }}>
                      AI Optimization Insight
                    </span>
                  </div>

                  <div style={{
                    padding: '1rem',
                    background: 'rgba(5, 10, 20, 0.75)',
                    border: '1px solid rgba(34, 211, 238, 0.12)',
                    borderRadius: '4px',
                    marginBottom: '1rem',
                  }}>
                    <div style={{ fontSize: '0.7rem', color: '#F87171', opacity: 0.9, marginBottom: '0.3rem', textDecoration: 'line-through' }}>
                      "Managed client social accounts and designed graphics."
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-off-white)', lineHeight: 1.5, fontWeight: 500 }}>
                      <span style={{ color: 'var(--color-accent)' }}>→</span> "Spearheaded digital marketing strategy across 3 platforms, accelerating audience engagement by <strong style={{ color: 'var(--color-accent)' }}>+38%</strong>."
                    </div>
                  </div>

                  <div style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: '0.5rem' }}>
                    Extracted Core Competencies
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {['Talent Acquisition', 'Candidate Experience', 'AI in HR', 'Figma Prototyping', 'Content Strategy'].map(tag => (
                      <span key={tag} style={{
                        fontSize: '0.68rem',
                        padding: '0.2rem 0.55rem',
                        background: 'rgba(34, 211, 238, 0.06)',
                        border: '1px solid rgba(34, 211, 238, 0.18)',
                        borderRadius: '2px',
                        color: 'var(--color-off-white)',
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid rgba(34, 211, 238, 0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.68rem', color: 'var(--color-muted)', fontStyle: 'italic' }}>
                    Live AI Parsing Engine
                  </span>
                  <a
                    href="https://resume-analyzer-rosy-gamma.vercel.app/"
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
                    Launch Analyzer ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-stage case study */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1px',
          background: 'var(--color-border)',
          border: '1px solid var(--color-border)',
          marginTop: '3.5rem',
        }}>
          {STAGES.map((stage, i) => (
            <StageCard key={stage.label} stage={stage} delay={i * 0.1} />
          ))}
        </div>

        {/* AI-assisted development */}
        <div
          ref={aiRef}
          className={`reveal${aiVis ? ' visible' : ''}`}
          style={{ marginTop: '5rem' }}
        >
          <span className="text-label" style={{ display: 'block', marginBottom: '1.5rem' }}>
            AI-Assisted Development
          </span>
          <h3 className="text-display-sm" style={{ maxWidth: '640px', marginBottom: '1rem' }}>
            I didn't begin with a traditional software background.
            I started with the problem.
          </h3>
          <p className="text-body" style={{ maxWidth: '640px', marginBottom: '2.5rem' }}>
            Using AI tools and AI-assisted development, I transformed an initial idea into a functional product through structured exploration, rapid prototyping, and continuous iteration. Technology served as an enabler, while the focus remained on understanding the problem, developing the solution, and delivering practical value.
          </p>

          <FlowDiagram />
        </div>

      </div>
    </section>
  );
}
