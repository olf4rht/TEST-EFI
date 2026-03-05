import { defineType, defineField, defineArrayMember } from 'sanity'
import { MenuIcon } from '@sanity/icons'

export const navigationMenu = defineType({
  name: 'navigationMenu',
  title: 'Navigation Menu',
  type: 'document',
  icon: MenuIcon,
  fields: [
    defineField({ name: 'title', type: 'string', validation: (rule) => rule.required() }),
    defineField({
      name: 'categories',
      title: 'Menu Categories',
      type: 'array',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          defineField({ name: 'label', type: 'string', validation: (rule) => rule.required() }),
          defineField({
            name: 'items',
            type: 'array',
            of: [defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'label', type: 'string', validation: (rule) => rule.required() }),
                defineField({ name: 'url', type: 'string' }),
              ],
            })],
          }),
        ],
      })],
    }),
  ],
})
