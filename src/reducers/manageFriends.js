export function manageFriends(state, action){
  // action = {
  //   type: "ADD_FRIEND",
  //   friend: "Chrome Boi"
  // }

  switch (action.type) {
    case 'ADD_FRIEND':
      return {...state, friends: state.friends.concat(action.friend)}

     case 'REMOVE_FRIEND':
      return {...state, friends: state.friends.filter((friend)=> friend.id !== action.id )}

    default:
      return state;
  }


}
