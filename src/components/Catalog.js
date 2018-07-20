import React from 'react';
import PropTypes from 'prop-types';

import ProductCard from '../components/ProductCard';
import { map } from 'lodash';

const Catalog = ({ products }) => (
  <div>
    {
      map(
        products,
        (product) => (
          <ProductCard key={product.id} {...product} />
        )
      )
    }
  </div>
);

Catalog.propTypes = {
  products: PropTypes.array
};

Catalog.defaultProps = {
  products: []
};

export default Catalog;
