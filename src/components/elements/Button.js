import React from 'react';
import PropTypes from 'prop-types';

import { Button as BootstrapButton } from 'reactstrap';

const Button = ({ children, onClick, color }) => (
  <BootstrapButton onClick={onClick} color={color}>
    {children}
  </BootstrapButton>
);

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  color: PropTypes.string
};

Button.defaultProps = { 
  onClick: () => {},
  children: null,
  color: 'primary'
};

export default Button;
