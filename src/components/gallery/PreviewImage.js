import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Media } from 'reactstrap';

import { commonUrl } from './../../helpers/routes/api';

const PreviewImage = ({ path, onClick }) => (
  <Fragment>
    <Media object
      src={commonUrl(path)}
      onClick={onClick}
    />
  </Fragment>
);

PreviewImage.propTypes = {
  onClick: PropTypes.func,
  path: PropTypes.string
};

PreviewImage.defaultProps = {
  onClick: () => {},
  path: '/'
};

export default PreviewImage;
