import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet";

import Header from './Header';

const MainLayout = ({ children }) => (
  <Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <title>REACT SHOP Title</title>
    </Helmet>
    <Header />
    { children }
  </Fragment>
);

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;
