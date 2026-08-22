import { useState } from 'react';
import { useInView } from '../hooks/useInView';

const CONCEPTS = [
  {
    id: '01',
    title: 'USER',
    subtitle: 'Human Understanding & Context',
    principle: 'Empathy Precedes Architecture',
    detail: 'Every product exists for someone. Understanding who that person is — their daily context, frustrations, and underlying goals — is the foundation of anything worth building.',
    icon: '◎',
  },
  {
    id: '02',
    title: 'PROBLEM',
    subtitle: 'Root-Cause Discovery',
    principle: 'Define The Right Problem First',
    detail: 'The problem is almost never what it appears at first glance. Defining the right problem is harder than finding the solution, and far more important to get right.',
    icon: '◈',
  },
  {
    id: '03',
    title: 'SOLUTION',
    subtitle: 'Humble Hypotheses',
    principle: 'Solutions Are Testable Hypotheses',
    detail: 'A solution is a hypothesis. It should be specific, testable, and humble — ready to be refined the moment real user feedback tells you what is missing.',
    icon: '⬡',
  },
  {
    id: '04',
    title: 'EXPERIENCE',
    subtitle: 'Interaction & Flow',
    principle: 'The Experience Is The Product',
    detail: 'How something feels to use is not decoration. Friction, cognitive clarity, and intuitive flow are foundational design decisions, never afterthoughts.',
    icon: '◇',
  },
  {
    id: '05',
    title: 'ITERATION',
    subtitle: 'Relentless Improvement',
    principle: 'Refinement Is The Actual Work',
    detail: 'Nothing is finished after the first version. The willingness to test, listen, revisit, and rebuild is what separates durable products from temporary ideas.',
    icon: '⟡',
  },
];

