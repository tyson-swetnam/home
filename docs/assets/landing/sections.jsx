const { useState: useStateSec, useEffect: useEffectSec, useRef: useRefSec } = React;

/* ===== Reveal-on-scroll hook ===== */
function useReveal() {
  const ref = useRefSec(null);
  useEffectSec(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.classList.add('in'); obs.disconnect(); }
    }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ===== Hero ===== */
function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="shell hero-grid">
        <div>
          <div className="eyebrow fade-in" style={{marginBottom: 28}}>
            <span className="dot">●</span>&nbsp;&nbsp;Research Associate Professor · Geoinformatics
          </div>
          <h1>
            {['Open', 'science,', 'across'].map((w, i) =>
              <span key={i} className="word" style={{animationDelay: `${0.05 + i * 0.08}s`}}>{w}&nbsp;</span>)}
            <br/>
            {['the', 'natural', 'world.'].map((w, i) =>
              <span key={i} className={`word ${i === 1 ? 'italic' : ''}`} style={{animationDelay: `${0.30 + i * 0.08}s`}}>{w}&nbsp;</span>)}
          </h1>
          <p className="lede fade-in" style={{animationDelay: '0.7s'}}>
            Building cyberinfrastructure tools for biology, ecology, agriculture, and earth science — with collaborators across dozens of institutions.
          </p>
          <div className="quicklinks fade-in" style={{animationDelay: '0.9s'}}>
            <a href="/cv/">Curriculum Vitae <span className="arrow">↗</span></a>
            <a href="/publications/">Publications <span className="arrow">↗</span></a>
            <a href="/code/">Code &amp; Data <span className="arrow">↗</span></a>
            <a href="mailto:tswetnam@arizona.edu">Email <span className="arrow">↗</span></a>
          </div>
        </div>

        <aside className="hero-meta fade-in" style={{animationDelay: '0.6s'}}>
          <div className="row">
            <div className="label">Current</div>
            <div>Director of Open Science Initiatives, BIO5</div>
            <div style={{color:'var(--ink-3)'}}>co-Principal Investigator, CyVerse</div>
          </div>
          <div className="row">
            <div className="label">Domains</div>
            <div>Geoinformatics · Cyberinfrastructure</div>
            <div style={{color:'var(--ink-3)'}}>Remote Sensing · Artificial Intelligence</div>
            <div style={{color:'var(--ink-3)'}}>Ecology · Genomics · Hydrology</div>
          </div>
          <div className="row">
            <div className="label">Profiles</div>
            <div style={{display:'flex', gap:14, flexWrap:'wrap'}}>
              <a href="https://orcid.org/0000-0002-6639-7181" target="_blank" rel="noreferrer">ORCID</a>
              <a href="https://scholar.google.com/citations?user=nanIeAYAAAAJ" target="_blank" rel="noreferrer">Scholar</a>
              <a href="https://github.com/tyson-swetnam" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/tyson-swetnam" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

/* ===== Research / Constellation ===== */
function ResearchSection() {
  const { DOMAINS, PROJECTS } = window.SITE_DATA;
  const [activeDomain, setActiveDomain] = useStateSec(null);
  const [activeProject, setActiveProject] = useStateSec(null);
  const ref = useReveal();
  const project = PROJECTS.find(p => p.id === (activeProject || 'cyverse'));

  return (
    <section id="research" className="section">
      <div className="shell">
        <div className="section-head reveal" ref={ref}>
          <div className="section-num">
            <span>§ 01 / Research</span>
            <span className="big">Network</span>
          </div>
          <div className="section-title">
            <h2>A constellation of collaborations.</h2>
            <p className="desc">Active projects, the funders behind them, and the domains they share. Hover a node to trace its connections; tap a domain on the perimeter to filter by field.</p>
          </div>
        </div>

        <div className="constellation-wrap">
          <div className="corner tl">field-map · live</div>
          <div className="corner tr">n={PROJECTS.length} · domains={DOMAINS.length}</div>
          <window.Constellation
            activeDomain={activeDomain} setActiveDomain={setActiveDomain}
            activeProject={activeProject} setActiveProject={setActiveProject} />
          <div className="legend">
            <span><span className="dot"></span>active project</span>
            <span><span className="dot role"></span>collaboration edge</span>
          </div>
        </div>

        <div className="domain-filters">
          <div className={`chip ${!activeDomain ? 'active' : ''}`} onClick={() => setActiveDomain(null)}>All</div>
          {DOMAINS.map(d => (
            <div key={d.id} className={`chip ${activeDomain === d.id ? 'active' : ''}`} onClick={() => setActiveDomain(activeDomain === d.id ? null : d.id)}>{d.label}</div>
          ))}
        </div>

        <div className="project-card" key={project.id}>
          <div>
            <div className="role">{project.role}</div>
            <h3>{project.name}</h3>
            <div className="funding">{project.funder.map(f => <span key={f}>{f}</span>)}</div>
          </div>
          <div>
            <p>{project.summary}</p>
          </div>
          <a className="visit" href={project.href} target={project.href.startsWith('/') ? '_self' : '_blank'} rel="noreferrer">Visit <span>↗</span></a>
        </div>

        <div className="see-all">
          <a href="/current_projects/">All current projects <span>↗</span></a>
        </div>
      </div>
    </section>
  );
}

