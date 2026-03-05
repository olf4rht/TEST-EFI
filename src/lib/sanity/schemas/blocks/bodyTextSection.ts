import { defineType, defineField } from 'sanity'
import { TextIcon } from '@sanity/icons'

export const bodyTextSection = defineType({
  name: 'bodyTextSection',
  title: 'Body Text Section',
  type: 'object',
  icon: TextIcon,
  fields: [
    defineField({ name: 'leadText', type: 'string', title: 'Lead Text (Bold)' }),
    defineField({ name: 'body', type: 'text', title: 'Body Text', validation: (rule) => rule.required() }),
  ],
  preview: {
    select: { title: 'leadText' },
    prepare({ title }) {
      return { title: title || 'Body Text', subtitle: 'Body Text Section' }
    },
  },
})
