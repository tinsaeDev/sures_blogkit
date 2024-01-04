import {createClient} from '@sanity/client'
export const client = createClient({
  projectId: 'placeurvalue',
  dataset: 'production',
  useCdn: true, 
  apiVersion: '2023-08-03',
})