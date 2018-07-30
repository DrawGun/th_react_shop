import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Image from './Image';
import TextBox from './TextBox';
import Price from './Price';
import AddToBasket from './AddToBasket';

class ProductCard extends Component {
  constructor(props) {
    super(props); 
  }

  render() {
    const { id, image, title, price } = this.props;

    return (
      <div>
        <Image {...image} />
        <TextBox>
          {title}
        </TextBox>
        <Price price={price} />
        <AddToBasket product={this.props} />
      </div>
    )
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.objectOf(Image.propTypes)
  }),
};

ProductCard.defaultProps = {
  product: {
    id: 1,
    title: 'Product 1',
    price: 11500,
    url: 'http://via.placeholder.com/200x200',
    width: '200',
    height: '200',
    alt: 'Что-то 1'
  }
};

export default ProductCard;
