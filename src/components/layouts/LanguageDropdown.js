import React, { Component } from 'react';
import { translate } from "react-i18next";

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem 
} from 'reactstrap';

class LanguageDropdown extends Component {
  constructor(props) {
    super(props);
  }

  changeLanguage(lng) {
    const { i18n, setLanguage } = this.props;
    i18n.changeLanguage(lng);
    setLanguage(lng);
  }

  render() {
    const { i18n: { language } } = this.props;

    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          { language.toUpperCase() }
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem onClick={() => this.changeLanguage('ru')}>
            RU
          </DropdownItem>
          <DropdownItem onClick={() => this.changeLanguage('en')}>
            EN
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
}

export default translate()(LanguageDropdown);
