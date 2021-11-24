<template>
  <div>
    <b-form @submit.prevent="onSubmit">
      <b-form-group label="Título:">
        <b-form-input
          :value="$store.state.todos.todo.title"
          @input="event => $store.commit('todos/UPDATE_TITLE', event)"
          type="text"/>
      </b-form-group>

      <b-form-group label="Usuário:">
        <b-form-input
          :value="$store.state.todos.todo.userId"
          @input="event => $store.commit('todos/UPDATE_USER', event)"
          type="text"/>
      </b-form-group>

      <b-form-group label="Completo:">
        <b-form-checkbox
          v-model="completed"
          switch
        />
      </b-form-group>

      <div class="d-flex justify-content-center">
        <b-button type="submit" variant="primary">
          <!-- <b-icon-check /> -->
          Salvar
        </b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'FormTodo',

  methods: {
    ...mapActions({
      saveTodo:'todos/saveTodo',
    }),

    async onSubmit() {
      this.saveTodo()
    },
  },

  computed: {
    completed: {
      get () {
        return this.$store.state.todos.todo.completed
      },
      set (value) {
        this.$store.commit('todos/UPDATE_COMPLETED', value)
      }
    }
  }
}
</script>
