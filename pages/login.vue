<template lang="html">
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12 mx-auto" max-width="500" height="600">
          <v-tabs background-color="primary" dark v-model="tab" centered>
            <v-tab>
              Login
            </v-tab>
            <v-tab>
              Sign Up
            </v-tab>
          </v-tabs>
          <v-tabs-items v-model="tab">
            <v-tab-item>
              <login-form 
                :email="email" 
                :password="password" 
                :submitForm="login"
                @update-email="updateEmail"
                @update-password="(value) => {password = value}"
              />
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>Contenidow</v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import LoginForm from '~/components/forms/LoginForm';

export default {
  layout: 'session',

  components: {
    LoginForm
  },
  data() {
    return {
      email: '',
      password: '',
      tab: null
    }
  },
  methods: {
    async login() {
      console.log(this.password)
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
    },
    updateEmail(value) {
      this.email = value;
    }
  },
}
</script>