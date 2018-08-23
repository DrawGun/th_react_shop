import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ButtonGroup } from 'reactstrap';

import CartContext from '../../helpers/CartContext';

import Button from '../elements/Button';

class AddToBasket extends Component {
  constructor(props) {
    super(props);

    this.state = { count: 1 };
  }

  changeCount(type) {
    let { count } = this.state;
    if (type === 'increment') {
      count += 1;
    } else if (type === 'decrement' && count > 1) {
      count -= 1;
    }

    this.setState({ count })
  }

  render() {
    const { product } = this.props;
    const { count } = this.state;

    return (
      <CartContext.Consumer>
        {
          card => {
            return (
              <ButtonGroup size='lg'>
                <Button onClick={() => this.changeCount('decrement')}>
                  {'-'}
                </Button>
                <Button onClick={() => card.addToBasket(product, count)}>
                  {`Добавить в корзину: ${count}`}
                </Button>
                <Button onClick={() => this.changeCount('increment')}>
                  {'+'}
                </Button>
              </ButtonGroup>
            )
          }
        }
      </CartContext.Consumer>
    );
  }
}

AddToBasket.propTypes = {
  product: PropTypes.object
};

export default AddToBasket;
