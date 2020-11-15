// Imports
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// App Imports
import authors from './api/state';

const rootReducer = combineReducers({
  ...authors,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger)),
);
