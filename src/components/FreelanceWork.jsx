import { useInView } from '../hooks/useInView';

const PROFILES = [
  {
    platform: 'Contra',
    handle: '@apurv_for_fiverr',
    desc: 'Portfolio of freelance projects — social media management, digital marketing, UI/UX design, and content creation across multiple clients.',
    href: 'https://contra.com/apurv_for_fiverr_p3eckbq4/work?r=apurv_for_fiverr_p3eckbq4',
    icon: '◎',
    tag: 'Portfolio & Services',
  },
  {
    platform: 'Upwork',
    handle: 'Project 01',
    desc: 'Client work delivered on Upwork — social media strategy and content creation with measurable engagement results.',
    href: 'https://www.upwork.com/freelancers/~012287703d5002143e?p=1713249532260237312',
    icon: '◈',
    tag: 'Client Project',
  },
  {
    platform: 'Upwork',
    handle: 'Project 02',
    desc: 'Second Upwork engagement — digital marketing execution and creative content production for client brand growth.',
    href: 'https://www.upwork.com/freelancers/~012287703d5002143e?p=1662140174956961792',
    icon: '◇',
    tag: 'Client Project',
  },
];

function ProfileCard({ profile, index }) {
  const [ref, visible] = useInView({ threshold: 0.15 });

  return (
    <a
      ref={ref}
      href={profile.href}
      target="_blank"
      rel="noreferrer"
      className={`reveal${visible ? ' visible' : ''}`}
      style={{
        transitionDelay: `${index * 0.12}s`,
        display: 'block',
        textDecoration: 'none',
        border: '1px solid var(--color-border)',
        padding: '2rem',
        background: 'rgba(34,211,238,0.02)',
        position: 'relative',
        overflow: 'hidden',
        transition: 'border-color 0.3s ease, background 0.3s ease, transform 0.3s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(34,211,238,0.35)';
        e.currentTarget.style.background = 'rgba(34,211,238,0.05)';
        e.currentTarget.style.transform = 'translateY(-3px)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--color-border)';
        e.currentTarget.style.background = 'rgba(34,211,238,0.02)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
      aria-label={`${profile.platform} — ${profile.handle}`}
    >
      {/* Hover radial */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse at 0% 0%, rgba(34,211,238,0.06), transparent 60%)',
          opacity: 0,
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* Top row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: '36px', height: '36px',
            border: '1px solid var(--color-border)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1rem', color: 'var(--color-accent)',
            flexShrink: 0,
          }}>
            {profile.icon}
          </div>
          <div>
            <div style={{
              fontFamily: 'var(--font-display)', fontSize: '1rem',
              fontWeight: 700, color: 'var(--color-off-white)',
              letterSpacing: '-0.01em',
            }}>
              {profile.platform}
            </div>
            <div style={{
              fontSize: '0.7rem', color: 'var(--color-muted)',
              marginTop: '0.1rem',
            }}>
              {profile.handle}
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div style={{
          fontFamily: 'var(--font-display)', fontSize: '0.9rem',
          color: 'var(--color-accent)', opacity: 0.5,
          transition: 'opacity 0.3s ease, transform 0.3s ease',
        }}>
          ↗
        </div>
      </div>

      {/* Description */}
      <p style={{
        fontSize: '0.875rem', color: 'var(--color-muted)',
        lineHeight: 1.65, marginBottom: '1.25rem',
      }}>
        {profile.desc}
      </p>

      {/* Tag */}
      <span className="tag">{profile.tag}</span>
    </a>
  );
}

export default function FreelanceWork() {
  const [h1Ref, h1Vis] = useInView({ threshold: 0.2 });

  return (
    <section className="bg-consulting-section" aria-label="Freelance work">
      <div className="section-wrapper">

        <div ref={h1Ref} className={`reveal${h1Vis ? ' visible' : ''}`} style={{ marginBottom: '3rem' }}>
          <span className="section-number">§ 03 — Freelance Work</span>
          <h2 className="text-display-md" style={{ maxWidth: '580px', marginTop: '0.75rem' }}>
            2+ years of<br />client work.
          </h2>
          <p className="text-body" style={{ maxWidth: '480px', marginTop: '1rem' }}>
            Before HR and AI, I was building skills the hard way — finding clients,
            delivering real work, and learning what it means to solve problems for other people.
          </p>
        </div>

        {/* Profile cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1px',
          background: 'var(--color-border)',
          border: '1px solid var(--color-border)',
        }}>
          {PROFILES.map((profile, i) => (
            <div key={profile.href} style={{ background: 'var(--color-base)' }}>
              <ProfileCard profile={profile} index={i} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
