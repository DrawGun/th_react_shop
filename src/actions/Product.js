import { API_CALL } from '~/src/middleware/API';
import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_ERROR
} from '~/src/constants/actionTypes';

export const fetchProduct = (id) => ({
  [API_CALL]: {
    endpoint: `/products/${id}`,
    method: 'GET',
    types: [
      FETCH_PRODUCT_REQUEST,
      FETCH_PRODUCT_SUCCESS,
      FETCH_PRODUCT_ERROR
    ]
  }
});
