// Imports
import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

// App Imports
import { API_URL, page, limit } from '../../../config/env';
import { LIST_DONE, LIST_REQUEST, LIST_RESPONSE } from '../types';
import getAuthorsList from '../authorActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
jest.mock('axios');

const initialState = {
  isLoading: false,
  list: [],
};

const data = [
  {
    id: 1,
    name: 'Johny',
    email: 'johny@gmail.com',
    title: 'Hello',
    body: 'Good morning',
    userId: 1,
  },
];

const expectedData = [
  {
    id: 1,
    name: 'Johny',
    email: 'johny@gmail.com',
    messages: [
      {
        id: 1,
        title: 'Hello',
        body: 'Good morning',
      },
    ],
  },
];

describe('authorActions', () => {
  let store;
  beforeEach(() => {
    store = mockStore(initialState);
  });
  afterEach(() => {
    axios.mockRestore();
  });

  it('getAuthorsList success', () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data }));
    axios.get.mockImplementationOnce(() => Promise.resolve({ data }));

    const expectedActions = [
      { type: LIST_REQUEST, isLoading: true },
      { type: LIST_RESPONSE, list: expectedData },
      { type: LIST_DONE, isLoading: false },
    ];

    return store.dispatch(getAuthorsList()).then(() => {
      expect(axios.get).toHaveBeenCalledWith(
        `${API_URL}/users?_limit=${limit}&_page=${page}`,
      );
      expect(axios.get).toHaveBeenCalledWith(`${API_URL}/posts`);
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('getAuthorsList error', () => {
    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error('Network Error')),
    );
    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error('Network Error')),
    );

    const expectedActions = [
      { type: LIST_REQUEST, isLoading: true },
      { type: LIST_RESPONSE, list: [] },
      { type: LIST_DONE, isLoading: false },
    ];

    return store.dispatch(getAuthorsList()).then(() => {
      expect(axios.get).toHaveBeenCalledWith(
        `${API_URL}/users?_limit=${limit}&_page=${page}`,
      );
      expect(axios.get).toHaveBeenCalledWith(`${API_URL}/posts`);
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
