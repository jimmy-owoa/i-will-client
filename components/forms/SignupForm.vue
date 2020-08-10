<template>
  <v-card flat>
    <v-card-text>
      <v-form>
        <v-text-field
          label="Correo electrónico"
          v-model="user.email"
          outlined
          dense
          color="grey darken-2"
          background-color="grey lighten-4"
        ></v-text-field>

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
          label="R.U.N."
          v-model="user.legal_number"
          type="text"
          outlined
          dense
          color="grey darken-2"
          background-color="grey lighten-4"
        ></v-text-field>

        <v-text-field
          label="Contraseña"
          v-model="user.password"
          type="password"
          outlined
          dense
          color="grey darken-2"
          background-color="grey lighten-4"
        ></v-text-field>
        
        <v-text-field
          label="Confirmar Contraseña"
          v-model="user.password_confirmation"
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
        @click="submitForm(user)"
      >Registrarse</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
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
}
</script>