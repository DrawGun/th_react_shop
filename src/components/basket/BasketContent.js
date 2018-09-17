import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container } from 'reactstrap';
import { map } from 'lodash';

import BasketProductContainer from '~/src/containers/BasketProductContainer';

class BasketContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { products } = this.props;

    return (
      <Container>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Название</th>
              <th scope="col">Цена</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              map(
                products,
                (product, index) => (
                  <BasketProductContainer key={`${product.id}-${index}`} product={product} />
                )
              )
            }
          </tbody>
        </table>
      </Container>
    );
  }
}

BasketContent.propTypes = {
  products: PropTypes.array
};

BasketContent.defaultProps = {
  products: []
};

export default BasketContent;
