import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import { times, constant } from 'lodash';

import { basketPath } from './helpers/routes/common';
import CartContext from './helpers/CartContext';

import createRoutes from './routes';
const routes = createRoutes();

import RouteWithSubRoutes from './helpers/routes/RouteWithSubRoutes';
import MainLayout from './components/layouts/MainLayout';
import BasketModal from './components/basket/BasketModal';
import NoMatch from './components/NoMatch';


class App extends Component {
  constructor(props) {
    super(props);

    const { location } = this.props;

    this.state = { basket: [] };

    this.addToBasket = this.addToBasket.bind(this);
    this.previousLocation = location;
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

  componentWillUpdate(nextProps) {
    const { location } = this.props;
    const action = nextProps.history ? nextProps.history.action : undefined;
    const isModalState = location && location.state && location.state.modal

    if (action !== "POP" && !isModalState) {
      this.previousLocation = location;
    }
  }

  render() {
    const { basket, previousLocation } = this.state;
    const { location } = this.props;

    const contextObj = {
      basket,
      addToBasket: this.addToBasket
    };

    const isModal = !!(
      location &&
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    );

    return (
      <CartContext.Provider value={contextObj} >
        <Router>
          <MainLayout>
            <Switch>
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route}/>
              ))}

              <Route component={NoMatch} />
            </Switch>

            {isModal ? <Route path={basketPath} component={BasketModal} /> : null}
          </MainLayout>
        </Router>
      </CartContext.Provider>
    );
  }
}

export default App;
