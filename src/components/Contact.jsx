import { useState } from 'react';
import { useInView } from '../hooks/useInView';

const INTERESTS = ['HR', 'AI', 'Business', 'Technology', 'Strategy', 'Consulting'];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [h1Ref, h1Vis] = useInView({ threshold: 0.15 });
  const [bodyRef, bodyVis] = useInView({ threshold: 0.15 });
  const [footerRef, footerVis] = useInView({ threshold: 0.2 });

  const handleCopy = () => {
    navigator.clipboard.writeText('apurvforfiverr@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="contact-section section-wrapper-full"
      aria-label="Contact and connect"
    >
      <div className="section-inner" style={{ textAlign: 'center' }}>

        {/* Heading */}
        <div ref={h1Ref} className={`reveal${h1Vis ? ' visible' : ''}`}>
          <span className="text-label" style={{ display: 'block', marginBottom: '1.5rem' }}>
            Let's build something
          </span>
          <h2
            className="text-display-xl"
            style={{ letterSpacing: '-0.03em', lineHeight: 0.95 }}
          >
            LET'S<br />
            <span style={{ color: 'var(--color-accent)' }}>CONNECT.</span>
          </h2>
        </div>

        {/* Body text */}
        <div
          ref={bodyRef}
          className={`reveal${bodyVis ? ' visible' : ''}`}
          style={{ marginTop: '2.5rem', maxWidth: '520px', margin: '2.5rem auto 0' }}
        >
          <p className="text-body" style={{ fontSize: '1.05rem' }}>
            I'm interested in opportunities where I can learn, contribute,
            and work on meaningful problems.
          </p>
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: '0.5rem',
            justifyContent: 'center', marginTop: '1.5rem',
          }}>
            {INTERESTS.map(interest => (
              <span key={interest} className="tag">{interest}</span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="contact-links" style={{ marginTop: '3rem' }}>
          <a
            href="https://www.linkedin.com/in/apurv-prasad-622067264/"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Connect on LinkedIn ↗
          </a>
          <a
            href="mailto:apurvforfiverr@gmail.com"
            className="btn-outline"
          >
            Send an Email ↗
          </a>
          <button
            onClick={handleCopy}
            className="btn-outline"
            style={{
              borderColor: copied ? 'var(--color-accent)' : undefined,
              color: copied ? 'var(--color-accent)' : undefined,
            }}
          >
            {copied ? '✓ Email Copied' : 'Copy Email'}
          </button>
        </div>

        {/* Footer */}
        <div
          ref={footerRef}
          className={`reveal${footerVis ? ' visible' : ''}`}
          style={{ marginTop: '6rem', paddingTop: '3rem', borderTop: '1px solid var(--color-border)' }}
        >
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1rem, 3vw, 1.75rem)',
            fontWeight: 700,
            color: 'var(--color-off-white)',
            letterSpacing: '-0.02em',
            marginBottom: '0.75rem',
          }}>
            BUILDING TOWARD THE FUTURE
          </div>

          <div style={{
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            justifyContent: 'center', flexWrap: 'wrap',
          }}>
            {['HR', 'AI', 'BUSINESS', 'CONSULTING'].map((word, i, arr) => (
              <span key={word} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.75rem', fontWeight: 600,
                  letterSpacing: '0.15em',
                  color: i === arr.length - 1 ? 'var(--color-accent)' : 'var(--color-muted)',
                }}>
                  {word}
                </span>
                {i < arr.length - 1 && (
                  <span style={{ color: 'var(--color-accent)', opacity: 0.3, fontSize: '0.8rem' }}>→</span>
                )}
              </span>
            ))}
          </div>

          <div style={{
            marginTop: '3rem',
            fontSize: '0.7rem',
            color: 'rgba(136, 150, 170, 0.3)',
            letterSpacing: '0.05em',
          }}>
            Built with React · Tailwind CSS · Vite
            <br />
            Apurv Prasad © 2026
          </div>
        </div>

      </div>
    </section>
  );
}
