import React from 'react';
import { translate } from "react-i18next";

import { Jumbotron, Button, Container } from 'reactstrap';

import { rootPath } from '~/src/helpers/routes/common';
import Link from './elements/Link';

const NoMatch = ({ t }) => (
  <Container>
    <Jumbotron>
        <h1 className="display-3 mt-3">{ t("No Match") }</h1>
        <p className="lead">
          <Button color="primary" tag={Link} to={rootPath()}>{ t("Home") }</Button>
        </p>
      </Jumbotron>
  </Container>
);

export default translate()(NoMatch);
