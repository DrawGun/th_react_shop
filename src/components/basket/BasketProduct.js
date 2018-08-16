import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Image from '../products/Image';
import TextBox from '../products/TextBox';
import Price from '../products/Price';

class BasketProduct extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, image, title, price } = this.props;

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
      </tr>
    )
  }
}

BasketProduct.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.shape(Image.propTypes)
};

BasketProduct.defaultProps = {
  id: 1,
  title: 'Product 1',
  price: 11500,
  url: 'http://via.placeholder.com/200x200',
  width: '200',
  height: '200',
  alt: 'Что-то 1',
  image: Image.defaultProps
};

export default BasketProduct;
