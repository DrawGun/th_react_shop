import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Media } from 'reactstrap';

import { productsPath } from '../../helpers/routes/products';

import Image from './Image';
import TextBox from './TextBox';
import Price from './Price';
import AddToBasket from './AddToBasket';
import Link from '../elements/Link';

class ProductCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, image, title, price, isShowProductPage } = this.props;

    return (
      <Row className='mb-2'>
        <Media>
          <Media className='mr-2' left>
            <Image {...image} />
          </Media>
          <Media body>
            <Media heading>
              <TextBox>
                {title}
              </TextBox>
            </Media>
            <Price price={price} />

            <Container className='mt-3'>
              <Row>
                <AddToBasket product={this.props} />
              </Row>
            </Container>

            {
              !isShowProductPage &&
                <Container className='mt-3'>
                  <Link to={productsPath(id)}>
                    Подробнее
                  </Link>
                </Container>
            }
          </Media>
        </Media>
      </Row>
    )
  }
}

ProductCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.shape(Image.propTypes),
  isShowProductPage: PropTypes.bool
};

ProductCard.defaultProps = {
  id: 1,
  title: 'Product 1',
  price: 11500,
  url: 'http://via.placeholder.com/200x200',
  width: '200',
  height: '200',
  alt: 'Что-то 1',
  image: Image.defaultProps,
  isShowProductPage: false
};

export default ProductCard;
