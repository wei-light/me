export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', (html) => {
    // This will be an object representation of the html template.
    html.head.unshift(`
      <script>
        (function () {
          const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
          const setting = localStorage.getItem('vueuse-color-scheme') || 'auto'
          if (setting === 'dark' || (prefersDark && setting !== 'light'))
            document.documentElement.classList.toggle('dark', true)
        })()
      </script>
    `)
    html.body.push('<div id="portal"></div>')
  })
})
