import React from 'react';
import PropTypes from 'prop-types';

const Price = ({ price }) => (
  <span>
    { `Цена: ${price}` }
  </span>
);

Price.propTypes = {
  price: PropTypes.string
};

Price.defaultProps = {
  price: '100500'
};

export default Price;
