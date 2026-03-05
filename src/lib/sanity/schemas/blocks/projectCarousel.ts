import { defineType, defineField, defineArrayMember } from 'sanity'
import { InlineIcon } from '@sanity/icons'

export const projectCarousel = defineType({
  name: 'projectCarousel',
  title: 'Project Carousel',
  type: 'object',
  icon: InlineIcon,
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Section Title' }),
    defineField({
      name: 'projects',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'project' }] })],
    }),
  ],
  preview: {
    select: { title: 'title' },
    prepare({ title }) {
      return { title: title || 'Project Carousel', subtitle: 'Carousel' }
    },
  },
})
