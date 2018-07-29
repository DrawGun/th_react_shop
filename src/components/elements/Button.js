import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ title, onClick }) => (
  <button onClick={onClick}>
    {title}
  </button>
);

Button.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = { 
  onClick: () => {},
  title: 'Добавить в корзину'
};

export default Button;
