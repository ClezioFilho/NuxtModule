export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  store: true,
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'NuxtModules',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/vue-api-query'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['bootstrap-vue/nuxt'],
    ['@nuxtjs/axios'],
    // ['~/counter', { namespace: 'counter' }],
    // ['~/product', { namespace: 'product' }],
    ['~/users', { namespace: 'users' }],
    ['~/todos', { namespace: 'todos' }]
  ],

  usersModule: { message: 'Modulo Usuário'},
  todosModule: { message: 'Modulo Todo'},
  customCounter: { initialValue: 6, debug: true },

  // router: {
  //   middleware: ['counter']
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}