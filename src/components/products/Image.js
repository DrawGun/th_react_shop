import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Media } from 'reactstrap';

import { commonUrl } from './../../helpers/routes/api';

const Image = ({ url, alt, width, height }) => (
  <Fragment>
    <Media object
      src={commonUrl(url)}
      width={width}
      height={height}
      alt={alt} />
  </Fragment>
);

Image.propTypes = {
  url: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
};

Image.defaultProps = {
  url: 'http://via.placeholder.com/200x200',
  width: '200',
  height: '200',
  alt: 'Что-то 1'
};

export default Image;
