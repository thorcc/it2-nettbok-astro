export const SITE = {
  title: 'IT2',
  description: 'Nettbok for IT2.',
  defaultLanguage: 'no'
} as const

export const OPEN_GRAPH = {
  image: {
    src: 'default-og-image.png',
    alt:
      'astro logo on a starry expanse of space,' +
      ' with a purple saturn-like planet floating in the right foreground'
  },
  twitter: 'astrodotbuild'
}

export const KNOWN_LANGUAGES = {
  Norwegian: 'no'
} as const
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES)

export const EDIT_URL = `https://github.com/advanced-astro/astro-docs-template/tree/main`

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: 'XXXXXXXXXX',
  appId: 'XXXXXXXXXX',
  apiKey: 'XXXXXXXXXX'
}

export type Sidebar = Record<
  (typeof KNOWN_LANGUAGE_CODES)[number],
  Record<string, { text: string; link: string }[]>
>
export const SIDEBAR: Sidebar = {
  no: {
    'Notater': [
      { text: 'Scraping med cookies', link: 'scraping-med-cookies'},
      { text: 'Uke 1', link: 'uke1' },
      { text: 'Uke 2', link: 'uke2' },
    ],
    'Another Section': [{ text: 'Page 4', link: 'en/page-4' }]
  }
}
