import {defineField, defineType} from 'sanity';

export const aboutPageType = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  initialValue: {
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
  fields: [
    defineField({name: 'title', title: 'SEO title', type: 'string'}),
    defineField({name: 'description', title: 'SEO description', type: 'text', rows: 3}),
    defineField({name: 'heroEyebrow', title: 'Hero eyebrow', type: 'string'}),
    defineField({name: 'heroTitle', title: 'Hero title', type: 'string'}),
    defineField({name: 'heroDescription', title: 'Hero description', type: 'text', rows: 4}),
    defineField({
      name: 'heroImage',
      title: 'Hero image',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'alt', title: 'Alternative text', type: 'string'})],
    }),
    defineField({name: 'visionTitle', title: 'Vision card title', type: 'string'}),
    defineField({name: 'visionDescription', title: 'Vision card description', type: 'text', rows: 3}),
    defineField({name: 'serviceTitle', title: 'Service card title', type: 'string'}),
    defineField({name: 'serviceDescription', title: 'Service card description', type: 'text', rows: 3}),
    defineField({name: 'qualityTitle', title: 'Quality card title', type: 'string'}),
    defineField({name: 'qualityDescription', title: 'Quality card description', type: 'text', rows: 3}),
  ],
  preview: {prepare: () => ({title: 'About Page'})},
});

export const contactPageType = defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  initialValue: {
    title: 'Contact | BEL Hotel',
    heroEyebrow: 'Contatti',
    heroTitle: 'Parliamo del tuo prossimo soggiorno',
    heroDescription: 'Scrivici per prenotazioni, richieste speciali o informazioni sulle camere.',
    formTitle: 'Richiedi disponibilità',
    directInfoTitle: 'Informazioni dirette',
  },
  fields: [
    defineField({name: 'title', title: 'SEO title', type: 'string'}),
    defineField({name: 'description', title: 'SEO description', type: 'text', rows: 3}),
    defineField({name: 'heroEyebrow', title: 'Hero eyebrow', type: 'string'}),
    defineField({name: 'heroTitle', title: 'Hero title', type: 'string'}),
    defineField({name: 'heroDescription', title: 'Hero description', type: 'text', rows: 3}),
    defineField({name: 'directInfoTitle', title: 'Direct info block title', type: 'string'}),
    defineField({name: 'formTitle', title: 'Form block title', type: 'string'}),
  ],
  preview: {prepare: () => ({title: 'Contact Page'})},
});

export const roomsPageType = defineType({
  name: 'roomsPage',
  title: 'Rooms Page',
  type: 'document',
  initialValue: {
    title: 'Camere | BEL Hotel',
    heroEyebrow: 'Rooms & Suites',
    heroTitle: 'Scegli la camera perfetta',
    heroDescription:
      'Ogni soluzione è progettata per offrirti un soggiorno confortevole, con un design elegante e servizi premium.',
  },
  fields: [
    defineField({name: 'title', title: 'SEO title', type: 'string'}),
    defineField({name: 'description', title: 'SEO description', type: 'text', rows: 3}),
    defineField({name: 'heroEyebrow', title: 'Hero eyebrow', type: 'string'}),
    defineField({name: 'heroTitle', title: 'Hero title', type: 'string'}),
    defineField({name: 'heroDescription', title: 'Hero description', type: 'text', rows: 3}),
    defineField({
      name: 'rooms',
      title: 'Rooms to show',
      description: 'Seleziona le camere da mostrare in questa pagina. Puoi selezionare solo documenti Room esistenti.',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'room'}],
          options: {
            disableNew: true,
          },
        },
      ],
      validation: (Rule) => Rule.unique(),
    }),
  ],
  preview: {prepare: () => ({title: 'Rooms Page'})},
});

export const experiencesPageType = defineType({
  name: 'experiencesPage',
  title: 'Experiences Page',
  type: 'document',
  initialValue: {
    title: 'Experiences | BEL Hotel',
    heroEyebrow: 'Experiences',
    heroTitle: 'Vivi esperienze memorabili',
    heroDescription:
      'Dalle attività culturali ai momenti di benessere, selezioniamo proposte autentiche per rendere il soggiorno più ricco e personale.',
    sectionTitle: 'Esperienze in evidenza',
    cards: [
      {
        title: 'Food & Wine',
        description: 'Percorsi gastronomici con degustazioni locali e cucina d’autore.',
      },
      {
        title: 'Wellness',
        description: 'Trattamenti e momenti di relax per rigenerare mente e corpo.',
      },
      {
        title: 'Culture & City',
        description: 'Itinerari tra arte, storia e luoghi iconici del territorio.',
      },
    ],
  },
  fields: [
    defineField({name: 'title', title: 'SEO title', type: 'string'}),
    defineField({name: 'description', title: 'SEO description', type: 'text', rows: 3}),
    defineField({name: 'heroEyebrow', title: 'Hero eyebrow', type: 'string'}),
    defineField({name: 'heroTitle', title: 'Hero title', type: 'string'}),
    defineField({name: 'heroDescription', title: 'Hero description', type: 'text', rows: 3}),
    defineField({name: 'sectionTitle', title: 'Section title', type: 'string'}),
    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Card title', type: 'string'}),
            defineField({name: 'description', title: 'Card description', type: 'text', rows: 3}),
            defineField({
              name: 'image',
              title: 'Card image',
              type: 'image',
              options: {hotspot: true},
              fields: [defineField({name: 'alt', title: 'Image alt', type: 'string'})],
            }),
          ],
        },
      ],
    }),
  ],
  preview: {prepare: () => ({title: 'Experiences Page'})},
});

