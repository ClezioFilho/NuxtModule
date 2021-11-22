<template>
  <div>
    <b-card-group deck>
      <b-card :header="todo.title">
        <b-list-group>
          <b-list-group-item><span class="h6">Código:</span> {{ todo.id }}</b-list-group-item>
          <b-list-group-item><span class="h6">Usuário:</span> {{ todo.userId }}</b-list-group-item>
          <b-list-group-item><span class="h6">Completo:</span> {{ todo.completed }}</b-list-group-item>
        </b-list-group>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ReadTodo',

  computed: {
    ...mapGetters({
      todo:'todos/todo',
    }),
  }
}
</script>
