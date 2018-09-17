import { API_CALL } from '~/src/middleware/API';
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR
} from '~/src/constants/actionTypes';

export const fetchProducts = ({ page, step, query }) => ({
  [API_CALL]: {
    endpoint: '/products',
    method: 'GET',
    query: { page, step, query },
    types: [
      FETCH_PRODUCTS_REQUEST,
      FETCH_PRODUCTS_SUCCESS,
      FETCH_PRODUCTS_ERROR
    ]
  }
});
