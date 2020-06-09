export function setLists(state, lists) {
  state.lists = lists;
}

export function eventsError(state, payload) {
  state.error = true;
  state.errorMessage = payload;
  state.lists = [];
}
