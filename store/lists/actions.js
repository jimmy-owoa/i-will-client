export async function fetchLists({ commit }) {
  try {
    const { data } = await this.$axios.get('lists');
    commit("setLists", data);
  } catch (e) {
    commit("listsError", e.message);
  } finally {}
}

export async function fetchList({ commit }, slug) {
  try {
    const { data } = await this.$axios.get(`lists/${slug}`);
    commit("setList", data);
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

export async function updateList({ commit }, list) {
  console.log(list)
  try {
    const { data } = await this.$axios.put(`lists/${list.slug}`, list.data);
  } catch (e) {
    commit("listsError", e.message);
  } finally {}
}