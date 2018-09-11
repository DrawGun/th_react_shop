import { connect } from 'react-redux';

import { find } from 'lodash';

import AddToBasket from '~/src/components/products/AddToBasket';

import { pushToBasket } from '~/src/actions/Basket';

const stateToProps = (state, ownProps) => ({
  item: find(state.products.entries, (product) => product.id === ownProps.productId)
});

const actionsToProps = (dispatch) => ({
  pushToBasket: (product, count) => dispatch(pushToBasket(product, count))
});

export default connect(stateToProps, actionsToProps)(AddToBasket);
