import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { times, constant } from 'lodash';

import CartContext from './helpers/CartContext';
import AppSwitch from './components/layouts/AppSwitch';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { basket: [] };

    this.addToBasket = this.addToBasket.bind(this);
  }

  addToBasket(product, count) {
    const products = times(count, constant(product));
    const basket = [...this.state.basket, ...products];

    return (
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
        <Router>
          <Route component={AppSwitch} />
        </Router>
      </CartContext.Provider>
    );
  }
}

export default App;
