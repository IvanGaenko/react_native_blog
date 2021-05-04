// Imports
import axios from 'axios';

// App Imports
import { API_URL } from '../../config/env';
import { SET_POST_LIST } from './types';

function mergePosts(posts) {
  const arrData = [];
  posts.forEach((post) => {
    const existed = arrData.find((p) => p.userId === post.userId);
    if (existed) {
      existed.messages.push({
        id: post.id,
        title: post.title,
        body: post.body,
      });
    } else {
      arrData.push({
        userId: post.userId,
        messages: [
          {
            id: post.id,
            title: post.title,
            body: post.body,
          },
        ],
      });
    }
  });
  return arrData;
}

export async function getPosts() {
  const { data } = await axios.get(`${API_URL}/posts`);
  const newData = data.map((post) => {
    return {
      ...post,
      body: post.body.replace(/\n/g, ' '),
    };
  });
  return mergePosts(newData);
}

export function setPostList(messages) {
  return (dispatch) => {
    dispatch({
      type: SET_POST_LIST,
      messages,
    });
  };
}
