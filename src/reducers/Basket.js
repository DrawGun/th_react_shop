import { assign, times, constant, remove, clone } from 'lodash';

import {
  PUSH_TO_BASKET,
  SET_MESSAGE,
  CLEAR_MESSAGE,
  INIT_BASKET,
  DELETE_FROM_BASKET,
  CLEAR_BASKET
} from '~src/constants/actionTypes';

const initialState = {
  message: null,
  entries: []
};

 export default function(state = initialState, action) {
  switch (action.type) {
    case PUSH_TO_BASKET:
      const products = times(action.count, constant(action.product));
      let entries = [...state.entries, ...products];

      return assign({}, state, { entries });
    case SET_MESSAGE:
      return assign({}, state, { message: action.message });
    case CLEAR_MESSAGE:
      return assign({}, state, { message: null });
    case INIT_BASKET:   
      return assign({}, initialState, { entries: action.products });
    case DELETE_FROM_BASKET:
      const { product } = action;
      const clonedEntries = clone(state.entries);
      remove(clonedEntries, (e) => e == product);

      return assign({}, state, { entries: clonedEntries });
    case CLEAR_BASKET:
      return initialState;
    default:
      return state;
  }
}
