import type { MarkdownParsedContent } from '@nuxt/content/dist/runtime/types'

export interface CustomMarkdownParsedContent extends MarkdownParsedContent {
  date: Date | string
  draft?: boolean
  type?: 'blog' | 'weekly'
}
