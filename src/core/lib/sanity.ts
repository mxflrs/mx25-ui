import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'd8xud3ib',
  dataset: 'production',
  apiVersion: '2024-01-26',
  useCdn: true
})