import { connect } from 'react-redux';

import { fetchProduct } from '~/src/actions/Product';
import { pushToBasket } from '~/src/actions/Basket';

import Product from '~/src/components/products/Product';

const stateToProps = (state) => ({
  item: state.product.entry,
  isFetching: state.product.isFetching,
  error: state.product.error
});

const actionsToProps = (dispatch) => ({
  fetchProduct: (id) => dispatch(fetchProduct(id)),
  pushToBasket: (product, count) => dispatch(pushToBasket(product, count))
});

export default connect(stateToProps, actionsToProps)(Product);
