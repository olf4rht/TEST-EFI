import { defineType, defineField } from 'sanity'
import { ProjectsIcon } from '@sanity/icons'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: ProjectsIcon,
  fields: [
    defineField({ name: 'title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'subtitle', type: 'string' }),
    defineField({ name: 'description', type: 'text' }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' }, validation: (rule) => rule.required() }),
    defineField({
      name: 'colorTheme',
      title: 'Color Theme',
      type: 'string',
      options: {
        list: [
          { title: 'Blue', value: 'blue' },
          { title: 'Green', value: 'green' },
          { title: 'Beige', value: 'beige' },
          { title: 'Orange', value: 'orange' },
          { title: 'Red', value: 'red' },
          { title: 'Light Blue', value: 'light-blue' },
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: 'image', type: 'image', options: { hotspot: true } }),
  ],
})
