<template>
  <v-menu
      ref="menu"
      v-model="menu2"
      :close-on-content-click="false"
      :nudge-right="40"
      :return-value.sync="time"
      transition="scale-transition"
      offset-y
      max-width="290px"
      min-width="290px"
    >
      <template v-slot:activator="{ on }">
        <v-text-field
          v-model="time"
          :label="label_name"
          prepend-icon="mdi-clock"
          readonly
          v-on="on"
        ></v-text-field>
      </template>
      <v-time-picker
        v-if="menu2"
        v-model="time"
        full-width
        @click:minute="$refs.menu.save(time)"
        @change="$emit('timePicker', time)"
      ></v-time-picker>
    </v-menu>
</template>

<script>
  export default {
    data () {
      return {
        time: this.selected_time ? this.selected_time : null,
        menu2: false,
      }
    },
    props: {
      label_name: String,
      selected_time: String
    }
  }
</script>