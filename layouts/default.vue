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
export default {
  data: () => ({
    active: false
  })
};
</script>

<style lang="stylus">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.header-sidebar {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  h4 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    > button {
      margin-left: 10px;
    }
  }
}

.footer-sidebar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  > button {
    border: 0px solid rgba(0, 0, 0, 0) !important;
    border-left: 1px solid rgba(0, 0, 0, 0.07) !important;
    border-radius: 0px !important;
  }
}
</style>