import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

import './index.less';

function render(Component) {
  ReactDOM.render(<Component />, document.getElementById('x2-mount-point'));
}
render(App);
