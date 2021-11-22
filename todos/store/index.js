import todoModule from './modules/todo'

const options = JSON.parse(`<%= JSON.stringify(options) %>`)
const { namespace } = options

export default ({ store }, inject) => {
  store.registerModule(namespace, todoModule(options), {
    preserveState: Boolean(store.state[namespace])
  })
}