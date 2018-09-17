import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Button, Modal as ReactstrapModal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Modal extends Component {
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
    const { className, children } = this.props;

    return (
      <Fragment>
        <ReactstrapModal isOpen={modal} toggle={this.toggle} className={className} size='lg'>
          <ModalHeader toggle={this.toggle}>Modal</ModalHeader>
          <ModalBody>
            { children }
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </ReactstrapModal>
      </Fragment>
    );
  }
}

Modal.propTypes = {
  history: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node
};

export default Modal;