/* ===== Publications ===== */
function PublicationsSection() {
  const { PUBLICATIONS } = window.SITE_DATA;
  const ref = useReveal();
  return (
    <section id="publications" className="section">
      <div className="shell">
        <div className="section-head reveal" ref={ref}>
          <div className="section-num">
            <span>§ 02 / Selected Work</span>
            <span className="big">Papers</span>
          </div>
          <div className="section-title">
            <h2>Papers that matter most right now.</h2>
            <p className="desc">A small slice of recent and frequently-cited publications. The full list — including reports, preprints, and book chapters — lives on the publications page.</p>
          </div>
        </div>
        <div className="pub-list">
          {PUBLICATIONS.map(p => (
            <a key={p.n} className="pub" href={`https://doi.org/${p.doi}`} target="_blank" rel="noreferrer">
              <div className="num">№ {String(p.n).padStart(2,'0')}</div>
              <div>
                <div className="title">{p.title}</div>
                <div className="meta">in <em>{p.venue}</em></div>
                <div className="tags">{p.tags.map(t => `· ${t}`).join(' ')}</div>
              </div>
              <div className="year">
                <div className="numeral">{p.year}</div>
                <span className="doi">doi ↗</span>
              </div>
            </a>
          ))}
        </div>
        <div className="see-all">
          <a href="/publications/">See all publications <span>↗</span></a>
        </div>
      </div>
    </section>
  );
}

