import {defineField, defineType} from 'sanity';

export const homepageType = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  initialValue: {
    heroTitle: 'Welcome to BEL Hotel',
    heroSubtitle: 'Experience the epitome of luxury and comfort at BEL Hotel, where every stay is a memorable one.',
    heroCtaLabel: 'Scopri le camere',
    heroCtaHref: '/rooms',
    experienceSectionTitle: 'Un soggiorno pensato per farti stare bene',
    experienceCards: [
      {
        title: 'Camere Premium',
        description: 'Spazi raffinati con materiali di qualità, comfort acustico e design contemporaneo.',
      },
      {
        title: 'Ristorante Interno',
        description: 'Cucina locale e internazionale, ingredienti stagionali e servizio attento ai dettagli.',
      },
      {
        title: 'Wellness & Relax',
        description: 'Aree dedicate al benessere per rigenerarti dopo una giornata intensa o un viaggio lungo.',
      },
    ],
    featuredRoomsTitle: 'Le nostre migliori soluzioni',
    featuredRoomsCtaLabel: 'Vedi tutte le camere',
    featuredRoomsCtaHref: '/rooms',
  },
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Hero title',
      type: 'string',
      validation: (Rule) => Rule.required().max(120),
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero subtitle',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(240),
    }),
    defineField({
      name: 'heroCtaLabel',
      title: 'Hero CTA label',
      type: 'string',
      validation: (Rule) => Rule.max(40),
    }),
    defineField({
      name: 'heroCtaHref',
      title: 'Hero CTA link',
      type: 'string',
      initialValue: '/rooms',
      validation: (Rule) => Rule.max(120),
    }),
    defineField({
      name: 'experienceSectionTitle',
      title: 'Experience section title',
      type: 'string',
      initialValue: 'Un soggiorno pensato per farti stare bene',
      validation: (Rule) => Rule.max(140),
    }),
    defineField({
      name: 'experienceCards',
      title: 'Experience cards',
      type: 'array',
      of: [
        {
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
              rows: 3,
              validation: (Rule) => Rule.max(220),
            }),
          ],
          preview: {
            select: {
              title: 'title',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'featuredRoomsTitle',
      title: 'Featured rooms section title',
      type: 'string',
      initialValue: 'Le nostre migliori soluzioni',
      validation: (Rule) => Rule.max(120),
    }),
    defineField({
      name: 'featuredRoomsCtaLabel',
      title: 'Featured rooms CTA label',
      type: 'string',
      initialValue: 'Vedi tutte le camere',
      validation: (Rule) => Rule.max(40),
    }),
    defineField({
      name: 'featuredRoomsCtaHref',
      title: 'Featured rooms CTA link',
      type: 'string',
      initialValue: '/rooms',
      validation: (Rule) => Rule.max(120),
    }),
    defineField({
      name: 'featuredRooms',
      title: 'Featured rooms',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'room'}],
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Homepage content',
    }),
  },
});
