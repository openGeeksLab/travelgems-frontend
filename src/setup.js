import React, { Component } from 'react';
import { Text } from "native-base";
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './stores/configureStore';
import WarplyReactSDK from '../src/services/warply-react-sdk/WarplyReactSDK';
import * as actions from './actions/content';

export default class Root extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
    };
    this.warplyReactSDK = new WarplyReactSDK();
  }

  setupData(){
    const SDKComplete = this.warplyReactSDK.init();
    const store = configureStore();

    var self = this;

    Promise.all([store, SDKComplete, this.warplyReactSDK.microAppsComplete]).then(
      function(data){
        console.log("FINISHED ALL");
        self.setState({store: data[0]});

        self.warplyReactSDK.microApps['content'].dispatchAction('retrieve',self.handleContent.bind(self));

      }
    );
  }

  async componentWillMount() {
    this.setupData();
  }

  async componentWillUpdate() {
//    this.setupData();
  }

  handleContent(response){
    this.state.store.dispatch(actions.setDestinations(response.data));
    if (this.state.isLoading) {
      this.setState({isLoading: false});
    }
    this.warplyReactSDK.microApps['products'].dispatchAction('get_all_raw',this.handleActivies.bind(this));
  }

  handleActivies(response){
    this.state.store.dispatch(actions.setActivities(response.data));
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
