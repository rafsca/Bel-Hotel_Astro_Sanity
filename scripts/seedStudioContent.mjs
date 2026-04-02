import {createClient} from '@sanity/client';

const projectId =
  process.env.SANITY_STUDIO_PROJECT_ID ||
  process.env.PUBLIC_SANITY_PROJECT_ID ||
  'vz99cd3t';

const dataset =
  process.env.SANITY_STUDIO_DATASET ||
  process.env.PUBLIC_SANITY_DATASET ||
  'production';

const token = process.env.SANITY_AUTH_TOKEN || process.env.SANITY_API_WRITE_TOKEN;

if (!token) {
  throw new Error('Missing SANITY_AUTH_TOKEN (run with --with-user-token) or SANITY_API_WRITE_TOKEN');
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2026-03-24',
  useCdn: false,
  token,
});

const docs = [
  {
    _id: 'siteSettings',
    _type: 'siteSettings',
    title: 'BEL Hotel',
    tagline: 'Luxury & Comfort, Every Stay',
    description: 'Esperienza di lusso e comfort nel cuore della città.',
    phone: '+39 0922 612570',
    email: 'info@essenceofsicily.com',
  },
  {
    _id: 'navigationSettings',
    _type: 'navigationSettings',
    logoPrimary: 'BEL',
    logoSecondary: 'HOTEL',
    menuItems: [
      {_key: 'home', label: 'HOME', href: '/'},
      {_key: 'custom-travel', label: 'CUSTOM TRAVEL', href: '/custom-travel'},
      {_key: 'experiences', label: 'EXPERIENCES', href: '/experiences'},
      {_key: 'tours', label: 'TOURS', href: '/tours'},
      {_key: 'accommodations', label: 'ACCOMMODATIONS', href: '/rooms'},
      {_key: 'projects', label: 'PROJECTS', href: '/projects'},
      {_key: 'about-us', label: 'ABOUT US', href: '/about'},
      {_key: 'contacts', label: 'CONTACTS', href: '/contact'},
    ],
    social: {
      instagram: 'https://instagram.com/essenceofsicily',
      whatsapp: 'https://wa.me/390922612570',
    },
    contacts: {
      phone: '+39 0922 612570',
      email: 'info@essenceofsicily.com',
    },
  },
  {
    _id: 'homepage',
    _type: 'homepage',
    heroTitle: 'Welcome to BEL Hotel',
    heroSubtitle: 'Experience the epitome of luxury and comfort at BEL Hotel, where every stay is a memorable one.',
    heroCtaLabel: 'Scopri le camere',
    heroCtaHref: '/rooms',
    experienceSectionTitle: 'Un soggiorno pensato per farti stare bene',
    experienceCards: [
      {
        _key: 'premium-rooms',
        title: 'Camere Premium',
        description: 'Spazi raffinati con materiali di qualità, comfort acustico e design contemporaneo.',
      },
      {
        _key: 'restaurant',
        title: 'Ristorante Interno',
        description: 'Cucina locale e internazionale, ingredienti stagionali e servizio attento ai dettagli.',
      },
      {
        _key: 'wellness',
        title: 'Wellness & Relax',
        description: 'Aree dedicate al benessere per rigenerarti dopo una giornata intensa o un viaggio lungo.',
      },
    ],
    featuredRoomsTitle: 'Le nostre migliori soluzioni',
    featuredRoomsCtaLabel: 'Vedi tutte le camere',
    featuredRoomsCtaHref: '/rooms',
  },
  {
    _id: 'aboutPage',
    _type: 'aboutPage',
    title: 'About | BEL Hotel',
    heroEyebrow: 'About BEL Hotel',
    heroTitle: 'Ospitalità contemporanea, anima italiana',
    heroDescription:
      'BEL Hotel nasce con una missione chiara: offrire esperienze autentiche, comfort di livello e un servizio che faccia sentire ogni ospite davvero al centro.',
    visionTitle: 'Visione',
    visionDescription: 'Creare un nuovo standard di ospitalità urbana, elegante ma accessibile.',
    serviceTitle: 'Servizio',
    serviceDescription: 'Team preparato, attento e sempre disponibile, 24 ore su 24.',
    qualityTitle: 'Qualità',
    qualityDescription: 'Materiali premium, ambienti curati e attenzione costante ai dettagli.',
  },
  {
    _id: 'contactPage',
    _type: 'contactPage',
    title: 'Contact | BEL Hotel',
    heroEyebrow: 'Contatti',
    heroTitle: 'Parliamo del tuo prossimo soggiorno',
    heroDescription: 'Scrivici per prenotazioni, richieste speciali o informazioni sulle camere.',
    formTitle: 'Richiedi disponibilità',
    directInfoTitle: 'Informazioni dirette',
  },
  {
    _id: 'roomsPage',
    _type: 'roomsPage',
    title: 'Camere | BEL Hotel',
    heroEyebrow: 'Rooms & Suites',
    heroTitle: 'Scegli la camera perfetta',
    heroDescription: 'Ogni soluzione è progettata per offrirti un soggiorno confortevole, con un design elegante e servizi premium.',
  },
  {
    _id: 'customTravelPage',
    _type: 'customTravelPage',
    title: 'Custom Travel',
    seoTitle: 'Custom Travel | BEL Hotel',
    seoDescription: 'Viaggi personalizzati firmati BEL Hotel.',
    heroHeightVh: 60,
    sections: [
      {
        _key: 'intro',
        _type: 'pageIntroSection',
        eyebrow: 'Custom Travel',
        title: 'Viaggi progettati su misura',
        subtitle:
          'Disegniamo itinerari personalizzati con la stessa cura con cui accogliamo i nostri ospiti: attenzione ai dettagli, qualità e stile.',
        showBreadcrumb: true,
        breadcrumbLabel: 'custom travel',
      },
      {
        _key: 'split',
        _type: 'splitContentSection',
        eyebrow: 'Tailor-made',
        title: 'Il tuo viaggio, con il tuo ritmo',
        content:
          "Ogni persona ha esigenze diverse: c'è chi cerca cultura, chi relax, chi una combinazione perfetta tra scoperta e benessere. Per questo non proponiamo pacchetti standard, ma percorsi costruiti intorno a te.",
        quote: "Un itinerario ben progettato non è solo una lista di tappe: è un'esperienza coerente, fluida e memorabile.",
      },
      {
        _key: 'steps',
        _type: 'stepsSection',
        title: 'Come lavoriamo',
        cta: {label: 'Richiedi una consulenza', href: '/contact'},
        items: [
          {
            _key: 'ascolto',
            title: 'ASCOLTO',
            description:
              'Partiamo da una call conoscitiva: capiamo stile di viaggio, ritmi, priorità e aspettative per costruire un itinerario davvero personale.',
          },
          {
            _key: 'progettazione',
            title: 'PROGETTAZIONE',
            description:
              'Definiamo una proposta su misura con tappe, attività e servizi selezionati. Ogni scelta è pensata per equilibrio tra comfort, scoperta e tempo libero.',
          },
          {
            _key: 'conferma',
            title: 'CONFERMA',
            description:
              'Finalizziamo i dettagli operativi e ti consegniamo un piano chiaro, pronto da vivere, con supporto dedicato prima e durante il viaggio.',
          },
        ],
      },
      {
        _key: 'features',
        _type: 'featureRowsSection',
        title: 'Perché scegliere il nostro custom travel',
        items: [
          {
            _key: 'esperienze',
            title: 'Esperienze autentiche',
            description:
              'Percorsi costruiti con partner locali affidabili, per vivere luoghi, sapori e tradizioni con uno sguardo vero e contemporaneo.',
          },
          {
            _key: 'accessi',
            title: 'Accessi e servizi premium',
            description:
              'Prenotazioni ottimizzate, timing intelligenti e servizi di livello per ridurre attriti e valorizzare ogni giornata del viaggio.',
          },
          {
            _key: 'consulenza',
            title: 'Consulenza continua',
            description:
              'Un riferimento unico per tutta la durata del percorso: dalla prima idea alla partenza, fino al rientro.',
          },
        ],
      },
    ],
  },
];

async function seed() {
  for (const doc of docs) {
    await client.createOrReplace(doc);
    console.log(`✓ Seeded ${doc._id}`);
  }
  console.log('Done: studio singleton content seeded.');
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
