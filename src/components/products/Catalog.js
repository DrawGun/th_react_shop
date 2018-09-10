import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Container, Alert, Row } from 'reactstrap';
import { map } from 'lodash';

import ProductCard from './ProductCard';

class Catalog extends Component {
  constructor(props) {
    super(props);

    this.state = { showAlert: false };
    
    this.onDismiss = this.onDismiss.bind(this);
  }

  componentDidMount() {
    const { fetchProducts, message, items } = this.props;

    if (message) {
      this.setState({ showAlert: true })
    }

    if (!items.length) {
      fetchProducts();
    }
  }

  componentWillReceiveProps(nextProps) {
    const { message } = nextProps;
    
    if (message) {
      this.setState({ showAlert: true })
    }
  }

  onDismiss() {
    const { clearMessage } = this.props;
    this.setState({ visible: false }, () => clearMessage());
  }

  render() {
    const { items, message, pushToBasket } = this.props;

    return (
      <Fragment>
        <Container>
          {
            message &&
              <Alert color="info" isOpen={this.state.showAlert} toggle={this.onDismiss}>
                {message}
              </Alert>
          }
          {
            map(
              items,
              (product, index) => (
                <ProductCard key={`${product.id}-${index}`} product={product} pushToBasket={pushToBasket} />
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
