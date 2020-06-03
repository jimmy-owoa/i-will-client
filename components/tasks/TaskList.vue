<template>
  <div>
    <v-card class="my-1" v-for="(task, index) in tasks" :key="index">
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
  </div>
</template>
<script>
export default {
  props: {
    tasks: Array
  }
}
</script>