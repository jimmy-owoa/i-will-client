<template lang="html">
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12 mx-auto" max-width="500" height="600">
          <v-tabs background-color="primary" dark v-model="tab" centered>
            <v-tab>
              Iniciar sesión
            </v-tab>
            <v-tab>
              Registrarse
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
                <v-alert type="success" v-show="alertSuccess">
                  Registro Exitoso
                </v-alert>
                <signup-form
                  :submitForm="signupUser"
                />
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import LoginForm from '~/components/forms/LoginForm';
import SignupForm from '~/components/forms/SignupForm';

export default {
  layout: 'default',
  middleware: 'auth',
  components: {
    LoginForm, SignupForm
  },
  data() {
    return {
      email: '',
      password: '',
      tab: null,
      alertSuccess: false
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
    },
    updateEmail(value) {
      this.email = value;
    },
    async signupUser(user) {
      let response = await this.registerUser(user);

      if (response.status == "ok") {
        this.alertSuccess = true;
        this.loginUser(user.email, user.password);
      }
    },
    async loginUser(email, password) {
      try {
        const response = await this.$auth.login({
          data: { email: email, password: password }
        })
        console.log(response)
        if (response.data.success) {
          this.$router.push('/listas')
        }
      } catch (err) {
        console.log(err)
      }
    },
    ...mapActions('users', ['registerUser']),
  },
}
</script>