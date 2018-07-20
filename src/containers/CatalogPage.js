import React from 'react';
import PropTypes from 'prop-types';

import Catalog from '../components/Catalog';
import { products } from '../constants/Products';

class CatalogPage extends React.Component {
  render() {
    return <Catalog products={ products } />;
  }
}

export default CatalogPage;
