import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import CartContainer from './containers/CartContainer';
import AppSwitch from './components/layouts/AppSwitch';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <CartContainer>
        <Router>
          <Route component={AppSwitch} />
        </Router>
      </CartContainer>
    );
  }
}

export default App;
