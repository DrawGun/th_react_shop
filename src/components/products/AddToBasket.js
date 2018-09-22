import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from "react-i18next";
import { ButtonGroup } from 'reactstrap';

import Button from '~/src/components/elements/Button';

class AddToBasket extends Component {
  constructor(props) {
    super(props);

    this.state = { count: 1 };
  }

  changeCount(type) {
    let { count } = this.state;
    if (type === 'increment') {
      count += 1;
    } else if (type === 'decrement' && count > 1) {
      count -= 1;
    }

    this.setState({ count })
  }

  render() {
    const { item: product, pushToBasket, t } = this.props;
    const { count } = this.state;

    return (
      <ButtonGroup size='lg'>
        <Button onClick={() => this.changeCount('decrement')}>
          {'-'}
        </Button>
        <Button onClick={() => pushToBasket(product, count)}>
          {`${t("AddToBasket")}: ${count}`}
        </Button>
        <Button onClick={() => this.changeCount('increment')}>
          {'+'}
        </Button>
      </ButtonGroup>
    );
  }
}

AddToBasket.propTypes = {
  product: PropTypes.object
};

export default translate()(AddToBasket);
