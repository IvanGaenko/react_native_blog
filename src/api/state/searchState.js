// App Imports
import { AUTHORS_UPDATE_SEARCH, POSTS_UPDATE_SEARCH } from '../actions/types';

// Search

// Initial State
const searchInitialState = {
  authors: '',
  posts: '',
};

// State
export default (state = searchInitialState, action) => {
  switch (action.type) {
    case AUTHORS_UPDATE_SEARCH:
      return {
        ...state,
        authors: action.value,
      };

    case POSTS_UPDATE_SEARCH:
      return {
        ...state,
        posts: action.value,
      };

    default:
      return state;
  }
};
