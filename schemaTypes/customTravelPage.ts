import {defineArrayMember, defineField, defineType} from 'sanity';

export const pageIntroSectionType = defineType({
  name: 'pageIntroSection',
  title: 'Page intro',
  type: 'object',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string',
      validation: (Rule) => Rule.max(80),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(160),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(320),
    }),
    defineField({
      name: 'showBreadcrumb',
      title: 'Show breadcrumb',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'breadcrumbLabel',
      title: 'Breadcrumb label',
      type: 'string',
      validation: (Rule) => Rule.max(60),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'eyebrow',
    },
    prepare: ({title, subtitle}) => ({
      title: title || 'Page intro',
      subtitle,
    }),
  },
});

export const splitContentSectionType = defineType({
  name: 'splitContentSection',
  title: 'Split content',
  type: 'object',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string',
      validation: (Rule) => Rule.max(80),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(160),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'text',
      rows: 6,
      validation: (Rule) => Rule.max(1200),
    }),
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(320),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'eyebrow',
    },
    prepare: ({title, subtitle}) => ({
      title: title || 'Split content',
      subtitle,
    }),
  },
});

export const stepsSectionType = defineType({
  name: 'stepsSection',
  title: 'Steps section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section title',
      type: 'string',
      validation: (Rule) => Rule.required().max(120),
    }),
    defineField({
      name: 'cta',
      title: 'CTA',
      type: 'object',
      fields: [
        defineField({
          name: 'label',
          title: 'Label',
          type: 'string',
          validation: (Rule) => Rule.max(40),
        }),
        defineField({
          name: 'href',
          title: 'Link',
          type: 'string',
          initialValue: '/contact',
          validation: (Rule) => Rule.max(120),
        }),
      ],
    }),
    defineField({
      name: 'items',
      title: 'Steps',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required().max(80),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 4,
              validation: (Rule) => Rule.max(400),
            }),
          ],
          preview: {
            select: {
              title: 'title',
            },
          },
        }),
      ],
      validation: (Rule) => Rule.min(1),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'items.0.title',
    },
    prepare: ({title, subtitle}) => ({
      title: title || 'Steps section',
      subtitle: subtitle ? `First step: ${subtitle}` : 'No steps yet',
    }),
  },
});

export const featureRowsSectionType = defineType({
  name: 'featureRowsSection',
  title: 'Feature rows',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section title',
      type: 'string',
      validation: (Rule) => Rule.required().max(120),
    }),
    defineField({
      name: 'items',
      title: 'Feature rows',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required().max(120),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 5,
              validation: (Rule) => Rule.max(600),
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              fields: [
                defineField({
                  name: 'alt',
                  title: 'Alternative text',
                  type: 'string',
                  validation: (Rule) => Rule.max(120),
                }),
              ],
            }),
          ],
          preview: {
            select: {
              title: 'title',
              media: 'image',
            },
          },
        }),
      ],
      validation: (Rule) => Rule.min(1),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'items.0.title',
    },
    prepare: ({title, subtitle}) => ({
      title: title || 'Feature rows',
      subtitle: subtitle ? `First row: ${subtitle}` : 'No rows yet',
    }),
  },
});

export const customTravelPageType = defineType({
  name: 'customTravelPage',
  title: 'Custom Travel Page',
  type: 'document',
  initialValue: {
    seoTitle: 'Custom Travel | BEL Hotel',
    seoDescription: 'Viaggi personalizzati firmati BEL Hotel.',
    heroHeightVh: 60,
    sections: [
      {
        _type: 'pageIntroSection',
        eyebrow: 'Custom Travel',
        title: 'Viaggi progettati su misura',
        subtitle:
          'Disegniamo itinerari personalizzati con la stessa cura con cui accogliamo i nostri ospiti: attenzione ai dettagli, qualità e stile.',
        showBreadcrumb: true,
        breadcrumbLabel: 'custom travel',
      },
      {
        _type: 'splitContentSection',
        eyebrow: 'Tailor-made',
        title: 'Il tuo viaggio, con il tuo ritmo',
        content:
          "Ogni persona ha esigenze diverse: c'è chi cerca cultura, chi relax, chi una combinazione perfetta tra scoperta e benessere. Per questo non proponiamo pacchetti standard, ma percorsi costruiti intorno a te.",
        quote:
          "Un itinerario ben progettato non è solo una lista di tappe: è un'esperienza coerente, fluida e memorabile.",
      },
      {
        _type: 'stepsSection',
        title: 'Come lavoriamo',
        cta: {
          label: 'Richiedi una consulenza',
          href: '/contact',
        },
        items: [
          {
            title: 'ASCOLTO',
            description:
              'Partiamo da una call conoscitiva: capiamo stile di viaggio, ritmi, priorità e aspettative per costruire un itinerario davvero personale.',
          },
          {
            title: 'PROGETTAZIONE',
            description:
              'Definiamo una proposta su misura con tappe, attività e servizi selezionati. Ogni scelta è pensata per equilibrio tra comfort, scoperta e tempo libero.',
          },
          {
            title: 'CONFERMA',
            description:
              'Finalizziamo i dettagli operativi e ti consegniamo un piano chiaro, pronto da vivere, con supporto dedicato prima e durante il viaggio.',
          },
        ],
      },
      {
        _type: 'featureRowsSection',
        title: 'Perché scegliere il nostro custom travel',
        items: [
          {
            title: 'Esperienze autentiche',
            description:
              'Percorsi costruiti con partner locali affidabili, per vivere luoghi, sapori e tradizioni con uno sguardo vero e contemporaneo.',
          },
          {
            title: 'Accessi e servizi premium',
            description:
              'Prenotazioni ottimizzate, timing intelligenti e servizi di livello per ridurre attriti e valorizzare ogni giornata del viaggio.',
          },
          {
            title: 'Consulenza continua',
            description:
              'Un riferimento unico per tutta la durata del percorso: dalla prima idea alla partenza, fino al rientro.',
          },
        ],
      },
    ],
  },
  fields: [
    defineField({
      name: 'title',
      title: 'Internal title',
      type: 'string',
      initialValue: 'Custom Travel',
      validation: (Rule) => Rule.required().max(120),
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO title',
      type: 'string',
      validation: (Rule) => Rule.max(70),
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(180),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          validation: (Rule) => Rule.max(120),
        }),
      ],
    }),
    defineField({
      name: 'heroHeightVh',
      title: 'Hero height (vh)',
      type: 'number',
      initialValue: 60,
      validation: (Rule) => Rule.min(20).max(100),
      description: 'Viewport height for hero image (e.g. 60 = 60vh).',
    }),
    defineField({
      name: 'sections',
      title: 'Page sections',
      type: 'array',
      of: [
        defineArrayMember({type: 'pageIntroSection'}),
        defineArrayMember({type: 'splitContentSection'}),
        defineArrayMember({type: 'stepsSection'}),
        defineArrayMember({type: 'featureRowsSection'}),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'seoTitle',
      media: 'heroImage',
    },
    prepare: ({title, subtitle, media}) => ({
      title,
      subtitle: subtitle || 'Custom Travel Page',
      media,
    }),
  },
});
