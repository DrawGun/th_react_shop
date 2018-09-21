import React, { Component } from 'react';
import { Router, Route, matchPath } from 'react-router-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from "react-i18next";

import { parse } from 'qs';
import { assign } from 'lodash';

import store from '~/src/store';
import i18n from "~/src/constants/i18n";

import 'bootstrap/dist/css/bootstrap.min.css';

import prepareData from '~/src/helpers/prepareData';
import history from '~/src/helpers/routes/history';
import createRoutes from '~/src/routes';

const routes = createRoutes();

import AppSwitch from './components/layouts/AppSwitch';

function historyCb (location) {
  const routeState = { location, params: {}, routes: [], query: {}};

  routes.some(route => {
    const match = matchPath(location.pathname, route);

    if (match) {
      routeState.routes.push(route);
      assign(routeState.params, match.params);
      const query = location.search ? parse(location.search.substr(1)) : {};
      assign(routeState.query, query);
    }

    return match;
  });

  prepareData(store, routeState);
}

history.listen((location) => {
  historyCb(location);
});

historyCb(window.location);

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <Router history={history}>
            <Route component={AppSwitch} />
          </Router>
        </I18nextProvider>
      </Provider>
    );
  }
}

export default App;
