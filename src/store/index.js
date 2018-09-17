import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import localStorageMiddleware from '~/src/middleware/localStorageMiddleware';
import reducers from '~/src/reducers';

import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [thunk, localStorageMiddleware];

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(...middleware)
  )
);

export default store;
