<template>
  <div>
    <div id="parentx">
      <vs-button @click="active = !active" color="primary" type="filled">Open Sidebar</vs-button>
      <vs-sidebar
        parent="body"
        default-index="1"
        color="primary"
        class="sidebarx"
        spacer
        v-model="active"
      >
        <div class="header-sidebar" slot="header">
          <vs-avatar size="70px" src="https://randomuser.me/api/portraits/men/85.jpg" />

          <h4>
            Jhon Doe
            <vs-button color="primary" icon="more_horiz" type="flat"></vs-button>
          </h4>
        </div>

        <vs-sidebar-item index="1" icon="question_answer">Dashboard</vs-sidebar-item>

        <vs-sidebar-item index="2" icon="gavel">History</vs-sidebar-item>

        <vs-divider icon="person" position="left">User</vs-divider>

        <vs-sidebar-item index="3" icon="verified_user">Configurations</vs-sidebar-item>
        <vs-sidebar-item index="4" icon="account_box">Profile</vs-sidebar-item>
        <vs-sidebar-item index="5">Card</vs-sidebar-item>

        <div class="footer-sidebar" slot="footer">
          <vs-button icon="reply" color="danger" type="flat">log out</vs-button>
          <vs-button icon="settings" color="primary" type="border"></vs-button>
        </div>
      </vs-sidebar>
    </div>
    <div class="container">
      <nuxt />
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Default',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  methods: {
    ...mapActions('users', ['fetchCurrentUser'])
  },
  created() {
    this.fetchCurrentUser();
  },
}
</script>