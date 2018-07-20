import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ url, alt, width, height }) => (
  <div>
    <img
      src={url}
      width={width}
      height={height}
      alt={alt} />
  </div>
);

Image.propTypes = {
  url: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

Image.defaultProps = {
  url: 'http://via.placeholder.com/200x200',
  width: '200',
  height: '200',
  alt: 'Что-то 1'
};

export default Image;
