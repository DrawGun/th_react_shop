import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Jumbotron, Button, Container } from 'reactstrap';

import { rootPath } from '~/src/helpers/routes/common';
import Link from './elements/Link';

const NoMatch = () => (
  <Container>
    <Jumbotron>
        <h1 className="display-3 mt-3">No Match!</h1>
        <p className="lead">
          <Button color="primary" tag={Link} to={rootPath()}>На главную</Button>
        </p>
      </Jumbotron>
  </Container>
);

export default NoMatch;
