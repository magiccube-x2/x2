import { hot } from 'react-hot-loader';
import { Layout } from 'antd';
import React from 'react';

import Logo from '../components/Logo';
import MainMenu from '../components/MainMenu';

import styles from './index.less';

const { Content, Header, Sider } = Layout;

class App extends React.PureComponent {
  render() {
    return (
      <Layout className={styles.container}>
        <Sider className={styles.sider} collapsible defaultCollapsed>
          <Logo />
          <MainMenu apps={x2_config.apps} />
        </Sider>
        <Layout>
          <Header className={styles.header} />
          <Content>Content</Content>
        </Layout>
      </Layout>
    );
  }
}
export default hot(module)(App);
