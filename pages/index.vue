<script setup lang="ts">
useSeoMeta({
  title: 'About me - Bright',
  ogTitle: 'About me - Bright',
  description: 'Bright\'s Profile',
  ogDescription: 'Bright\'s Profile',
})
</script>

<template>
  <div class="flex flex-col gap-12">
    <div>
      <BlockTitle title="关于我" background-text="About" />
      <article class="prose">
        <ContentDoc path="/about" :head="false" />
      </article>
    </div>
    <div>
      <BlockTitle title="博客" background-text="Blogs" />
      <PostListSimple type="blog" />
    </div>
    <div>
      <BlockTitle title="小记" background-text="Notes" />
      <PostListSimple type="note" />
    </div>
  </div>
</template>

<style scoped>

</style>
