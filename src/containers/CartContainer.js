import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { times, constant } from 'lodash';

import CartContext from '~/src/helpers/CartContext';

class CartContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { basket: [] };

    this.addToBasket = this.addToBasket.bind(this);
  }

  addToBasket(product, count) {
    const products = times(count, constant(product));
    const basket = [...this.state.basket, ...products];

    return (
      this.setState({
        basket
      })
    );
  };

  render() {
    const { basket } = this.state;
    const { children } = this.props;

    const contextObj = {
      basket,
      addToBasket: this.addToBasket
    };

    return (
      <CartContext.Provider value={contextObj} >
        {children}
      </CartContext.Provider>
    );
  }
}

CartContainer.propTypes = {
  children: PropTypes.node
};

CartContainer.defaultProps = {
  children: null
};

export default CartContainer;
