import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { isNil } from 'lodash';

import { Container } from 'reactstrap';

import ProductCard from './ProductCard';
import renderSpinner from '~/src/helpers/Spinner';

class Product extends Component {
  constructor(props) {
    super(props);
  }

  renderProductCard() {
    const { item: product } = this.props;
    if (isNil(product)) return null;

    return (
      <ProductCard 
        product={product} 
        isShowProductPage 
      />
    );
  }

  render() {
    const { isFetching } = this.props;
    
    return (
      <Container>
        { isFetching ? renderSpinner() : this.renderProductCard() }
      </Container>
    );
  }
}

Product.propTypes = {
  isFetching: PropTypes.bool,
  error: PropTypes.bool,
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
