import Vue from 'vue'
import components from './lib'
const options = JSON.parse(`<%= JSON.stringify(options) %>`)

for (const name in components) {
  Vue.component(name, {
    // extend the original component
    extends: components[name],
    // add a _customCounterOptions prop to gain access to the options in the component
    props: {
      _customCounterOptions: {
        type: Object,
        default: () => ({ ...options })
      }
    }
  })
}