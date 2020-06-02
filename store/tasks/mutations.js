export function setTaskTypes(state, taskTypes) {
  state.taskTypes = taskTypes;
}

export function setMeasureUnits(state, measureUnits) {
  state.measureUnits = measureUnits;
}

export function tasksError(state, payload) {
  state.error = true;
  state.errorMessage = payload;
  state.taskTypes = [];
}