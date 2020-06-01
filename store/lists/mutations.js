export function setLists(state, lists) {
  state.lists = lists;
}

export function listsError(state, payload) {
  state.error = true;
  state.errorMessage = payload;
  state.lists = [];
}
