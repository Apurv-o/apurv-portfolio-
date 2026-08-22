import { useInView } from '../hooks/useInView';

const COMMITMENTS = [
  { num: '01', text: 'Understand it.' },
  { num: '02', text: 'Learn it.' },
  { num: '03', text: 'Experiment with it.' },
  { num: '04', text: 'Build something.' },
  { num: '05', text: 'Improve it.' },
];

function CommitmentItem({ c, delay }) {
  const [ref, visible] = useInView({ threshold: 0.2 });
  return (
    <div
      ref={ref}
      className={`note-item${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <span className="note-num">{c.num}</span>
      <span className="note-text">{c.text}</span>
    </div>
  );
}

export default function NoteToEmployers() {
  const [h1Ref, h1Vis] = useInView({ threshold: 0.2 });

  return (
    <section className="bg-future-section" aria-label="Note to employers">
      <div className="section-wrapper">

        <div ref={h1Ref} className={`reveal${h1Vis ? ' visible' : ''}`}>
          <span className="section-number">§ 15 — Note to Employers</span>
          <h2
            className="text-display-md"
            style={{ maxWidth: '600px', marginTop: '0.75rem', marginBottom: '0.75rem' }}
          >
            I don't claim to know everything.
          </h2>
          <p className="text-body" style={{ maxWidth: '520px', marginBottom: '3rem' }}>
            What I can demonstrate is curiosity, adaptability,
            and a genuine willingness to learn. When I encounter something new —
            this is how I approach it:
          </p>
        </div>

        <div className="note-items">
          {COMMITMENTS.map((c, i) => (
            <CommitmentItem key={c.num} c={c} delay={i * 0.12} />
          ))}
        </div>

      </div>
    </section>
  );
}
