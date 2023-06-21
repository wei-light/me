<script setup lang="ts">
defineProps<{
  type: 'blog' | 'weekly'
}>()
</script>

<template>
  <div>
    <ContentList v-slot="{ list }" path="/posts">
      <slot :list="filterAndSort(list, type)" />
      <slot v-if="filterAndSort(list, type).length === 0" name="not-found" />
    </ContentList>
  </div>
</template>

<style scoped>

</style>
