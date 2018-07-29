import React, { Component, Fragment } from 'react';

import CardContext from '../components/CardContext';
import Button from './elements/Button';

class Basket extends Component {
  render() {
    return (
      <CardContext.Consumer>
        {
          card => {
            const title = `Выбрано заказов: ${card.orderedProducts.length}`;
            
            return (
              <Button title={title} />
            )
          }
        }
      </CardContext.Consumer>
    );
  }
}

export default Basket;
