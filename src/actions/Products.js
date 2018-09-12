import request from 'superagent';
import { camelizeKeys } from 'humps';

import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR
} from '~/src/constants/actionTypes';

import { API_V1_PATH } from '~/src/helpers/routes/api';
import jsonapi from 'jsonapi-parse';

const PRODUCTS_URL = `${API_V1_PATH}/products`;

const requestProducts = () => ({
  type: FETCH_PRODUCTS_REQUEST
});

const errorProducts = () => ({
  type: FETCH_PRODUCTS_ERROR
});

const receiveProducts = (response) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  response
});

export function fetchProducts() {
  return (dispatch) => {
    dispatch(requestProducts());

    return request
      .get(PRODUCTS_URL)
      .end((err, { body }) => {
        const { data } = jsonapi.parse(body);
        const products = camelizeKeys(data);

        err ?
          dispatch(errorProducts()) :
          dispatch(receiveProducts(products));
      });
  };
}
