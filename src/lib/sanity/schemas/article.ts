import { defineType, defineField } from 'sanity'
import { DocumentTextIcon } from '@sanity/icons'

export const article = defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({ name: 'title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'subtitle', type: 'string' }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' }, validation: (rule) => rule.required() }),
    defineField({ name: 'body', type: 'text' }),
    defineField({ name: 'image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'publishedAt', type: 'datetime' }),
  ],
})
