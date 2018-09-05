import React, { Component } from 'react';
import PropTypes from 'prop-types';

import request from 'superagent';
import { camelizeKeys } from 'humps';

import { API_V1_PATH, API_PRODUCTS_PATH } from '~/src/helpers/routes/api';
import JSONAPI from '~/src/helpers/parser';

import Catalog from '~/src/components/products/Catalog';

class ProductsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { products: [], images: [] }
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts() {
    const producstUrl = `${API_V1_PATH}${API_PRODUCTS_PATH}`;

    request
      .get(producstUrl)
      .end((err, { body }) => {
        const { data } = JSONAPI.parse(body);
        
        this.setState({
          products: camelizeKeys(data)
        })
      });
  }

  render() {
    const { products } = this.state;
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
