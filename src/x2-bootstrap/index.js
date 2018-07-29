SystemJS.config({
  baseURL: '/assets',
  map: {
    // From CDN
    react: 'cdn/react.development.js',
    'react-dom': 'cdn/react-dom.development.js',

    // From current project
    'x2-workspace': 'x2-workspace.js'
  }
});

SystemJS.import('x2-workspace');
