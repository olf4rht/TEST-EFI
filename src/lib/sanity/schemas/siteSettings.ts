import { defineType, defineField } from 'sanity'
import { CogIcon } from '@sanity/icons'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Site Title', validation: (rule) => rule.required() }),
    defineField({ name: 'description', type: 'text', title: 'Site Description' }),
    defineField({
      name: 'topBarLinks',
      title: 'Top Bar Links',
      type: 'array',
      of: [{ type: 'object', fields: [
        defineField({ name: 'label', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'url', type: 'url' }),
      ]}],
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        defineField({ name: 'instagram', type: 'url' }),
        defineField({ name: 'facebook', type: 'url' }),
        defineField({ name: 'twitter', type: 'url' }),
        defineField({ name: 'linkedin', type: 'url' }),
        defineField({ name: 'youtube', type: 'url' }),
      ],
    }),
    defineField({
      name: 'footerLinks',
      title: 'Footer Links',
      type: 'array',
      of: [{ type: 'object', fields: [
        defineField({ name: 'label', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'url', type: 'url' }),
      ]}],
    }),
    defineField({ name: 'copyrightText', type: 'string', title: 'Copyright Text' }),
  ],
})
