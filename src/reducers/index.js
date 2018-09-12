import { combineReducers } from 'redux';
import products from './Products';
import product from './Product';
import basket from './Basket';
import gallery from './Gallery';
import image from './Image';

export default combineReducers({
  products,
  product,
  basket,
  gallery,
  image
});
