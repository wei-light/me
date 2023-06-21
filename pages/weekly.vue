<script setup lang="ts">

</script>

<template>
  <div>
    <BlockTitle title="周记" background-text="Weekly" />
    <PostList type="weekly">
      <template #default="{ list }">
        <template v-for="(article, idx) of list" :key="article._path">
          <div v-if="!isSameGroup(article, list[idx - 1])" class="py-8 text-2xl text-gray-400 dark:text-neutral-600">
            {{ getYear(article.date) }}
          </div>
          <PostListItemAdvanced
            class="mb-10"
            :title="article.title"
            :date="article.date"
            :desc="article.description"
            :href="article._path"
          />
        </template>
      </template>
      <template #not-found>
        <p class="text-gray-500 py-4 dark:text-neutral-600">
          No articles found.
        </p>
      </template>
    </PostList>
  </div>
</template>

<style scoped>

</style>
