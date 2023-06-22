// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxt/content',
  ],
  css: [
    '@/assets/css/global.css',
    '@/assets/css/fonts.css',
    '@/assets/css/prose.css',
    '@/assets/css/markdown.css',
  ],
  content: {
    highlight: {
      theme: {
        default: 'vitesse-light',
        dark: 'vitesse-dark',
      },
    },
    markdown: {
      rehypePlugins: ['rehype-img-figure'],
      toc: {
        depth: 4,
      },
    },
  },
})
