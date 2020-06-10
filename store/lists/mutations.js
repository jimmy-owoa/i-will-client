export function setLists(state, lists) {
  state.lists = lists;
}

export function setList(state, list) {
  list.tasks.sort((a,b) => a.selected_task - b.selected_task);
  state.selectedList = list;
}

export function listsError(state, payload) {
  state.error = true;
  state.errorMessage = payload;
  state.lists = [];
}