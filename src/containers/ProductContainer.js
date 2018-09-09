import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container } from 'reactstrap';
import { isNil } from 'lodash';

import jsonapi from 'jsonapi-parse';
import request from 'superagent';
import { camelizeKeys } from 'humps';

import { API_V1_PATH, API_PRODUCTS_PATH } from '~/src/helpers/routes/api';

import ProductCard from '~/src/components/products/ProductCard';

class ProductContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { product: null }
  }

  componentDidMount() {
    this.fetchProduct();
  }

  fetchProduct() {
    const { id } = this.props.match.params;
    const productUrl = `${API_V1_PATH}${API_PRODUCTS_PATH}/${id}`;

    request
      .get(productUrl)
      .end((err, { body }) => {
        const { data } = jsonapi.parse(body);

        if (!isNil(data)) {
          this.setState({
            product: camelizeKeys(data)
          })
        }
      });
  }

  render() {
    const { product } = this.state;
    if (isNil(product)) { return null; }
    
    return (
      <Container>
        <ProductCard {...product} isShowProductPage />
      </Container>
    );
  }
}

ProductContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.string,
    }),
  }),
};

export default ProductContainer;
