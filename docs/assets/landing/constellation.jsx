// Research-network constellation — interactive force-relaxed positioning
// Nodes are projects, edges connect projects sharing a domain.
const { useState: useStateConst, useMemo: useMemoConst, useEffect: useEffectConst } = React;

function Constellation({ activeDomain, setActiveDomain, activeProject, setActiveProject }) {
  const { PROJECTS, DOMAINS } = window.SITE_DATA;

  const W = 1000, H = 620;

  // Edges: any two projects sharing a domain (deduped)
  const edges = useMemoConst(() => {
    const out = [];
    for (let i = 0; i < PROJECTS.length; i++) {
      for (let j = i + 1; j < PROJECTS.length; j++) {
        const shared = PROJECTS[i].domains.filter(d => PROJECTS[j].domains.includes(d));
        if (shared.length) out.push({ a: PROJECTS[i].id, b: PROJECTS[j].id, shared });
      }
    }
    return out;
  }, []);

  const positions = useMemoConst(() => {
    const m = {};
    PROJECTS.forEach(p => { m[p.id] = { x: p.x * W, y: p.y * H }; });
    return m;
  }, []);

  const isEdgeActive = (e) => {
    if (activeDomain) return e.shared.includes(activeDomain);
    if (activeProject) return e.a === activeProject || e.b === activeProject;
    return false;
  };
  const isProjectDim = (p) => {
    if (activeDomain) return !p.domains.includes(activeDomain);
    if (activeProject) {
      if (p.id === activeProject) return false;
      const connected = edges.some(e => (e.a === activeProject && e.b === p.id) || (e.b === activeProject && e.a === p.id));
      return !connected;
    }
    return false;
  };

  // Subtle drift animation
  const [t, setT] = useStateConst(0);
  useEffectConst(() => {
    let raf, start = performance.now();
    const tick = (now) => {
      setT((now - start) / 1000);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
  const drift = (id, axis) => {
    const seed = id.charCodeAt(0) + (axis === 'x' ? 0 : 7);
    return Math.sin(t * 0.4 + seed) * 3;
  };

  const handleNodeClick = (p) => {
    if (p.href && p.href.startsWith('/')) {
      window.location.href = p.href;
    } else if (p.href) {
      window.open(p.href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="constellation-svg" preserveAspectRatio="xMidYMid meet" style={{width:'100%', height:'100%', display:'block'}}>
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--rule)" strokeWidth="0.5" opacity="0.5"/>
        </pattern>
      </defs>
      <rect width={W} height={H} fill="url(#grid)" />

      {edges.map((e, i) => {
        const a = positions[e.a]; const b = positions[e.b];
        const ax = a.x + drift(e.a,'x'), ay = a.y + drift(e.a,'y');
        const bx = b.x + drift(e.b,'x'), by = b.y + drift(e.b,'y');
        const active = isEdgeActive(e);
        const someActive = activeDomain || activeProject;
        const cls = `edge ${active ? 'highlight' : someActive ? 'dim' : ''}`;
        return <line key={i} className={cls} x1={ax} y1={ay} x2={bx} y2={by} />;
      })}

      {PROJECTS.map(p => {
        const pos = positions[p.id];
        const x = pos.x + drift(p.id,'x'), y = pos.y + drift(p.id,'y');
        const dim = isProjectDim(p);
        const active = activeProject === p.id;
        return (
          <g key={p.id}
             className={`node ${active ? 'active' : ''} ${dim ? 'dim' : ''}`}
             transform={`translate(${x}, ${y})`}
             onMouseEnter={() => setActiveProject(p.id)}
             onMouseLeave={() => setActiveProject(null)}
             onClick={() => handleNodeClick(p)}>
            {p.anchor && <circle r={p.size + 12} fill="none" stroke="var(--accent)" strokeWidth="0.8" opacity="0.35" strokeDasharray="2 4" />}
            <circle className="node-circle" r={p.size} />
            <text className="node-label" x={p.size + 10} y={4}>{p.name}</text>
            <text className="node-role" x={p.size + 10} y={20}>{p.role}</text>
          </g>
        );
      })}

      {DOMAINS.map((d, i) => {
        const angle = (i / DOMAINS.length) * Math.PI * 2 - Math.PI / 2;
        const r = 290;
        const cx = W / 2 + Math.cos(angle) * r;
        const cy = H / 2 + Math.sin(angle) * r * 0.92;
        const active = activeDomain === d.id;
        return (
          <g key={d.id} onClick={() => setActiveDomain(active ? null : d.id)} style={{cursor:'pointer'}}>
            <rect className={`domain-tag ${active ? 'active' : ''}`}
                  x={cx - 60} y={cy - 11} width={120} height={22} rx={2} />
            <text className={`domain-label ${active ? 'active' : ''}`}
                  x={cx} y={cy + 3} textAnchor="middle">{d.label}</text>
          </g>
        );
      })}
    </svg>
  );
}

window.Constellation = Constellation;
