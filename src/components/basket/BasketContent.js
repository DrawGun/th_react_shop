import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container } from 'reactstrap';
import { map } from 'lodash';

import BasketProduct from './BasketProduct';

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
            </tr>
          </thead>
          <tbody>
            {
              map(
                products,
                (product, index) => (
                  <BasketProduct key={`${product.id}-${index}`} {...product} />
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
