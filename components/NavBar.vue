<script setup lang="ts">
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
      <a class="w-14 h-14 cursor-pointer lg:fixed" @click="goTop">
        <img src="/logo.svg" alt="logo">
      </a>
    </div>
    <nav class="hidden lg:flex lg:gap-6">
      <NuxtLink to="/">
        HOME
      </NuxtLink>
      <NuxtLink to="/blogs">
        BLOG
      </NuxtLink>
      <NuxtLink to="/weekly">
        WEEKLY
      </NuxtLink>
      <NuxtLink to="/projects">
        PROJECT
      </NuxtLink>
    </nav>
    <ToggleTheme />
  </header>
</template>

<style scoped>
nav a {
  @apply text-sm font-medium opacity-60 transition-opacity hover:opacity-70;
}
</style>
