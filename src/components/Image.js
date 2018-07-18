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
  image: PropTypes.shape({
    url: PropTypes.string,
    alt: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
  })
};

Image.defaultProps = {
  image: {
    url: 'http://via.placeholder.com/200x200',
    width: '200px',
    height: '200px',
    alt: 'Что-то 1'
  }
};

export default Image;
