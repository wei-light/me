<script setup lang="ts">
import type { DocMeta } from '~/type'

defineProps<{
  docs: DocMeta[]
}>()
</script>

<template>
  <div class="grid-box">
    <AppLink
      v-for="doc of docs"
      :key="doc.name"
      :to="doc.href"
      class="relative overflow-hidden h-40 p-4 bg-gray-100/70 rounded-md transition-transform group hover:-translate-y-1 dark:bg-neutral-800/70 dark:border-neutral-700/50"
    >
      <p class="font-bold text-sm opacity-95">
        {{ doc.name }}
      </p>
      <p class="mt-2 text-xs leading-5 line-clamp-2 opacity-60 group-hover:line-clamp-none">
        {{ doc.desc }}
      </p>
      <i :class="doc.icon" class="absolute -bottom-6 right-0 opacity-5 w-24 h-24" />
    </AppLink>
  </div>
</template>

<style scoped>
.grid-box {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}
</style>
