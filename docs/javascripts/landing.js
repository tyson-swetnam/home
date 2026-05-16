/* T.L. Swetnam landing-page JS — loaded once via extra_javascript so it
   persists across Material's navigation.instant page swaps. A single
   document$ subscription dispatches into the correct init based on the
   sentinel element present on each page. */

(function() {

  // ===== Body class management based on URL =====
  function isLandingPath(p) {
    return p === '/' || p === '' || p === '/index.html' ||
           /\/publications\/?$/.test(p) || /\/publications\/index\.html$/.test(p);
  }

  function updateLandingClass() {
    document.body.classList.toggle('landing-page', isLandingPath(location.pathname));
  }

  // ===== Site data (used by landing init) =====
  var DOMAINS = [
    { id: 'hydro',    label: 'Hydrology' },
    { id: 'ci',       label: 'Cyberinfrastructure' },
    { id: 'genomics', label: 'Genomics' },
    { id: 'agri',     label: 'Agriculture' },
    { id: 'astro',    label: 'Astronomy' },
    { id: 'osci',     label: 'Open Science' },
    { id: 'fire',     label: 'Fire Science' },
    { id: 'ecology',  label: 'Ecology' },
    { id: 'remote',   label: 'Remote Sensing' },
    { id: 'geo',      label: 'Geomorphology' }
  ];

  var PROJECTS = [
    { id: 'cyverse', name: 'CyVerse', role: 'Co-PI · Science Lead',
      funder: ['NSF 0735191', 'NSF 1265383', 'NSF 1743442'],
      summary: 'Public cyberinfrastructure for the life sciences — the largest NSF investment of its kind. I lead the science team.',
      href: 'https://cyverse.org', domains: ['ci','genomics','ecology','osci','agri','astro'],
      x: 0.50, y: 0.42, size: 22, anchor: true },
    { id: 'ofo', name: 'Open Forest Observatory', role: 'PI',
      funder: ['NSF 2152671/72/73'],
      summary: 'Reproducible forest inventory using small uncrewed aerial vehicles, across multiple institutions.',
      href: 'https://openforestobservatory.org', domains: ['remote','ecology','fire','agri'],
      x: 0.18, y: 0.30, size: 16 },
    { id: 'esiil', name: 'ESIIL', role: 'Site Lead',
      funder: ['NSF 2153040'],
      summary: 'Environmental Data Science Innovation & Inclusion Lab — synthesis center at CU Boulder.',
      href: 'https://esiil.org', domains: ['ecology','remote','osci','hydro','fire'],
      x: 0.30, y: 0.62, size: 16 },
    { id: 'ncems', name: 'NCEMS', role: 'Site Lead',
      funder: ['NSF 2335029'],
      summary: 'Synthesis center for emergence in the molecular and cellular sciences, hosted at Penn State.',
      href: 'https://ncems.psu.edu', domains: ['genomics','ci','osci'],
      x: 0.78, y: 0.28, size: 14 },
    { id: 'aiira', name: 'AIIRA', role: 'co-PI',
      funder: ['NIFA 1027030'],
      summary: 'AI Institute for Resilient Agriculture — digital twins for plants and crops.',
      href: 'https://aiira.iastate.edu', domains: ['agri','ecology','remote','ci'],
      x: 0.85, y: 0.55, size: 14 },
    { id: 'dust', name: 'DUST Superfund', role: 'Data Mgmt Core',
      funder: ['NIH P42ES004940'],
      summary: '30-year Superfund Center Data Management Core — long-term environmental health science.',
      href: 'https://superfund.arizona.edu', domains: ['ecology','osci','ci'],
      x: 0.62, y: 0.72, size: 12 },
    { id: 'jetstream', name: 'Jetstream-2', role: 'co-PI',
      funder: ['NSF 2005506'],
      summary: 'User-friendly cloud computing for interactive analysis on demand. 8 PFLOPS across five regional nodes.',
      href: 'https://jetstream-cloud.org', domains: ['ci','astro','osci'],
      x: 0.18, y: 0.74, size: 13 },
    { id: 'coalesce', name: 'COALESCE', role: 'co-PI',
      funder: ['NSF 1954556'],
      summary: 'Context-aware cyber-agricultural systems — robotic teams + adaptive sensing for sustainable farming.',
      href: '#', domains: ['agri','remote'],
      x: 0.72, y: 0.13, size: 11 },
    { id: 'hydrogen', name: 'HydroGEN', role: 'Senior Personnel',
      funder: ['NSF 2134892'],
      summary: 'Convergence Accelerator: ML for sub-surface hydrology.',
      href: 'https://github.com/HydroFrame-ML', domains: ['hydro','geo','ci'],
      x: 0.40, y: 0.16, size: 10 }
  ];

  var SELECTED_PUBS = [
    { n: 41, title: 'The ARID Scoping Study Final Report', venue: 'ORNL DAAC', year: 2025, tags: ['ecology','fire','remote'], doi: '10.3334/ORNLDAAC/2408' },
    { n: 40, title: 'MDRepo — open environment for data warehousing & knowledge discovery from molecular dynamics', venue: 'Nucleic Acids Research', year: 2024, tags: ['genomics','ci'], doi: '10.1093/nar/gkae1109' },
    { n: 37, title: 'CyVerse: Cyberinfrastructure for Open Science', venue: 'PLOS Computational Biology', year: 2023, tags: ['ci','osci','genomics'], doi: '10.1101/2023.06.16.545223' },
    { n: 36, title: 'Using knowledge graphs to infer gene expression in plants', venue: 'Frontiers in Artificial Intelligence', year: 2023, tags: ['genomics','agri'], doi: '10.3389/frai.2023.1201002' },
    { n: 34, title: 'Reimagine fire science for the anthropocene', venue: 'PNAS Nexus', year: 2022, tags: ['fire','ecology'], doi: '10.1093/pnasnexus/pgac115' },
    { n: 32, title: 'Harnessing the NEON data revolution to advance open environmental science', venue: 'Ecosphere', year: 2021, tags: ['ecology','remote','osci'], doi: '10.1002/ecs2.3833' },
    { n: 29, title: 'Ten simple rules to cultivate transdisciplinary collaboration in data science', venue: 'PLoS Computational Biology', year: 2021, tags: ['osci','ci'], doi: '10.1371/journal.pcbi.1008879' },
    { n: 14, title: 'Topographically driven differences in energy and water constrain climatic control on forest carbon', venue: 'Ecosphere', year: 2017, tags: ['ecology','hydro','geo'], doi: '10.1002/ecs2.1797' }
  ];

  var NOTES = [
    { date: '2025-01-14', title: 'GPT-101, Revisited', excerpt: 'A year after my first run at teaching large language models to research scientists, what changed — and what stayed the same.', href: 'blog/posts/2025-01-14-gpt101/' },
    { date: '2024-10-14', title: 'A Year in Review', excerpt: 'Twelve months across CyVerse, ESIIL, OFO, and the people who made the work possible.', href: 'blog/posts/2024-10-14-year-in-review/' },
    { date: '2023-04-17', title: 'AI for Agriculture', excerpt: 'Notes from the field on agentic systems, plant phenotyping, and a quiet revolution in farms.', href: 'blog/posts/2023-04-17-ai4ag/' },
    { date: '2023-04-10', title: 'Meet the AI Assistant', excerpt: 'On embedding a research-grade chat into a faculty homepage, and what it has to learn first.', href: 'blog/posts/2023-04-10-ai/' }
  ];

  var COLLABORATORS = [
    { n: '01', name: 'CyVerse', role: 'Host institution · public cyberinfrastructure for science' },
    { n: '02', name: 'BIO5 Institute', role: 'Host institution · interdisciplinary research' },
    { n: '03', name: 'College of Information Science', role: 'Joint appointment' },
    { n: '04', name: 'School of Natural Resources & Environment', role: 'Joint appointment' },
    { n: '05', name: 'The Carpentries', role: 'Member · open instruction' },
    { n: '06', name: 'Research Bazaar', role: 'Community organizer' }
  ];

  var ALL_PUBS = [
    { n: 41, year: 2025, title: "The ARID Scoping Study Final Report", authors: "Reed, S.C., A.F. Feldman, N.P. Hanan, … T. Swetnam, … B. Cook", venue: "ORNL DAAC", doi: "10.3334/ORNLDAAC/2408", tags: ["ecology","fire","remote","osci"] },
    { n: 40, year: 2024, title: "MDRepo — an open environment for data warehousing and knowledge discovery from molecular dynamics simulations", authors: "Roy A., E. Ward, … T.L. Swetnam, … T.J. Wheeler", venue: "Nucleic Acids Research", doi: "10.1093/nar/gkae1109", tags: ["genomics","ci"] },
    { n: 39, year: 2024, title: "Data Science for Biochemists: Integrating and Evaluating the Use of Interactive Digital Python Notebooks in a Large-Enrollment Undergraduate Biochemistry Course", authors: "Brunk R., K. Shukla, … T.L. Swetnam, & E. Brunk", venue: "Journal of Chemical Education", doi: "10.1021/acs.jchemed.4c00167", tags: ["genomics","osci"] },
    { n: 38, year: 2024, title: "NSF Major Facilities Cloud Use Cases and Considerations", authors: "Berriman, G.B., B. Dobbins, … T.L. Swetnam, … C. Vardeman", venue: "NSF CI-Compass (peer-reviewed report)", doi: "10.5281/zenodo.10481410", tags: ["ci","osci"] },
    { n: 37, year: 2023, title: "CyVerse: Cyberinfrastructure for Open Science", authors: "Swetnam T.L., P.B. Antin, … & E. Lyons", venue: "PLOS Computational Biology", doi: "10.1101/2023.06.16.545223", tags: ["ci","osci","genomics","ecology"], featured: true },
    { n: 36, year: 2023, title: "Using knowledge graphs to infer gene expression in plants", authors: "Thessen, A., L. Cooper, T.L. Swetnam, et al.", venue: "Frontiers in Artificial Intelligence", doi: "10.3389/frai.2023.1201002", tags: ["genomics","agri","ai","ci"] },
    { n: 35, year: 2023, title: "PhytoOracle: Scalable, modular phenomics data processing pipelines", authors: "Gonzalez, E.M., A. Zarei, N. Hendler, et al.", venue: "Frontiers in Plant Science", doi: "10.1002/essoar.10508789.1", tags: ["agri","genomics","ci"] },
    { n: 34, year: 2022, title: "Reimagine fire science for the anthropocene", authors: "Shuman J.K., J.K. Balch, … T. Swetnam, … X. Zhang", venue: "PNAS Nexus", doi: "10.1093/pnasnexus/pgac115", tags: ["fire","ecology"], featured: true },
    { n: 33, year: 2022, title: "Remote sensing from unoccupied aerial systems: Opportunities to enhance Arctic plant ecology in a changing climate", authors: "Yang, D., B.D. Morrison, … T.L. Swetnam, … S.P. Serbin", venue: "Journal of Ecology", doi: "10.1111/1365-2745.13976", tags: ["remote","ecology"] },
    { n: 32, year: 2021, title: "Harnessing the NEON data revolution to advance open environmental science with a diverse and data-capable community", authors: "Nagy R.C., J.K. Balch, … T.L. Swetnam, … K. Zhu", venue: "Ecosphere", doi: "10.1002/ecs2.3833", tags: ["ecology","remote","osci"], featured: true },
    { n: 31, year: 2021, title: "Movement of sediment through a burned landscape: Sediment volume observations and model comparisons in the San Gabriel Mountains, California, USA", authors: "Rengers F.K., L.A. McGuire, J.W. Kean, D.M. Staley, et al.", venue: "Journal of Geophysical Research: Earth Surface", doi: "10.1029/2020JF006053", tags: ["fire","geo","hydro"] },
    { n: 30, year: 2021, title: "UAS-Based Plant Phenotyping for Research and Breeding Applications", authors: "Guo W., M.E. Carroll, A. Singh, T.L. Swetnam, et al.", venue: "Plant Phenomics", doi: "10.34133/2021/9840192", tags: ["agri","remote","genomics"] },
    { n: 29, year: 2021, title: "Ten simple rules to cultivate transdisciplinary collaboration in data science", authors: "Sahneh F., M.A. Balk, M. Kisley, C. Chan, M. Fox, B. Nord, et al.", venue: "PLoS Computational Biology", doi: "10.1371/journal.pcbi.1008879", tags: ["osci","ci"], featured: true },
    { n: 28, year: 2021, title: "On the Use of Standardized Multi-Temporal Indices for Monitoring Disturbance and Ecosystem Moisture Stress across Multiple Earth Observation Systems in the Google Earth Engine", authors: "Swetnam T.L., S.R. Yool, S. Roy, D.A. Falk", venue: "Remote Sensing", doi: "10.3390/rs13081448", tags: ["remote","ecology","ci"] },
    { n: 27, year: 2021, title: "Innovations to expand drone data collection and analysis for rangeland monitoring", authors: "Gillan J.K., G.E. Ponce-Campos, T.L. Swetnam, A. Gorlier, P. Heilman, M.P. McClaran", venue: "Ecosphere", doi: "10.1002/ecs2.3649", tags: ["remote","agri","ecology"] },
    { n: 26, year: 2021, title: "Rangewide habitat suitability analysis for the Mexican wolf (Canis lupus baileyi) to identify recovery areas in its historical distribution", authors: "Martínez-Meyer E., A. González-Bernal, J.A. Velasco, et al.", venue: "Diversity and Distributions", doi: "10.1111/ddi.13222", tags: ["ecology","remote"] },
    { n: 25, year: 2020, title: "Ten simple rules for organizing a data science workshop", authors: "Ponsero A., R. Bartelme, … H. Ellingson, et al.", venue: "PLoS Computational Biology", doi: "10.1371/journal.pcbi.1008226", tags: ["osci","ci"] },
    { n: 24, year: 2020, title: "Extreme drought and adaptive resource selection by a desert mammal", authors: "Gedir J.V., J.W. Cain III, T.L. Swetnam, P.R. Krausman, J.R. Morgart", venue: "Ecosphere", doi: "10.1002/ecs2.3175", tags: ["ecology"] },
    { n: 23, year: 2020, title: "The Rockerverse: Packages and Applications for Containerisation with R", authors: "Nüst D., D. Eddelbuettel, … T.L. Swetnam, … N. Xiao", venue: "The R Journal", doi: "10.32614/rj-2020-007", tags: ["ci","osci"] },
    { n: 22, year: 2019, title: "Allometric relationships between primary size measures and sapwood area for six common tree species in snow-dependent ecosystems in the Southwest United States", authors: "Mitra B., S.A. Papuga, M.R. Alexander, T.L. Swetnam, N. Abramson", venue: "Journal of Forest Research", doi: "10.1007/s11676-019-01048-y", tags: ["ecology","hydro"] },
    { n: 21, year: 2019, title: "Estimating Forage Utilization with Drone-Based Photogrammetric Point Clouds", authors: "Gillan J.K., M.P. McClaran, T.L. Swetnam, P. Heilman", venue: "Rangeland Ecology & Management", doi: "10.1016/j.rama.2019.02.009", tags: ["remote","agri"] },
    { n: 20, year: 2019, title: "Modeling Riparian Restoration Impacts on the Hydrologic Cycle at the Babacomari Ranch, SE Arizona, USA", authors: "Norman L.M., J.B. Callegary, L. Lacher, N.R. Wilson, C. Fandel, B.T. Forbes, T. Swetnam", venue: "Water", doi: "10.3390/w11020381", tags: ["hydro","ecology"] },
    { n: 19, year: 2018, title: "Jetstream — Early operations performance, adoption, and impacts", authors: "Hancock D., C. Stewart, M. Vaughn, et al.", venue: "Concurrency and Computation: Practice and Experience", doi: "10.1002/cpe.4683", tags: ["ci","osci"] },
    { n: 18, year: 2018, title: "A net ecosystem carbon budget for snow dominated forested headwater catchments: linking water and carbon fluxes to critical zone carbon storage", authors: "Perdrial J., P.D. Brooks, T. Swetnam, et al.", venue: "Biogeochemistry", doi: "10.1007/s10533-018-0440-3", tags: ["ecology","hydro","geo"] },
    { n: 17, year: 2018, title: "Which way do you lean? Using slope aspect variations to understand Critical Zone processes and feedbacks", authors: "Pelletier J.D., G.A. Barron-Gafford, … T.L. Swetnam, G.E. Tucker", venue: "Earth Surface Processes & Landforms", doi: "10.1002/esp.4306", tags: ["geo","hydro","ecology"] },
    { n: 16, year: 2018, title: "Considerations for achieving cross-platform point cloud data fusion across different dryland ecosystem structural states", authors: "Swetnam T.L., J.K. Gillan, T.T. Sankey, M.P. McClaran, M.H. Nichols, P. Heilman, J. McVay", venue: "Frontiers in Plant Sciences", doi: "10.3389/fpls.2017.02144", tags: ["remote","ecology","agri"] },
    { n: 15, year: 2017, title: "Fusing tree-ring and forest inventory data to infer influences on tree growth", authors: "Evans M.E.K., D.A. Falk, A. Arizpe, T.L. Swetnam, F. Babst, K.E. Holsinger", venue: "Ecosphere", doi: "10.1002/ecs2.1889", tags: ["ecology"] },
    { n: 14, year: 2017, title: "Topographically driven differences in energy and water constrain climatic control on forest carbon sequestration", authors: "Swetnam T.L., P.D. Brooks, H.R. Barnard, A.A. Harpold, E.L. Gallo", venue: "Ecosphere", doi: "10.1002/ecs2.1797", tags: ["ecology","hydro","geo","remote"], featured: true },
    { n: 13, year: 2017, title: "Mexican wolf habitat suitability analysis in historical range in the Southwestern US and Mexico", authors: "Martínez-Meyer E., A. González-Bernal, … T.L. Swetnam, … J.K. Oakleaf", venue: "US Fish and Wildlife Service Draft Report", doi: null, url: "https://www.fws.gov/southwest/es/mexicanwolf/pdf/20170622_DftBioReport_Appendices.pdf", tags: ["ecology","remote"] },
    { n: 12, year: 2017, title: "Asymmetry of weathering-limited hillslopes: the importance of diurnal covariation in solar insolation and temperature", authors: "Pelletier J.D., T.L. Swetnam", venue: "Earth Surface Processes & Landforms", doi: "10.1002/esp.4136", tags: ["geo","hydro"] },
    { n: 11, year: 2017, title: "UAV hyperspectral and lidar data and their fusion for arid and semi-arid land vegetation monitoring", authors: "Sankey T.T., J. McVay, T.L. Swetnam, M.P. McClaran, P. Heilman, M. Nichols", venue: "Remote Sensing in Ecology and Conservation", doi: "10.1002/rse2.44", tags: ["remote","ecology"] },
    { n: 10, year: 2016, title: "Scaling GIS analysis tasks from the desktop to the cloud utilizing contemporary distributed computing and data management approaches", authors: "Swetnam T.L., J.D. Pelletier, C. Rasmussen, N.R. Callahan, N. Merchant, E. Lyons, M. Rynge, Y. Liu, V. Nandigam, C. Crosby", venue: "XSEDE16 Proceedings (ACM)", doi: null, url: "http://dl.acm.org/citation.cfm?id=2949573", tags: ["ci","remote","osci"] },
    { n: 9, year: 2016, title: "Tree morphologic plasticity explains deviation from metabolic scaling theory in semi-arid conifer forests, southwestern USA", authors: "Swetnam T.L., C.D. O'Connor, A.M. Lynch", venue: "PLOS One", doi: "10.1371/journal.pone.0157582", tags: ["ecology"] },
    { n: 8, year: 2016, title: "Working Paper 35: Carbon Cycling in Southwestern Forests: Reservoirs, Fluxes, and the Effects of Fire and Management", authors: "Swetnam T.L., D.A. Falk", venue: "Ecological Restoration Institute / SW Fire Science Consortium", doi: null, url: "http://openknowledge.nau.edu/2293/", tags: ["fire","ecology"] },
    { n: 7, year: 2015, title: "Discriminating disturbance from natural variation with LiDAR in semi-arid forests in the southwestern USA", authors: "Swetnam T.L., A.M. Lynch, D.A. Falk, S.R. Yool, D.P. Guertin", venue: "Ecosphere", doi: "10.1890/ES14-00384.1", tags: ["remote","ecology","fire"] },
    { n: 6, year: 2015, title: "Laser vision: lidar as a transformative tool to advance critical zone science", authors: "Harpold A.A., et al.", venue: "Hydrology and Earth Systems Science", doi: "10.5194/hess-19-2881-2015", tags: ["remote","hydro","geo"] },
    { n: 5, year: 2014, title: "Estimating individual tree mid- and understory rank-size distributions from airborne laser scanning in semi-arid forests", authors: "Swetnam T.L., D.A. Falk, A.M. Lynch, S.R. Yool", venue: "Forest Ecology and Management", doi: "10.1016/j.foreco.2014.07.011", tags: ["remote","ecology"] },
    { n: 4, year: 2014, title: "Application of Metabolic Scaling Theory to reduce error in local maxima tree segmentation from aerial LiDAR", authors: "Swetnam T.L., D.A. Falk", venue: "Forest Ecology and Management", doi: "10.1016/j.foreco.2014.03.016", tags: ["remote","ecology"] },
    { n: 3, year: 2013, title: "Coevolution of nonlinear trends in vegetation, soils, and topography with elevation and slope aspect: A case study in the sky islands of southern Arizona", authors: "Pelletier J.D., G.A. Barron-Gafford, … T.L. Swetnam, P.A. Troch", venue: "Journal of Geophysical Research: Earth Surface", doi: "10.1002/jgrf.20046", tags: ["geo","ecology","hydro"] },
    { n: 2, year: 2010, title: "Reconstructing Landscape Pattern of Historical Fires and Fire Regimes", authors: "Swetnam T.L., D.A. Falk, A.E. Hessl, C. Farris", venue: "Book chapter — The Landscape Ecology of Fire", doi: "10.1007/978-94-007-0301-8_7", tags: ["fire","ecology"] },
    { n: 1, year: 2010, title: "Comparing selected fire regime condition class (FRCC) and LANDFIRE vegetation model results with tree-ring data", authors: "Swetnam T.L., P.M. Brown", venue: "International Journal of Wildland Fire", doi: "10.1071/WF08001", tags: ["fire","ecology","remote"] }
  ];

  var TAG_LABELS = {
    ci: "Cyberinfrastructure", osci: "Open Science", remote: "Remote Sensing",
    ecology: "Ecology", fire: "Fire Science", hydro: "Hydrology",
    geo: "Geomorphology", genomics: "Genomics", agri: "Agriculture",
    astro: "Astronomy", ai: "AI / ML"
  };

  // ===== Theme toggle (single source of truth: data-md-color-scheme) =====
  // 'light' → scheme 'home', 'dark' → scheme 'slate'. We persist in our own
  // localStorage key (tls-theme) and write to Material's __palette key too so
  // the two systems stay in sync.
  function currentTheme() {
    var saved = localStorage.getItem('tls-theme');
    if (saved === 'light' || saved === 'dark') return saved;
    var scheme = document.body.getAttribute('data-md-color-scheme');
    if (scheme === 'slate' || scheme === 'tls-dark') return 'dark';
    if (scheme === 'home' || scheme === 'default' || scheme === 'tls-light') return 'light';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  function applyTheme(theme) {
    var scheme = theme === 'dark' ? 'slate' : 'home';
    document.documentElement.setAttribute('data-md-color-scheme', scheme);
    document.body.setAttribute('data-md-color-scheme', scheme);
    document.body.setAttribute('data-md-color-primary', 'indigo');
    document.body.setAttribute('data-md-color-accent', 'indigo');
    document.body.dataset.theme = theme;
    document.body.dataset.accent = 'ochre';
    // Persist to Material's palette key so its own init agrees with ours
    try {
      localStorage.setItem('__palette', JSON.stringify({
        index: theme === 'dark' ? 2 : 1,
        color: {
          media: theme === 'dark' ? '(prefers-color-scheme: dark)' : '(prefers-color-scheme: light)',
          scheme: scheme,
          primary: 'indigo',
          accent: 'indigo'
        }
      }));
    } catch (e) {}
    var path = document.getElementById('tls-icon-moon');
    if (path) {
      if (theme === 'dark') {
        path.parentNode.innerHTML = '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>';
      } else {
        path.parentNode.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/>';
      }
    }
  }
  function bindThemeToggle() {
    var btn = document.getElementById('tls-theme-toggle');
    if (!btn || btn.dataset.tlsBound === '1') return;
    btn.dataset.tlsBound = '1';
    btn.addEventListener('click', function() {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      localStorage.setItem('tls-theme', next);
      applyTheme(next);
    });
  }

  // ===== Landing page init =====
  function tlsLandingInit() {
    if (!document.getElementById('tls-constellation')) return;
    if (document.body.dataset.tlsLandingInit === '1') return;
    document.body.dataset.tlsLandingInit = '1';

    // Reveal-on-scroll
    if ('IntersectionObserver' in window) {
      var rev = new IntersectionObserver(function(entries) {
        entries.forEach(function(e) {
          if (e.isIntersecting) { e.target.classList.add('in'); rev.unobserve(e.target); }
        });
      }, { threshold: 0.12 });
      document.querySelectorAll('.reveal').forEach(function(el) { rev.observe(el); });
    } else {
      document.querySelectorAll('.reveal').forEach(function(el) { el.classList.add('in'); });
    }

    // Selected publications
    var pubList = document.getElementById('tls-pub-list');
    if (pubList) {
      pubList.innerHTML = '';
      SELECTED_PUBS.forEach(function(p) {
        var a = document.createElement('a');
        a.className = 'pub';
        a.href = 'https://doi.org/' + p.doi;
        a.target = '_blank';
        a.rel = 'noreferrer';
        var num = '№ ' + (p.n < 10 ? '0' + p.n : p.n);
        var tags = p.tags.map(function(t) { return '· ' + t; }).join(' ');
        a.innerHTML =
          '<div class="num">' + num + '</div>' +
          '<div>' +
            '<div class="title">' + p.title + '</div>' +
            '<div class="meta">in <em>' + p.venue + '</em></div>' +
            '<div class="tags">' + tags + '</div>' +
          '</div>' +
          '<div class="year">' +
            '<div class="numeral">' + p.year + '</div>' +
            '<span class="doi">doi ↗</span>' +
          '</div>';
        pubList.appendChild(a);
      });
    }

    // Notes
    var notesGrid = document.getElementById('tls-notes-grid');
    if (notesGrid) {
      notesGrid.innerHTML = '';
      NOTES.forEach(function(n) {
        var a = document.createElement('a');
        a.className = 'note';
        a.href = n.href || '#';
        a.innerHTML =
          '<div class="date">' + n.date + '</div>' +
          '<h3>' + n.title + '</h3>' +
          '<p class="excerpt">' + n.excerpt + '</p>' +
          '<div class="arrow">↗</div>';
        notesGrid.appendChild(a);
      });
    }

    // Affiliations
    var affilWrap = document.getElementById('tls-affils');
    if (affilWrap) {
      affilWrap.innerHTML = '';
      COLLABORATORS.forEach(function(c) {
        var div = document.createElement('div');
        div.className = 'affil';
        div.innerHTML =
          '<div class="num">' + c.n + '</div>' +
          '<div>' +
            '<div class="name">' + c.name + '</div>' +
            '<div class="role">' + c.role + '</div>' +
          '</div>';
        affilWrap.appendChild(div);
      });
    }

    // Constellation
    var W = 1000, H = 620;
    var statsEl = document.getElementById('tls-constellation-stats');
    if (statsEl) statsEl.textContent = 'n=' + PROJECTS.length + ' · domains=' + DOMAINS.length;

    var edges = [];
    for (var i = 0; i < PROJECTS.length; i++) {
      for (var j = i + 1; j < PROJECTS.length; j++) {
        var shared = PROJECTS[i].domains.filter(function(d) { return PROJECTS[j].domains.includes(d); });
        if (shared.length) edges.push({ a: PROJECTS[i].id, b: PROJECTS[j].id, shared: shared });
      }
    }
    var positions = {};
    PROJECTS.forEach(function(p) { positions[p.id] = { x: p.x * W, y: p.y * H }; });

    var state = { activeDomain: null, activeProject: null };

    function svgEl(name, attrs) {
      var el = document.createElementNS('http://www.w3.org/2000/svg', name);
      if (attrs) for (var k in attrs) el.setAttribute(k, attrs[k]);
      return el;
    }

    function isEdgeActive(e) {
      if (state.activeDomain) return e.shared.includes(state.activeDomain);
      if (state.activeProject) return e.a === state.activeProject || e.b === state.activeProject;
      return false;
    }
    function isProjectDim(p) {
      if (state.activeDomain) return !p.domains.includes(state.activeDomain);
      if (state.activeProject) {
        if (p.id === state.activeProject) return false;
        var connected = edges.some(function(e) {
          return (e.a === state.activeProject && e.b === p.id) || (e.b === state.activeProject && e.a === p.id);
        });
        return !connected;
      }
      return false;
    }

    var svg = document.getElementById('tls-constellation');
    if (svg) {
      svg.innerHTML = '';
      var defs = svgEl('defs');
      var pattern = svgEl('pattern', { id: 'tls-grid', width: 40, height: 40, patternUnits: 'userSpaceOnUse' });
      var path = svgEl('path', { d: 'M 40 0 L 0 0 0 40', fill: 'none', stroke: 'var(--rule)', 'stroke-width': 0.5, opacity: 0.5 });
      pattern.appendChild(path); defs.appendChild(pattern); svg.appendChild(defs);
      svg.appendChild(svgEl('rect', { width: W, height: H, fill: 'url(#tls-grid)' }));

      var edgesG = svgEl('g', { 'data-layer': 'edges' });
      svg.appendChild(edgesG);
      var edgeEls = edges.map(function(e, idx) {
        var a = positions[e.a], b = positions[e.b];
        var line = svgEl('line', { class: 'edge', x1: a.x, y1: a.y, x2: b.x, y2: b.y });
        line.dataset.index = idx;
        edgesG.appendChild(line);
        return line;
      });

      var nodesG = svgEl('g', { 'data-layer': 'nodes' });
      svg.appendChild(nodesG);
      var nodeEls = {};
      PROJECTS.forEach(function(p) {
        var pos = positions[p.id];
        var g = svgEl('g', { class: 'node', transform: 'translate(' + pos.x + ',' + pos.y + ')' });
        if (p.anchor) {
          g.appendChild(svgEl('circle', { r: p.size + 12, fill: 'none', stroke: 'var(--accent)', 'stroke-width': 0.8, opacity: 0.35, 'stroke-dasharray': '2 4' }));
        }
        g.appendChild(svgEl('circle', { class: 'node-circle', r: p.size }));
        var label = svgEl('text', { class: 'node-label', x: p.size + 10, y: 4 }); label.textContent = p.name;
        var role = svgEl('text', { class: 'node-role', x: p.size + 10, y: 20 }); role.textContent = p.role;
        g.appendChild(label); g.appendChild(role);
        g.addEventListener('mouseenter', function() { setActiveProject(p.id); });
        g.addEventListener('mouseleave', function() { setActiveProject(null); });
        g.addEventListener('click', function() { if (p.href && p.href !== '#') window.open(p.href, '_blank'); });
        nodesG.appendChild(g);
        nodeEls[p.id] = g;
      });

      var labelsG = svgEl('g', { 'data-layer': 'domains' });
      svg.appendChild(labelsG);
      var domainEls = {};
      DOMAINS.forEach(function(d, idx) {
        var angle = (idx / DOMAINS.length) * Math.PI * 2 - Math.PI / 2;
        var r = 290;
        var cx = W / 2 + Math.cos(angle) * r;
        var cy = H / 2 + Math.sin(angle) * r * 0.92;
        var g = svgEl('g', { style: 'cursor: pointer' });
        var rect = svgEl('rect', { class: 'domain-tag', x: cx - 60, y: cy - 11, width: 120, height: 22, rx: 2 });
        var text = svgEl('text', { class: 'domain-label', x: cx, y: cy + 3, 'text-anchor': 'middle' }); text.textContent = d.label;
        g.appendChild(rect); g.appendChild(text);
        g.addEventListener('click', function() { setActiveDomain(state.activeDomain === d.id ? null : d.id); });
        labelsG.appendChild(g);
        domainEls[d.id] = { rect: rect, text: text };
      });

      function refresh() {
        var someActive = !!(state.activeDomain || state.activeProject);
        edgeEls.forEach(function(line, idx) {
          var e = edges[idx];
          var active = isEdgeActive(e);
          line.setAttribute('class', 'edge' + (active ? ' highlight' : someActive ? ' dim' : ''));
        });
        PROJECTS.forEach(function(p) {
          var g = nodeEls[p.id];
          var dim = isProjectDim(p);
          var active = state.activeProject === p.id;
          g.setAttribute('class', 'node' + (active ? ' active' : '') + (dim ? ' dim' : ''));
        });
        DOMAINS.forEach(function(d) {
          var refs = domainEls[d.id];
          var active = state.activeDomain === d.id;
          refs.rect.setAttribute('class', 'domain-tag' + (active ? ' active' : ''));
          refs.text.setAttribute('class', 'domain-label' + (active ? ' active' : ''));
        });
        renderProjectCard();
      }

      function setActiveProject(id) { state.activeProject = id; refresh(); }
      function setActiveDomain(id) { state.activeDomain = id; renderDomainFilters(); refresh(); }

      var filtersWrap = document.getElementById('tls-domain-filters');
      function renderDomainFilters() {
        if (!filtersWrap) return;
        filtersWrap.innerHTML = '';
        var allChip = document.createElement('div');
        allChip.className = 'chip' + (!state.activeDomain ? ' active' : '');
        allChip.textContent = 'All';
        allChip.addEventListener('click', function() { setActiveDomain(null); });
        filtersWrap.appendChild(allChip);
        DOMAINS.forEach(function(d) {
          var chip = document.createElement('div');
          chip.className = 'chip' + (state.activeDomain === d.id ? ' active' : '');
          chip.textContent = d.label;
          chip.addEventListener('click', function() { setActiveDomain(state.activeDomain === d.id ? null : d.id); });
          filtersWrap.appendChild(chip);
        });
      }

      var cardWrap = document.getElementById('tls-project-card');
      function renderProjectCard() {
        if (!cardWrap) return;
        var pid = state.activeProject || 'cyverse';
        var p = PROJECTS.find(function(x) { return x.id === pid; });
        if (!p) return;
        var fundChips = p.funder.map(function(f) { return '<span>' + f + '</span>'; }).join('');
        cardWrap.innerHTML =
          '<div>' +
            '<div class="role">' + p.role + '</div>' +
            '<h3>' + p.name + '</h3>' +
            '<div class="funding">' + fundChips + '</div>' +
          '</div>' +
          '<div>' +
            '<p>' + p.summary + '</p>' +
          '</div>' +
          '<a class="visit" href="' + (p.href || '#') + '" target="_blank" rel="noreferrer">Visit <span>↗</span></a>';
      }

      renderDomainFilters();
      refresh();
    }
  }

  // ===== Publications page init =====
  function tlsPubsInit() {
    if (!document.getElementById('tls-results')) return;
    if (document.body.dataset.tlsPubsInit === '1') return;
    document.body.dataset.tlsPubsInit = '1';

    var years = ALL_PUBS.map(function(p) { return p.year; });
    var firstAuthor = ALL_PUBS.filter(function(p) { return p.authors.indexOf('Swetnam') === 0; }).length;
    var setText = function(id, v) { var el = document.getElementById(id); if (el) el.textContent = v; };
    setText('tls-stat-total', ALL_PUBS.length);
    setText('tls-stat-firstauthor', firstAuthor);
    setText('tls-stat-first', Math.min.apply(null, years));
    setText('tls-stat-last', Math.max.apply(null, years));
    setText('tls-foot-count', ALL_PUBS.length);

    var state = { query: '', activeTags: [], sort: 'newest' };

    var tagCounts = {};
    ALL_PUBS.forEach(function(p) { p.tags.forEach(function(t) { tagCounts[t] = (tagCounts[t] || 0) + 1; }); });
    var tagOrder = Object.keys(TAG_LABELS).filter(function(t) { return tagCounts[t] > 0; })
                     .sort(function(a, b) { return tagCounts[b] - tagCounts[a]; });

    function escapeHtml(s) {
      return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    var tagsWrap = document.getElementById('tls-tags');
    function renderTags() {
      if (!tagsWrap) return;
      tagsWrap.innerHTML = '';
      var allChip = document.createElement('div');
      allChip.className = 'chip' + (state.activeTags.length === 0 ? ' active' : '');
      allChip.innerHTML = 'All<span class="count">' + ALL_PUBS.length + '</span>';
      allChip.addEventListener('click', function() { state.activeTags = []; renderTags(); render(); });
      tagsWrap.appendChild(allChip);
      tagOrder.forEach(function(t) {
        var chip = document.createElement('div');
        chip.className = 'chip' + (state.activeTags.indexOf(t) >= 0 ? ' active' : '');
        chip.innerHTML = TAG_LABELS[t] + '<span class="count">' + tagCounts[t] + '</span>';
        chip.addEventListener('click', function() {
          var idx = state.activeTags.indexOf(t);
          if (idx >= 0) state.activeTags.splice(idx, 1);
          else state.activeTags.push(t);
          renderTags(); render();
        });
        tagsWrap.appendChild(chip);
      });
    }

    var searchInput = document.getElementById('tls-search');
    var clearBtn = document.getElementById('tls-search-clear');
    if (searchInput) {
      searchInput.addEventListener('input', function() {
        state.query = searchInput.value;
        if (clearBtn) clearBtn.style.display = state.query ? 'grid' : 'none';
        render();
      });
    }
    if (clearBtn) {
      clearBtn.addEventListener('click', function() {
        if (searchInput) searchInput.value = '';
        state.query = '';
        clearBtn.style.display = 'none';
        render();
      });
    }

    var sortWrap = document.getElementById('tls-sort');
    if (sortWrap) {
      sortWrap.addEventListener('click', function(e) {
        var opt = e.target.closest('.opt');
        if (!opt) return;
        state.sort = opt.dataset.sort;
        sortWrap.querySelectorAll('.opt').forEach(function(o) { o.classList.remove('active'); });
        opt.classList.add('active');
        render();
      });
    }

    function pubItemHtml(p) {
      var href = p.doi ? ('https://doi.org/' + p.doi) : (p.url || '#');
      var num = '№ ' + (p.n < 10 ? '0' + p.n : p.n);
      var tags = p.tags.map(function(t) { return '· ' + (TAG_LABELS[t] || t); }).join(' ');
      var featured = p.featured ? '<span class="featured-tag">★ featured</span>' : '';
      var doiLabel = p.doi ? 'doi ↗' : (p.url ? 'link ↗' : '');
      return '<a class="pub" href="' + href + '" target="_blank" rel="noreferrer">' +
        '<div class="num">' + num + '</div>' +
        '<div>' +
          '<div class="title">' + escapeHtml(p.title) + featured + '</div>' +
          '<div class="meta">' + escapeHtml(p.authors) + ' · in <em>' + escapeHtml(p.venue) + '</em></div>' +
          '<div class="tags">' + tags + '</div>' +
        '</div>' +
        '<div class="year">' +
          '<div class="numeral">' + p.year + '</div>' +
          '<span class="doi">' + doiLabel + '</span>' +
        '</div>' +
      '</a>';
    }

    function render() {
      var list = ALL_PUBS.slice();
      if (state.activeTags.length) {
        list = list.filter(function(p) { return state.activeTags.every(function(t) { return p.tags.indexOf(t) >= 0; }); });
      }
      if (state.query.trim()) {
        var q = state.query.toLowerCase();
        list = list.filter(function(p) {
          return p.title.toLowerCase().indexOf(q) >= 0 ||
                 p.authors.toLowerCase().indexOf(q) >= 0 ||
                 p.venue.toLowerCase().indexOf(q) >= 0 ||
                 (p.doi || '').toLowerCase().indexOf(q) >= 0;
        });
      }
      if (state.sort === 'newest') list.sort(function(a, b) { return (b.year - a.year) || (b.n - a.n); });
      else if (state.sort === 'oldest') list.sort(function(a, b) { return (a.year - b.year) || (a.n - b.n); });
      else if (state.sort === 'featured') list.sort(function(a, b) { return ((b.featured?1:0) - (a.featured?1:0)) || (b.year - a.year); });

      var results = document.getElementById('tls-results');
      if (!results) return;
      if (list.length === 0) {
        results.innerHTML = '<div class="empty">No publications match those filters.</div>';
        return;
      }

      if (state.sort === 'featured') {
        results.innerHTML = '<div class="pub-list">' + list.map(pubItemHtml).join('') + '</div>';
      } else {
        var groups = {};
        list.forEach(function(p) { (groups[p.year] = groups[p.year] || []).push(p); });
        var yearKeys = Object.keys(groups).map(Number).sort(function(a, b) {
          return state.sort === 'oldest' ? a - b : b - a;
        });
        var html = yearKeys.map(function(y) {
          var items = groups[y];
          return '<div class="pubs-year-group">' +
            '<div class="pubs-year-head"><div class="y">' + y + '</div>' +
            '<div class="lab">' + items.length + ' ' + (items.length === 1 ? 'entry' : 'entries') + '</div></div>' +
            '<div class="pub-list">' + items.map(pubItemHtml).join('') + '</div>' +
          '</div>';
        }).join('');
        results.innerHTML = html;
      }
    }

    renderTags();
    render();
  }

  // ===== Global topbar (rendered on every page from main.html) =====
  // Map each topbar nav key to the URL path segments that should highlight it.
  var SECTION_MATCHERS = {
    home:         /^(\/|\/index\.html)?$/,
    research:     /\/(current_projects|previous_projects|awards|epubs|talks|groups)(\/|$)/,
    publications: /\/publications(\/|$)/,
    teaching:     /\/(teaching|mentoring)(\/|$)/,
    os:           /\/(data|code)(\/|$)/,
    notes:        /\/blog(\/|$)/,
    cv:           /\/cv(\/|$)/
  };

  function tlsTopbarInit() {
    applyTheme(currentTheme());
    bindThemeToggle();
    var path = location.pathname;
    var matchedKey = null;
    for (var key in SECTION_MATCHERS) {
      if (SECTION_MATCHERS[key].test(path)) { matchedKey = key; break; }
    }
    document.querySelectorAll('#tls-nav a').forEach(function(a) {
      a.classList.toggle('active', a.getAttribute('data-tls-key') === matchedKey);
    });
  }

  // ===== Single dispatcher =====
  function runAll() {
    updateLandingClass();
    tlsTopbarInit();
    // Reset sentinel markers so re-init runs on each navigation event
    delete document.body.dataset.tlsLandingInit;
    delete document.body.dataset.tlsPubsInit;
    tlsLandingInit();
    tlsPubsInit();
  }

  if (typeof document$ !== 'undefined' && document$.subscribe) {
    document$.subscribe(runAll);
  } else {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', runAll);
    } else {
      runAll();
    }
  }
})();
