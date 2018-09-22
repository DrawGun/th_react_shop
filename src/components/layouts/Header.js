import React, { Component } from 'react';
import { translate } from "react-i18next";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
} from 'reactstrap';

import { rootPath } from '~/src/helpers/routes/common';

import Link from '~/src/components/elements/Link';

import Menu from './Menu';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { t } = this.props;

    return (
      <Navbar color='light' light expand='md' className='mb-5'>
        <NavbarBrand tag={Link} to={rootPath()}>
          { t("My shop") }
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Menu />
        </Collapse>
      </Navbar>
    );
  }
}

export default translate()(Header);
