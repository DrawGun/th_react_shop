import React, { Component } from 'react';
import { matchPath } from 'react-router'
import { translate } from "react-i18next";

import {
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import ProductRoute from '~/src/routes/Product';

import BasketButtonContainer from '~/src/containers/BasketButtonContainer';
import Link from '~/src/components/elements/Link';
import Button from '~/src/components/elements/Button';
import LanguageDropdownContainer from '~/src/containers/LanguageDropdownContainer';

import { basketPath, contactsPath, galleryPath } from '~/src/helpers/routes/common';
import { productGalleryPath } from '~/src/helpers/routes/products';

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  getGalleryPath() {
    let path = galleryPath()

    if (__CLIENT__) {
      const match = matchPath(window.location.pathname, ProductRoute);
      if (match) {
        const { id } = match.params;

        path = productGalleryPath(id)
      }

      return path;
    }
  }

  render() {
    const { t } = this.props;

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
              { t("Gallery") }
            </Button>
          </NavLink>
        </NavItem>
        <NavItem className="mr-2">
          <NavLink tag={Link} to={contactsPath()}>
            <Button>
              { t("Contacts") }
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
            <BasketButtonContainer />
          </NavLink>
        </NavItem>
        <LanguageDropdownContainer />
      </Nav>
    );
  }
}

export default translate()(Menu);
