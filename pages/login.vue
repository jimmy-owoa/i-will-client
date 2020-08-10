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
                :userInfo="userInfo"
                :validator="$v.userInfo" 
                :submitForm="login"
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
import { validationMixin } from 'vuelidate';
import { required, maxLength, email } from 'vuelidate/lib/validators';
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
      userInfo: {
        legal_number: '',
        password: '',
      },
      tab: null,
      alertSuccess: false
    }
  },
  methods: {
    login() {
      this.$v.$touch();
      
      if (this.$v.$invalid) {
        return;
      }

      this.loginUser(this.userInfo.legal_number, this.userInfo.password);
    },
    async signupUser(user) {
      let response = await this.registerUser(user);

      if (response.status == "ok") {
        this.alertSuccess = true;
        this.loginUser(user.legal_number, user.password);
      }
    },
    async loginUser(legal_number, password) {
      try {
        const response = await this.$auth.login({
          data: { legal_number: legal_number, password: password }
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
  // Validaciones
  mixins: [validationMixin],
  validations: {
    userInfo: {
      legal_number: {required},
      password: {required}
    }
  },
}
</script>