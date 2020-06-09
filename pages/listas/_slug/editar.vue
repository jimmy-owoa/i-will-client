<template>
  <div>
    <list-form :selectedList="getList" v-if="getList" action="put"/>
  </div>
</template>
<script>
import ListForm from "@/components/lists/ListForm";
import { mapActions, mapGetters } from 'vuex';

export default {
  components: {
    ListForm
  },
  methods: {
    ...mapActions('lists', ['fetchList']),
  },
  computed: {
    ...mapGetters('lists',  ['getList']),
  },
  created() {
    this.fetchList(this.$route.params.slug);
  },
}
</script>