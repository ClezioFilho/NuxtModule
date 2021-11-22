import User from '/users/models/User.js'

export default options => ({
  namespaced: true,
  state: () => ({
    options,
    users: [],

    user: {
      id: null,
      name: null,
      username: null,
      email: null,
      address:{
        street: null,
        suite: null,
        city: null,
        zipcode: null,
        geo:{
          lat: null,
          lng: null
        }
      },
      phone: null,
      website: null,
      company:{
        name: null,
        catchPhrase: null,
        bs: null
      }
    },

    usersFields: [
      {
        key: 'id',
        label: 'Cod.',
      },
      {
        key: 'name',
        label: 'Nome',
      },
      {
        key: 'username',
        label: 'Nome de Usuário',
      },
      {
        key: 'email',
        label: 'Email',
      },
      {
        key: 'website',
        label: 'Site',
      },
      {
        key: 'actions',
        label: 'Ações',
      },
    ]
  }),

  actions: {
    async fetchUsers({ commit }) {
      const users = await User.get()
      commit('SET_USERS', users)
    },
  
    async fetchUser({ commit }, { id }) {
      const user = await User.find(id)
      commit('SET_USER', user)
    },
  
    async saveUser({ commit, state }) {
      if (state.user.id) {
        const user = await User.find(state.user.id)
        Object.assign(user, state.user)
        const res = await user.save()
        console.log(res)
        commit('SAVE_USER', res)
      } else{
        const user = new User(state.user)
        const res = await user.save()
        await commit('SET_USER_ID', res.id)
        console.log(res)
        commit('SAVE_USER', res)
      }
    },
  
    async deleteUser({ commit }, { payload }) {
      const user = await User.find(payload.id)
      const res = await user.delete()
      console.log(res)
      commit('DELETE_USER', user)
    },
  },

  mutations: {
    SET_USERS(state, data) {
      state.users = data
    },
  
    SET_USER(state, data) {
      state.user = data
    },
  
    CLEAR_USER(state, data) {
      state.user = data
    },
  
    SET_USER_ID(state, data) {
      state.user.id = data
    },
  
    SAVE_USER(state, data) {
      const index = state.users.findIndex(item => item.id === data.id)
      if (index !== -1) {
        state.users.splice(index, 1, data)
      } else {
        state.users.push(data)
      }
    },
  
    DELETE_USER(state, data) {
      const index = state.users.findIndex(item => item.id === data.id)
      if (index !== -1) {
        state.users.splice(index, 1)
      }
    },
  
    UPDATE_NAME(state, data) {
      state.user.name = data
    },
  
    UPDATE_EMAIL(state, data) {
      state.user.email = data
    }
  },

  getters: {
    options(state) {
      return state.options
    },
    users(state) {
      return state.users
    },
    user(state) {
      return state.user
    },
    usersFields(state){
      return state.usersFields
    }
  }
})