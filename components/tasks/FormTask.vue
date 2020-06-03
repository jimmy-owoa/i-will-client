<template>
  <v-row>
    <v-col cols="12">
      <v-card>
        <v-container>
          <p class="title">Agregar Tarea</p>
          <v-row>
            <v-col cols="12" md="6" class="py-0">
              <v-text-field v-model="task.name" label="Nombre" outlined></v-text-field>
            </v-col>
            <v-col cols="12" md="6" class="py-0">
              <v-text-field v-model="task.amount" label="Cantidad" type="number" outlined></v-text-field>
            </v-col>
            <v-col cols="12" md="6" class="py-0">
              <v-combobox
                v-model="task.task_type_name"
                :items="taskTypes"
                label="Tipo de tarea"
              ></v-combobox>
            </v-col>

            <v-col cols="12" md="6" class="py-0">
              <v-combobox
                v-model="task.measure_unit_name"
                :items="measureUnits"
                label="Unidad de medida"
              ></v-combobox>
            </v-col>
            <v-col cols="12" md="6" class="d-flex align-center pb-0">
              <v-btn color="primary" @click="addTask">Agregar Tarea</v-btn>
            </v-col>
            <v-col cols="12" md="6" class="pb-0">
              <v-checkbox
                v-model="task.is_multiple"
                label="¿Es múltiple?"
              ></v-checkbox>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      task: {
        name: '',
        amount: '',
        is_multiple: false,
        measure_unit_name: null,
        task_type_name: null
      },
    }
  },
  methods: {
    ...mapActions('tasks', ['fetchTaskTypes']),
    ...mapActions('tasks', ['fetchMeasureUnits']),
    addTask(){
      let task = {
        name: this.task.name,
        amount: this.task.amount,
        is_multiple: this.task.is_multiple,
        measure_unit_name: this.task.measure_unit_name,
        task_type_name: this.task.task_type_name
      }

      this.$emit('addTask', task)

      this.task.name = '';
      this.task.amount = '';
      this.task.is_multiple = false;
      this.task.measure_unit_name = null;
      this.task.task_type_name = null;
    }
  },
  computed: {
    ...mapState('tasks', ['taskTypes']),
    ...mapState('tasks', ['measureUnits']),
  },
  created() {
    this.fetchTaskTypes();
    this.fetchMeasureUnits();
  },
}
</script>