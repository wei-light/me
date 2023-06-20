// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
  ],
  css: [
    '@/assets/css/global.css',
    '@/assets/css/fonts.css',
  ],
})
