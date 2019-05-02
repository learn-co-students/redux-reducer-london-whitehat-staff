export function manageFriends(state, action) {
  switch (action.type) {
    case 'ADD_FRIEND':
      state.friends.push(action.friend);
      return state;
    case 'REMOVE_FRIEND':
      const index = state.friends.findIndex(obj => obj.id === action.id);
      const newState = [
      ...state.friends.slice(0, index),
      ...state.friends.slice(index + 1),
    ];
      return {friends: newState};

    default:
      return state;
  }
}
