// Data sourced from tyson-swetnam/home repo content
// Domains derived from the emoji-key in the repo, simplified into broader fields

const DOMAINS = [
  { id: 'hydro',    label: 'Hydrology',          hue: 220 },
  { id: 'ci',       label: 'Cyberinfrastructure',hue: 200 },
  { id: 'genomics', label: 'Genomics',           hue: 290 },
  { id: 'agri',     label: 'Agriculture',        hue: 95  },
  { id: 'astro',    label: 'Astronomy',          hue: 250 },
  { id: 'osci',     label: 'Open Science',       hue: 50  },
  { id: 'fire',     label: 'Fire Science',       hue: 18  },
  { id: 'ecology',  label: 'Ecology',            hue: 145 },
  { id: 'remote',   label: 'Remote Sensing',     hue: 30  },
  { id: 'geo',      label: 'Geomorphology',      hue: 60  },
];

const PROJECTS = [
  {
    id: 'cyverse',
    name: 'CyVerse',
    role: 'Co-PI · Science Lead',
    funder: ['NSF 0735191', 'NSF 1265383', 'NSF 1743442'],
    summary: 'Public cyberinfrastructure for the life sciences — the largest NSF investment of its kind. I lead the science team.',
    href: 'https://cyverse.org',
    domains: ['ci', 'genomics', 'ecology', 'osci', 'agri', 'astro'],
    x: 0.50, y: 0.42, size: 22, anchor: true,
  },
  {
    id: 'ofo',
    name: 'Open Forest Observatory',
    role: 'PI',
    funder: ['NSF 2152671/72/73'],
    summary: 'Reproducible forest inventory using small uncrewed aerial vehicles, across multiple institutions.',
    href: 'https://openforestobservatory.org',
    domains: ['remote', 'ecology', 'fire', 'agri'],
    x: 0.18, y: 0.30, size: 16,
  },
  {
    id: 'esiil',
    name: 'ESIIL',
    role: 'Site Lead',
    funder: ['NSF 2153040'],
    summary: 'Environmental Data Science Innovation & Inclusion Lab — synthesis center at CU Boulder.',
    href: 'https://esiil.org',
    domains: ['ecology', 'remote', 'osci', 'hydro', 'fire'],
    x: 0.30, y: 0.62, size: 16,
  },
  {
    id: 'ncems',
    name: 'NCEMS',
    role: 'Site Lead',
    funder: ['NSF 2335029'],
    summary: 'Synthesis center for emergence in the molecular and cellular sciences, hosted at Penn State.',
    href: 'https://ncems.psu.edu',
    domains: ['genomics', 'ci', 'osci'],
    x: 0.78, y: 0.28, size: 14,
  },
  {
    id: 'aiira',
    name: 'AIIRA',
    role: 'co-PI',
    funder: ['NIFA 1027030'],
    summary: 'AI Institute for Resilient Agriculture — digital twins for plants and crops.',
    href: 'https://aiira.iastate.edu',
    domains: ['agri', 'ecology', 'remote', 'ci'],
    x: 0.85, y: 0.55, size: 14,
  },
  {
    id: 'dust',
    name: 'DUST Superfund',
    role: 'Data Mgmt Core',
    funder: ['NIH P42ES004940'],
    summary: '30-year Superfund Center Data Management Core — long-term environmental health science.',
    href: 'https://superfund.arizona.edu',
    domains: ['ecology', 'osci', 'ci'],
    x: 0.62, y: 0.72, size: 12,
  },
  {
    id: 'jetstream',
    name: 'Jetstream-2',
    role: 'co-PI',
    funder: ['NSF 2005506'],
    summary: 'User-friendly cloud computing for interactive analysis on demand. 8 PFLOPS across five regional nodes.',
    href: 'https://jetstream-cloud.org',
    domains: ['ci', 'astro', 'osci'],
    x: 0.18, y: 0.74, size: 13,
  },
  {
    id: 'coalesce',
    name: 'COALESCE',
    role: 'co-PI',
    funder: ['NSF 1954556'],
    summary: 'Context-aware cyber-agricultural systems — robotic teams + adaptive sensing for sustainable farming.',
    href: '/current_projects/',
    domains: ['agri', 'remote'],
    x: 0.72, y: 0.13, size: 11,
  },
  {
    id: 'hydrogen',
    name: 'HydroGEN',
    role: 'Senior Personnel',
    funder: ['NSF 2134892'],
    summary: 'Convergence Accelerator: ML for sub-surface hydrology.',
    href: 'https://github.com/HydroFrame-ML',
    domains: ['hydro', 'geo', 'ci'],
    x: 0.40, y: 0.16, size: 10,
  },
];

