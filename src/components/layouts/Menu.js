import React, { Fragment } from 'react';

import {
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import Link from '../../components/elements/Link';
import BasketButton from '../../components/basket/BasketButton';
import Button from '../../components/elements/Button';

import { basketPath, contactsPath } from '../../helpers/routes/common';

const Menu = () => (
  <Nav className='ml-auto' navbar>
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

export default Menu;
