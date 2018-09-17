import { connect } from 'react-redux';

import { setMessage } from '~/src/actions/Basket';
import Basket from '~/src/components/basket/Basket';

const stateToProps = (state) => ({
  entries: state.basket.entries,
  message: state.basket.message
});

const actionsToProps = (dispatch) => ({
  setMessage: (message) => dispatch(setMessage(message)),
});

export default connect(stateToProps, actionsToProps)(Basket);
