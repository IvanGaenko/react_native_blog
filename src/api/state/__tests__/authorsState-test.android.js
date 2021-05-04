// App Imports
import authors from '../authorsState';
import { LIST_DONE, LIST_REQUEST, LIST_RESPONSE } from '../../actions/types';

const data = [
  {
    id: 1,
    name: 'Johny',
    email: 'johny@gmail.com',
  },
];

const testState = {
  init: {
    isLoading: false,
    list: [],
  },
  initLoading: {
    isLoading: true,
    list: [],
  },
  withList: {
    isLoading: true,
    list: data,
  },
  listDone: {
    isLoading: false,
    list: data,
  },
};

describe('authorsState', () => {
  it('should return the initial state', () => {
    expect(authors(undefined, {})).toEqual(testState.init);
  });

  it('LIST_REQUEST', () => {
    expect(
      authors(testState.init, {
        type: LIST_REQUEST,
        isLoading: true,
      }),
    ).toEqual(testState.initLoading);
  });

  it('LIST_RESPONSE', () => {
    expect(
      authors(testState.initLoading, {
        type: LIST_RESPONSE,
        list: data,
      }),
    ).toEqual(testState.withList);
  });

  it('LIST_DONE', () => {
    expect(
      authors(testState.withList, {
        type: LIST_DONE,
        isLoading: false,
      }),
    ).toEqual(testState.listDone);
  });
});
