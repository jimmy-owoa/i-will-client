<template>
  <div>
    <group-form
      v-if="selectedGroup"
      titleForm="Editar Grupo"
      titleButton="Editar Grupo"
      :group="selectedGroup"
      :submitForm="submitGroup"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import GroupForm from '@/components/forms/GroupForm';
import _ from 'lodash';

export default {
  layout: "admin",
  middleware: "auth",
  components: {
    GroupForm
  },
  computed: {
    ...mapState("groups", ["group"]),
    selectedGroup(){
      return _.cloneDeep(this.group);
    }
  },
  methods: {
    ...mapActions("groups", ["fetchGroup"]),
    async submitGroup(){
      console.log(this.selectedGroup);
      // const formData = new FormData();
      // formData.append("group[name]", this.selectedGroup.name);
      // formData.append("group[description]", this.selectedGroup.description);
      // formData.append("group[address]", this.selectedGroup.address);

      // const response = await this.editGroup(formData);
      // if (response.status == "ok") {
      //   this.$router.push('/grupos')
      // }
    },
  },
  created() {
    this.fetchGroup(this.$route.params.slug);
  },
}
</script>