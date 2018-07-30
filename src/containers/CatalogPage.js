import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { products } from '../constants/Products';

import CardContext from '../components/CardContext';
import Catalog from '../components/Catalog';

class CatalogPage extends Component {
  constructor(props) {
    super(props);
    this.state = { basket: [] };

    this.addToBasket = this.addToBasket.bind(this);
  }

  addToBasket(product) {
    const basket = [...this.state.basket, product]

    return(  
      this.setState({
        basket
      })
    );
  };

  render() {
    const { basket } = this.state;
    const contextObj = {
      basket,
      addToBasket: this.addToBasket
    };

    return (
      <CardContext.Provider value={contextObj} >
        <Catalog products={ products } />
      </CardContext.Provider>
    );
  }
}

export default CatalogPage;
