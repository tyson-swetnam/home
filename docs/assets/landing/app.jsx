const { useState: useStateApp, useEffect: useEffectApp } = React;

function App() {
  const [active, setActive] = useStateApp('hero');

  // Sync our data-theme attribute with Material's palette toggle (data-md-color-scheme).
  // The mkdocs-extras CSS triggers off either, but the landing style.css uses [data-theme="dark"]
  // for some scoped overrides — keep them in lockstep.
  useEffectApp(() => {
    const html = document.documentElement;
    const sync = () => {
      const scheme = html.getAttribute('data-md-color-scheme');
      html.setAttribute('data-theme', scheme === 'tls-dark' ? 'dark' : 'light');
      html.setAttribute('data-accent', 'ochre');
    };
    sync();
    const obs = new MutationObserver(sync);
    obs.observe(html, { attributes: true, attributeFilter: ['data-md-color-scheme'] });
    return () => obs.disconnect();
  }, []);

  // Scroll-spy
  useEffectApp(() => {
    const ids = ['hero','research','publications','teaching','os','notes','cv'];
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
    }, { threshold: [0.3], rootMargin: '-20% 0px -50% 0px' });
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  // Smooth-scroll anchor handler for in-page #links inside the React tree
  useEffectApp(() => {
    const handler = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      const headerOffset = 64;
      const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: 'smooth' });
      history.replaceState(null, '', `#${id}`);
    };
    const root = document.getElementById('root');
    if (root) root.addEventListener('click', handler);
    return () => { if (root) root.removeEventListener('click', handler); };
  }, []);

  const T = window;

  return (
    <>
      <main>
        <T.Hero />
        <T.ResearchSection />
        <T.PublicationsSection />
        <T.TeachingSection />
        <T.OpenScienceSection />
        <T.NotesSection />
        <T.CvSection />
      </main>
      <T.Foot />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
