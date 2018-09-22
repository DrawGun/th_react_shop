import { assign } from 'lodash';

import {
  FETCH_IMAGE_REQUEST,
  FETCH_IMAGE_ERROR,
  FETCH_IMAGE_SUCCESS
} from '~/src/constants/actionTypes';

const initialState = {
  isFetching: false,
  isError: false,
  error: null,
  entry: null
};

 export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_IMAGE_REQUEST:
      return assign({}, initialState, { isFetching: true });
    case FETCH_IMAGE_ERROR:
      return assign({}, initialState, { isError: true, error: action.error });
    case FETCH_IMAGE_SUCCESS:
      return assign({}, initialState, { entry: action.response.body });
    default:
      return state;
  }
}
