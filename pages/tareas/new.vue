<template>
  <v-row>
    <v-col cols="12" md="6">
      <v-card>
        <v-form @submit.prevent="submit">
          <v-container>
            <p class="title">Crear Tarea</p>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field v-model="task.name" label="Nombre" outlined></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-model="task.amount" label="Cantidad" type="number" outlined></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6" lg="6">
                <v-combobox
                  v-model="task.task_type_id"
                  :items="taskTypes"
                  label="Tipo de tarea"
                ></v-combobox>
              </v-col>

              <v-col cols="12" md="6" lg="6">
                <v-combobox
                  v-model="task.measure_unit_name"
                  :items="measureUnits"
                  label="Unidad de medida"
                ></v-combobox>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6">
                <v-autocomplete
                  v-model="task.list_id"
                  :items="listNames"
                  item-text="name"
                  item-value="id"
                  dense
                  filled
                  label="Agregar a Lista"
                ></v-autocomplete>
              </v-col>
              <v-col cols="12" md="6">
                <v-checkbox
                  v-model="task.is_multiple"
                  label="¿Es múltiple?"
                ></v-checkbox>
              </v-col>
            </v-row>
            <v-row>
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
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      task: {
        name: '',
        amount: '',
        is_multiple: false,
        list_id: null,
        measure_unit_name: null,
        task_type_name: null
      },
    }
  },
  computed: {
    ...mapState('tasks', ['taskTypes']),
    ...mapState('tasks', ['measureUnits']),
    ...mapState('tasks', ['listNames']),
  },
  methods: {
    ...mapActions('tasks', ['fetchTaskTypes']),
    ...mapActions('tasks', ['fetchMeasureUnits']),
    ...mapActions('tasks', ['fetchListNames']),
    submit(){

    }
  },
  created() {
    this.fetchTaskTypes();
    this.fetchMeasureUnits();
    this.fetchListNames();
  },
}
</script>