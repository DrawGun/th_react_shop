import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import localStorageMiddleware from '~/src/middleware/localStorageMiddleware';
import API from '~/src/middleware/API';
import reducers from '~/src/reducers';

import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [thunk, API, localStorageMiddleware];

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(...middleware)
  )
);

export default store;
