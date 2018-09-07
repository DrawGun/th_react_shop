import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router'

import Modal from '~/src/components/elements/Modal';
import GalleryContainer from '~/src/containers/GalleryContainer';

class BasketModal extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const GalleryContainerWithRouter = withRouter(GalleryContainer)

    return (
      <Modal {...this.props}>
        <GalleryContainerWithRouter />
      </Modal>
    );
  }
}

BasketModal.propTypes = {
  history: PropTypes.object,
  className: PropTypes.string
};

export default BasketModal;
