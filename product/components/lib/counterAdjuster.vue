<template lang="html">
  <div class="custom-counter">
    <h1>Count is: {{ count }}</h1>
    <button class="custom-counter--button" @click="adjust(-1)">Minus</button>
    <button class="custom-counter--button" @click="adjust(+1)">Add</button>
  </div>
</template>

<script>
export default {
  computed: {
    pluginOptions() {
      // _customCounterOptions will be added as a prop on component registration.
      // it will be the plugin's options object
      return this._customCounterOptions || {}
    },
    // helper to get the name of our injected plugin using the namespace option
    injectedPluginName() {
      const { pluginOptions } = this
      return pluginOptions.namespace ? '$' + pluginOptions.namespace : undefined
    },
    // helper to return the current value of the counter using our injected plugin function
    count() {
      const { injectedPluginName } = this
      return injectedPluginName
        ? this[injectedPluginName].value() // same as this.$count.value()
        : undefined
    }
  },
  methods: {
    // method to adjust the counter using our injected plugin function
    adjust(adjustment) {
      const { injectedPluginName } = this
      this[injectedPluginName].adjust(adjustment)
    }
  }
}
</script>
<style lang="scss" scoped></style>