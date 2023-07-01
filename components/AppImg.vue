<script setup lang="ts">
type Image = string | { src: string; alt?: string }

type ThemeableImage = Image | { light: Image; dark: Image; alt?: string }

defineProps<{
  image: ThemeableImage
  alt?: string
}>()

defineOptions({
  inheritAttrs: false,
})
</script>

<template>
  <template v-if="image">
    <img
      v-if="typeof image === 'string' || 'src' in image"
      v-bind="typeof image === 'string' ? $attrs : { ...image, ...$attrs }"
      :src="typeof image === 'string' ? image : image.src"
      :alt="alt ?? (typeof image === 'string' ? '' : image.alt || '')"
    >
    <template v-else>
      <AppImg
        class="image-dark"
        :image="image.dark"
        :alt="
          typeof image.dark === 'string'
            ? image.alt
            : image.dark.alt || image.alt
        "
        v-bind="$attrs"
      />
      <AppImg
        class="image-light"
        :image="image.light"
        :alt="
          typeof image.light === 'string'
            ? image.alt
            : image.light.alt || image.alt
        "
        v-bind="$attrs"
      />
    </template>
  </template>
</template>

<style scoped>
html.dark .image-light {
  display: none;
}

html:not(.dark) .image-dark {
  display: none;
}
</style>
