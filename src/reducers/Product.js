import { assign } from 'lodash';

import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_ERROR,
  FETCH_PRODUCT_SUCCESS
} from '~/src/constants/actionTypes';

const initialState = {
  isFetching: false,
  isError: false,
  error: null,
  entry: null
};

 export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCT_REQUEST:
      return assign({}, initialState, { isFetching: true });
    case FETCH_PRODUCT_ERROR:
      return assign({}, initialState, { isError: true, error: action.error });
    case FETCH_PRODUCT_SUCCESS:
      return assign({}, initialState, { entry: action.response.body });
    default:
      return state;
  }
}
