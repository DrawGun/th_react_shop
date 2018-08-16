import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

const Link = ({ to, children, activeClassName }) => (
  <NavLink to={ to } activeClassName={ activeClassName }>
    { children }
  </NavLink>
);

Link.propTypes = {
  children: PropTypes.node,
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
};

Link.defaultProps = {
  activeClassName: 'active'
};

export default Link;
