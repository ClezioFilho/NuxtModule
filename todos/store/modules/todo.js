import Todo from '/todos/models/Todo.js'

export default options => ({
  namespaced: true,
  state: () => ({
    options,
    todos: [],

    todo: {},

    todosFields: [
      {
        key: 'id',
        label: 'Cod.',
      },
      {
        key: 'title',
        label: 'Titulo',
      },
      {
        key: 'completed',
        label: 'Completo',
      },
      {
        key: 'actions',
        label: 'Ações',
      },
    ]
  }),

  actions: {
    async fetchTodos({ commit }) {
      const todos = await Todo.get()
      commit('SET_TODOS', todos)
    },
  
    async fetchTodo({ commit }, { id }) {
      const todo = await Todo.find(id)
      commit('SET_TODO', todo)
      
    },
  
    async saveTodo({ commit, state }) {
      if (state.todo.id) {
        const todo = await Todo.find(state.todo.id)
        Object.assign(todo, state.todo)
        const res = await todo.save()
        console.log(res)
        commit('SAVE_TODO', res)
      } else{
        const todo = new Todo(state.todo)
        const res = await todo.save()
        await commit('SET_TODO_ID', res.id)
        console.log(res)
        commit('SAVE_TODO', res)
      }
    },
  
    async deleteTodo({ commit }, { payload }) {
      const todo = await Todo.find(payload.id)
      const res = await todo.delete()
      console.log(res)
      commit('DELETE_TODO', todo)
    },
  },

  mutations: {
    SET_TODOS(state, data) {
      state.todos = data
    },
  
    SET_TODO(state, data) {
      state.todo = data
    },
  
    CLEAR_TODO(state, data) {
      state.todo = data
    },
  
    SET_TODO_ID(state, data) {
      state.todo.id = data
    },
  
    SAVE_TODO(state, data) {
      const index = state.todos.findIndex(item => item.id === data.id)
      if (index !== -1) {
        state.todos.splice(index, 1, data)
      } else {
        state.todos.push(data)
      }
    },
  
    DELETE_TODO(state, data) {
      const index = state.todos.findIndex(item => item.id === data.id)
      if (index !== -1) {
        state.todos.splice(index, 1)
      }
    },
  
    UPDATE_NAME(state, data) {
      state.todo.name = data
    },
  
    UPDATE_EMAIL(state, data) {
      state.todo.email = data
    }
  },

  getters: {
    options(state) {
      return state.options
    },
    todos(state) {
      return state.todos
    },
    todo(state) {
      return state.todo
    },
    todosFields(state){
      return state.todosFields
    }
  }
})