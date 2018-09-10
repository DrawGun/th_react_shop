import request from 'superagent';
import { camelizeKeys } from 'humps';

import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_ERROR
} from '~/src/constants/actionTypes';

import { API_V1_PATH, API_PRODUCTS_PATH } from '~/src/helpers/routes/api';
import jsonapi from 'jsonapi-parse';

const PRODUCTS_URL = `${API_V1_PATH}${API_PRODUCTS_PATH}`;

const requestProduct = () => ({
  type: FETCH_PRODUCT_REQUEST
});

const errorProduct = () => ({
  type: FETCH_PRODUCT_ERROR
});

const reciveProduct = (response) => ({
  type: FETCH_PRODUCT_SUCCESS,
  response
});

export function fetchProduct(id) {
  return (dispatch) => {
    dispatch(requestProduct());

    return request
      .get(`${PRODUCTS_URL}/${id}`)
      .end((err, { body }) => {
        const { data } = jsonapi.parse(body);
        const product = camelizeKeys(data);

        err ?
          dispatch(errorProduct()) :
          dispatch(reciveProduct(product));
      });
  };
}