export default function WhatILearned() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [h1Ref, h1Vis] = useInView({ threshold: 0.2 });
  const [consoleRef, consoleVis] = useInView({ threshold: 0.15 });
  const [stmtRef, stmtVis] = useInView({ threshold: 0.2 });

  const active = CONCEPTS[activeIndex];

  return (
    <section id="thinking" className="bg-consulting-section" aria-label="What I learned">
      <div className="section-wrapper">

        {/* Section Heading */}
        <div ref={h1Ref} className={`reveal${h1Vis ? ' visible' : ''}`} style={{ marginBottom: '3.5rem' }}>
          <span className="section-number">§ 09 — Thinking System</span>
          <h2 className="text-display-lg" style={{ maxWidth: '700px', marginTop: '0.75rem' }}>
            Creating a product is not<br />simply about writing code.
          </h2>
          <p className="text-body" style={{ maxWidth: '520px', marginTop: '1rem' }}>
            Building tools forced me to develop a structured way of thinking.
            Select each pillar of the system below:
          </p>
        </div>

        {/* ============================================================
            INTERACTIVE THINKING SYSTEM CONSOLE
           ============================================================ */}
        <div
          ref={consoleRef}
          className={`reveal${consoleVis ? ' visible' : ''}`}
          style={{
            border: '1px solid rgba(34, 211, 238, 0.2)',
            borderRadius: '8px',
            background: 'linear-gradient(180deg, rgba(10, 22, 40, 0.95) 0%, rgba(5, 10, 20, 0.98) 100%)',
            boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 40px -10px rgba(34, 211, 238, 0.08)',
            overflow: 'hidden',
          }}
        >
          {/* Top Selector Navigation Tabs */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '1px',
            background: 'rgba(34, 211, 238, 0.12)',
            borderBottom: '1px solid rgba(34, 211, 238, 0.15)',
          }}>
            {CONCEPTS.map((c, idx) => {
              const isSelected = activeIndex === idx;
              return (
                <button
                  key={c.title}
                  onClick={() => setActiveIndex(idx)}
                  style={{
                    padding: '1.1rem 0.75rem',
                    background: isSelected ? 'rgba(34, 211, 238, 0.08)' : 'rgba(5, 10, 20, 0.85)',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.35rem',
                    position: 'relative',
                    transition: 'all 0.25s ease',
                  }}
                  aria-selected={isSelected}
                  role="tab"
                >
                  {/* Active Top Glow Line */}
                  {isSelected && (
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: 'var(--color-accent)',
                      boxShadow: '0 0 10px rgba(34, 211, 238, 0.8)',
                    }} />
                  )}

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span style={{ fontSize: '0.65rem', color: isSelected ? 'var(--color-accent)' : 'var(--color-muted)', fontFamily: 'monospace' }}>
                      {c.id}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: isSelected ? 'var(--color-accent)' : 'var(--color-muted)' }}>
                      {c.icon}
                    </span>
                  </div>

                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.85rem',
                    fontWeight: isSelected ? 700 : 500,
                    letterSpacing: '0.08em',
                    color: isSelected ? 'var(--color-off-white)' : 'var(--color-muted)',
                  }}>
                    {c.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Detail Showcase Panel */}
          <div style={{ padding: 'clamp(1.75rem, 4vw, 3rem)' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '1.5rem',
              marginBottom: '2rem',
            }}>
              <div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '20px',
                  background: 'rgba(34, 211, 238, 0.08)',
                  border: '1px solid rgba(34, 211, 238, 0.2)',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--color-accent)',
                  marginBottom: '1rem',
                }}>
                  <span>{active.id}</span>
                  <span>·</span>
                  <span>{active.subtitle}</span>
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                  fontWeight: 700,
                  color: 'var(--color-off-white)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                }}>
                  {active.title}
                </h3>
              </div>

              {/* Principle Badge */}
              <div style={{
                padding: '0.75rem 1.25rem',
                background: 'rgba(5, 10, 20, 0.7)',
                border: '1px solid rgba(34, 211, 238, 0.15)',
                borderRadius: '6px',
                maxWidth: '320px',
              }}>
                <div style={{ fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: '0.25rem' }}>
                  Core Principle
                </div>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'var(--color-accent)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}>
                  <span>✦</span> {active.principle}
                </div>
              </div>
            </div>

            {/* Deep Insight Text Box */}
            <div style={{
              padding: '1.75rem',
              background: 'rgba(34, 211, 238, 0.02)',
              borderLeft: '3px solid var(--color-accent)',
              borderTop: '1px solid rgba(34, 211, 238, 0.08)',
              borderRight: '1px solid rgba(34, 211, 238, 0.08)',
              borderBottom: '1px solid rgba(34, 211, 238, 0.08)',
              borderRadius: '0 6px 6px 0',
            }}>
              <p style={{
                fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
                color: 'var(--color-off-white)',
                lineHeight: 1.8,
                fontWeight: 400,
                opacity: 0.95,
              }}>
                "{active.detail}"
              </p>
            </div>

            {/* Navigation Indicators */}
            <div style={{
              marginTop: '2rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
            }}>
              <div style={{ display: 'flex', gap: '0.4rem' }}>
                {CONCEPTS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`Go to concept ${idx + 1}`}
                    style={{
                      width: activeIndex === idx ? '24px' : '8px',
                      height: '6px',
                      borderRadius: '3px',
                      background: activeIndex === idx ? 'var(--color-accent)' : 'rgba(255, 255, 255, 0.15)',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                  />
                ))}
              </div>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button
                  onClick={() => setActiveIndex((prev) => (prev > 0 ? prev - 1 : CONCEPTS.length - 1))}
                  className="btn-outline"
                  style={{ padding: '0.5rem 1rem', fontSize: '0.75rem' }}
                >
                  ← Prev
                </button>
                <button
                  onClick={() => setActiveIndex((prev) => (prev < CONCEPTS.length - 1 ? prev + 1 : 0))}
                  className="btn-primary"
                  style={{ padding: '0.5rem 1.25rem', fontSize: '0.75rem' }}
                >
                  Next: {CONCEPTS[(activeIndex + 1) % CONCEPTS.length].title} →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Closing statement */}
        <div
          ref={stmtRef}
          className={`reveal${stmtVis ? ' visible' : ''}`}
          style={{ marginTop: '5rem', textAlign: 'center', maxWidth: '640px', margin: '5rem auto 0' }}
        >
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
            fontWeight: 500,
            color: 'var(--color-off-white)',
            lineHeight: 1.6,
            letterSpacing: '-0.01em',
          }}>
            It is about understanding the <span style={{ color: 'var(--color-accent)' }}>user</span>, the <span style={{ color: 'var(--color-accent)' }}>problem</span>, the <span style={{ color: 'var(--color-accent)' }}>solution</span>, the <span style={{ color: 'var(--color-accent)' }}>experience</span>, and what needs to improve.
          </p>
        </div>

      </div>
    </section>
  );
}
