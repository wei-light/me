// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxt/content',
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: 'zh-CN',
      },
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
  },
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
