import { defineType, defineField } from 'sanity'
import { BlockContentIcon } from '@sanity/icons'

export const titleBodySection = defineType({
  name: 'titleBodySection',
  title: 'Title & Body Section',
  type: 'object',
  icon: BlockContentIcon,
  fields: [
    defineField({ name: 'label', type: 'string', title: 'Label' }),
    defineField({ name: 'title', type: 'string', title: 'Title', validation: (rule) => rule.required() }),
    defineField({ name: 'body', type: 'text', title: 'Body Text' }),
    defineField({ name: 'ctaLabel', type: 'string', title: 'CTA Label' }),
    defineField({ name: 'ctaUrl', type: 'string', title: 'CTA URL' }),
  ],
  preview: {
    select: { title: 'title' },
    prepare({ title }) {
      return { title: title || 'Title & Body', subtitle: 'Title Body Section' }
    },
  },
})
