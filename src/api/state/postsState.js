// App Imports
import { SET_POST_LIST } from '../actions/types';

// Posts

// Initial State
const postsInitialState = {
  posts: [],
};

// State
export default (state = postsInitialState, action) => {
  switch (action.type) {
    case SET_POST_LIST:
      return {
        ...state,
        posts: action.messages,
      };
    default:
      return state;
  }
};
