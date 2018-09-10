import React, { Component, Fragment } from 'react';

import Button from '~/src/components/elements/Button';

class BasketButton extends Component {
  render() {
    const { items: products } = this.props;
    const title = `Выбрано заказов: ${products.length}`;
    return (
      <Button>
        {title}
      </Button>
    );
  }
}

export default BasketButton;
