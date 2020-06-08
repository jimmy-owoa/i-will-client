<template>
  <v-row>
    <v-col cols="12">
      <v-card class="mb-1" v-for="(task, index) in tasks" :key="index">
        <v-container>
          <p class="title">Tarea {{ index + 1 }}</p>
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
            <v-col cols="6" class="pb-0">
              <v-row>
                <v-col cols="6" class="pr-0">
                  <v-checkbox
                    v-model="task.is_multiple"
                    label="¿Es múltiple?"
                    :disabled="!task.task_editable"
                  ></v-checkbox>
                </v-col>
                <v-col cols="6" class="d-flex align-center pl-0">     
                  <v-tooltip top v-if="!task.task_editable">
                    <template v-slot:activator="{ on }">
                      <v-btn icon v-on="on">
                        <v-icon color="">mdi-help-box</v-icon>
                      </v-btn>
                    </template>
                    <span>Este campo no se puede editar porque ya tiene usuarios asignados.</span>
                  </v-tooltip>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="6" class="d-flex align-end">
              <v-btn class="text-right" color="error" @click="$emit('deleteTask', index)">
                <v-icon>mdi-close</v-icon>Eliminar Tarea
              </v-btn>
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
  props: {
    tasks: Array
  },
  methods: {
    ...mapActions('tasks', ['fetchTaskTypes']),
    ...mapActions('tasks', ['fetchMeasureUnits']),
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