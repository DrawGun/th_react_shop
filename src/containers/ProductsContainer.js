import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { products } from '../constants/Products';

import Catalog from '../components/products/Catalog';

class ProductsContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state } = this.props.location;
    const message = state ? state.message : undefined;

    return (
      <Catalog products={products} message={message} />
    );
  }
}

ProductsContainer.propTypes = {
  location: PropTypes.object
};

export default ProductsContainer;
