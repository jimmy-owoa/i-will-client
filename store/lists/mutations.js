export function setLists(state, lists) {
  state.lists = lists;
}

export function setList(state, list) {
  state.selectedList = list;
}

export function listsError(state, payload) {
  state.error = true;
  state.errorMessage = payload;
  state.lists = [];
}