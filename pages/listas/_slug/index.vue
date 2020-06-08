<template>
  <v-row v-if="selectedList">
    <v-col cols="12" md="6">
      <v-card>
        <v-card-title>{{ selectedList.name }}</v-card-title>
        <v-card-text>
          <div class="subtitle-1 my-2">Código: {{ selectedList.code }}</div>
          <div class="subtitle-2">{{ selectedList.description }}</div>
          <v-divider class="mx-4 my-4"></v-divider>
          <v-row>
            <v-col cols="12" sm="2">
              <div class="subtitle-1 font-weight-bold">Inicio</div>
            </v-col>
            <v-col cols="12" sm="10">
              <v-chip class="deep-purple accent-4 white--text">{{ selectedList.start_date}}</v-chip>
              <v-chip class="deep-purple accent-4 white--text">{{ selectedList.start_time}}</v-chip>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="2">
              <div class="subtitle-1 font-weight-bold">Término</div>
            </v-col>
            <v-col cols="12" sm="10">
              <v-chip class="deep-purple accent-4 white--text">{{ selectedList.end_date}}</v-chip>
              <v-chip class="deep-purple accent-4 white--text">{{ selectedList.end_time}}</v-chip>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
      <v-btn class="mt-1" color="info" to="/listas">
        <v-icon>mdi-backburger</v-icon>Volver a Listas
      </v-btn>
      <v-btn class="mt-1" color="warning" :to="`/listas/${this.$route.params.slug}/editar`">
        <v-icon>mdi-draw</v-icon>Editar
      </v-btn>
    </v-col>
    <v-col cols="12" md="6">
      <v-card>
        <v-list three-line v-if="selectedList.tasks.length">
          <div v-for="(task, index) in selectedList.tasks" :key="index">
            <v-list-item :key="task.name">
              <v-list-item-avatar>
                <v-icon x-large>mdi-clipboard-text-outline</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-html="task.name"></v-list-item-title>
                <v-list-item-subtitle>Cantidad: {{ task.amount }} {{ task.measure_unit_name }}</v-list-item-subtitle>
                <v-list-item-subtitle>Tipo de tarea: {{ task.task_type_name }}</v-list-item-subtitle>
                <v-list-item-subtitle>Tarea múltiple: {{ task.is_multiple ? 'Sí' : 'No' }}</v-list-item-subtitle>
                <v-checkbox
                  v-model="task.selected_task"
                  label="Seleccionar tarea"
                  @click="addTaskToUser(task)"
                ></v-checkbox>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
          </div>
        </v-list>
        <div class="title text-center" v-else>Lista sin tareas...</div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      swal_title: ''
    }
  },
  methods: {
    ...mapActions('lists', ['fetchList']),
    ...mapActions('tasks', ['addTaskUser']),
    addTaskToUser(task){
      if (task.selected_task) {
        this.swal_title = "¿Estás seguro de quitar esta tarea?";
      } else {
        this.swal_title = "¿Estás seguro de seleccionar esta Tarea?";
      }
      Swal.fire({
        title: this.swal_title,
        width: 600,

        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: "Confirmar",
        cancelButtonText: "Cancelar"
      }).then(result => {
        try {
          this.$axios
            .post(`http://localhost:3000/api/v1/add_task_user`, { task_id: task.id, value: task.selected_task })
            .then(res => {
              if (res.status == 200) {
                this.fetchList(this.$route.params.slug);
              } else {
                console.log('Algo paso D:')
              }
            })
            .catch(e => {
              console.log(e);
            });
        } catch (error) {
          console.log(error);
          return { error: error };
        }
      });
    },

  },
  computed: {
    ...mapState('lists', ['selectedList']),
  },
  created() {
    this.fetchList(this.$route.params.slug)
  },
}
</script>

<style>

</style>