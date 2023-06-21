<script setup lang="ts">
defineProps<{
  title?: string
  date?: Date | string
  href?: string
}>()
</script>

<template>
  <NuxtLink :to="href" class="flex justify-between -mx-3 px-3 py-2 rounded transition-colors hover:bg-gray-100">
    <h2 class="line-clamp-1 mr-8">
      {{ title }}
    </h2>
    <div class="flex-shrink-0">
      {{ useDateFormat(date, 'YYYY-MM-DD').value }}
    </div>
  </NuxtLink>
</template>

<style scoped>

</style>
