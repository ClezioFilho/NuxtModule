const { resolve, join } = require('path')
const { readdirSync } = require('fs')

export default function(moduleOptions) {
  const options = {
    ...moduleOptions,
    ...this.options.customCounter
  }
  const { namespace } = options
  const pluginsToSync = [
    'store/index.js',
  ]

  // this.options.store = true
  for (const pathString of pluginsToSync) {
    this.addPlugin({
      src: resolve(__dirname, pathString),
      fileName: join(namespace, pathString),
      options
    })
  }

  // sync all of the files and folders to revelant places in the nuxt build dir (.nuxt/)
  const foldersToSync = ['store/modules']
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
}
module.exports.meta = require('./package.json')