import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import ProductCard from '../components/ProductCard';
import Basket from '../components/Basket';
import { map } from 'lodash';

class Catalog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { products } = this.props;

    return (
      <Fragment>
        <Basket />
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
