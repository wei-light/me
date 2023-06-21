<script setup lang="ts">
const router = useRouter()

const content = ref<HTMLDivElement>()

onMounted(() => {
  const navigate = () => {
    if (location.hash) {
      document.querySelector(decodeURIComponent(location.hash))
        ?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleAnchors = (
    event: MouseEvent & { target: HTMLElement },
  ) => {
    const link = event.target.closest('a')

    if (
      !event.defaultPrevented
      && link
      && event.button === 0
      && link.target !== '_blank'
      && link.rel !== 'external'
      && !link.download
      && !event.metaKey
      && !event.ctrlKey
      && !event.shiftKey
      && !event.altKey
    ) {
      const url = new URL(link.href)
      if (url.origin !== window.location.origin) return

      event.preventDefault()

      const { pathname, hash } = url
      if (hash && (!pathname || pathname === location.pathname)) {
        window.history.replaceState({}, '', hash)
        navigate()
      }
      else {
        router.push({ path: pathname, hash })
      }
    }
  }

  useEventListener(window, 'hashchange', navigate)
  useEventListener(content.value!, 'click', handleAnchors, { passive: false })

  setTimeout(navigate, 500)
})
</script>

<template>
  <div ref="content">
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
