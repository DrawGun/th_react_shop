import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Media, Row } from 'reactstrap';
import { commonUrl } from './../../helpers/routes/api';

const Image = ({ path }) => (
  <Media object
    src={commonUrl(path)}
  />
);

Image.propTypes = {
  path: PropTypes.string
};

Image.defaultProps = { 
  path: '/'
};

export default Image;
