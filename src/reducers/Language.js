import {
  SET_LANGUAGE
} from '~/src/constants/actionTypes';

const initialState = {
  language: 'ru'
};

 export default function(state = initialState, action) {
  switch (action.type) {
    case SET_LANGUAGE:
      return { language: action.language };
    default:
      return state;
  }
}
