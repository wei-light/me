<script setup lang="ts">
const props = defineProps<{
  to: string
}>()

const isInternalLink = computed(() => props.to.startsWith('/'))
const isExternalLink = computed(() => props.to.startsWith('http'))
</script>

<template>
  <NuxtLink v-if="isInternalLink" :to="to">
    <slot />
  </NuxtLink>
  <a v-else-if="isExternalLink" :href="to" target="_blank" rel="noopener noreferrer">
    <slot />
  </a>
  <a v-else :href="to">
    <slot />
  </a>
</template>
