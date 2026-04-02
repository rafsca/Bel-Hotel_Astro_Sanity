import {defineArrayMember, defineField, defineType} from 'sanity';

export const navigationSettingsType = defineType({
  name: 'navigationSettings',
  title: 'Header & Navigation',
  type: 'document',
  initialValue: {
    logoPrimary: 'BEL',
    logoSecondary: 'HOTEL',
    menuItems: [
      {label: 'HOME', href: '/'},
      {label: 'CUSTOM TRAVEL', href: '/custom-travel'},
      {label: 'EXPERIENCES', href: '/experiences'},
      {label: 'TOURS', href: '/tours'},
      {label: 'ACCOMMODATIONS', href: '/rooms'},
      {label: 'PROJECTS', href: '/projects'},
      {label: 'ABOUT US', href: '/about'},
      {label: 'CONTACTS', href: '/contact'},
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
  fields: [
    defineField({
      name: 'logoPrimary',
      title: 'Logo primary text',
      type: 'string',
      initialValue: 'BEL',
      validation: (Rule) => Rule.required().max(30),
    }),
    defineField({
      name: 'logoSecondary',
      title: 'Logo secondary text',
      type: 'string',
      initialValue: 'HOTEL',
      validation: (Rule) => Rule.required().max(30),
    }),
    defineField({
      name: 'menuItems',
      title: 'Menu items',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required().max(60),
            }),
            defineField({
              name: 'href',
              title: 'Link',
              type: 'string',
              validation: (Rule) => Rule.required().max(120),
            }),
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'href',
            },
          },
        }),
      ],
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: 'social',
      title: 'Social links',
      type: 'object',
      fields: [
        defineField({
          name: 'instagram',
          title: 'Instagram URL',
          type: 'url',
        }),
        defineField({
          name: 'whatsapp',
          title: 'WhatsApp URL',
          type: 'url',
        }),
      ],
    }),
    defineField({
      name: 'contacts',
      title: 'Menu contacts',
      type: 'object',
      fields: [
        defineField({
          name: 'phone',
          title: 'Phone',
          type: 'string',
          validation: (Rule) => Rule.max(40),
        }),
        defineField({
          name: 'email',
          title: 'Email',
          type: 'string',
          validation: (Rule) => Rule.email(),
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Header & Navigation',
    }),
  },
});
