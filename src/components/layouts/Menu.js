import React, { Component } from 'react';
import { matchPath } from 'react-router'

import {
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import ProductRoute from './../../routes/Product';

import Link from '../../components/elements/Link';
import BasketButton from '../../components/basket/BasketButton';
import Button from '../../components/elements/Button';

import { basketPath, contactsPath, galleryPath } from '../../helpers/routes/common';
import { productGalleryPath } from '../../helpers/routes/products';

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  getGalleryPath() {
    let path = galleryPath()

    const match = matchPath(window.location.pathname, ProductRoute);
    if (match) {
      const { id } = match.params;

      path = productGalleryPath(id)
    }

    return path
  }

  render() {
    return (
      <Nav className='ml-auto' navbar>
        <NavItem className="mr-2">
          <NavLink
            tag={Link}
            to={{
              pathname: this.getGalleryPath(),
              state: { modal: true }
            }}
          >
            <Button>
              Gallery
            </Button>
          </NavLink>
        </NavItem>
        <NavItem className="mr-2">
          <NavLink tag={Link} to={contactsPath()}>
            <Button>
              Contacts
            </Button>
          </NavLink>
        </NavItem>
        <NavItem className="mr-2">
          <NavLink
            tag={Link}
            to={{
              pathname: basketPath(),
              state: { modal: true }
            }}
          >
            <BasketButton />
          </NavLink>
        </NavItem>
      </Nav>
    );
  }
}

export default Menu;
