import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Media } from 'reactstrap';
import { commonUrl } from '~/src/helpers/routes/api';

const Image = ({ path }) => (
  <Container>
    <Row className='mb-2 mt-5'>
      <Media object
        src={commonUrl(path)}
      />
    </Row>
  </Container>
);

Image.propTypes = {
  path: PropTypes.string
};

Image.defaultProps = { 
  path: '/'
};

export default Image;
