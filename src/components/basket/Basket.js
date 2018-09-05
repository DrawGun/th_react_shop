import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router'

import CartContext from '~/src/helpers/CartContext';
import BasketContent from './BasketContent';

import { rootPath } from '~/src/helpers/routes/common';

class Basket extends Component {
  render() {
    return (
      <CartContext.Consumer>
        {
          card => {
            const { basket: products }  = card;

            return (
              <Fragment>
                {
                  products.length ? (
                    <BasketContent products={card.basket} />
                  ) : (
                    <Redirect
                      to={{
                        pathname: rootPath(),
                        state: { message: "В корзине ничего нет" }
                      }}
                    />
                  )
                }
              </Fragment>
            )
          }
        }
      </CartContext.Consumer>
    );
  }
}

export default Basket;
