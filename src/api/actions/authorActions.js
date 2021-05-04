// Imports
import axios from 'axios';

// App Imports
import { API_URL, page, limit } from '../../config/env';
import { LIST_DONE, LIST_REQUEST, LIST_RESPONSE } from './types';
import { getPosts } from './postsActions';

export default function getAuthorsList(isLoading = true) {
  return async (dispatch) => {
    dispatch({
      type: LIST_REQUEST,
      isLoading,
    });

    try {
      const { data } = await axios.get(
        `${API_URL}/users?_limit=${limit}&_page=${page}`,
      );
      const postsData = await getPosts();
      const newAuthors = data.map((author) => {
        return {
          id: author.id,
          name: author.name,
          email: author.email,
          messages: postsData.find((p) => p.userId === author.id).messages,
        };
      });
      dispatch({
        type: LIST_RESPONSE,
        list: newAuthors,
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
