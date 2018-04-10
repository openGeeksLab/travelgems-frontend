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

        const contentLoaded = new Promise((resolve, reject) => {
          var permission = 'ANONYMOUS';
          try{
            if (self.warplyReactSDK.isAuthorized()){
              permission = 'AUTH';
            }
          }catch(e){}

          self.warplyReactSDK.request('content', 'retrieve', {"active":true}, (response) => {
            if (!response.data){
              resolve(false);
            }
            else{
              self.handleContent(response, permission);
              resolve(true);
            }
          }, permission);
        });

        Promise.all([contentLoaded]).then(
          function(data){
            if (!(data && data[0])){
              // show error popup
              return;
            }
            self.warplyReactSDK.request('products', 'get_all_raw', {"fetch_tags":true}, self.handleActivies.bind(self));
            self.warplyReactSDK.request('poll', 'get_poll', {"campaign_uuid":"66f0373bf9ec4fe097cba53cdd418101"}, self.handlePoll.bind(self));

            self.warplyReactSDK.login({"id":"p.kouts153@gmail.com","password":"123456"}, (response) => {

//              self.warplyReactSDK.request('favourites', 'add', {"content_id":"ac832a8b40484cc1834c7b4badeac01c"}, (response)=>{
//                debugger;
//              }, 'AUTH');
//              self.warplyReactSDK.request('favourites', 'add', {"product_uuid":"bdc2476e5ebe4812814765ab611242c3"}, (response)=>{
//                debugger;
//              },'AUTH');

              self.warplyReactSDK.request('consumer_data', 'handle_user_details', {"process":"get"}, self.handleProfile.bind(self), 'AUTH');
              if (!self.state.store.getState().content.contentPermission || self.state.store.getState().content.contentPermission!="AUTH"){
                self.warplyReactSDK.request('content', 'retrieve', {"active":true}, (response)=>{
                  self.handleContent(response,'AUTH');
                }, 'AUTH');
              }
              self.warplyReactSDK.request('favourites', 'get', null, self.handleFavourites.bind(self), 'AUTH');
            }, true);
          }
        );
      }
    );
  }

  handleContent(response, permission){
    this.state.store.dispatch(content.setDestinations(response.data));
    this.state.store.dispatch(content.setContentPermission(permission));
    if (permission=="AUTH"){
      this.handleFavouriteContent(response);
    }
    if (this.state.isLoading) {
      this.setState({isLoading: false});
    }
  }

  handleActivies(response){
    this.state.store.dispatch(content.setActivities(response.data));
  }

  handlePoll(response){
    this.state.store.dispatch(content.setPoll(response.data));
  }

  handleProfile(response){
    this.state.store.dispatch(profile.setProfile(response.data));
  }

  handleFavouriteContent(response){
    this.state.store.dispatch(profile.setFavouriteDestinations(response.data));
  }

  handleFavourites(response){
    this.state.store.dispatch(profile.setFavouriteActivities({
      "favourites":response.data.products || [],
      "activities":this.state.store.getState().content.activitiesById
    }));
  }


  async componentWillMount() {
    this.setupData();
  }

  async componentWillUpdate() {}

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
