export async function fetchRegions({ commit }) {
  try {
    const { data } = await this.$axios.get('regions');
    commit("setRegions", data.regions);
  } catch (e) {
    commit("groupsError", e.message);
  } finally { }
}

export async function fetchGroups({ commit }) {
  try {
    const { data } = await this.$axios.get('groups');
    commit("setGroups", data);
  } catch (e) {
    commit("groupsError", e.message);
  } finally { }
}

export async function createGroup({ commit }, group) {
  try {
    const { data } = await this.$axios.post('groups', group);
    return data;
  } catch (e) {
    commit("groupsError", e.message);
  } finally { }
}

export async function fetchGroup({ commit }, slug) {
  try {
    const { data } = await this.$axios.get(`groups/${slug}`);
    commit("setGroup", data.group);
  } catch (e) {
    commit("groupsError", e.message);
  } finally {}
}

export async function updateGroup({commit}, group){
  try {
    const { data } = await this.$axios.put(`groups/${group.slug}`, group.data);
    return data;
  } catch (e) {
    commit("groupsError", e.message);
  } finally {}
}

