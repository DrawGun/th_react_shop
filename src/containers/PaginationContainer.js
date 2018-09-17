import { connect } from 'react-redux';

import { fetchProducts } from '~/src/actions/Products';

import Pagination from '~/src/components/elements/Pagination';

const stateToProps = (state) => ({
  items: state.products.entries,
  maxProducts: state.products.maxProducts,
  step: state.products.step,
  page: state.products.page
});

const actionsToProps = (dispatch) => ({
  fetchProducts: (page) => dispatch(fetchProducts({ page }))
});

export default connect(stateToProps, actionsToProps)(Pagination);
