import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from "react-i18next";

import store from '~/src/store';
import i18n from "~/src/constants/i18n";

import 'bootstrap/dist/css/bootstrap.min.css';

import AppSwitch from './components/layouts/AppSwitch';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <Router>
            <Route component={AppSwitch} />
          </Router>
        </I18nextProvider>
      </Provider>
    );
  }
}

export default App;
