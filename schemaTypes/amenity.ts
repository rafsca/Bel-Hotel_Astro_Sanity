import {defineField, defineType} from 'sanity';

export const amenityType = defineType({
  name: 'amenity',
  title: 'Amenity',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required().max(60),
    }),
    defineField({
      name: 'icon',
      title: 'Icon name',
      type: 'string',
      description: 'Optional icon key (es. wifi, shower, coffee).',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'icon',
    },
  },
});
