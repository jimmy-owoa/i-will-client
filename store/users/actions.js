export async function fetchCurrentUser({ commit }) {
  try {
    const { data } = await this.$axios.get('current_user');
    commit("setCurrentUser", data);
  } catch (e) {
    commit("usersError", e.message);
  } finally {}
}

export async function createUser({ commit }, user) {
  console.log(user);
  try {
    const { data } = await this.$axios.post('users', user);
    if (data.status == "ok") {
      commit("setSignupSuccess", data);
    }
  } catch (e) {
    commit("usersError", e.message);
  } finally {}
}