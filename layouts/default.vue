<template>
  <v-app>
    <v-content class="blue lighten-1">
      <nuxt />
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Default",
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js"
    };
  },
  computed: {
    ...mapState('users', ['currentUser']),
  }
}
</script>

<style>
.material-light{
  background-color: red;
}
</style>