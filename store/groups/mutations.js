export function setRegions(state, payload) {
  state.regions = payload;
}

export function listsError(state, payload) {
  state.error = true;
  state.errorMessage = payload;
  state.regions = [];
}