import React from 'react';
import PropTypes from 'prop-types';

const Price = ({ price }) => (
  <span>
    { `Цена: ${price}` }
  </span>
);

Price.propTypes = {
  price: PropTypes.number
};

export default Price;
