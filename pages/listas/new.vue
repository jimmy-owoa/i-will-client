<template>
  <v-row>
    <v-col cols="12" md="6">
      <v-form @submit.prevent="submit">
        <v-card>
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
                <list-date-picker @datePicker="setStartDate" label_name="Fecha de inicio" />
              </v-col>

              <v-col cols="12" md="6">
                <list-date-picker @datePicker="setEndDate" label_name="Fecha de término" />
              </v-col>

              <v-col cols="12" md="6">
                <list-time-picker @timePicker="setTimeStart" label_name="Hora de inicio" />
              </v-col>

              <v-col cols="12" md="6">
                <list-time-picker @timePicker="setTimeEnd" label_name="Fecha de término" />
              </v-col>

              <v-col cols="12" sm="12">
                <v-btn color="primary" type="submit">Crear</v-btn>
                <v-btn color="red" dark to="/listas">Cancelar</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
        <!-- Formulario Agregar Tarea -->
        <v-row>
          <v-col cols="12">
            <v-card>
              <v-container>
                <p class="title">Agregar Tarea</p>
                <v-row>
                  <v-col cols="12" md="6">
                    {{ task.name}}
                    <v-text-field v-model="task.name" label="Nombre" outlined></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field v-model="task.amount" label="Cantidad" type="number" outlined></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" lg="6">
                    <v-combobox
                      v-model="task.task_type_name"
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
                  <v-col cols="12" md="6" class="d-flex align-center">
                    <v-btn color="primary" @click="addTask">Agregar Tarea</v-btn>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-checkbox
                      v-model="task.is_multiple"
                      label="¿Es múltiple?"
                    ></v-checkbox>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
          <v-col cols="12">
            <v-card class="my-1" v-for="(task, index) in list.tasks" :key="index">
              <v-card-text>
                <p class="title">Nombre: {{ task.name}} </p>
                <p class="subtitle">Cantidad: {{ task.amount }}</p>
                <p class="subtitle">Unidad medida: {{ task.measure_unit_name }}</p>
                <p class="subtitle">Tipo de tarea: {{ task.task_type_name }}</p>
                <p class="subtitle">Es múltiple?: {{ task.is_multiple }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <!-- ./Formulario Agregar Tarea -->
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapState } from "vuex";
import ListDatePicker from '@/components/lists/ListDatePicker';
import ListTimePicker from '@/components/lists/ListTimePicker';

export default {
  components: {
    ListDatePicker,
    ListTimePicker
  },
  data() {
    return {
      time_start: '9:00',
      time_end: '9:00',
      list: {
        name: '',
        code: '',
        description: '',
        start_date: new Date().toISOString().substr(0, 10),
        end_date: new Date().toISOString().substr(0, 10),
        user_id: 1,
        tasks: []
      },
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
    ...mapActions('lists', ['addList']),
    submit(){
      this.list.start_date = new Date(`${this.list.start_date} ${this.time_start}`);
      this.list.end_date = new Date(`${this.list.end_date} ${this.time_end}`);
      this.addList(this.list);
      this.$router.push("/listas");
    },
    setStartDate (date) {
      this.list.start_date = date;
    },
    setEndDate (date) {
      this.list.end_date = date;
    },
    setTimeStart (time) {
      this.time_start = time;
    },
    setTimeEnd (time) {
      this.time_end = time;
    },
    addTask(){
      this.list.tasks.push({
        name: this.task.name,
        amount: this.task.amount,
        is_multiple: this.task.is_multiple,
        measure_unit_name: this.task.measure_unit_name,
        task_type_name: this.task.task_type_name
      });

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

