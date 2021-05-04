// Imports
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

// App Imports
import { AUTHORS_UPDATE_SEARCH, POSTS_UPDATE_SEARCH } from '../types';
import { authorsUpdateSearch, postsUpdateSearch } from '../searchActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const initialState = {
  authors: '',
  posts: '',
};

const data = 'Hello';

describe('searchActions', () => {
  let store;
  beforeEach(() => {
    store = mockStore(initialState);
  });
  it('authorsUpdateSearch', () => {
    const expectedPayload = [{ type: AUTHORS_UPDATE_SEARCH, value: data }];

    store.dispatch(authorsUpdateSearch(data));
    expect(store.getActions()).toEqual(expectedPayload);
  });

  it('postsUpdateSearch', () => {
    const expectedPayload = [{ type: POSTS_UPDATE_SEARCH, value: data }];

    store.dispatch(postsUpdateSearch(data));
    expect(store.getActions()).toEqual(expectedPayload);
  });
});
