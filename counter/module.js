const { resolve, join } = require('path')
const { readdirSync } = require('fs')

export default function(moduleOptions) {
  const options = {
    ...moduleOptions,
    ...this.options.customCounter
  }
  this.options.store = true
  // expose the namespace / set a default
  if (!options.namespace) options.namespace = 'customCounter'
  const { namespace } = options
  // add all of the initial plugins
  const pluginsToSync = [
    'components/index.js',
    'store/index.js',
    'plugins/index.js',
    'debug.js',
    'middleware/index.js'
  ]
  for (const pathString of pluginsToSync) {
    this.addPlugin({
      src: resolve(__dirname, pathString),
      fileName: join(namespace, pathString),
      options
    })
  }
  // sync all of the files and folders to revelant places in the nuxt build dir (.nuxt/)
  const foldersToSync = ['plugins/helpers', 'store/modules', 'components/lib']
  for (const pathString of foldersToSync) {
    const path = resolve(__dirname, pathString)
    for (const file of readdirSync(path)) {
      this.addTemplate({
        src: resolve(path, file),
        fileName: join(namespace, pathString, file),
        options
      })
    }
  }

  // const baseDir = path.join(nuxt.options.rootDir, './base')
  this.extendRoutes((routes) => {
    routes.unshift({
      name: namespace,
      path: '/counter',
      component: resolve(__dirname, 'components/lib/counterAdjuster.vue')
    })
  })

  // console.log(resolve(__dirname, 'pages/counterAdjuster.vue'))
}
module.exports.meta = require('./package.json')