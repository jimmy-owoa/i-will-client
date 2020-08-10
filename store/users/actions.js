export async function fetchCurrentUser({ commit }) {
  try {
    const { data } = await this.$axios.get('current_user');
    commit("setCurrentUser", data);
  } catch (e) {
    commit("usersError", e.message);
  } finally {}
}

export async function registerUser({ commit }, user) {
  try {
    const { data } = await this.$axios.post('users', user);
    return data;
  } catch (e) {
    commit("usersError", e.message);
  } finally {}
}