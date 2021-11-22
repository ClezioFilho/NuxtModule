<template>
  <b-container fluid>
    <template v-if="$fetchState.pending">
      <div class="d-flex justify-content-between py-2">
        <b-skeleton type="button"></b-skeleton>

        <b-skeleton type="button"></b-skeleton>
      </div>

      <b-card>
        <b-skeleton-table
        :rows="10"
        :columns="6"
        :table-props="{ striped: true }"
        />
      </b-card>
    </template>

    <template v-else-if="$fetchState.error">
      <p>
        {{ $fetchState.error.message }}
      </p>
    </template>

    <template v-else>
      <b-row class="py-2" align-h="between">
        <b-col cols="4">
          <h2>Todo</h2>
        </b-col>

        <b-col class="text-right" cols="4">
          <b-button class="align-items-center" variant="success" to="/todos">
            <!-- <b-icon-caret-left /> -->
            Back
          </b-button>
        </b-col>
      </b-row>

      <todos-readTodo />
    </template>
  </b-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'TodoIndex',

   async fetch() {
    await this.fetchTodo({ id: this.$route.params.id })
  },
  
  methods: {
    ...mapActions({
      fetchTodo:'todos/fetchTodo',
    }),
  },

  computed:{
    ...mapGetters({
      options:'todos/options'
    })
  }
}
</script>