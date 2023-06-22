<script setup lang="ts">
import { useDark, useMediaQuery } from '@vueuse/core'
import { TransitionChild, TransitionRoot } from '@headlessui/vue'

const isDark = useDark()
const isLocked = useLockBodyScroll()

const showMenu = ref(false)

const isLargeScreen = useMediaQuery('(min-width: 1024px)')
watch(isLargeScreen, (newVal) => {
  if (newVal === true) {
    showMenu.value = false
  }
})

watch(showMenu, (newVal) => {
  isLocked.value = newVal
})
</script>

<template>
  <button
    class="inline-flex items-center justify-center bg-emerald-300/20 h-8 w-8 mr-5 rounded-lg transition-colors lg:hidden hover:bg-emerald-300/30 dark:bg-emerald-600/20 dark:hover:bg-emerald-600/30"
    @click="showMenu = !showMenu"
  >
    <i class="i-[ri--menu-line] text-emerald-300 dark:text-emerald-600" />
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
          <div class="fixed inset-0 bg-black/20 z-40 dark:bg-black/70" @click="showMenu = false" />
        </TransitionChild>
        <TransitionChild
          as="template"
          enter="transition ease-in-out duration-300 transform"
          enter-from="-translate-x-full"
          leave="transition ease-in-out duration-300 transform"
          leave-to="-translate-x-full"
        >
          <div class="fixed left-0 inset-y-0 w-64 bg-white p-1 z-50 dark:bg-neutral-900">
            <div class="flex justify-center">
              <img v-show="!isDark" class="h-16 w-16" src="/logo.svg" alt="logo">
              <img v-show="isDark" class="h-16 w-16" src="/logo-dark.svg" alt="logo">
            </div>
            <nav class="flex flex-col gap-1 pl-2">
              <AppLink to="/" @click="showMenu = false">
                HOME
              </AppLink>
              <AppLink to="/blogs" @click="showMenu = false">
                BLOG
              </AppLink>
              <AppLink to="/weekly" @click="showMenu = false">
                WEEKLY
              </AppLink>
              <AppLink to="/projects" @click="showMenu = false">
                PROJECT
              </AppLink>
            </nav>
          </div>
        </TransitionChild>
      </TransitionRoot>
    </Teleport>
  </ClientOnly>
</template>

<style scoped>
nav a {
  @apply relative px-3 py-2 text-sm font-medium text-gray-700/70 rounded transition-colors hover:bg-gray-100 dark:text-neutral-200/70 dark:hover:bg-neutral-800;
}

nav a::after {
  @apply opacity-0 transition-opacity duration-300 content-[''] absolute w-1 h-1/2 bg-emerald-300 top-1/2 left-0 rounded-full -translate-y-1/2 dark:bg-emerald-600;
}

.router-link-active {
  @apply bg-gray-100 dark:bg-neutral-800;
}

.router-link-active::after {
  @apply opacity-100;
}
</style>
