import { connect } from 'react-redux';

import BasketButton from '~/src/components/basket/BasketButton';

const stateToProps = (state) => ({
  items: state.basket.entries
});

export default connect(stateToProps)(BasketButton);
