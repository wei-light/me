<script setup lang="ts">
const props = defineProps<{
  alt?: string
  fallback?: string
  height?: string | number
  width?: string | number
  src?: string
}>()

const emit = defineEmits<{
  (e: 'error'): void
}>()

defineOptions({
  inheritAttrs: false,
})

const imgUrl = ref<string>()
const mounted = ref(false)
const isLoading = ref(true)

watchEffect(() => imgUrl.value = props.src)

function handleError() {
  imgUrl.value = props.fallback
  emit('error')
}

function handleLoad() {
  isLoading.value = false
}

onMounted(() => {
  mounted.value = true
})
</script>

<template>
  <slot v-if="isLoading" name="placeholder">
    <div class="placeholder skeleton-loading-bg" :style="{ aspectRatio: width && height ? `${width}/${height}` : '' }" />
  </slot>
  <img
    v-if="imgUrl !== undefined"
    v-bind="$attrs"
    :src="mounted ? imgUrl : undefined"
    :alt="alt"
    :height="isLoading ? undefined : height"
    :width="isLoading ? undefined : width"
    @load="handleLoad"
    @error="handleError"
  >
</template>

<style scoped>
.placeholder {
  @apply aspect-[2/1] rounded;
}
</style>
