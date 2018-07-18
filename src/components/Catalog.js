import React from 'react';
import PropTypes from 'prop-types';

import ProductCard from "../components/ProductCard";
import { map } from 'lodash/collection';

class Catalog extends React.Component {
  render() {
    const products = map(
      this.props.products,
      (product) => (
        <ProductCard key={product.id} {...product} />
      )
    );
    
    return (
      <div> 
        { products }
      </div>
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
