import { assign } from 'lodash';

import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCTS_SUCCESS
} from '~/src/constants/actionTypes';

const initialState = {
  isFetching: false,
  error: false,
  entries: []
};

 export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return assign({}, state, { isFetching: true });
    case FETCH_PRODUCTS_ERROR:
      return assign({}, state, { error: true });
    case FETCH_PRODUCTS_SUCCESS:
      return assign({}, state, {
        entries: action.response,
        isFetching: false
      });
    default:
      return state;
  }
}
