<script setup lang="ts">
// import { withBase } from 'ufo'
// import { computed, useRuntimeConfig } from '#imports'

const props = defineProps({
  src: {
    type: String,
    default: '',
  },
  alt: {
    type: String,
    default: '',
  },
  width: {
    type: [String, Number],
    default: undefined,
  },
  height: {
    type: [String, Number],
    default: undefined,
  },
})
// const refinedSrc = computed(() => {
//   if (props.src?.startsWith('/') && !props.src.startsWith('//')) {
//     return withBase(props.src, useRuntimeConfig().app.baseURL)
//   }
//   return props.src
// })

const mounted = ref(false)
const isLoading = ref(true)
const priority = ref<string>()
const fallback = ref<string>()

const imgUrl = computed(() => {
  if (!mounted.value) return undefined

  return priority.value ?? fallback.value
})

watchEffect(() => [priority.value, fallback.value] = props.src.split('#'))

function handleError() {
  priority.value = undefined
}

function handleLoad() {
  isLoading.value = false
}

onMounted(() => {
  mounted.value = true
})
</script>

<template>
  <div class="img-container">
    <div v-if="isLoading" class="skeleton-loading-bg rounded" :class="[width && height ? 'absolute inset-0' : 'aspect-[2/1]']" />
    <img
      :src="imgUrl"
      :alt="alt"
      :height="height"
      :width="width"
      loading="lazy"
      @load="handleLoad"
      @error="handleError"
    >
  </div>
</template>

<style scoped>
.img-container {
  position: relative;
}

.img-container > * {
  margin-top: 0;
  margin-bottom: 0;
}
</style>
