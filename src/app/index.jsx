import { hot } from 'react-hot-loader';
import React from 'react';

import styles from './index.less';

class App extends React.PureComponent {
  render() {
    return <div className={styles.container}>Hello, X1 Workspace</div>;
  }
}

export default hot(module)(App);
