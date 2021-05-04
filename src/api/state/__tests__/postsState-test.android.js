// App Imports
import posts from '../postsState';
import { SET_POST_LIST } from '../../actions/types';

const messages = [
  {
    id: 1,
    userId: 1,
    title: 'Johny',
    body: 'Good Morning',
  },
];

const testState = {
  init: {
    posts: [],
  },
  withPosts: {
    posts: messages,
  },
};

describe('postsState', () => {
  it('should return the initial state', () => {
    expect(posts(undefined, {})).toEqual(testState.init);
  });

  it('SET_POST_LIST', () => {
    expect(
      posts(testState.init, {
        type: SET_POST_LIST,
        messages,
      }),
    ).toEqual(testState.withPosts);
  });
});
