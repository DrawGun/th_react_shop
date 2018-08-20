import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import createRoutes from '../../routes';
const routes = createRoutes();

import { basketPath } from '../../helpers/routes/common';

import RouteWithSubRoutes from '../../helpers/routes/RouteWithSubRoutes';
import MainLayout from './MainLayout';
import BasketModal from '../basket/BasketModal';
import NoMatch from '../NoMatch';

class AppSwitch extends Component {
  constructor(props) {
    super(props);

    const { location } = this.props;
    this.previousLocation = location;
  }

  componentWillUpdate(nextProps) {
    const { location } = this.props;
    const action = nextProps.history ? nextProps.history.action : undefined;
    const isModalState = location && location.state && location.state.modal

    if (action !== "POP" && !isModalState) {
      this.previousLocation = location;
    }
  }

  render() {
    const { location } = this.props;

    const isModal = !!(
      location &&
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    );

    return (
      <MainLayout>
        <Switch location={isModal ? this.previousLocation : location}>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}

          <Route component={NoMatch} />
        </Switch>

        {isModal ? <Route path={basketPath} component={BasketModal} /> : null}
      </MainLayout>
    );
  }
}

export default AppSwitch;
