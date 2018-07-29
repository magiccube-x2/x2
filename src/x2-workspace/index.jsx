import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

function render(Component) {
  ReactDOM.render(<Component />, document.getElementById('x2-mount-point'));
}
render(App);
