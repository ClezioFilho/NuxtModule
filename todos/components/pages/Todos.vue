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
          <h2>Todos</h2>
        </b-col>

        <b-col class="text-right" cols="4">
          <b-button class="align-items-center" variant="success" to="/todos/new">
            <!-- <b-icon-plus style="width: 25px; height: 25px"/>  -->
            New
          </b-button>
        </b-col>
      </b-row>

      <dataGrid
        ref="todosGrid"
        :data="todos"
        :fields="todosFields"
        :namespace="options.namespace"
        @remove="remove"
      />

      {{ options }}
    </template>
  </b-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'TodosIndex',

  async fetch() {
    await this.fetchTodos()
  },
  
  methods: {
    ...mapActions({
      fetchTodos:'todos/fetchTodos',
      deleteTodo:'todos/deleteTodo'
    }),

    remove(item) {
      this.deleteTodo({ payload: item })
    },
  },

  computed: {
    ...mapGetters({
      todos:'todos/todos',
      options:'todos/options',
      todosFields:'todos/todosFields'
    })
  }
}
</script>



