<script setup lang="ts">
interface SocialLink {
  icon: string
  name: string
  href: string
}

defineProps<{
  list: SocialLink[]
}>()
</script>

<template>
  <p class="flex gap-x-4 gap-y-2 flex-wrap">
    <AppLink v-for="item of list" :key="item.name" :to="item.href">
      <i class="text-lg" :class="item.icon" style="vertical-align: -0.125em" />
      {{ item.name }}
    </AppLink>
  </p>
</template>

<style scoped>

</style>
