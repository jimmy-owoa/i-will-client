<template>
  <div>
    <group-form
      v-if="selectedGroup && getRegions"
      titleForm="Editar Grupo"
      titleButton="Editar Grupo"
      :group="selectedGroup"
      :regions="getRegions"
      :submitForm="submitGroup"
    />
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
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
    ...mapGetters("groups", ["getRegions"]),
    selectedGroup(){
      return _.cloneDeep(this.group);
    }
  },
  methods: {
    ...mapActions("groups", ["fetchGroup", "fetchRegions", "updateGroup"]),
    async submitGroup(){
      console.log(this.selectedGroup);
      const formData = new FormData();
      formData.append("group[name]", this.selectedGroup.name);
      formData.append("group[description]", this.selectedGroup.description);
      formData.append("group[address]", this.selectedGroup.address);

      const response = await this.updateGroup({slug: this.selectedGroup.slug, data: formData});
      if (response.status == "ok") {
        this.$router.push('/grupos')
      }
    },
  },
  created() {
    this.fetchGroup(this.$route.params.slug);
    this.fetchRegions();
  },
}
</script>