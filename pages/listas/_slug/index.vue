<template>
  <v-row v-if="selectedList" justify-md="center">
    <!-- Lista -->
    <v-col cols="12" md="6">
      <v-card color="blue darken-4">
        <v-card-title class="white--text">{{ selectedList.name }}</v-card-title>
        <v-card-subtitle
          class="white--text"
        >Finaliza: {{ selectedList.end_date}} a las {{ selectedList.end_time}} hrs.</v-card-subtitle>
        <v-card-text class="white--text">{{ selectedList.description }}</v-card-text>
      </v-card>
      <!-- Tareas -->
      <v-card v-if="selectedList.tasks.length" class="pt-5">
        <div class="text-center headline primary--text">Tareas disponibles</div>
        <v-list flat rounded>
          <v-list-item-group color="primary">
            <v-list-item
              v-for="(task, index) in selectedList.tasks"
              :key="index"
              @click="addTaskToUser(task)"
              :disabled="task.selected_task"
            >
              <v-list-item-action>
                <v-checkbox
                  :disabled="task.selection_disabled"
                  v-model="task.selected_task"
                  @click="addTaskToUser(task)"
                ></v-checkbox>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{ task.task_type_name + ' ' + task.name }}</v-list-item-title>
                <v-list-item-subtitle>{{task.amount + ' ' + task.measure_unit_name}}</v-list-item-subtitle>
                <v-list-item-subtitle>
                  <div v-for="(user, idx) in task.users" :key="idx">{{ user }}</div>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
      <div class="title text-center" v-else>Lista sin tareas...</div>
      <!-- ./Tareas -->
      <!-- ./Lista -->
      <v-btn class="mt-1" color="info" to="/listas">
        <v-icon>mdi-backburger</v-icon>Volver a Listas
      </v-btn>
      <v-btn class="mt-1" color="warning" :to="`/listas/${this.$route.params.slug}/editar`">
        <v-icon>mdi-draw</v-icon>Editar
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      swal_title: ""
    };
  },
  methods: {
    ...mapActions("lists", ["fetchList"]),
    ...mapActions("tasks", ["addTaskUser"]),
    addTaskToUser(task) {
      if (task.selected_task){
        Swal.fire({
          title: "No es posible deshacer esta acción"
        })
      }
      this.swal_title = (task.selected_task) ? "¿Estás seguro de quitar esta tarea?" : "¿Estás seguro de seleccionar esta tarea?";
      Swal.fire({
        title: this.swal_title,
        width: 600,
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: "Confirmar",
        cancelButtonText: "Cancelar"
      }).then(result => {
        if (result.value){
          this.doRequest(task);
        }
      });
    },
    doRequest(task) {
      try {
        this.$axios.post(`add_task_user`, {
          task_id: task.id,
          value: task.selected_task
        });        
      } catch (error) {
        console.log(error);
        return { error: error };
      } finally {
        setTimeout(() =>  this.fetchList(this.$route.params.slug), 400);
      }
    }
  },
  computed: {
    ...mapState("lists", ["selectedList"])
  },
  created() {
    this.fetchList(this.$route.params.slug);
  }
};
</script>