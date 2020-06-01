<template>
  <div>
   <lists :lists="this.lists"/>
   as
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Lists from "~/components/lists/Lists"
export default {
  components:{
    Lists
  },
  methods: {
    ...mapActions("lists", ["fetchLists"])
  },
  computed:{
    ...mapState("lists", ["lists"])
  },
  mounted(){
    this.fetchLists()
  }
};
</script>