const PUBLICATIONS = [
  { n: 41, title: 'The ARID Scoping Study Final Report', venue: 'ORNL DAAC', year: 2025, tags: ['ecology','fire','remote'], doi: '10.3334/ORNLDAAC/2408' },
  { n: 40, title: 'MDRepo — open environment for data warehousing & knowledge discovery from molecular dynamics', venue: 'Nucleic Acids Research', year: 2024, tags: ['genomics','ci'], doi: '10.1093/nar/gkae1109' },
  { n: 37, title: 'CyVerse: Cyberinfrastructure for Open Science', venue: 'PLOS Computational Biology', year: 2023, tags: ['ci','osci','genomics'], doi: '10.1101/2023.06.16.545223' },
  { n: 36, title: 'Using knowledge graphs to infer gene expression in plants', venue: 'Frontiers in Artificial Intelligence', year: 2023, tags: ['genomics','agri'], doi: '10.3389/frai.2023.1201002' },
  { n: 34, title: 'Reimagine fire science for the anthropocene', venue: 'PNAS Nexus', year: 2022, tags: ['fire','ecology'], doi: '10.1093/pnasnexus/pgac115' },
  { n: 32, title: 'Harnessing the NEON data revolution to advance open environmental science', venue: 'Ecosphere', year: 2021, tags: ['ecology','remote','osci'], doi: '10.1002/ecs2.3833' },
  { n: 29, title: 'Ten simple rules to cultivate transdisciplinary collaboration in data science', venue: 'PLoS Computational Biology', year: 2021, tags: ['osci','ci'], doi: '10.1371/journal.pcbi.1008879' },
  { n: 14, title: 'Topographically driven differences in energy and water constrain climatic control on forest carbon', venue: 'Ecosphere', year: 2017, tags: ['ecology','hydro','geo'], doi: '10.1002/ecs2.1797' },
];

const NOTES = [
  { date: '2025-01-14', title: 'GPT-101, Revisited',  href: '/blog/', excerpt: 'A year after my first run at teaching large language models to research scientists, what changed — and what stayed the same.' },
  { date: '2024-10-14', title: 'A Year in Review',    href: '/blog/', excerpt: 'Twelve months across CyVerse, ESIIL, OFO, and the people who made the work possible.' },
  { date: '2023-04-17', title: 'AI for Agriculture',  href: '/blog/', excerpt: 'Notes from the field on agentic systems, plant phenotyping, and a quiet revolution in farms.' },
  { date: '2023-04-10', title: 'Meet the AI Assistant', href: '/blog/', excerpt: 'On embedding a research-grade chat into a faculty homepage, and what it has to learn first.' },
];

const COLLABORATORS = [
  { n: '01', name: 'CyVerse', role: 'Host institution · public cyberinfrastructure for science' },
  { n: '02', name: 'BIO5 Institute', role: 'Host institution · interdisciplinary research' },
  { n: '03', name: 'College of Information Science', role: 'Joint appointment' },
  { n: '04', name: 'School of Natural Resources & Environment', role: 'Joint appointment' },
  { n: '05', name: 'The Carpentries', role: 'Member · open instruction' },
  { n: '06', name: 'Research Bazaar', role: 'Community organizer' },
];

window.SITE_DATA = { DOMAINS, PROJECTS, PUBLICATIONS, NOTES, COLLABORATORS };