export const toursPageType = defineType({
  name: 'toursPage',
  title: 'Tours Page',
  type: 'document',
  initialValue: {
    title: 'Tours | BEL Hotel',
    heroEyebrow: 'Tours',
    heroTitle: 'Tour su misura per il tuo soggiorno',
    heroDescription:
      'Programmiamo tour privati e di gruppo con partner selezionati, per un’esperienza fluida, curata e senza stress.',
    sectionTitle: 'Tour disponibili',
    cards: [
      {
        title: 'City Essentials',
        description: 'I punti d’interesse principali con guida dedicata e tempi ottimizzati.',
      },
      {
        title: 'Nature Escape',
        description: 'Percorsi panoramici e attività outdoor adatte a tutti i livelli.',
      },
      {
        title: 'Signature Tour',
        description: 'Esperienze premium con accessi e servizi esclusivi.',
      },
    ],
  },
  fields: [
    defineField({name: 'title', title: 'SEO title', type: 'string'}),
    defineField({name: 'description', title: 'SEO description', type: 'text', rows: 3}),
    defineField({name: 'heroEyebrow', title: 'Hero eyebrow', type: 'string'}),
    defineField({name: 'heroTitle', title: 'Hero title', type: 'string'}),
    defineField({name: 'heroDescription', title: 'Hero description', type: 'text', rows: 3}),
    defineField({name: 'sectionTitle', title: 'Section title', type: 'string'}),
    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Card title', type: 'string'}),
            defineField({name: 'description', title: 'Card description', type: 'text', rows: 3}),
            defineField({
              name: 'image',
              title: 'Card image',
              type: 'image',
              options: {hotspot: true},
              fields: [defineField({name: 'alt', title: 'Image alt', type: 'string'})],
            }),
          ],
        },
      ],
    }),
  ],
  preview: {prepare: () => ({title: 'Tours Page'})},
});

export const projectsPageType = defineType({
  name: 'projectsPage',
  title: 'Projects Page',
  type: 'document',
  initialValue: {
    title: 'Projects | BEL Hotel',
    heroEyebrow: 'Projects',
    heroTitle: 'Progetti e collaborazioni',
    heroDescription:
      'Raccontiamo iniziative speciali, partnership e percorsi di sviluppo che valorizzano la nostra ospitalità.',
    sectionTitle: 'Progetti in primo piano',
    cards: [
      {
        title: 'Sustainability Program',
        description: 'Azioni concrete per ridurre l’impatto ambientale della struttura.',
      },
      {
        title: 'Local Partnerships',
        description: 'Collaborazioni con artigiani e realtà locali del territorio.',
      },
      {
        title: 'Guest Experience Lab',
        description: 'Innovazione continua per migliorare comfort e servizi.',
      },
    ],
  },
  fields: [
    defineField({name: 'title', title: 'SEO title', type: 'string'}),
    defineField({name: 'description', title: 'SEO description', type: 'text', rows: 3}),
    defineField({name: 'heroEyebrow', title: 'Hero eyebrow', type: 'string'}),
    defineField({name: 'heroTitle', title: 'Hero title', type: 'string'}),
    defineField({name: 'heroDescription', title: 'Hero description', type: 'text', rows: 3}),
    defineField({name: 'sectionTitle', title: 'Section title', type: 'string'}),
    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Card title', type: 'string'}),
            defineField({name: 'description', title: 'Card description', type: 'text', rows: 3}),
            defineField({
              name: 'image',
              title: 'Card image',
              type: 'image',
              options: {hotspot: true},
              fields: [defineField({name: 'alt', title: 'Image alt', type: 'string'})],
            }),
          ],
        },
      ],
    }),
  ],
  preview: {prepare: () => ({title: 'Projects Page'})},
});
