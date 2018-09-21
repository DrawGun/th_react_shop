import { initBasket } from '~/src/actions/Basket';
import { loadState, saveState } from '~/src/helpers/basketPersistence';

import { includes } from 'lodash';

import { 
  DELETE_FROM_BASKET, 
  CLEAR_BASKET,
  SET_MESSAGE 
} from '~/src/constants/actionTypes';

const isExceptionAction = (actionType) => (
  includes([DELETE_FROM_BASKET, CLEAR_BASKET, SET_MESSAGE], actionType)
);

const localStorageMiddleware = store => next => action => {
  const result = next(action);
  const nextState = store.getState();

  const { basket: { entries: products } } = nextState;
  const basketProducts = loadState();
  const { type: actionType } = action;
  
  if (!products.length && basketProducts.length && !isExceptionAction(actionType)) {
    store.dispatch(initBasket(basketProducts));
  } else if (products.length != basketProducts.length) {
    saveState(products);
  }

  return result;
}

export default localStorageMiddleware;
