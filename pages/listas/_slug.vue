<template>
  <div>
    {{this.$route.params.slug}}
    <div v-if="selectedList">
      {{ selectedList }}
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  methods: {
    ...mapActions('lists', ['fetchList']),
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