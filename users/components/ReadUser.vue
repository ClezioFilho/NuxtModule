<template>
  <div>
    <b-card-group deck>
      <b-card :header="fullName">
        <b-list-group>
          <b-list-group-item><span class="h6">Email:</span> {{ user.email }}</b-list-group-item>
          <b-list-group-item><span class="h6">Phone:</span> {{ user.phone }}</b-list-group-item>
          <b-list-group-item><span class="h6">Company:</span> {{ user.website }}</b-list-group-item>
        </b-list-group>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ReadUser',

  computed: {
    ...mapGetters({
      user:'users/user',
    }),

    fullName(){
      return this.user.name + " " + this.user.username
    }
  }
}
</script>
