import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { find, concat } from 'lodash';

import { products } from '../constants/Products';

import CardContext from '../components/CardContext';
import Catalog from '../components/Catalog';

class CatalogPage extends Component {
  constructor(props) {
    super(props);
    this.state = { orderedProducts: [] };

    this.orderProduct = this.orderProduct.bind(this);
  }

  orderProduct(productId) {
    const product = find(products, (product) => (product.id == productId));
    const orderedProducts = concat(this.state.orderedProducts, product);

    return(  
      this.setState({
        orderedProducts
      })
    );
  };

  render() {
    const { orderedProducts } = this.state;
    const contextObj = {
      orderedProducts,
      orderProduct: this.orderProduct
    };

    return (
      <CardContext.Provider value={contextObj} >
        <Catalog products={ products } />
      </CardContext.Provider>
    );
  }
}

export default CatalogPage;
