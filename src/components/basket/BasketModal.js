import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Modal from './../elements/Modal';
import Basket from './Basket';

class BasketModal extends Component {
  render() {
    return (
      <Modal {...this.props}>
        <Basket />
      </Modal>
    );
  }
}

BasketModal.propTypes = {
  history: PropTypes.object,
  className: PropTypes.string
};

export default BasketModal;
