import 'babel-polyfill';

SystemJS.config({
  baseURL: '/assets',
  map: {
    // From CDN
    antd: 'cdn/antd.js',
    'babel-polyfill': 'cdn/babel-polyfill.js',
    classnames: 'cdn/classnames.js',
    'prop-types': 'cdn/prop-types.js',
    react: 'cdn/react.development.js',
    'react-dom': 'cdn/react-dom.development.js',

    // From current project
    'x2-workspace': 'x2-workspace.js',

    // X2 Bundles
    'x2-home': 'http://localhost:8081/assets/x2-home.js'
  }
});

SystemJS.import('x2-workspace');
