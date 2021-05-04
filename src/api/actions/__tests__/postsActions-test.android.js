// Imports
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

// App Imports
import { SET_POST_LIST } from '../types';
import { setPostList } from '../postsActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const initialState = {
  posts: [],
};

const messages = [
  {
    id: 1,
    title: 'Johny',
    body: 'Good Morning',
  },
];

describe('postsActions', () => {
  let store;
  beforeEach(() => {
    store = mockStore(initialState);
  });
  it('setPostList success', () => {
    const expectedAction = [{ type: SET_POST_LIST, messages }];

    store.dispatch(setPostList(messages));
    expect(store.getActions()).toEqual(expectedAction);
  });
});
