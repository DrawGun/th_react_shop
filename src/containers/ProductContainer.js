import { connect } from 'react-redux';

import { fetchProduct } from '~/src/actions/Product';

import Product from '~/src/components/products/Product';

const stateToProps = (state) => ({
  item: state.product.entry,
  isFetching: state.product.isFetching,
  error: state.product.error
});

const actionsToProps = (dispatch) => ({
  fetchProduct: (id) => dispatch(fetchProduct(id))
});

export default connect(stateToProps, actionsToProps)(Product);
