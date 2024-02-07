import { createClient } from '@sanity/client'

export const client = createClient ({
  projectId: 'a8fvy3ck',
  dataset: 'production',
  apiVersion: '2021-10-21',
  token:
  process.env.NEXT_PUBLIC_SANITY_USER_ADDER_TOKEN,
  useCdn: false,
  ignoreBrowserTokenWarning: true
})

