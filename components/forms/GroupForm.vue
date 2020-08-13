<template>
  <v-row>
    <v-col cols="12" md="6">
      <h2>{{ titleForm }}</h2>

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

            <!-- <v-autocomplete
              label="Región"
              v-model="communes"
              :items="getRegions"
              item-text="name"
              item-value="communes"
              outlined
              dense
              color="grey darken-2"
              background-color="grey lighten-4"
            ></v-autocomplete>

            <v-autocomplete
              label="Comuna"
              v-model="group.commune_id"
              :items="communes"
              item-text="name"
              item-value="id"
              outlined
              dense
              color="grey darken-2"
              background-color="grey lighten-4"
              :disabled="communes ? false : true"
            ></v-autocomplete> -->

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
            @click="submitForm"
          >{{ titleButton }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="12" md="4">
      <div class="d-flex justify-center">
        <v-img :src="preview_image" width="300" v-if="preview_image"></v-img>
      </div>
      <v-file-input
        label="Avatar"
        v-model="image"
        accept="image/png, image/jpeg"
        placeholder="Subir Imagen"
        prepend-icon="mdi-camera"
        @change="validateImage($event)"
      ></v-file-input>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  layout: 'admin',
  middleware: 'auth',
  props: {
    titleForm: String,
    titleButton: String,
    group: Object,
    submitForm: Function,
  },
  data() {
    return {
      image: null,
      preview_image: null,
      error: null,
      communes: null
    }
  },
  computed: {
    ...mapGetters("groups", ["getRegions"]),
  },
  methods: {
    ...mapActions("groups", ["fetchRegions"]),
    validateImage(event){
      if (this.image) {
        const fileType = this.image.type;
  
        if (fileType === 'image/jpeg' || fileType === 'image/png') {
          this.error = null;
        } else {
          this.error = 'Archivo no válido';
          this.image = null;
          this.preview_image = null;
          return;
        }
  
        const reader = new FileReader();
        reader.readAsDataURL(this.image);
        reader.onload = (e) => {
          this.preview_image = e.target.result;
        }
      } else {
        this.preview_image = null;
      }
    },
  },
  created() {
    this.fetchRegions();
  },
}
</script>