import React, { Component, Fragment } from 'react';
import { translate } from "react-i18next";

import Button from '~/src/components/elements/Button';

class BasketButton extends Component {

  render() {
    const { items: products, t } = this.props;
    
    return (
      <Button>
        { `${t("Selected orders")}: ${products.length}` }
      </Button>
    );
  }
}

export default translate()(BasketButton);
