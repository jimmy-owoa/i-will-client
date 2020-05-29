export function setEvents(state, events) {
  state.events = events;
}

export function eventsError(state, payload) {
  state.error = true;
  state.errorMessage = payload;
  state.events = [];
}
