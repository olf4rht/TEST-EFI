import { defineType, defineField } from 'sanity'
import { ImageIcon } from '@sanity/icons'

export const heroSection = defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',
  icon: ImageIcon,
  fields: [
    defineField({ name: 'label', type: 'string', title: 'Label' }),
    defineField({ name: 'headline', type: 'text', title: 'Headline', validation: (rule) => rule.required() }),
    defineField({ name: 'body', type: 'text', title: 'Body Text' }),
    defineField({ name: 'ctaLabel', type: 'string', title: 'CTA Label' }),
    defineField({ name: 'ctaUrl', type: 'string', title: 'CTA URL' }),
    defineField({ name: 'image', type: 'image', title: 'Hero Image', options: { hotspot: true } }),
  ],
  preview: {
    select: { title: 'headline', media: 'image' },
    prepare({ title, media }) {
      return { title: title || 'Hero Section', subtitle: 'Hero', media }
    },
  },
})
