<template>
  <div>
    <b-form @submit.prevent="onSubmit">
      <b-form-group label="Nome:">
        <b-form-input
          :value="$store.state.users.user.name"
          @input="event => $store.commit('users/UPDATE_NAME', event)"
          type="text"/>
      </b-form-group>

      <b-form-group label="Email:">
        <b-form-input
          :value="$store.state.users.user.email"
          @input="event => $store.commit('users/UPDATE_EMAIL', event)"
          type="text"/>
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
  name: 'FormUser',

  methods: {
    ...mapActions({
      saveUser:'users/saveUser',
    }),

    async onSubmit() {
      this.saveUser()
    },
  },
}
</script>
