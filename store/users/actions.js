export async function fetchCurrentUser({ commit }) {
  try {
    const { data } = await this.$axios.get('current_user');
    commit("setCurrentUser", data);
  } catch (e) {
    commit("usersError", e.message);
  } finally {}
}