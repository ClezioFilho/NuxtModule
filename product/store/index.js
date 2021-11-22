import counterModule from './modules/product'
const options = JSON.parse(`<%= JSON.stringify(options) %>`)
const { namespace } = options

export default ({ store }, inject) => {
  store.registerModule(namespace, counterModule(options), {
    preserveState: Boolean(store.state[namespace])
  })
}