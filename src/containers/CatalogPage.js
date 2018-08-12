import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { products } from '../constants/Products';

import Catalog from '../components/Catalog';

class CatalogPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Catalog products={products} />
    );
  }
}

export default CatalogPage;
