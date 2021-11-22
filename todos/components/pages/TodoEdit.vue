<template>
  <b-container fluid>
    <template v-if="$fetchState.pending">
      <div class="d-flex justify-content-between py-2 mb-3">
        <b-skeleton type="button"></b-skeleton>

        <b-skeleton type="button"></b-skeleton>
      </div>

      <b-form>
        <b-skeleton class="mb-5" type="input"></b-skeleton>

        <b-skeleton class="mb-3" type="input"></b-skeleton>

        <div class="d-flex justify-content-center">
          <b-skeleton type="button"></b-skeleton>
        </div>
      </b-form>
    </template>

    <template v-else-if="$fetchState.error">
      <p>
        {{ $fetchState.error.message }}
      </p>
    </template>

    <template v-else>
      <b-row class="py-2" align-h="between">
        <b-col cols="4">
          <h2>Edit Todo</h2>
        </b-col>

        <b-col class="text-right" cols="4">
          <b-button class="align-items-center" variant="success" to="/todos">
            <!-- <b-icon-caret-left /> -->
            Back
          </b-button>
        </b-col>
      </b-row>

      <todos-formTodo />
    </template>
  </b-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'TodoEdit',

  async fetch() {
    await this.fetchTodo({ id: this.$route.params.id })
  },
  
  methods: {
    ...mapActions({
      fetchTodo:'todos/fetchTodo',
    }),
  },
}
</script>
