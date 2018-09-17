import { assign } from 'lodash';

import {
  FETCH_IMAGES_REQUEST,
  FETCH_IMAGES_ERROR,
  FETCH_IMAGES_SUCCESS
} from '~/src/constants/actionTypes';

const initialState = {
  isFetching: false,
  isError: false,
  error: null,
  entries: []
};

 export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_IMAGES_REQUEST:
      return assign({}, initialState, { isFetching: true });
    case FETCH_IMAGES_ERROR:
      return assign({}, initialState, { isError: true, error: action.error });
    case FETCH_IMAGES_SUCCESS:
      return assign({}, initialState, { entries: action.response.body });
    default:
      return state;
  }
}
