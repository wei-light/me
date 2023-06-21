import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

export interface CustomParsedContent extends ParsedContent {
  date: Date | string
  type?: 'blog' | 'weekly'
}
