export function setEvents(state, lists) {
  state.lists = lists;
}

export function eventsError(state, payload) {
  state.error = true;
  state.errorMessage = payload;
  state.events = [];
}
