import { hot } from 'react-hot-loader';
import React from 'react';

import Import from '../components/Import';

import styles from './index.less';

class App extends React.PureComponent {
  render() {
    return (
      <div className={styles.container}>
        Hello, X1 Workspace
        <Import bundleName="x2-home" />
      </div>
    );
  }
}

export default hot(module)(App);
