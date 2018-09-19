import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import products from './Products';
import product from './Product';
import basket from './Basket';
import gallery from './Gallery';
import image from './Image';
import language from './Language';

export default combineReducers({
  products,
  product,
  basket,
  gallery,
  image,
  language,
  form: formReducer
});
