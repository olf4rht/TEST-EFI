import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'k0z0sdep',
  dataset: 'production',
  apiVersion: '2026-03-05',
  useCdn: true,
})
