<script setup lang="ts">
import { useDark } from '@vueuse/core'

const isDark = useDark()

function goTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })
}
</script>

<template>
  <header class="flex justify-between items-center h-16 px-6 lg:px-8">
    <div class="flex items-center">
      <MobileMenu />
      <div role="button" class="w-14 h-14 cursor-pointer lg:fixed" @click="goTop">
        <img v-show="!isDark" src="/logo.svg" alt="logo">
        <img v-show="isDark" src="/logo-dark.svg" alt="logo">
      </div>
    </div>
    <nav class="hidden lg:flex lg:gap-6">
      <AppLink to="/">
        HOME
      </AppLink>
      <AppLink to="/blogs">
        BLOG
      </AppLink>
      <AppLink to="/weekly">
        WEEKLY
      </AppLink>
      <AppLink to="/projects">
        PROJECT
      </AppLink>
    </nav>
    <ToggleTheme />
  </header>
</template>

<style scoped>
nav a {
  @apply text-sm font-medium opacity-60 transition-opacity hover:opacity-70;
}
</style>
