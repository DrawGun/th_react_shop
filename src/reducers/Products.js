import { assign } from 'lodash';

import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCTS_SUCCESS
} from '~/src/constants/actionTypes';

const initialState = {
  isFetching: false,
  isError: false,
  error: null,
  query: null,
  maxProducts: 0,
  step: 3,
  page: 1,
  entries: []
};

 export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return assign({}, initialState, { isFetching: true });
    case FETCH_PRODUCTS_ERROR:
      return assign({}, initialState, { isError: true, error: action.error });
    case FETCH_PRODUCTS_SUCCESS:
      const { response } = action;

      return assign({}, initialState, {
        entries: response.body,
        maxProducts: parseInt(response.headers['x-total']),
        page: parseInt(response.headers['x-page']),
        step: parseInt(response.headers['x-per-page']),
        query: response.query.query
      });
    default:
      return state;
  }
}
