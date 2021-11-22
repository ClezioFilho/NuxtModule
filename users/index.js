const { resolve, join } = require('path')
const { readdirSync } = require('fs')

export default function(moduleOptions) {
  const options = {
    ...moduleOptions,
    ...this.options.usersModule
  }
  const { namespace } = options
  const pluginsToSync = [
    'store/index.js',
  ]

  for (const pathString of pluginsToSync) {
    this.addPlugin({
      src: resolve(__dirname, pathString),
      fileName: join(namespace, pathString),
      options
    })
  }

  const foldersToSync = ['store/modules',]
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

  this.nuxt.hook("components:dirs", (dirs) => {
    {
      dirs.push({
        path: join(__dirname, "components"),
        prefix: namespace
      })
    }
  })

  const themeDir = join(this.options.rootDir, './'+namespace)

  function capitalize(namespace) {
    if (namespace !== null) {
      return namespace[0].toUpperCase() + namespace.slice(1)
    }
  }

  this.extendRoutes((routes) => {
    routes.unshift({
      name: namespace,
      path: '/'+namespace,
      component: resolve(themeDir, 'components/pages/'+capitalize(namespace)+'.vue')
    },
    {
      name: namespace+'-new',
      path: '/'+namespace+'/new',
      component: resolve(themeDir, 'components/pages/'+capitalize(namespace).slice(0, -1)+'New.vue')
    },
    {
      name: namespace+'-id',
      path: '/'+namespace+'/:id',
      component: resolve(themeDir, 'components/pages/'+capitalize(namespace).slice(0, -1)+'.vue')
    },
    {
      name: namespace+'-id-edit',
      path: '/'+namespace+'/:id/edit',
      component: resolve(themeDir, 'components/pages/'+capitalize(namespace).slice(0, -1)+'Edit.vue')
    })
  })
}