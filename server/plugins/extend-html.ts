export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', (html) => {
    // This will be an object representation of the html template.
    html.body.push('<div id="portal"></div>')
  })
})
