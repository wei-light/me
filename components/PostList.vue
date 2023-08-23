<script setup lang="ts">
defineProps<{
  type: 'blog' | 'note'
}>()
</script>

<template>
  <div>
    <ContentList v-slot="{ list }" path="/posts">
      <slot :list="filterAndSort(list, type)" />
      <slot v-if="filterAndSort(list, type).length === 0" name="not-found">
        <p class="text-gray-500 py-4 dark:text-neutral-500">
          No articles found.
        </p>
      </slot>
    </ContentList>
  </div>
</template>

<style scoped>

</style>
