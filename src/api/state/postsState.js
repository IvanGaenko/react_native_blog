// App Imports
import {
  POSTS_REQUEST,
  POSTS_RESPONSE,
  POSTS_DONE,
  POST_REQUEST,
  POST_RESPONSE,
  POST_DONE,
  GET_EXISTED_POSTS,
} from '../actions/types';

// Posts

// Initial State
const postsInitialState = {
  postsIsLoading: false,
  posts: [],
  post: [],
};

// State
export default (state = postsInitialState, action) => {
  switch (action.type) {
    case POSTS_REQUEST:
      return {
        ...state,
        postsIsLoading: action.isLoading,
      };

    case POSTS_RESPONSE:
      return {
        ...state,
        posts: action.posts,
      };

    case POSTS_DONE:
      return {
        ...state,
        postsIsLoading: false,
      };

    case POST_REQUEST:
      return {
        ...state,
        postsIsLoading: action.isLoading,
      };

    case POST_RESPONSE:
      return {
        ...state,
        post: action.post,
      };

    case POST_DONE:
      return {
        ...state,
        postsIsLoading: false,
      };

    case GET_EXISTED_POSTS:
      return {
        ...state,
        post: state.posts.filter((p) => p.userId === action.id),
      };

    default:
      return state;
  }
};
