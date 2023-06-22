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
      <PostListSimple type="blog" />
    </div>
    <div>
      <BlockTitle title="周记" background-text="Weekly" />
      <PostListSimple type="weekly" />
    </div>
  </div>
</template>

<style scoped>

</style>
