import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import request from 'superagent';
import { camelizeKeys } from 'humps';

import { API_V1_PATH, API_PRODUCTS_PATH, API_GALLERY_PATH } from './../../helpers/routes/api';
import JSONAPI from './../../helpers/parser';

import Modal from './../elements/Modal';
import Gallery from './Gallery';

class BasketModal extends Component {
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
      <Modal {...this.props}>
        <Gallery images={images} />
      </Modal>
    );
  }
}

BasketModal.propTypes = {
  history: PropTypes.object,
  className: PropTypes.string
};

export default BasketModal;
