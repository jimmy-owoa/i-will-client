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
                  v-model="task.check"
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

export default {
  data() {
    return {
    }
  },
  methods: {
    ...mapActions('lists', ['fetchList']),
    ...mapActions('tasks', ['addTaskUser']),
    addTaskToUser(task){
      this.addTaskUser({ task_id: task.id, value: task.check });
      this.fetchList(this.$route.params.slug);
    }
  },
  computed: {
    ...mapState('lists', ['selectedList']),
    ...mapState('users', ['currentUser']),
    getUserTask(task){
      if (task.user_ids.includes(this.currentUser.id)){
        return true
      } else {
        return false
      }
    }
  },
  created() {
    this.fetchList(this.$route.params.slug)
  },
}
</script>

<style>

</style>