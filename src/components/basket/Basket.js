import React, { Component, Fragment } from 'react';

import { Redirect } from 'react-router'

import BasketContent from './BasketContent';

import { rootPath } from '~/src/helpers/routes/common';

class Basket extends Component {
  componentDidMount() {
    this.checkProducts(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.checkProducts(nextProps);
  }

  checkProducts(props) {
    const { entries: products, setMessage } = props;
    if (products.length === 0) {
      setMessage("В корзине ничего нет");
    }
  }

  render() {
    const { entries: products } = this.props;
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
