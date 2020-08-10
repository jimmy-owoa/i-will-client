<template>
  <v-card flat>
    <v-img
      class="white--text align-end"
      height="200px"
      :src="require('~/assets/user-login.png')"
      contain
    ></v-img>
    <v-card-text>
      <v-form>
        <v-text-field
          label="R.U.N"
          v-model="userInfo.legal_number"
          type="text"
          outlined
          dense
          color="grey darken-2"
          background-color="grey lighten-4"
          required
          @blur="validator.legal_number.$touch()"
          :error-messages="legalNumberErrors"
        ></v-text-field>

        <v-text-field
          label="Contraseña"
          v-model="userInfo.password"
          type="password"
          outlined
          dense
          color="grey darken-2"
          background-color="grey lighten-4"
          required
          @blur="validator.password.$touch()"
          :error-messages="passwordErrors"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn 
        class="py-5 mx-auto"
        color="info"
        @click="submitForm"
      >Ingresar</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    userInfo: Object,
    submitForm: Function,
    validator: Object
  },
  computed: {
    legalNumberErrors () {
      const errors = []
      if (!this.validator.legal_number.$dirty) return errors
      !this.validator.legal_number.required && errors.push('R.U.N. es requerido')
      return errors
    },
    passwordErrors () {
      const errors = []
      if (!this.validator.password.$dirty) return errors
      !this.validator.password.required && errors.push('Contraseña es requerida.')
      return errors
    },
  },
}
</script>