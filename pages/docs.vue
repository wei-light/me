<script setup lang="ts">
import type { DocMeta } from '~/type'

const docs = [
  { name: '事业单位', href: 'https://www.craft.me/s/GUfNHjWSisGoJP', cover: '/doc-cover/sydw.png' },
] satisfies DocMeta[]
</script>

<template>
  <div>
    <BlockTitle title="知识库" background-text="Docs" />
    <DocList :docs="docs" />
  </div>
</template>
