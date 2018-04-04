import React, { Component } from 'react';
import { Text } from "native-base";
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './stores/configureStore';
import WarplyReactSDK from '../src/services/warply-react-sdk/WarplyReactSDK';
import * as content from './actions/content';
import * as profile from './actions/profile';

export default class Root extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
    };
    this.warplyReactSDK = new WarplyReactSDK();
  }

  setupData(){
    const SDKComplete = this.warplyReactSDK.init(true);
    const store = configureStore();

    var self = this;

    Promise.all([store, SDKComplete, this.warplyReactSDK.microAppsComplete]).then(
      function(data){
        console.log("FINISHED ALL");
        self.setState({store: data[0]});

        self.warplyReactSDK.request('content', 'retrieve', null, self.handleContent.bind(self));

      }
    );
  }

  async componentWillMount() {
    this.setupData();
  }

  async componentWillUpdate() {}

  handleContent(response){
    this.state.store.dispatch(content.setDestinations(response.data));
    if (this.state.isLoading) {
      this.setState({isLoading: false});
    }
    this.warplyReactSDK.request('products', 'get_all_raw', {"fetch_tags":true}, this.handleActivies.bind(this));
    this.warplyReactSDK.request('poll', 'get_poll', {"campaign_uuid":"66f0373bf9ec4fe097cba53cdd418101"}, this.handlePoll.bind(this));

//    const self = this;
//    this.warplyReactSDK.login({"id":"p.kouts153@gmail.com","password":"123456"}, (response) => {
//      self.warplyReactSDK.request('consumer_data', 'handle_user_details', {"process":"get"}, self.handleProfile.bind(self), 'AUTH');
//    }, true);
  }

  handleActivies(response){
    this.state.store.dispatch(content.setActivities(response.data));
  }

  handlePoll(response){
    this.state.store.dispatch(content.setPoll(response.data));
  }

  handleProfile(response){
    this.state.store.dispatch(profile.setProfile(response.data));
    this.state.store.dispatch(profile.setFavouriteDestinations(this.state.store.getState().content["destinationsArray"]));
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
