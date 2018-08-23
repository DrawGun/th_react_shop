import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container } from 'reactstrap';
import { find, toInteger } from 'lodash';

import { products } from '../constants/Products';
import ProductCard from '../components/products/ProductCard';

class ProductContainer extends Component {
  // Думаю, что в будущем придется расширять контейнерный компонент,
  // поэтому пока только подготовил скелет.
  constructor(props) {
    super(props);
  }

  render() {
    const { id } = this.props.match.params;
    const product = find(products, (product) => product.id === toInteger(id));

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
