import { useInView } from '../hooks/useInView';

const TOPICS = [
  {
    icon: '◎',
    title: 'AI for Recruitment',
    body: 'How artificial intelligence is changing how companies find, screen, and evaluate talent — and what that means for both recruiters and candidates.',
  },
  {
    icon: '⬡',
    title: 'HR Technology',
    body: 'The tools and platforms reshaping modern HR: ATS systems, people analytics, and how technology creates or reduces friction in the hiring process.',
  },
  {
    icon: '◈',
    title: 'Workforce Analytics',
    body: 'Using data to understand workforce patterns, predict retention, measure engagement, and make decisions that are grounded in evidence rather than assumption.',
  },
  {
    icon: '◇',
    title: 'Business Strategy',
    body: 'How organizations make decisions, allocate resources, and navigate uncertainty. How strategy connects to execution at every level of a company.',
  },
];

export default function CurrentlyExploring() {
  const [h1Ref, h1Vis] = useInView({ threshold: 0.2 });
  const [gridRef, gridVis] = useInView({ threshold: 0.1 });

  return (
    <section className="bg-future-section" aria-label="Currently exploring">
      <div className="section-wrapper">

        <div ref={h1Ref} className={`reveal${h1Vis ? ' visible' : ''}`} style={{ marginBottom: '3rem' }}>
          <span className="section-number">§ 13 — Currently Exploring</span>
          <span className="text-label" style={{ display: 'block', marginTop: '0.75rem', marginBottom: '0.75rem' }}>
            Continuous Learning
          </span>
          <h2 className="text-display-lg" style={{ maxWidth: '640px' }}>
            Still in motion.
          </h2>
          <p className="text-body" style={{ maxWidth: '480px', marginTop: '1rem' }}>
            These are the areas I'm actively exploring — not because they're required,
            but because they're where my curiosity is pointing right now.
          </p>
        </div>

        <div
          ref={gridRef}
          className={`reveal${gridVis ? ' visible' : ''}`}
        >
          <div className="explore-grid">
            {TOPICS.map((t, i) => (
              <div
                key={t.title}
                className={`explore-card delay-${i + 1}`}
              >
                <div className="explore-icon" aria-hidden="true">{t.icon}</div>
                <div className="explore-title">{t.title}</div>
                <div className="explore-body">{t.body}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
