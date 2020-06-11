<template lang="html">
  <div>
    <v-text-field v-model="email" label="Email"></v-text-field>
    <v-text-field
      v-model="password"
      label="Password"
      type="password"
    ></v-text-field>
    <v-btn @click="login()"> Login </v-btn>
  </div>
</template>
<script>
export default {
  layout: 'session',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login() {
      try {
        const response = await this.$auth.login({
          data: { email: this.email, password: this.password }
        })
        console.log(response)
        if (response.data.success) {
          this.$router.push('/listas')
        }
      } catch (err) {
        console.log(err)
      }
    }
  },
}
</script>