export async function fetchTaskTypes({ commit }) {
  try {
    const { data } = await this.$axios.get(`task_types`);
    commit("setTaskTypes", data);
  } catch (e) {
    commit("tasksError", e.message);
  } finally {}
}

export async function fetchMeasureUnits({ commit }) {
  try {
    const { data } = await this.$axios.get(`measure_units`);
    commit("setMeasureUnits", data);
  } catch (e) {
    commit("tasksError", e.message);
  } finally {}
}