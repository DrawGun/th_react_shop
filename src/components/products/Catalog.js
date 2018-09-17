import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Container, Alert, Row } from 'reactstrap';
import { map, isNull } from 'lodash';

import ProductCard from './ProductCard';
import PaginationContainer from '~/src/containers/PaginationContainer';
import renderSpinner from '~/src/helpers/Spinner';

class Catalog extends Component {
  constructor(props) {
    super(props);

    this.onDismiss = this.onDismiss.bind(this);
  }

  componentDidMount() {
    const { fetchProducts, message, items } = this.props;

    if (!items.length) {
      fetchProducts({});
    }
  }

  onDismiss() {
    const { clearMessage } = this.props;
    this.setState({ visible: false }, () => clearMessage());
  }

  renderProducts() {
    const { items: products } = this.props;

    return (
      <Fragment>
        {
          map(
            products,
            (product, index) => (
              <ProductCard key={`${product.id}-${index}`} product={product} />
            )
          )
        }

        <PaginationContainer />
      </Fragment>
    );
  }

  render() {
    const { isFetching, message } = this.props;
    const isAlertShown = !isNull(message);

    return (
      <Container>
        {
          message &&
            <Alert color="info" isOpen={isAlertShown} toggle={this.onDismiss}>
              {message}
            </Alert>
        }
        { isFetching ? renderSpinner() : this.renderProducts() }
      </Container>  
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
