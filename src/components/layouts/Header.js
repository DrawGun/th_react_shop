import React, { Component } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
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
    return (
      <div>
        <Navbar color='light' light expand='md' className='mb-5'>
          <NavbarBrand tag={Link} to={rootPath()}>
            My shop
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Menu />
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
