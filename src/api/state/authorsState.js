// App Imports
import { LIST_DONE, LIST_REQUEST, LIST_RESPONSE } from '../actions/types';

// Authors

// Initial State
const authorsInitialState = {
  isLoading: false,
  list: [],
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

    default:
      return state;
  }
};
