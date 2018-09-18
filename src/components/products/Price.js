import React from 'react';
import PropTypes from 'prop-types';
import { translate } from "react-i18next";

const Price = ({ price, t }) => (
  <span>
    { `${t("Price")}: ${price}` }
  </span>
);

Price.propTypes = {
  price: PropTypes.string
};

Price.defaultProps = {
  price: '100500'
};

export default translate()(Price);
