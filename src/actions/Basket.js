import { API_CALL } from '~/src/middleware/API';

import {
  PUSH_TO_BASKET,
  SET_MESSAGE,
  CLEAR_MESSAGE,
  INIT_BASKET,
  DELETE_FROM_BASKET,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_ERROR,
  CLEAR_BASKET
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

export const clearBasket = () => ({
  type: CLEAR_BASKET
});

export const initBasket = (products) => ({
  type: INIT_BASKET,
  products
});

export const createOrder = ({ values, products }) => ({
  [API_CALL]: {
    endpoint: '/orders',
    method: 'POST',
    payload: { values, products },
    types: [
      CREATE_ORDER_REQUEST,
      CREATE_ORDER_SUCCESS,
      CREATE_ORDER_ERROR
    ]
  }
});
