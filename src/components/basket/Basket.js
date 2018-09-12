import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router'

import BasketContent from './BasketContent';

import { rootPath } from '~/src/helpers/routes/common';

class Basket extends Component {
  componentDidMount() {
    const { items: products, setMessage } = this.props;
    if (products.length === 0) {
      setMessage("В корзине ничего нет");
    }
  }

  render() {
    const { items: products } = this.props;
    return (
      <Fragment>
        {
          products.length ? (
            <BasketContent products={products} />
          ) : (
            <Redirect
              to={rootPath()}
            />
          )
        }
      </Fragment>
    );
  }
}

export default Basket;
