SystemJS.config({
  baseURL: '/assets',
  map: {
    react: 'react.development.js',
    'react-dom': 'react-dom.development.js',

    'x2-workspace': 'x2-workspace.js'
  }
});

SystemJS.import('x2-workspace');
