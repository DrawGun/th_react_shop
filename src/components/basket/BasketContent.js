import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from "react-i18next";

import { Container } from 'reactstrap';
import { map } from 'lodash';

import BasketProductContainer from '~/src/containers/BasketProductContainer';
import BasketFormContainer from '~/src/containers/BasketFormContainer';

class BasketContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { products, t } = this.props;

    return (
      <Container>
        <BasketFormContainer products={products} />
        <hr />
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">{ t("Title") }</th>
              <th scope="col">{ t("Price") }</th>
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

export default translate()(BasketContent);
