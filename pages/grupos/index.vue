<template>
  <v-row>
    <v-col sm="4" v-for="group in getGroups" :key="group.id">
      <group-card :group="group"/>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import GroupCard from '~/components/groups/GroupCard.vue'

export default {
  layout: "admin",
  middleware: "auth",
  components: {
    GroupCard
  },
  computed: {
    ...mapGetters("groups", ["getGroups"]),
  },
  methods: {
    ...mapActions("groups", ["fetchGroups"]),
  },
  created() {
    this.fetchGroups();
  },
};
</script>

<style>
</style>