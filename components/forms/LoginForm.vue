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
          v-model="userLegalNumber"
          type="text"
          outlined
          dense
          color="grey darken-2"
          background-color="grey lighten-4"
        ></v-text-field>

        <v-text-field
          label="Contraseña"
          v-model="userPassword"
          type="password"
          outlined
          dense
          color="grey darken-2"
          background-color="grey lighten-4"
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
    legal_number: String,
    password: String,
    submitForm: Function
  },
  computed: {
    userLegalNumber: {
      get() { return this.legal_number },
      set(value) { this.$emit('update-legalnumber', value) }
    },
    userPassword: {
      get() { return this.password },
      set(value) { this.$emit('update-password', value) }
    }
  },
}
</script>