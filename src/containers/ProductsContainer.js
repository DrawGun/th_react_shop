import { connect } from 'react-redux';

import { fetchProducts } from '~/src/actions/Products';
import { clearMessage } from '~/src/actions/Basket';

import Catalog from '~/src/components/products/Catalog';

const stateToProps = (state) => ({
  items: state.products.entries,
  isFetching: state.products.isFetching,
  error: state.products.error,
  message: state.basket.message,
  maxProducts: state.products.maxProducts,
  page: state.products.page,
  step: state.products.step,
  query: state.products.query
});

const actionsToProps = (dispatch) => ({
  fetchProducts: (props) => dispatch(fetchProducts(props)),
  clearMessage: () => dispatch(clearMessage())
});

export default connect(stateToProps, actionsToProps)(Catalog);
