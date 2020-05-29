<template>
  <v-row v-if="getEvents">
    <v-col cols="12" md="12" v-for="e in getEvents" :key="e.id">
      <v-card @click="goToEvent(e)">
        <v-card-title>{{e.name}}</v-card-title>
        <v-card-subtitle>Inicia: {{e.starts}} | Termina: {{e.ends}}</v-card-subtitle>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("events", ["getEvents"])
  },
  methods: {
    ...mapActions("events", ["fetchEvents"]),
    goToEvent(event) {
      this.$router.push(`eventos/${event.id}`);
    }
  },
  created() {
    this.fetchEvents();
  }
};
</script>

<style>
</style>