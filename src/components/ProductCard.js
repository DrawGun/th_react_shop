import React from 'react';
import PropTypes from 'prop-types';

import Image from './Image';
import TextBox from './TextBox';
import Price from './Price'

class ProductCard extends React.Component {
  render() {
    const { image, title, price } = this.props;

    return (
      <div> 
        <Image { ...image } />
        <TextBox>
          { title }
        </TextBox>
        <Price price={price} />
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.shape({
      url: PropTypes.string,
      alt: PropTypes.string,
      width: PropTypes.string,
      height: PropTypes.string,
    })
  }),
};

ProductCard.defaultProps = {
  product: {
    id: 1,
    title: 'Product 1',
    price: 11500,
    image: {
      url: 'http://via.placeholder.com/200x200',
      width: '200px',
      height: '200px',
      alt: 'Что-то 1'
    },
  }
};

export default ProductCard;
