<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'
import { TransitionChild, TransitionRoot } from '@headlessui/vue'

const showMenu = ref(false)

const isLargeScreen = useMediaQuery('(min-width: 1024px)')
watch(isLargeScreen, (newVal) => {
  if (newVal === true) {
    showMenu.value = false
  }
})
</script>

<template>
  <button
    class="inline-flex items-center justify-center bg-emerald-400/20 h-8 w-8 mr-5 rounded-lg transition-colors lg:hidden hover:bg-emerald-400/30"
    @click="showMenu = !showMenu"
  >
    <i class="i-[ri--menu-line] text-emerald-400" />
  </button>
  <!-- SideBar -->
  <ClientOnly>
    <Teleport to="#portal">
      <TransitionRoot :show="showMenu">
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          leave="transition-opacity ease-linear duration-300"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black/20 z-40" @click="showMenu = false" />
        </TransitionChild>
        <TransitionChild
          as="template"
          enter="transition ease-in-out duration-300 transform"
          enter-from="-translate-x-full"
          leave="transition ease-in-out duration-300 transform"
          leave-to="-translate-x-full"
        >
          <div class="fixed left-0 inset-y-0 w-64 bg-white p-1 z-50">
            <div class="flex justify-center">
              <img class="h-16 w-16" src="/logo.svg" alt="logo">
            </div>
            <nav class="flex flex-col gap-1 pl-2">
              <NuxtLink to="/" @click="showMenu = false">
                HOME
              </NuxtLink>
              <NuxtLink to="/blogs" @click="showMenu = false">
                BLOG
              </NuxtLink>
              <NuxtLink to="/weekly" @click="showMenu = false">
                WEEKLY
              </NuxtLink>
              <NuxtLink to="/projects" @click="showMenu = false">
                PROJECT
              </NuxtLink>
            </nav>
          </div>
        </TransitionChild>
      </TransitionRoot>
    </Teleport>
  </ClientOnly>
</template>

<style scoped>
nav a {
  @apply relative px-3 py-2 text-sm font-medium text-gray-700/70 rounded transition-colors hover:bg-gray-100;
}

nav a::after {
  @apply opacity-0 transition-opacity duration-300 content-[''] absolute w-1 h-1/2 bg-emerald-300 top-1/2 left-0 rounded-full -translate-y-1/2;
}

.router-link-active {
  @apply bg-gray-100;
}

.router-link-active::after {
  @apply opacity-100;
}
</style>
