<template>
  <v-row>
    <v-col cols="12" md="6">
      <v-card>
        <v-form @submit.prevent="submit">
          <v-container>
            <p class="title">Crear Lista</p>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field v-model="list.name" label="Nombre" outlined></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field v-model="list.code" label="Código" outlined></v-text-field>
              </v-col>
              <v-col cols="12" sm="12">
                <v-textarea counter label="Descripción" v-model="list.description"></v-textarea>
              </v-col>

              <v-col cols="12" md="6">
                <v-menu
                  v-model="menu_date_picker"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="getStartDate"
                      label="Fecha de inicio"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker 
                    v-model="list.start_date" 
                    @input="menu_date_picker = false"
                    :first-day-of-week="1"
                    locale="es"
                  ></v-date-picker>
                </v-menu>
              </v-col>

              <v-col cols="12" md="6">
                <v-menu
                  v-model="picker_date_end"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="getEndDate"
                      label="Fecha de término"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker 
                    v-model="list.end_date" 
                    @input="picker_date_end = false"
                    :first-day-of-week="1"
                    locale="es"
                  ></v-date-picker>
                </v-menu>
              </v-col>

              <v-col cols="12" sm="12">
                <v-btn color="primary" type="submit">Crear</v-btn>
                <v-btn color="red" dark to="/listas">Cancelar</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      menu_date_picker: false,
      picker_date_end: false,
      list: {
        name: '',
        code: '',
        description: '',
        start_date: new Date().toISOString().substr(0, 10),
        end_date: new Date().toISOString().substr(0, 10),
        user_id: 1
      }
    }
  },
  methods: {
    ...mapActions('lists', ['addList']),
    formatDate(date) {
      if (!date) return null
      const [year, month, day] = date.split('-')
      return `${day}/${month}/${year}`
    },
    submit(){
      this.addList(this.list);
      this.$router.push("/listas");
    }
  },
  computed: {
    getStartDate () {
      return this.formatDate(this.list.start_date)
    },
    getEndDate () {
      return this.formatDate(this.list.end_date)
    },
  },
}
</script>

