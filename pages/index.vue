<template>
  <div>
    <v-btn color="success">Hola</v-btn>
    <lists />
  </div>
</template>

<script>
import Lists from '~/components/lists/Lists.vue'

export default {
  layout: 'user',
  middleware: 'auth',
  components: {
    Lists
  }
}
</script>
