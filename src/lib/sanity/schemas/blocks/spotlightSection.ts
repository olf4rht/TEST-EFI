import { defineType, defineField } from 'sanity'
import { StarIcon } from '@sanity/icons'

export const spotlightSection = defineType({
  name: 'spotlightSection',
  title: 'Spotlight Section',
  type: 'object',
  icon: StarIcon,
  fields: [
    defineField({
      name: 'article',
      type: 'reference',
      to: [{ type: 'article' }],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: 'article.title' },
    prepare({ title }) {
      return { title: title || 'Spotlight', subtitle: 'Spotlight Section' }
    },
  },
})
