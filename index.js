import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from './reducers';

const initializeStore = (initialState = {}) => {
  return createStore(reducer, initialState, applyMiddleware(thunkMiddleware));
};

export { initializeStore };
