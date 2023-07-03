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
      <div role="button" class="cursor-pointer lg:fixed" @click="goTop">
        <AppImg height="56" width="56" :image="{ light: '/logo.svg', dark: '/logo-dark.svg', alt: 'logo' }" />
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
