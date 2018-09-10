import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '~/src/store';

import 'bootstrap/dist/css/bootstrap.min.css';

import AppSwitch from './components/layouts/AppSwitch';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route component={AppSwitch} />
        </Router>
      </Provider>
    );
  }
}

export default App;
