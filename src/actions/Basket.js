import {
  PUSH_TO_BASKET,
  SET_MESSAGE,
  CLEAR_MESSAGE
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
