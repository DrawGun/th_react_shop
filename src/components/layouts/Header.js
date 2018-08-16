import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import { rootPath, basketPath, contactsPath } from '../../helpers/routes/common';

import BasketButton from '../../components/basket/BasketButton';
import Link from '../../components/elements/Link';
import Button from '../../components/elements/Button';

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
          <NavbarBrand tag={Link} to={rootPath}>
            My shop
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem className="mr-2">
                <NavLink tag={Link} to={contactsPath}>
                  <Button>
                    Contacts
                  </Button>
                </NavLink>
              </NavItem>
              <NavItem className="mr-2">
                <NavLink
                  tag={Link}
                  to={{
                    pathname: basketPath,
                    state: { modal: true }
                  }}
                >
                  <BasketButton />
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
