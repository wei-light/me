import type { CustomMarkdownParsedContent } from '@/type'

export function filterAndSort(list: CustomMarkdownParsedContent[], type: 'blog' | 'weekly') {
  let filterList: CustomMarkdownParsedContent[]

  if (type === 'blog') {
    filterList = list.filter(item => item.type === 'blog' || !item.type)
  }
  else {
    filterList = list.filter(item => item.type === 'weekly')
  }

  return filterList.filter(item => !item.draft).sort((a, b) => a.date < b.date ? 1 : -1)
}

export const getYear = (date: Date | string | number) => new Date(date).getFullYear()

export const isSameYear = (a?: Date | string | number, b?: Date | string | number) => a && b && getYear(a) === getYear(b)

export const isSameGroup = (a: CustomMarkdownParsedContent, b?: CustomMarkdownParsedContent) => isSameYear(a.date, b?.date)
