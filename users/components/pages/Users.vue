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
          <h2>Users</h2>
        </b-col>

        <b-col class="text-right" cols="4">
          <b-button class="align-items-center" variant="success" to="/users/new">
            <!-- <b-icon-plus style="width: 25px; height: 25px"/>  -->
            New
          </b-button>
        </b-col>
      </b-row>

      <data-grid
        ref="usersGrid"
        :data="users"
        :fields="usersFields"
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
  name: 'UsersIndex',

  async fetch() {
    await this.fetchUsers()
  },
  
  methods: {
    ...mapActions({
      fetchUsers:'users/fetchUsers',
      deleteUser:'users/deleteUser'
    }),

    remove(item) {
      this.deleteUser({ payload: item })
    },
  },

  computed: {
    ...mapGetters({
      users:'users/users',
      options:'users/options',
      usersFields:'users/usersFields'
    })
  }
}
</script>



