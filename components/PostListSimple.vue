<script setup lang="ts">
defineProps<{
  type: 'blog' | 'note'
}>()
</script>

<template>
  <PostList v-slot="{ list }" :type="type" class="mt-5">
    <AppLink
      v-for="article of list"
      :key="article._path"
      :to="article._path"
      class="flex justify-between -mx-3 px-3 py-2 rounded transition-colors hover:bg-gray-100 dark:hover:bg-neutral-800"
    >
      <h2 class="line-clamp-1 mr-8">
        {{ article.title }}
      </h2>
      <div class="flex-shrink-0">
        {{ useDateFormat(article.date, 'YYYY-MM-DD').value }}
      </div>
    </AppLink>
  </PostList>
</template>

<style scoped>

</style>
