<template>
  <v-row>
    <v-col cols="12" md="6">
      <v-form @submit.prevent="submit">
        <v-card>
          <v-container>
            <p class="title">Crear Lista</p>
            <v-row>
              <v-col cols="12" md="6" class="py-0">
                <v-text-field v-model="list.name" label="Nombre" outlined></v-text-field>
              </v-col>
              <v-col cols="12" md="6" class="py-0">
                <v-text-field v-model="list.code" label="Código" outlined></v-text-field>
              </v-col>
              <v-col cols="12" md="12" class="py-0">
                <v-textarea counter label="Descripción" v-model="list.description"></v-textarea>
              </v-col>

              <v-col cols="12" md="6" class="py-0">
                <list-date-picker @datePicker="setStartDate" label_name="Fecha de inicio" />
              </v-col>

              <v-col cols="12" md="6" class="py-0">
                <list-date-picker @datePicker="setEndDate" label_name="Fecha de término" />
              </v-col>

              <v-col cols="12" md="6" class="py-0">
                <list-time-picker @timePicker="setTimeStart" label_name="Hora de inicio" />
              </v-col>

              <v-col cols="12" md="6" class="py-0">
                <list-time-picker @timePicker="setTimeEnd" label_name="Fecha de término" />
              </v-col>

              <v-col cols="12">
                <v-btn color="primary" type="submit">Crear</v-btn>
                <v-btn color="red" dark to="/listas">Cancelar</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-form>
    </v-col>
    <v-col cols="12" md="6" class="pa-0">
      <!-- Formulario Agregar Tarea -->
      <v-row>
        <v-col cols="12">
          <form-task @addTask="addTask" />
        </v-col>
        <v-col cols="12">
          <v-card class="my-1" v-for="(task, index) in list.tasks" :key="index">
            <v-card-text class="pt-1 pb-0">
              <p class="title">Nombre: {{ task.name}} </p>
              <v-row>
                <v-col cols="6" class="py-0">
                  <p class="subtitle">Cantidad: {{ task.amount }}</p>
                  <p class="subtitle">Unidad medida: {{ task.measure_unit_name }}</p>

                </v-col>
                <v-col cols="6" class="py-0">
                  <p class="subtitle">Tipo de tarea: {{ task.task_type_name }}</p>
                  <p class="subtitle">¿Es múltiple?: {{ task.is_multiple }}</p>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <!-- ./Formulario Agregar Tarea -->
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapState } from "vuex";
import ListDatePicker from '@/components/lists/ListDatePicker';
import ListTimePicker from '@/components/lists/ListTimePicker';
import FormTask from '@/components/tasks/FormTask';


export default {
  components: {
    ListDatePicker,
    ListTimePicker,
    FormTask
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
    }
  },
  methods: {
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
    addTask(task){
      this.list.tasks.push(task);
    }
  }
}
</script>

