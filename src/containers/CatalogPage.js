import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { products } from '../constants/Products';

import CartContext from '../components/CartContext';
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
      <CartContext.Provider value={contextObj} >
        <Catalog products={ products } />
      </CartContext.Provider>
    );
  }
}

export default CatalogPage;
