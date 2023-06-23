<script lang="ts">
import { defineComponent } from '#imports'

export default defineComponent({
  props: {
    code: {
      type: String,
      default: '',
    },
    language: {
      type: String,
      default: null,
    },
    filename: {
      type: String,
      default: null,
    },
    highlights: {
      type: Array as () => number[],
      default: () => [],
    },
    meta: {
      type: String,
      default: null,
    },
  },
  setup() {
    const contentRef = ref<HTMLDivElement>()
    const copied = ref(false)

    const onCopy = async () => {
      if (copied.value) return

      if (contentRef.value && !!contentRef.value.textContent) {
        await navigator.clipboard.writeText(contentRef.value.textContent)
        copied.value = true

        setTimeout(() => {
          copied.value = false
        }, 2000)
      }
    }

    return {
      contentRef,
      copied,
      onCopy,
    }
  },
})
</script>

<template>
  <div ref="contentRef" class="relative group">
    <slot />
    <button
      :title="copied ? 'Copied' : 'Copy'"
      class="inline-flex transition-opacity absolute top-3 right-3 opacity-0 text-lg group-hover:opacity-40"
      @click="onCopy"
    >
      <i v-show="!copied" class="i-[ri--clipboard-line]" />
      <i v-show="copied" class="i-[ri--checkbox-circle-line]" />
    </button>
  </div>
</template>

<style>
pre code .line {
  display: block;
  min-height: 1rem;
}
</style>
