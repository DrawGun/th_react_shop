import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Container, Alert, Row } from 'reactstrap';
import { map, isNull } from 'lodash';

import ProductCard from './ProductCard';

class Catalog extends Component {
  constructor(props) {
    super(props);

    this.onDismiss = this.onDismiss.bind(this);
  }

  componentDidMount() {
    const { fetchProducts, message, items } = this.props;

    if (!items.length) {
      fetchProducts();
    }
  }

  onDismiss() {
    const { clearMessage } = this.props;
    this.setState({ visible: false }, () => clearMessage());
  }

  render() {
    const { items, message } = this.props;
    const isAlertShown = !isNull(message);

    return (
      <Fragment>
        <Container>
          {
            message &&
              <Alert color="info" isOpen={isAlertShown} toggle={this.onDismiss}>
                {message}
              </Alert>
          }
          {
            map(
              items,
              (product, index) => (
                <ProductCard key={`${product.id}-${index}`} product={product} />
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
