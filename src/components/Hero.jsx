import { useEffect, useRef, useState } from 'react';

/* Lightweight canvas particle network — ~50 nodes, no external deps */
function ParticleCanvas() {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W = 0, H = 0;
    const nodes = [];
    const isMobile = window.innerWidth < 768;
    const COUNT = isMobile ? 28 : 50;
    const MAX_DIST = isMobile ? 100 : 140;

    function resize() {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    }

    function init() {
      nodes.length = 0;
      for (let i = 0; i < COUNT; i++) {
        nodes.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          r: Math.random() * 1.5 + 0.5,
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // update
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;

        // subtle mouse repel
        const dx = n.x - mx, dy = n.y - my;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 100) {
          n.x += (dx / d) * 0.5;
          n.y += (dy / d) * 0.5;
        }
      }

      // edges
      for (let i = 0; i < COUNT; i++) {
        for (let j = i + 1; j < COUNT; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.2;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(34,211,238,${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // nodes
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(34,211,238,0.4)';
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    }

    resize();
    init();
    draw();

    const ro = new ResizeObserver(() => { resize(); init(); });
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animRef.current);
      ro.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const handleTouch = (e) => {
      if (e.touches && e.touches[0]) {
        mouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };
    window.addEventListener('mousemove', handleMove, { passive: true });
    window.addEventListener('touchmove', handleTouch, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleTouch);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="hero-canvas"
      aria-hidden="true"
      style={{ width: '100%', height: '100%', display: 'block' }}
    />
  );
}

export default function Hero() {
  const [titlePos, setTitlePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const handle = (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      setTitlePos({
        x: ((e.clientX - cx) / cx) * 2.5,
        y: ((e.clientY - cy) / cy) * 1.5,
      });
    };
    window.addEventListener('mousemove', handle, { passive: true });
    return () => window.removeEventListener('mousemove', handle);
  }, []);

  return (
    <section
      className="hero-section"
      id="hero"
      aria-label="Introduction"
    >
      {/* Fine grain noise overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
          opacity: 0.15,
        }}
      />

      <ParticleCanvas />

      {/* Radial gradient */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(34,211,238,0.04) 0%, transparent 70%)',
        }}
      />

      <div
        className="hero-content"
        style={{
          transform: `translate(${titlePos.x}px, ${titlePos.y}px)`,
          transition: 'transform 0.15s ease-out',
        }}
      >
        <div className="hero-eyebrow" aria-hidden="true">
          <span style={{
            display: 'inline-block', width: '24px', height: '1px',
            background: 'var(--color-accent)', marginRight: '0.5rem',
          }} />
          Personal Portfolio
        </div>

        <h1
          className="text-display-xl hero-title"
          style={{ lineHeight: 0.92 }}
        >
          APURV<br />
          <span style={{ color: 'var(--color-accent)' }}>PRASAD</span>
        </h1>

        <p className="hero-subtitle">HR × AI × BUSINESS</p>

        <p className="hero-tagline">
          I identify problems, explore solutions,<br />
          and turn ideas into practical products.
        </p>

        <p className="hero-meta">
          BBA Student · HR · AI · Business · Future Consultant
        </p>

        <div className="hero-buttons">
          <a
            href="#work"
            className="btn-primary"
            onClick={e => {
              e.preventDefault();
              document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore My Story ↓
          </a>
          <a
            href="https://www.linkedin.com/in/apurv-prasad-622067264/"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            Connect on LinkedIn ↗
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero-scroll-hint" aria-hidden="true">
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
          <rect x="0.5" y="0.5" width="15" height="23" rx="7.5" stroke="currentColor" strokeOpacity="0.3" />
          <circle cx="8" cy="8" r="2" fill="currentColor" opacity="0.5">
            <animate attributeName="cy" values="8;14;8" dur="2s" repeatCount="indefinite" />
          </circle>
        </svg>
        <span>Scroll</span>
      </div>
    </section>
  );
}
