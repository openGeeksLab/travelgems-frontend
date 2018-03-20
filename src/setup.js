import WarplyReactSDK from '../src/services/WarplyReactSDK/WarplyReactSDK';
import React, { Component } from 'react';
import { Text } from "native-base";
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './stores/configureStore';

export default class Root extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
    };
    this.warplyReactSDK = new WarplyReactSDK();
  }

  async componentWillMount () {
    const SDKComplete = this.warplyReactSDK.init();
    const store = configureStore();

    var self = this;

    Promise.all([store, SDKComplete]).then(
      function(){
        self.setState({
          isLoading: false,
          store: store
        });
      }
    );
  }

  render() {
    if (this.state.isLoading) {
      return (
        <Text>
          Loading...
        </Text>
      );
    }

    process.env.NODE_ENV = "production";
    return (
      <Provider store={this.state.store}>
        <App />
      </Provider>
    );
    process.env.NODE_ENV = "development";
  }
}
