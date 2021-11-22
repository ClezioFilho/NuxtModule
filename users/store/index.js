import userModule from './modules/user'

const options = JSON.parse(`<%= JSON.stringify(options) %>`)
const { namespace } = options

export default ({ store }, inject) => {
  store.registerModule(namespace, userModule(options), {
    preserveState: Boolean(store.state[namespace])
  })
}