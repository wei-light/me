<script setup lang="ts">
defineProps<{
  type: 'blog' | 'weekly'
}>()
</script>

<template>
  <PostList :type="type">
    <template #default="{ list }">
      <template v-for="(article, idx) of list" :key="article._path">
        <div v-if="!isSameGroup(article, list[idx - 1])" class="py-8 text-2xl text-gray-400 dark:text-neutral-600">
          {{ getYear(article.date) }}
        </div>
        <div class="mb-10 md:flex md:items-center md:gap-10">
          <div class="hidden text-gray-600 w-[5.5rem] flex-shrink-0 md:block dark:text-neutral-400">
            <div class="text-xl">
              {{ useDateFormat(article.date, 'DD').value }}
            </div>
            <div>{{ useDateFormat(article.date, 'MMMM', { locales: 'en-US' }).value }}</div>
          </div>
          <div>
            <AppLink :to="article._path" class="block text-xl mb-2 transition-colors hover:text-gray-500 dark:hover:text-neutral-400">
              <h2>{{ article.title }}</h2>
            </AppLink>
            <div class="text-sm md:hidden">
              {{ useDateFormat(article.date, 'MMMM D', { locales: 'en-US' }).value }}
            </div>
            <div class="mt-3 text-gray-500 line-clamp-2 dark:text-neutral-500">
              {{ article.description }}
            </div>
          </div>
        </div>
      </template>
    </template>
    <template #not-found>
      <p class="text-gray-500 py-4 dark:text-neutral-600">
        No articles found.
      </p>
    </template>
  </PostList>
</template>

<style scoped>

</style>
