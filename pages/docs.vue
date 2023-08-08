<script setup lang="ts">
import type { DocMeta } from '~/type'

useSeoMeta({
  title: 'Doc - Bright',
  ogTitle: 'Doc - Bright',
})

const docs = [
  { name: '前端资源汇总', href: 'https://www.craft.me/s/yFWYa4X7WTVpEJ', cover: '/doc-cover/frontend-resource.png' },
] satisfies DocMeta[]
</script>

<template>
  <div>
    <BlockTitle title="知识库" background-text="Docs" />
    <DocList :docs="docs" />
  </div>
</template>
