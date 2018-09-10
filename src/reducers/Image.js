import { assign } from 'lodash';

import {
  FETCH_IMAGE_REQUEST,
  FETCH_IMAGE_ERROR,
  FETCH_IMAGE_SUCCESS
} from '~src/constants/actionTypes';

const initialState = {
  isFetching: false,
  error: false,
  entry: null
};

 export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_IMAGE_REQUEST:
      return assign({}, state, { isFetching: true });
    case FETCH_IMAGE_ERROR:
      return assign({}, state, { error: true, isFetching: false });
    case FETCH_IMAGE_SUCCESS:
      return assign({}, state, { 
        entry: action.response, 
        isFetching: false, 
        error: false 
      });
    default:
      return state;
  }
}
