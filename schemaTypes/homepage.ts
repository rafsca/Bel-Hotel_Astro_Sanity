import {defineField, defineType} from 'sanity';

export const homepageType = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
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
