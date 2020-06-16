<template>
  <div>
    <lists />
  </div>
</template>

<script>
import Lists from '~/components/lists/Lists.vue'

export default {
  middleware: 'auth',
  components: {
    Lists
  }
}
</script>
