// App Imports
import search from '../searchState';
import {
  AUTHORS_UPDATE_SEARCH,
  POSTS_UPDATE_SEARCH,
} from '../../actions/types';

const data = {
  authors: 'authors',
  posts: 'posts',
};

const testState = {
  init: {
    authors: '',
    posts: '',
  },
  withAuthors: {
    authors: data.authors,
    posts: '',
  },
  withPosts: {
    authors: '',
    posts: data.posts,
  },
};

describe('searchState', () => {
  it('should return the initial state', () => {
    expect(search(undefined, {})).toEqual(testState.init);
  });

  it('AUTHORS_UPDATE_SEARCH', () => {
    expect(
      search(testState.init, {
        type: AUTHORS_UPDATE_SEARCH,
        value: data.authors,
      }),
    ).toEqual(testState.withAuthors);
  });

  it('POSTS_UPDATE_SEARCH', () => {
    expect(
      search(testState.init, {
        type: POSTS_UPDATE_SEARCH,
        value: data.posts,
      }),
    ).toEqual(testState.withPosts);
  });
});
