import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Route, Switch } from 'react-router-dom';

import createRoutes from '~/src/routes';

const routes = createRoutes();

import { basketPath, galleryPath } from '~/src/helpers/routes/common';
import { productGalleryPath } from '~/src/helpers/routes/products';

import RouteWithSubRoutes from '~/src/helpers/routes/RouteWithSubRoutes';
import MainLayout from './MainLayout';
import BasketModal from '~/src/components/basket/BasketModal';
import GalleryModal from '~/src/components/gallery/GalleryModal';
import NoMatch from '~/src/components/NoMatch';

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
            RouteWithSubRoutes(route, i)
          ))}

          <Route component={NoMatch} />
        </Switch>

        {
          isModal ? (
            <Fragment>
              <Route path={basketPath()} component={BasketModal} exact strict />
              <Route path={galleryPath()} component={GalleryModal} exact strict /> 
              <Route path={productGalleryPath()} component={GalleryModal} exact strict /> 
            </Fragment>
          ) : null
        }
      </MainLayout>
    );
  }
}

AppSwitch.propTypes = {
  location: PropTypes.object
};

export default AppSwitch;
