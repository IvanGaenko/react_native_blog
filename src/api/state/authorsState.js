// App Imports
import {
  LIST_DONE,
  LIST_REQUEST,
  LIST_RESPONSE,
  AUTHOR_REQUEST,
  AUTHOR_RESPONSE,
  AUTHOR_DONE,
} from '../actions/types';

// Authors

// Initial State
const authorsInitialState = {
  isLoading: false,
  list: [],
  // author: {},
};

// State
export default (state = authorsInitialState, action) => {
  switch (action.type) {
    case LIST_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case LIST_RESPONSE:
      return {
        ...state,
        list: action.list,
      };

    case LIST_DONE:
      return {
        ...state,
        isLoading: false,
      };

    case AUTHOR_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case AUTHOR_RESPONSE:
      return {
        ...state,
        author: action.author,
      };

    case AUTHOR_DONE:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
