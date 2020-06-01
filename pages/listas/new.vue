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
                <list-date-picker @datePicker="setStartDate" />
              </v-col>

              <v-col cols="12" md="6">
                <list-date-picker @datePicker="setEndDate" />
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
import ListDatePicker from '@/components/lists/ListDatePicker';

export default {
  components: {
    ListDatePicker
  },
  data() {
    return {
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
    submit(){
      this.addList(this.list);
      this.$router.push("/listas");
    },
    setStartDate (date) {
      this.list.start_date = date;
    },
    setEndDate (date) {
      this.list.end_date = date;
    },
  },
}
</script>

