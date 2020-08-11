<template>
  <v-card flat>
    <v-card-text>
      <v-form>
        <v-text-field
          label="Nombre"
          v-model="user.name"
          type="text"
          outlined
          dense
          color="grey darken-2"
          background-color="grey lighten-4"
        ></v-text-field>

        <v-text-field
          label="Apellido"
          v-model="user.lastname"
          type="text"
          outlined
          dense
          color="grey darken-2"
          background-color="grey lighten-4"
        ></v-text-field>

        <v-text-field
          label="Correo electrónico *"
          v-model="user.email"
          outlined
          dense
          color="grey darken-2"
          background-color="grey lighten-4"
          required
          @blur="$v.user.email.$touch()"
          :error-messages="emailErrors"
        ></v-text-field>

        <v-text-field
          label="R.U.N. *"
          v-model="user.legal_number"
          type="text"
          outlined
          dense
          color="grey darken-2"
          background-color="grey lighten-4"
          required
          @blur="$v.user.legal_number.$touch()"
          :error-messages="legalNumberErrors"
        ></v-text-field>

        <v-text-field
          label="Contraseña *"
          v-model="user.password"
          type="password"
          outlined
          dense
          color="grey darken-2"
          background-color="grey lighten-4"
          required
          @blur="$v.user.password.$touch()"
          :error-messages="passwordErrors"
        ></v-text-field>
        
        <v-text-field
          label="Confirmar Contraseña *"
          v-model="user.password_confirmation"
          type="password"
          outlined
          dense
          color="grey darken-2"
          background-color="grey lighten-4"
          required
          @blur="$v.user.password_confirmation.$touch()"
          :error-messages="passwordConfirmationErrors"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn 
        class="py-5 mx-auto"
        color="info"
        @click="signUp"
      >Registrarse</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      user: {
        name: '',
        lastname: '',
        legal_number: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
    }
  },
  props: {
    submitForm: Function
  },
  computed: {
    emailErrors () {
      const errors = []
      if (!this.$v.user.email.$dirty) return errors
      !this.$v.user.email.email && errors.push('E-mail inválido')
      !this.$v.user.email.required && errors.push('E-mail es requerido')
      return errors
    },
    legalNumberErrors () {
      const errors = []
      if (!this.$v.user.legal_number.$dirty) return errors
      !this.$v.user.legal_number.required && errors.push('R.U.N. es requerido')
      return errors
    },
    passwordErrors () {
      const errors = []
      if (!this.$v.user.password.$dirty) return errors
      !this.$v.user.password.required && errors.push('Contraseña es requerida.')
      !this.$v.user.password.minLength && errors.push('Debe tener como mínimo 6 caracteres')
      return errors
    },
    passwordConfirmationErrors () {
      const errors = []
      if (!this.$v.user.password_confirmation.$dirty) return errors
      !this.$v.user.password_confirmation.required && errors.push('Confirmar contraseña es requerida.')
      !this.$v.user.password_confirmation.sameAsPassword && errors.push('Contraseñas deben ser idénticas')
      return errors
    },
  },
  methods: {
    signUp() {
      this.$v.$touch();
      
      if (this.$v.$invalid) {
        return;
      }

      this.submitForm(this.user)
    }
  },
  // Validaciones
  mixins: [validationMixin],
  validations: {
    user: {
      email: {required, email},
      legal_number: {required},
      password: {required, minLength: minLength(6)},
      password_confirmation: {required, sameAsPassword: sameAs('password')}
    }
  },
}
</script>