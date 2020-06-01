export async function fetchLists({ commit }) {
  try {
    const { data } = await this.$axios.get('lists');
    commit("setLists", data);
  } catch (e) {
    commit("listsError", e.message);
  } finally {}
}

export async function addList({ commit }, list) {
  console.log(list)
  try {
    const { data } = await this.$axios.post('lists', list);
  } catch (e) {
    commit("listsError", e.message);
  } finally {}
}