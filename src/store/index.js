import { createStore, applyMiddleware, compose } from 'redux';

import localStorageMiddleware from '~/src/middleware/localStorageMiddleware';
import API from '~/src/middleware/API';
import reducers from '~/src/reducers';

import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [API, localStorageMiddleware];

let store;

if (__SERVER__) {
  store = createStore(
    reducers,
    compose(
      applyMiddleware(...middleware)
    )
  );
} else {
  store = createStore(
    reducers,
    window.__INITIAL_STATE__,
    composeWithDevTools(
      applyMiddleware(...middleware)
    )
  );

  delete window.__INITIAL_STATE__;
}

export default store;
