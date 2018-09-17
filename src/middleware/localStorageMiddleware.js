import { initBasket } from '~/src/actions/Basket';
import { loadState, saveState } from '~/src/helpers/basketPersistence';

import { DELETE_FROM_BASKET } from '~/src/constants/actionTypes';

const localStorageMiddleware = store => next => action => {
  const result = next(action);
  const nextState = store.getState();

  const { basket: { entries: products } } = nextState;
  const basketProducts = loadState();
  const { type: actionType } = action;

  if (!products.length && basketProducts.length && actionType != DELETE_FROM_BASKET) {
    store.dispatch(initBasket(basketProducts));
  } else if (products.length != basketProducts.length) {
    saveState(products);
  }

  return result;
}

export default localStorageMiddleware;
