<script setup lang="ts">
import type { TocLink } from '@nuxt/content/dist/runtime/types'

defineProps<{
  toc: TocLink[]
  root?: boolean
}>()
</script>

<template>
  <ul :class="{ 'hidden fixed top-1/2 right-16 -translate-y-20 group/wrapper lg:block': root }">
    <li v-for="{ text, children, id, depth } of toc" :key="id" class="mt-3">
      <AppLink :to="`#${id}`" class="flex items-center group/item">
        <span class="bg-neutral-300 h-1 rounded-full opacity-50 transition-opacity duration-300 group-hover/wrapper:opacity-70 group-hover/item:opacity-100 dark:bg-neutral-700" :style="{ width: `${(5 - depth) * 0.4}rem` }" />
        <span class="text-neutral-500 pl-4 opacity-0 text-xs transition-opacity duration-300 group-hover/wrapper:opacity-50 group-hover/item:opacity-80 dark:text-neutral-400" :style="{ marginLeft: `${(depth - 2) * 0.4}rem` }">{{ text }}</span>
      </AppLink>
      <template v-if="children">
        <OutlineItem :toc="children" />
      </template>
    </li>
  </ul>
</template>

<style scoped>

</style>
