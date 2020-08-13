export async function fetchRegions({ commit }) {
  try {
    const { data } = await this.$axios.get('regions');
    commit("setRegions", data.regions);
  } catch (e) {
    commit("groupsError", e.message);
  } finally {}
}

export async function createGroup({ commit }, group) {
  try {
    const { data } = await this.$axios.post('groups', group);
    return data;
  } catch (e) {
    commit("groupsError", e.message);
  } finally {}
}