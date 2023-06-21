<script setup lang="ts">

</script>

<template>
  <div>
    <ContentDoc v-slot="{ doc }">
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-800 mb-6">
          {{ doc.title }}
        </h1>
        <div class="text-gray-500">
          {{ useDateFormat(doc.date, 'MMM DD, YYYY', { locales: 'en-US' }).value }}
        </div>
      </div>
      <ContentRenderer :value="doc" tag="article" class="prose" />
    </ContentDoc>
  </div>
</template>

<style scoped>

</style>
