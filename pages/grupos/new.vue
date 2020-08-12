<template>
  <div>
    <v-row>
      <v-col cols="12" md="6">
        <h2>Crear grupo</h2>

        <v-card flat>
          <v-card-text>
            <v-form>
              <v-text-field
                label="Nombre"
                v-model="group.name"
                type="text"
                outlined
                dense
                color="grey darken-2"
                background-color="grey lighten-4"
              ></v-text-field>

              <v-text-field
                label="Dirección"
                v-model="group.address"
                type="text"
                outlined
                dense
                color="grey darken-2"
                background-color="grey lighten-4"
              ></v-text-field>

              <v-autocomplete
                label="Región"
                v-model="group.region_id"
                :items="items"
                item-text="name"
                item-value="id"
                outlined
                dense
                color="grey darken-2"
                background-color="grey lighten-4"
              ></v-autocomplete>

              <v-autocomplete
                label="Comuna"
                :items="items"
                outlined
                dense
                color="grey darken-2"
                background-color="grey lighten-4"
              ></v-autocomplete>

              <v-textarea
                label="Descripción"
                v-model="group.description"
                outlined
                color="grey darken-2"
                background-color="grey lighten-4"
              ></v-textarea>
            </v-form>
          </v-card-text>

          <v-card-actions>
            <v-btn 
              class="py-5 mx-auto"
              color="info"
              block
            >Crear grupo</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  middleware: 'auth',
  data() {
    return {
      group: {
        name: '',
        description: '',
        address: '',
        commune_id: '',
        region_id: null
      },
      image: null,
      items: ['foo', 'bar', 'fizz', 'buzz'],
    }
  }
}
</script>