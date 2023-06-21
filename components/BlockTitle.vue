<script setup lang="ts">
defineProps<{
  title?: string
  backgroundText?: string
}>()
</script>

<template>
  <div class="block-title">
    {{ backgroundText }}
    <h1>{{ title }}</h1>
  </div>
</template>

<style scoped>
.block-title {
  @apply relative text-6xl text-gray-100 md:text-7xl dark:text-neutral-800;
}

.block-title h1 {
  @apply absolute bottom-0 text-2xl text-gray-700 z-50 md:text-[1.75rem] dark:text-neutral-200;
}

.block-title h1::after {
  @apply content-[''] absolute bottom-0.5 left-0 w-full h-1 bg-emerald-300 -z-[10] dark:bg-emerald-600;
}
</style>
