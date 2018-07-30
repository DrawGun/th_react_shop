import React, { Component, Fragment } from 'react';

import CartContext from '../components/CartContext';
import Button from './elements/Button';

class Basket extends Component {
  render() {
    return (
      <CartContext.Consumer>
        {
          card => {
            const title = `Выбрано заказов: ${card.basket.length}`;
            
            return (
              <Button>
                {title}
              </Button>
            )
          }
        }
      </CartContext.Consumer>
    );
  }
}

export default Basket;
