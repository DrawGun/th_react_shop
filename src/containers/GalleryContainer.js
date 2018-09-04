import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Row } from 'reactstrap';

import request from 'superagent';
import { camelizeKeys } from 'humps';

import { API_V1_PATH, API_PRODUCTS_PATH, API_GALLERY_PATH } from './../helpers/routes/api';
import JSONAPI from './../helpers/parser';

import Gallery from './../components/gallery/Gallery';

class GalleryContainer extends Component {
  constructor(props) {
    super(props);
    
    this.state = { images: [] };
  }

  componentDidMount() {
    this.fetchImages();
  }

  fetchImages() {
    const { id } = this.props.match.params;

    let imagesUrl = `${API_V1_PATH}${API_GALLERY_PATH}`;
    if (id) {
      imagesUrl = `${API_V1_PATH}${API_PRODUCTS_PATH}/${id}${API_GALLERY_PATH}`;
    }

    request
      .get(imagesUrl)
      .end((err, { body }) => {
        const { data } = JSONAPI.parse(body);

        this.setState({
          images: camelizeKeys(data)
        })
      });
  }

  render() {
    const { images } = this.state;

    return (
      <Row className='mb-2 mt-5'>
        <Gallery images={images} />
      </Row>
    );
  }
}

GalleryContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.string,
    }),
  }),
};

export default GalleryContainer;
