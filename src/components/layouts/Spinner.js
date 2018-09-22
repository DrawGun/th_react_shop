import React, { Fragment } from 'react';

import 'font-awesome/css/font-awesome.css'
import FontAwesome from 'react-fontawesome'

const Spinner = () => (
  <div className='spinner mx-auto'>
    <FontAwesome 
      name='spinner' 
      size="5x"
      spin
    />
  </div>
);

export default Spinner;
