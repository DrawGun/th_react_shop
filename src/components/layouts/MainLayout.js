import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';

const MainLayout = ({ children }) => (
  <Fragment>
    <Header />
    { children }
  </Fragment>
);

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;
