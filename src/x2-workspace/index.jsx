import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

function render(Root) {
  ReactDOM.render(<Root />, document.getElementById('x2-mount-point'));
}
render(App);
