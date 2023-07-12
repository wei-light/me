<script setup lang="ts">
defineProps<{
  type: 'blog' | 'weekly'
}>()
</script>

<template>
  <PostList v-slot="{ list }" :type="type">
    <template v-for="(article, idx) of list" :key="article._path">
      <div v-if="!isSameGroup(article, list[idx - 1])" class="py-8 text-2xl opacity-40">
        {{ getYear(article.date) }}
      </div>
      <div class="mb-10 md:flex md:items-center md:gap-10">
        <div class="hidden opacity-70 w-[5.5rem] flex-shrink-0 md:block">
          <div class="text-xl">
            {{ useDateFormat(article.date, 'DD').value }}
          </div>
          <div>{{ useDateFormat(article.date, 'MMMM', { locales: 'en-US' }).value }}</div>
        </div>
        <div>
          <AppLink :to="article._path" class="block text-xl pb-1 transition-colors hover:text-gray-500 dark:hover:text-neutral-400">
            <h2>{{ article.title }}</h2>
          </AppLink>
          <div class="text-sm opacity-50 md:hidden">
            {{ useDateFormat(article.date, 'MMMM D', { locales: 'en-US' }).value }}
          </div>
          <div class="pt-1.5 text-sm opacity-60 line-clamp-2">
            {{ article.description }}
          </div>
        </div>
      </div>
    </template>
  </PostList>
</template>

<style scoped>

</style>
