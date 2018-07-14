import { SUM } from './src/firstModule';

import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './src/Hello';

console.log('SUM -> ', SUM);
console.log('HI');

ReactDOM.render(
  <Hello />,
  document.getElementById('root')
)
