import { connect } from 'react-redux';

import Product from '~/src/components/products/Product';

const stateToProps = (state) => ({
  item: state.product.entry,
  isFetching: state.product.isFetching,
  error: state.product.error
});

export default connect(stateToProps)(Product);
