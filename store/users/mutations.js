export function setCurrentUser(state, user) {
  state.currentUser = user;
}

export function usersError(state, payload) {
  state.error = true;
  state.errorMessage = payload;
}