/* ===== Teaching ===== */
function TeachingSection() {
  const { COLLABORATORS } = window.SITE_DATA;
  const ref = useReveal();
  return (
    <section id="teaching" className="section">
      <div className="shell">
        <div className="section-head reveal" ref={ref}>
          <div className="section-num">
            <span>§ 03 / Teaching</span>
            <span className="big">Mentoring</span>
          </div>
          <div className="section-title">
            <h2>Workshops, fellowships, and a learning center.</h2>
            <p className="desc">No formal credit courses; instead, intensive cohorts on the foundations of open science and digital literacy, run through the CyVerse Learning Center and partner programs.</p>
          </div>
        </div>

        <div className="teaching-grid">
          <div className="two-col body" style={{gridTemplateColumns:'1fr'}}>
            <p className="lead" style={{fontSize:19, fontFamily:'var(--serif)', fontStyle:'italic', color:'var(--ink)'}}>
              "Foundational Open Science Skills" — a multi-week cohort for early-career scientists, run each spring since 2018.
            </p>
            <p>Co-developed with The Carpentries and Research Bazaar Arizona, the program emphasizes reproducible research, version control, containerization, and the ethics of open data.</p>
            <p>I'm also a member of <a href="https://carpentries.org" target="_blank" rel="noreferrer" style={{borderBottom:'1px solid var(--rule)'}}>The Carpentries</a> instructor community and a regular collaborator with NSF's Data Science Fellows network.</p>
            <div className="see-all" style={{textAlign:'left', marginTop: 20}}>
              <a href="/teaching/">Teaching &amp; mentoring <span>↗</span></a>
            </div>
          </div>

          <div>
            <div className="eyebrow" style={{marginBottom:18}}>Affiliations &amp; host institutions</div>
            <div>
              {COLLABORATORS.map(c => (
                <div key={c.n} className="affil">
                  <div className="num">{c.n}</div>
                  <div>
                    <div className="name">{c.name}</div>
                    <div className="role">{c.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== Open Science ===== */
function OpenScienceSection() {
  const ref = useReveal();
  return (
    <section id="os" className="section" style={{background:'var(--paper-2)'}}>
      <div className="shell">
        <div className="section-head reveal" ref={ref}>
          <div className="section-num">
            <span>§ 04 / Open Science</span>
            <span className="big">Code &amp; Data</span>
          </div>
          <div className="section-title">
            <h2>Open Source &amp; Open Data</h2>
            <p className="desc">Public datasets, open-source software, and reproducible research pipelines — versioned, citeable, and (mostly) containerized.</p>
          </div>
        </div>

        <div className="os-grid">
          <a className="os-card" href="/data/">
            <div className="label">Data</div>
            <h3>Published datasets</h3>
            <p>Lidar, drone imagery, dendrochronology, and ecological time-series — released through CyVerse Data Commons, ORNL DAAC, and Zenodo.</p>
            <div className="stat">28 <span>archived</span></div>
          </a>
          <a className="os-card" href="/code/">
            <div className="label">Code</div>
            <h3>Open-source tools</h3>
            <p>Python and R libraries for forest inventory, point-cloud processing, and Earth-Engine analysis. Most ship as Docker images.</p>
            <div className="stat">61 <span>repos</span></div>
          </a>
          <a className="os-card" href="/talks/">
            <div className="label">Outreach</div>
            <h3>Talks &amp; training</h3>
            <p>Conference talks, workshop curricula, and the FOSS cohort — slides, video, and notebooks, all CC-BY.</p>
            <div className="stat">90+ <span>sessions</span></div>
          </a>
        </div>

      </div>
    </section>
  );
}

/* ===== Field Notes (blog) ===== */
function NotesSection() {
  const { NOTES } = window.SITE_DATA;
  const ref = useReveal();
  return (
    <section id="notes" className="section">
      <div className="shell">
        <div className="section-head reveal" ref={ref}>
          <div className="section-num">
            <span>§ 05 / Field Notes</span>
            <span className="big">Blog</span>
          </div>
          <div className="section-title">
            <h2>Occasional writing.</h2>
            <p className="desc">Slow-published essays on AI, agriculture, open science, and a year's worth of weather.</p>
          </div>
        </div>
        <div className="notes-grid">
          {NOTES.map(n => (
            <a key={n.title} className="note" href={n.href || '/blog/'}>
              <div className="date">{n.date}</div>
              <h3>{n.title}</h3>
              <p className="excerpt">{n.excerpt}</p>
              <div className="arrow">↗</div>
            </a>
          ))}
        </div>
        <div className="see-all">
          <a href="/blog/">All field notes <span>↗</span></a>
        </div>
      </div>
    </section>
  );
}

/* ===== CV / closing ===== */
function CvSection() {
  const ref = useReveal();
  return (
    <section id="cv" className="section">
      <div className="shell">
        <div className="section-head reveal" ref={ref}>
          <div className="section-num">
            <span>§ 06 / CV</span>
            <span className="big">Path</span>
          </div>
          <div className="section-title">
            <h2>From a wildland fire crew in Southern Arizona, to an applied artificial intelligence research professional.</h2>
            <p className="desc">Fire ecologist → data scientist → cyberinfrastructure project leader. The arc has its logic, looking back.</p>
          </div>
        </div>

        <div className="cv-body">
          <p className="lead">My first career was with the U.S. Department of the Interior at Saguaro National Park (2002–2005), on the Rincon Mountains wilderness firecrew.</p>
          <p>That work pulled me into a master's with the Rocky Mountain Tree Ring Research Laboratory — using dendrochronology and GIS to reconstruct historical fire regimes in Utah.</p>
          <p>During my PhD I worked for the U.S. Department of Agriculture in the Coronado National Forest Supervisor's Office (2008–2012) as a Fire Management Specialist, while researching restoration ecology, GIS, and remote sensing in watershed management.</p>
          <p>Working with large remotely-sensed datasets is what carried me, eventually, into geoinformatics and cyberinfrastructure for the life and earth sciences.</p>
          <div style={{display:'flex', gap:12, marginTop:32, flexWrap:'wrap'}}>
            <a className="visit" href="/cv/" style={{padding:'10px 18px', border:'1px solid var(--ink)', borderRadius:999, fontSize:13, fontFamily:'var(--sans)', fontWeight:500, display:'inline-flex', alignItems:'center', gap:8}}>Read CV <span>↗</span></a>
            <a className="visit" href="/assets/2025_04_27_Swetnam_CV.pdf" target="_blank" rel="noreferrer" style={{padding:'10px 18px', border:'1px solid var(--rule)', borderRadius:999, fontSize:13, fontFamily:'var(--sans)', fontWeight:500, display:'inline-flex', alignItems:'center', gap:8}}>Download PDF <span>↗</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== Footer ===== */
function Foot() {
  return (
    <footer>
      <div className="shell footer-grid">
        <div>
          <h4>Sections</h4>
          <ul>
            <li><a href="#research">Research</a></li>
            <li><a href="#publications">Publications</a></li>
            <li><a href="#teaching">Teaching</a></li>
            <li><a href="#os">Open Science</a></li>
            <li><a href="#notes">Field Notes</a></li>
            <li><a href="#cv">CV</a></li>
          </ul>
        </div>
        <div>
          <h4>Elsewhere</h4>
          <ul>
            <li><a href="https://orcid.org/0000-0002-6639-7181" target="_blank" rel="noreferrer">ORCID</a></li>
            <li><a href="https://scholar.google.com/citations?user=nanIeAYAAAAJ" target="_blank" rel="noreferrer">Google Scholar</a></li>
            <li><a href="https://github.com/tyson-swetnam" target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/tyson-swetnam" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href="https://hub.docker.com/u/tswetnam" target="_blank" rel="noreferrer">Docker Hub</a></li>
            <li><a href="https://www.youtube.com/channel/UC5xPt9KZHccC0ehMNEkINzQ" target="_blank" rel="noreferrer">YouTube</a></li>
          </ul>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© 2019–2026 Tyson Lee Swetnam</span>
        <span>Built openly</span>
      </div>
    </footer>
  );
}

Object.assign(window, { Hero, ResearchSection, PublicationsSection, TeachingSection, OpenScienceSection, NotesSection, CvSection, Foot, useReveal });
