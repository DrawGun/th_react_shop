import React from 'react';
import { translate } from "react-i18next";

import { Container, Row } from 'reactstrap';

const ContactsInfo = ({ t }) => (
  <Container>
    <Row>
      { t('ContactsInfo') }
    </Row>
  </Container>
);

export default translate()(ContactsInfo);
