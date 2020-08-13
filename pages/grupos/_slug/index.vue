<template>
  <v-card>
    
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  layout: "admin",
  middleware: "auth",
  computed: {
    ...mapGetters("groups", ["getSelectedGroup"]),
  },
  methods: {
    ...mapActions("groups", ["fetchGroup"]),
  },
  created() {
    this.fetchGroup(this.$route.params.slug);
  },
};
</script>