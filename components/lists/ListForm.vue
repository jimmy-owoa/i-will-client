<template>
  <v-row>
    <v-col cols="12" md="6">
      <v-form @submit.prevent="submit">
        <v-card>
          <v-container>
            <p class="title">Crear Lista</p>
            <v-row>
              <v-col cols="12" md="6" class="py-0">
                <v-text-field v-model="selectedList.name" label="Nombre" outlined></v-text-field>
              </v-col>
              <v-col cols="12" md="6" class="py-0">
                <v-text-field v-model="selectedList.code" label="Código" outlined></v-text-field>
              </v-col>
              <v-col cols="12" md="12" class="py-0">
                <v-textarea counter label="Descripción" v-model="selectedList.description"></v-textarea>
              </v-col>

              <v-col cols="12" md="6" class="py-0">
                <list-date-picker @datePicker="setStartDate" :selected_date="selectedList.full_start_date" label_name="Fecha de inicio" />
              </v-col>

              <v-col cols="12" md="6" class="py-0">
                <list-date-picker @datePicker="setEndDate"  :selected_date="selectedList.full_end_date" label_name="Fecha de término" />
              </v-col>

              <v-col cols="12" md="6" class="py-0">
                <list-time-picker @timePicker="setTimeStart" :selected_time="selectedList.start_time" label_name="Hora de inicio" />
              </v-col>

              <v-col cols="12" md="6" class="py-0">
                <list-time-picker @timePicker="setTimeEnd" :selected_time="selectedList.end_time" label_name="Hora de término" />
              </v-col>

              <v-col cols="12">
                <v-btn color="primary" type="submit">Crear</v-btn>
                <v-btn color="red" dark to="/listas">Cancelar</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-form>
        {{ selectedList.name }}
    </v-col>
    <!-- Tareas -->
    <v-col cols="12" md="6" class="pa-0">
      <form-task :tasks="selectedList.tasks" @deleteTask="deleteTask" />
      <div class="text-center">
        <v-btn class="text-right" color="primary" @click="addTask">
          <v-icon>mdi-plus</v-icon>Agregar Tarea
        </v-btn>
      </div>
    </v-col>
    <!-- ./Tareas -->
  </v-row>
</template>

<script>
import { mapActions } from "vuex";

import ListDatePicker from '@/components/lists/ListDatePicker';
import ListTimePicker from '@/components/lists/ListTimePicker';
import FormTask from '@/components/tasks/FormTask';

export default {
  components: {
    ListDatePicker,
    ListTimePicker,
    FormTask
  },
  props: {
    selectedList: Object,
    action: String
  },
  methods: {
    ...mapActions('lists', ['addList']),
    ...mapActions('lists', ['updateList']),
    submit(){
      if (this.action == 'post') {        
        this.selectedList.start_date = new Date(`${this.selectedList.start_date} ${this.selectedList.start_time}`);
        this.selectedList.end_date = new Date(`${this.selectedList.end_date} ${this.selectedList.end_time}`);
        this.addList(this.selectedList);
        this.$router.push("/listas");
      } else {
        this.updateList(this.$route.params.slug, this.selectedList);
        this.$router.push("/listas");
      }
    },
    setStartDate (date) {
      this.selectedList.start_date = date;
    },
    setEndDate (date) {
      this.selectedList.end_date = date;
    },
    setTimeStart (time) {
      this.selectedList.start_time = time;
    },
    setTimeEnd (time) {
      this.selectedList.end_time = time;
    },
    addTask(task){
      this.selectedList.tasks.push({
        name: '',
        amount: '',
        is_multiple: false,
        measure_unit_name: null,
        task_type_name: null,
      });
    },
    deleteTask(index){
      this.selectedList.tasks.splice(index, 1);
    }
  },
}
</script>