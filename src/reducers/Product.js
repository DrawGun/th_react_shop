import { assign } from 'lodash';

import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_ERROR,
  FETCH_PRODUCT_SUCCESS
} from '~src/constants/actionTypes';

const initialState = {
  isFetching: false,
  error: false,
  entry: null
};

 export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCT_REQUEST:
      return assign({}, state, { isFetching: true });
    case FETCH_PRODUCT_ERROR:
      return assign({}, state, { error: true, isFetching: false });
    case FETCH_PRODUCT_SUCCESS:
      return assign({}, state, { 
        entry: action.response, 
        isFetching: false, 
        error: false 
      });
    default:
      return state;
  }
}
