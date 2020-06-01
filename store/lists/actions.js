export async function fetchLists({ commit }) {
  try {
    const { data } = await this.$axios.get('lists');
    commit("setLists", data);
  } catch (e) {
    commit("listsError", e.message);
  } finally {}
}