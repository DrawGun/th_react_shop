import React, { Component } from 'react';

import CartContext from '../components/CartContext';

import Button from './elements/Button';

class AddToBasket extends Component {
  render() {
    const { product } = this.props;

    return (
      <CartContext.Consumer>
        {
          card => {
            return (
              <Button onClick={() => card.addToBasket(product)}>
                {'Добавить в корзину'}
              </Button>
            )
          }
        }
      </CartContext.Consumer>
    );
  }
}

export default AddToBasket;
