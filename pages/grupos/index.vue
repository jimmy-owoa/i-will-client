<template>
  <v-row>
    <v-col sm="4" v-for="group in getGroups" :key="group.id">
      <v-card :loading="loading" class="mx-auto my-12" max-width="374">
        <v-img height="250" :src="group.image"></v-img>

        <v-card-title>
          <v-row class="mx-0">
            <div>{{ group.name }}</div>
            <div class="grey--text pl-4">({{group.members}} miembros)</div>
          </v-row>
        </v-card-title>

        <v-card-text>
          <div class="my-4 subtitle-1">
            <v-icon>place</v-icon>
            {{group.address}}
          </div>

          <div>{{group.description}}</div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="deep-purple lighten-2" text @click="showGroup">Ver</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  layout: "admin",
  middleware: "auth",
  data: () => ({
    loading: false,
  }),
  computed: {
    ...mapGetters("groups", ["getGroups"]),
  },
  methods: {
    ...mapActions("groups", ["fetchGroups"]),
    showGroup() {

    },
  },
  created() {
    this.fetchGroups();
  },
};
</script>

<style>
</style>