import {
  PUSH_TO_BASKET,
  SET_MESSAGE,
  CLEAR_MESSAGE,
  INIT_BASKET,
  DELETE_FROM_BASKET
} from '~/src/constants/actionTypes';

export const pushToBasket = (product, count) => ({
  type: PUSH_TO_BASKET,
  product,
  count
});

export const setMessage = (message) => ({
  type: SET_MESSAGE,
  message
});

export const clearMessage = () => ({
  type: CLEAR_MESSAGE
});

export const deleteFromBasket = (product) => ({
  type: DELETE_FROM_BASKET,
  product
});

export const initBasket = (products) => ({
  type: INIT_BASKET,
  products
});
