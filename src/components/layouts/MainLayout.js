import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';

const MainLayout = ({ children, match }) => (
  <Fragment>
    <Header match={match} />
    { children }
  </Fragment>
);

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;
