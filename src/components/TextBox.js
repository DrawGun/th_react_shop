import React from 'react';
import PropTypes from 'prop-types';

const TextBox = ({ children }) => (
  <span>
    { children }
  </span>
);

TextBox.propTypes = {
  children: PropTypes.node
};

export default TextBox;
