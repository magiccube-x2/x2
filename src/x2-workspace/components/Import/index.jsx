import PropTypes from 'prop-types';
import React from 'react';

export default class Import extends React.PureComponent {
  static propTypes = {
    bundleName: PropTypes.string.isRequired,
    componentName: PropTypes.string
  };

  static defaultProps = {
    componentName: 'default'
  };

  state = { Component: null };

  async componentDidMount() {
    const { bundleName, componentName } = this.props;
    const bundle = await SystemJS.import(bundleName);
    const Component = bundle[componentName];
    if (typeof Component !== 'function') {
      throw new Error(`Fail to import component. Component '${componentName}' is not found in bundle '${bundleName}'.`);
    }
    this.setState({ Component });
  }

  render() {
    const { Component } = this.state;
    if (Component) {
      return <Component {...this.props} />;
    }
    return null;
  }
}
