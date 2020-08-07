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
          label="Correo electrónico"
          v-model="userEmail"
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
    email: String,
    password: String,
    submitForm: Function
  },
  computed: {
    userEmail: {
      get() { return this.email },
      set(value) { this.$emit('update-email', value) }
    },
    userPassword: {
      get() { return this.password },
      set(value) { this.$emit('update-password', value) }
    }
  },
}
</script>