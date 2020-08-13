<template>
  <v-app>
    <admin-navbar />
    
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AdminNavbar from '@/components/navbars/AdminNavbar'
export default {
  components: {
    AdminNavbar
  }
}
</script>