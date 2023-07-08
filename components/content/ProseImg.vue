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

// const mounted = ref(false)

// onMounted(() => {
//   mounted.value = true
// })

const priority = ref<string>()
const fallback = ref<string>()

watchEffect(() => [priority.value, fallback.value] = props.src.split('#'))

// function handleError() {
//   priority.value = undefined
// }

// const imgUrl = computed(() => {
//   if (!mounted.value) return undefined

//   return priority.value ?? fallback.value
// })
</script>

<template>
  <AppImg
    :src="priority"
    :fallback="fallback"
    :alt="alt"
    :width="width"
    :height="height"
    loading="lazy"
  />
</template>
