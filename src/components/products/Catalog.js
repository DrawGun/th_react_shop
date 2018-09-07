import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Container, Alert, Row } from 'reactstrap';
import { map } from 'lodash';

import ProductCard from './ProductCard';

class Catalog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { products, message, images } = this.props;

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
