import type { MarkdownParsedContent } from '@nuxt/content/dist/runtime/types'

export interface CustomMarkdownParsedContent extends MarkdownParsedContent {
  date: Date | string
  draft?: boolean
  type?: 'blog' | 'note'
}

export interface DocMeta {
  name: string
  desc: string
  href: string
  icon: string
}
