<script setup lang="ts">
import type { DocMeta } from '~/type'

useSeoMeta({
  title: 'Doc - Bright',
  ogTitle: 'Doc - Bright',
})

const docs = [
  { name: '前端资源汇总', desc: '收集前端开发所需的资源，包括但不限于学习材料、面试题、常用的 NPM 包和提效的辅助工具等，持续更新中~', href: 'https://www.craft.me/s/yFWYa4X7WTVpEJ', icon: 'i-[ri--chrome-fill]' },
] satisfies DocMeta[]
</script>

<template>
  <div>
    <BlockTitle title="知识库" background-text="Docs" />
    <DocList :docs="docs" />
  </div>
</template>
