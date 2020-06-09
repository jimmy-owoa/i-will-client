<template>
  <v-row v-if="getLists">
    <v-col cols="12" md="12" v-for="e in getLists" :key="e.id">
      <v-card @click="goToList(e)">
        <v-card-title>{{e.name}}</v-card-title>
        <v-card-subtitle>Inicia: {{e.start_date}} | Termina: {{e.end_date}}</v-card-subtitle>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("lists", ["getLists"])
  },
  methods: {
    ...mapActions("lists", ["fetchLists"]),
    goToList(list) {
      this.$router.push(`listas/${list.slug}`);
    }
  },
  created() {
    this.fetchLists();
  }
};
</script>

<style>
</style>
