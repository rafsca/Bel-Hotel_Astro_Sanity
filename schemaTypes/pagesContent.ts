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
  ],
  preview: {prepare: () => ({title: 'Rooms Page'})},
});
