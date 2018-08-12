import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Container } from 'reactstrap';

import ProductCard from '../components/product_card/ProductCard';
import { map } from 'lodash';

class Catalog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { products } = this.props;

    return (
      <Fragment>
        <Container>
          {
            map(
              products,
              (product) => (
                <ProductCard key={product.id} {...product} />
              )
            )
          }
        </Container>
      </Fragment>  
    );
  }
}
  
Catalog.propTypes = {
  products: PropTypes.array
};

Catalog.defaultProps = {
  products: []
};

export default Catalog;
