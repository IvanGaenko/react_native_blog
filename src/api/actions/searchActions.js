// App Imports
import { AUTHORS_UPDATE_SEARCH, POSTS_UPDATE_SEARCH } from './types';

export function authorsUpdateSearch(value) {
  return (dispatch) => {
    dispatch({
      type: AUTHORS_UPDATE_SEARCH,
      value,
    });
  };
}

export function postsUpdateSearch(value) {
  return (dispatch) => {
    dispatch({
      type: POSTS_UPDATE_SEARCH,
      value,
    });
  };
}
