import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Basket from './Basket';

class BasketModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: true
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    }, () => {
      const { history } = this.props;
      history.goBack();
    });
  }

  render() {
    const { modal } = this.state;
    const { className } = this.props;

    return (
      <Fragment>
        <Modal isOpen={modal} toggle={this.toggle} className={className} size='lg'>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <Basket modal />
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}

BasketModal.propTypes = {
  history: PropTypes.object,
  className: PropTypes.string
};

export default BasketModal;
