// Imports
import axios from 'axios';

// App Imports
import { API_URL } from '../../config/env';
import {
  LIST_DONE,
  LIST_REQUEST,
  LIST_RESPONSE,
  AUTHOR_REQUEST,
  AUTHOR_RESPONSE,
  AUTHOR_DONE,
} from './types';

export function getAuthorsList(isLoading = true) {
  return async (dispatch) => {
    dispatch({
      type: LIST_REQUEST,
      isLoading,
    });

    try {
      const { data } = await axios.get(`${API_URL}/users`);
      dispatch({
        type: LIST_RESPONSE,
        list: data,
      });
    } catch (error) {
      dispatch({
        type: LIST_RESPONSE,
        list: [],
      });
    } finally {
      dispatch({
        type: LIST_DONE,
        isLoading: false,
      });
    }
  };
}

export function getCurrentAuthor(_id, isLoading = true) {
  return async (dispatch) => {
    dispatch({
      type: AUTHOR_REQUEST,
      isLoading,
    });

    try {
      const { data } = await axios.get(`${API_URL}/users`, {
        params: {
          id: _id,
        },
      });
      dispatch({
        type: AUTHOR_RESPONSE,
        author: data[0],
      });
    } catch (error) {
      dispatch({
        type: AUTHOR_RESPONSE,
        author: [],
      });
    } finally {
      dispatch({
        type: AUTHOR_DONE,
        isLoading: false,
      });
    }
  };
}
