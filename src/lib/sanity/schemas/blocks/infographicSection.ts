import { defineType, defineField } from 'sanity'
import { PresentationIcon } from '@sanity/icons'

export const infographicSection = defineType({
  name: 'infographicSection',
  title: 'Infographic Section',
  type: 'object',
  icon: PresentationIcon,
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Title' }),
    defineField({ name: 'image', type: 'image', title: 'Infographic Image', validation: (rule) => rule.required() }),
  ],
  preview: {
    select: { title: 'title', media: 'image' },
    prepare({ title, media }) {
      return { title: title || 'Infographic', subtitle: 'Infographic Section', media }
    },
  },
})
