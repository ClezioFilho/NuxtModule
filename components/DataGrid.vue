<template>
  <b-card>
    <b-table striped hover responsive :items="data" :fields="fields">
      <template v-slot:cell(actions)="row">
        <b-button-group class="float-right">
          <b-button variant="outline-secondary" :to="`${namespace}/${row.item.id}`">
            <!-- <b-icon-eye /> -->
            Eye
          </b-button>

          <template v-if="showEdit">
            <b-button variant="outline-info" :to="`${namespace}/${row.item.id}/edit`">
              <!-- <b-icon-pencil-square /> -->
              Pencil
            </b-button>
          </template>

          <template v-if="showRemove">
            <b-button
              variant="outline-danger"
              @click.prevent="$emit('remove', row.item)"
            >
              <!-- <b-icon-trash></b-icon-trash> -->
              Trash
            </b-button>
          </template>
        </b-button-group>
      </template>
    </b-table>
  </b-card>
</template>

<script>
export default {
  name: "data-grid",

  props: {
    data: {
      required: true,
      type: Array,
    },

    fields: {
      required: true,
      type: Array,
    },

    namespace: {
      required: true,
      type: String,
    },

    showEdit: {
      type: Boolean,
      default: true,
    },

    showRemove: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
