// Imports
import axios from 'axios';

// App Imports
import { API_URL } from '../../config/env';
import {
  POSTS_REQUEST,
  POSTS_RESPONSE,
  POSTS_DONE,
  POST_REQUEST,
  POST_RESPONSE,
  POST_DONE,
  GET_EXISTED_POSTS,
} from './types';

export function getPostsList(isLoading = true) {
  return async (dispatch) => {
    dispatch({
      type: POSTS_REQUEST,
      isLoading,
    });

    try {
      const { data } = await axios.get(`${API_URL}/posts`);
      const newData = data.map((post) => {
        return {
          ...post,
          body: post.body.replace(/\n/g, ' '),
        };
      });
      dispatch({
        type: POSTS_RESPONSE,
        posts: newData,
      });
    } catch (error) {
      dispatch({
        type: POSTS_RESPONSE,
        posts: [],
      });
    } finally {
      dispatch({
        type: POSTS_DONE,
        isLoading: false,
      });
    }
  };
}

export function getCurrentPost(_id, isLoading = true) {
  return async (dispatch) => {
    dispatch({
      type: POST_REQUEST,
      isLoading,
    });

    try {
      const { data } = await axios.get(`${API_URL}/posts`, {
        params: {
          userId: _id,
        },
      });

      const newData = data.map((post) => {
        return {
          ...post,
          body: post.body.replace(/\n/g, ' '),
        };
      });
      dispatch({
        type: POST_RESPONSE,
        post: newData,
      });
    } catch (error) {
      dispatch({
        type: POST_RESPONSE,
        post: [],
      });
    } finally {
      dispatch({
        type: POST_DONE,
        isLoading: false,
      });
    }
  };
}

export function getExistedPost(id) {
  return (dispatch) => {
    dispatch({
      type: GET_EXISTED_POSTS,
      id,
    });
  };
}
