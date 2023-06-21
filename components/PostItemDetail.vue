<script setup lang="ts">
defineProps<{
  title?: string
  date?: Date | string
  desc?: string
  href?: string
}>()
</script>

<template>
  <div class="md:flex md:items-center md:gap-10">
    <div class="hidden text-gray-600 w-[5.5rem] flex-shrink-0 md:block">
      <div class="text-xl">
        {{ useDateFormat(date, 'DD').value }}
      </div>
      <div>{{ useDateFormat(date, 'MMMM', { locales: 'en-US' }).value }}</div>
    </div>
    <div>
      <AppLink :to="href" class="block text-xl mb-2 transition-colors hover:text-gray-500">
        <h2>{{ title }}</h2>
      </AppLink>
      <div class="text-sm md:hidden">
        {{ useDateFormat(date, 'MMMM D', { locales: 'en-US' }).value }}
      </div>
      <div class="mt-3 text-gray-500 line-clamp-2">
        {{ desc }}
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
