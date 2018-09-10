import { assign } from 'lodash';

import {
  FETCH_IMAGES_REQUEST,
  FETCH_IMAGES_ERROR,
  FETCH_IMAGES_SUCCESS
} from '~/src/constants/actionTypes';

const initialState = {
  isFetching: false,
  error: false,
  entries: []
};

 export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_IMAGES_REQUEST:
      return assign({}, state, { isFetching: true });
    case FETCH_IMAGES_ERROR:
      return assign({}, state, { error: true });
    case FETCH_IMAGES_SUCCESS:
      return assign({}, state, {
        entries: action.response,
        isFetching: false
      });
    default:
      return state;
  }
}
