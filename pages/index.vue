<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col gap-12">
    <div>
      <BlockTitle title="关于我" background-text="About" />
      <article class="prose">
        <ContentDoc path="/about" />
      </article>
    </div>
    <div>
      <BlockTitle title="博客" background-text="Blogs" />
      <PostList type="blog" class="mt-5">
        <template #default="{ list }">
          <PostListItemSimple
            v-for="article of list"
            :key="article._path"
            :title="article.title"
            :date="article.date"
            :href="article._path"
          />
        </template>
        <template #not-found>
          <p class="text-gray-500 py-4">
            No articles found.
          </p>
        </template>
      </PostList>
    </div>
    <div>
      <BlockTitle title="周记" background-text="Weekly" />
      <PostList type="weekly" class="mt-5">
        <template #default="{ list }">
          <PostListItemSimple
            v-for="article of list"
            :key="article._path"
            :title="article.title"
            :date="article.date"
            :href="article._path"
          />
        </template>
        <template #not-found>
          <p class="text-gray-500 py-4">
            No articles found.
          </p>
        </template>
      </PostList>
    </div>
  </div>
</template>

<style scoped>

</style>
