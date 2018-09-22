import { connect } from 'react-redux';

import BasketProduct from '~/src/components/basket/BasketProduct';
import { deleteFromBasket } from '~/src/actions/Basket';

const stateToProps = (state, ownProps) => ({
  product: ownProps.product
});

const actionsToProps = (dispatch) => ({
  deleteFromBasket: (product) => dispatch(deleteFromBasket(product)),
});

export default connect(stateToProps, actionsToProps)(BasketProduct);
