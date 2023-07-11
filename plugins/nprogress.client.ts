import NProgress from 'nprogress'

export default defineNuxtPlugin(() => {
  // Doing something with nuxtApp

  const nuxtApp = useNuxtApp()

  nuxtApp.$router.beforeEach(() => {
    NProgress.start()
  })

  nuxtApp.$router.afterEach(() => {
    NProgress.done()
  })
})
