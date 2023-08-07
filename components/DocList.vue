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
      class="relative overflow-hidden bg-neutral-100 border border-neutral-200 rounded-md transition-transform hover:-translate-y-1 dark:bg-neutral-800 dark:border-neutral-700"
    >
      <div class="h-40 pl-4 pt-4">
        <span class="font-bold text-sm text-neutral-600 dark:text-neutral-300">{{ doc.name }}</span>
        <div class="cover">
          <img class="w-full h-full object-cover" :src="doc.cover">
        </div>
      </div>
    </AppLink>
  </div>
</template>

<style scoped>
.grid-box {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  gap: 0.5rem;
  margin-top: 1.5rem;
}

.cover {
  overflow: hidden;
  position: absolute;
  left: 2.5rem;
  top: 3.5rem;
  width: calc(100% - 2.5rem);
  height: calc(100% - 3.5rem);
  border-top-left-radius: 0.375rem;
  box-shadow: 0 16px 40px rgba(125, 125, 125, 0.3);
}

html.dark .cover::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgb(0, 0, 0, 0.3);
  z-index: 99;
}
</style>
