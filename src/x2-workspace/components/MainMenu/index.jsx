import { Icon, Menu } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './index.less';

const { Item: MenuItem } = Menu;

export default class MainMenu extends React.Component {
  static propTypes = {
    apps: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        icon: PropTypes.string
      })
    ).isRequired
  };

  static defaultProps = {};

  renderItem(app) {
    return (
      <MenuItem key={app.id}>
        <Icon type={app.icon} />
        <span>{app.title}</span>
      </MenuItem>
    );
  }

  renderItems() {
    const { apps } = this.props;
    return apps.map(app => this.renderItem(app));
  }

  render() {
    return (
      <Menu className={styles.container} theme="dark" mode="inline">
        {this.renderItems()}
      </Menu>
    );
  }
}
