import { defineType, defineField, defineArrayMember } from 'sanity'
import { DocumentIcon } from '@sanity/icons'

export const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({ name: 'title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' }, validation: (rule) => rule.required() }),
    defineField({
      name: 'pageBuilder',
      title: 'Page Builder',
      type: 'array',
      of: [
        defineArrayMember({ type: 'heroSection' }),
        defineArrayMember({ type: 'titleBodySection' }),
        defineArrayMember({ type: 'bodyTextSection' }),
        defineArrayMember({ type: 'infographicSection' }),
        defineArrayMember({ type: 'projectCarousel' }),
        defineArrayMember({ type: 'spotlightSection' }),
      ],
    }),
  ],
})
