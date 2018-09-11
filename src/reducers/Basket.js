import { assign, times, constant } from 'lodash';

import {
  PUSH_TO_BASKET,
  SET_MESSAGE,
  CLEAR_MESSAGE
} from '~src/constants/actionTypes';

const initialState = {
  message: null,
  entries: []
};

 export default function(state = initialState, action) {
  switch (action.type) {
    case PUSH_TO_BASKET:
      const products = times(action.count, constant(action.product));
      const entries = [...state.entries, ...products];

      return assign({}, state, { entries });
    case SET_MESSAGE:
      return assign({}, state, { message: action.message });
    case CLEAR_MESSAGE:
      return assign({}, state, { message: null });
    default:
      return state;
  }
}
