import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { isNil } from 'lodash';

import { Container } from 'reactstrap';

import ProductCard from './ProductCard';

class Product extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { fetchProduct, item: product } = this.props;
    const { id } = this.props.match.params;

    if (!product || product.id !== id) {
      fetchProduct(id);
    }
  }

  render() {
    const { item: product } = this.props;

    if (isNil(product)) { return null; }

    return (
      <Container>
        <ProductCard 
          product={product} 
          isShowProductPage 
        />
      </Container>
    );
  }
}

Product.propTypes = {
  isFetching: PropTypes.bool,
  error: PropTypes.bool,
  fetchProduct: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.string
    })
  })
};

Product.defaultProps = {
  isFetching: false,
  error: false
};

export default Product;
