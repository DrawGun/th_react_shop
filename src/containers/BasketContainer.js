import { connect } from 'react-redux';

import { setMessage } from '~/src/actions/Basket';
import Basket from '~/src/components/basket/Basket';

const stateToProps = (state) => ({
  items: state.basket.entries,
  message: state.basket.message
});

const actionsToProps = (dispatch) => ({
  setMessage: (message) => dispatch(setMessage(message))
});

export default connect(stateToProps, actionsToProps)(Basket);
