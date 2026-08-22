import { useState, useEffect, useCallback } from 'react';
import { useScrollProgress, useActiveSection } from '../hooks/useInView';

const NAV_SECTIONS = ['about', 'experience', 'work', 'thinking', 'contact'];

export default function Nav({ onReload }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const progress = useScrollProgress();
  const active = useActiveSection(NAV_SECTIONS);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = useCallback((e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const links = [
    { id: 'about',      label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'work',       label: 'Projects' },
    { id: 'thinking',   label: 'Thinking' },
    { id: 'contact',    label: 'Contact' },
  ];

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${progress * 100}%` }}
        aria-hidden="true"
      />

      <nav className={`nav-bar${scrolled ? ' scrolled' : ''}`} aria-label="Site navigation">
        <button
          onClick={onReload}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.35rem 0.65rem',
            borderRadius: '4px',
            transition: 'background 0.2s ease, transform 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(34, 211, 238, 0.08)';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          title="Click to reload portfolio"
          aria-label="Reload portfolio"
        >
          <span style={{
            display: 'inline-block',
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-accent)',
            boxShadow: '0 0 8px rgba(34, 211, 238, 0.8)',
            animation: 'pulse-accent 2s ease-in-out infinite'
          }} />
          <span style={{
            fontSize: '0.7rem',
            fontWeight: 500,
            letterSpacing: '0.08em',
            color: 'var(--color-off-white)',
            textTransform: 'uppercase',
            opacity: 0.85
          }}>
            Apurv Prasad <span style={{ opacity: 0.4, margin: '0 0.3rem' }}>·</span> <span style={{ color: 'var(--color-accent)' }}>HR × AI</span>
          </span>
        </button>

        {/* Desktop links */}
        <ul className="nav-links" role="list">
          {links.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`nav-link${active === id ? ' active' : ''}`}
                onClick={e => handleNav(e, id)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile full-screen menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} role="dialog" aria-label="Navigation menu">
        {links.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={e => handleNav(e, id)}
          >
            {label}
          </a>
        ))}
      </div>
    </>
  );
}
