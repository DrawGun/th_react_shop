import {
  PUSH_TO_BASKET,
  SET_MASSAGE,
  CLEAR_MASSAGE
} from '~/src/constants/actionTypes';

export const pushToBasket = (product, count) => ({
  type: PUSH_TO_BASKET,
  product,
  count
});

export const setMessage = (message) => ({
  type: SET_MASSAGE,
  message
});

export const clearMessage = () => ({
  type: CLEAR_MASSAGE
});
