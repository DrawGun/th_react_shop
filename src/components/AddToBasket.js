import React, { Component } from 'react';

import CardContext from '../components/CardContext';

import Button from './elements/Button';

class AddToBasket extends Component {
  render() {
    const { product } = this.props;

    return (
      <CardContext.Consumer>
        {
          card => {
            return (
              <Button onClick={() => card.addToBasket(product)}>
                {'Добавить в корзину'}
              </Button>
            )
          }
        }
      </CardContext.Consumer>
    );
  }
}

export default AddToBasket;
