import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { isNil } from 'lodash';
import { Container, Row } from 'reactstrap';

import request from 'superagent';
import { camelizeKeys } from 'humps';

import { API_V1_PATH, API_PRODUCTS_PATH, API_IMAGES_PATH } from './../helpers/routes/api';
import JSONAPI from './../helpers/parser';

import Image from './../components/elements/Image';

class ImageContainer extends Component {
  constructor(props) {
    super(props);
    
    this.state = { image: null };
  }

  componentDidMount() {
    this.fetchImage();
  }

  fetchImage() {
    const { id } = this.props.match.params;

    const imagesUrl = `${API_V1_PATH}${API_IMAGES_PATH}/${id}`;

    request
      .get(imagesUrl)
      .end((err, { body }) => {
        const { data } = JSONAPI.parse(body);

        this.setState({
          image: camelizeKeys(data)
        })
      });
  }

  render() {
    const { image } = this.state;
    if (isNil(image)) { return null; }

    return (
      <Container>
        <Row className='mb-2 mt-5'>
          <Image path={image.mainUrl} />
        </Row>
      </Container>
    );
  }
}

ImageContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.string,
    }),
  }),
};

export default ImageContainer;
