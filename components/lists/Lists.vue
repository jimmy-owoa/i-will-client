<template lang="html">
  <div>
    <vs-table stripe :data="lists">
      <template slot="header">
        <h3>
          Listas
        </h3>
      </template>
      <template slot="thead">
  <vs-th>Id</vs-th>
  <vs-th>Nombre</vs-th>
  <vs-th>Acciones</vs-th>
</template>

      <template slot-scope="{ data }">
  <vs-tr :key="indextr" v-for="(list, indextr) in lists">
    <vs-td :data="list.id">{{ list.id }}</vs-td>

    <vs-td :data="list.name">{{ list.name }}</vs-td>
    <vs-td>
      <vs-button @click="goToList(list.id)" color="primary" type="filled">Ver</vs-button>
    </vs-td>
  </vs-tr>
</template>
    </vs-table>
  </div>
</template>

<script>
export default {
  props: {
    lists: {
      type: Array,
      required: true
    }
  },
  methods: {
    goToList(id) {
      this.$router.push(`/listas/${id}`);
    }
  }
};
</script>
