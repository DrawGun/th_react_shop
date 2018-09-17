import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '~/src/components/elements/Button';
import Image from '~/src/components/products/Image';
import TextBox from '~/src/components/products/TextBox';
import Price from '~/src/components/products/Price';

class BasketProduct extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { product, deleteFromBasket } = this.props;
    const { id, image, title, price } = product;

    return (
      <tr>
        <th scope="row">
          <Image {...image} />
        </th>
        <td>
          <TextBox>
            {title}
          </TextBox>
        </td>
        <td>
          <Price price={price} />
        </td>
        <td>
          <Button onClick={() => deleteFromBasket(product)}>
            {'-'}
          </Button>
        </td>
      </tr>
    )
  }
}

BasketProduct.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  descriprion: PropTypes.string,
  price: PropTypes.string,
  priceCurrency: PropTypes.string,
  image: PropTypes.shape(Image.propTypes)
};

BasketProduct.defaultProps = {
  id: '1',
  title: 'Product 1',
  descriprion: 'This is product 1',
  price: '11500',
  priceCurrency: 'RUB',
  image: Image.defaultProps
};

export default BasketProduct;
