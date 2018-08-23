import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Container, Alert } from 'reactstrap';

import ProductCard from './ProductCard';
import { map } from 'lodash';

class Catalog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { products, message } = this.props;

    return (
      <Fragment>
        <Container>
          {
            message &&
              <Alert color="info">
                {message}
              </Alert>
          }
          {
            map(
              products,
              (product, index) => (
                <ProductCard key={`${product.id}-${index}`} {...product} />
              )
            )
          }
        </Container>
      </Fragment>
    );
  }
}

Catalog.propTypes = {
  products: PropTypes.array,
  message: PropTypes.string
};

Catalog.defaultProps = {
  products: []
};

export default Catalog;
