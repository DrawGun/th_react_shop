import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Helmet from 'react-helmet';

import { StaticRouter, Route, matchPath } from 'react-router-dom';

import { Provider } from 'react-redux';
import { I18nextProvider } from "react-i18next";

import { assign } from 'lodash';

import url from 'url';

import store from '~/src/store';
import i18n from "~/src/constants/i18n";

import prepareData from '~/src/helpers/prepareData';

import createRoutes from '~/src/routes';
const routes = createRoutes();

import AppSwitch from '~/src/components/layouts/AppSwitch';

const RouteWithSubRoutes = (route, i) => (
  <Route
    key={i}
    path={route.path}
    exact={route.exact}
    strict={route.strict}
    render={props => (
      <route.component {...props} routes={route.routes} />
    )}
  />
);

export default (req, res) => {
  const location = url.parse(req.url);

  const state = { 
    location,
    routes: [],
    params: {},
    query: {}
  };

  routes.some(route => {
    const match = matchPath(req.path, route);

    if (match) {
      state.routes.push(route);
      assign(state.params, match.params);
      const query = req.search ? parse(req.search.substr(1)) : {};
      assign(state.query, query);
    }

    return match;
  });

  const context = {};

  const App = () => (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <StaticRouter location={req.url} context = {context}>
          <Route component={AppSwitch} />
        </StaticRouter>
      </I18nextProvider>
    </Provider>
  );
  
  return prepareData(store, state).then(() => {
    return {
      content: ReactDOMServer.renderToString(<App />),
      initialState: JSON.stringify(store.getState()),
      helmet: Helmet.renderStatic()
    }
  });
};
