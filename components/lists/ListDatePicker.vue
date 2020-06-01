<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    :nudge-right="40"
    transition="scale-transition"
    offset-y
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="getFormatDate"
        label="Fecha de término"
        prepend-icon="mdi-calendar"
        readonly
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker 
      v-model="date" 
      @input="menu = false"
      :first-day-of-week="1"
      locale="es"
      @change="$emit('datePicker', date)"
    ></v-date-picker>
  </v-menu>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
      date: new Date().toISOString().substr(0, 10),
    }
  },
  methods: {
    formatDate(date) {
      if (!date) return null
      const [year, month, day] = date.split('-')
      return `${day}-${month}-${year}`
    },
  },
  computed: {
    getFormatDate () {
      return this.formatDate(this.date)
    },
  },
}
</script>