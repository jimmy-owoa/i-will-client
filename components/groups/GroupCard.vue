<template>
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
      <v-btn color="deep-purple lighten-2" text @click="showGroup(group.slug)">Ver</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  props: {
    group: Object
  },
  data: () => ({
    loading: false,
  }),
  methods: {
    showGroup(slug) {
      this.$router.push(`grupos/${slug}`);
    },
  }
};
</script>

<style>
</style>