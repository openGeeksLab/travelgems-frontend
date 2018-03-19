// a library to wrap and simplify api calls
import Config from 'react-native-config';
import * as WarpUtils from './utils/WarpUtils';
import RequestHandler from './RequestHandler';
import * as actions from './redux/actions/actions';
import SDKStore from './redux/stores/SDKStore';
import DeviceInfo from './micro_apps/DeviceInfo';


export default class WarplyReactSDK {
  /*
  requests may be of 3 types
  1. ui blocking (eg warply register)
  2. queued (eg event, app info)
  3. direct (eg tag)
  */

  static eventsBatch = 2;

  static init(){
    const { persistor, store } = SDKStore(this.storeReady.bind(this));
    this.store = store;
    this.persistor = persistor;
  }

  static storeReady(){
    this.requestHandler = new RequestHandler();

    var already_registered = this.register();
    this.microapps = {};
//    this.setMicroApps(false);
    if (already_registered){
      this.getContext();
      this.initMicroApps();
    }
  }

  static handlePermissions(permissions){

  }

  static handleReceivers(receivers){

  }

  static initMicroApps(){
    var receivers = [];
    var permissions = [];
//    this.microApps[DeviceInfo.rootKey] = new DeviceInfo();

//    var default_mapps = ['DeviceInfo'];

//    var microapps = this.store.getState().reducers.ContextVariables.microapps || default_mapps;
//    var mapp = null;
//    for (var i=0;i<microapps.length;i++){
//      mapp = microapps[i];

      // get mapp class
      // get receivers and append
      // get required permissions and append
      // call init on class
//    }

//    this.handleReceivers(receivers);
//    this.handlePermissions(permissions);
  }



  // add listener on ContextVariables
  static setMicroApps(persist=true){
    this.microapps = this.store.getState().reducers.MicroApps || {};
    if (persist){
      this.storeMicroApps();
    }
    this.initMicroApps();
  }

  static storeMicroApps(){
    this.store.dispatch(actions.setMicroApps(this.microApps));
  }






  static register(){
    if (!this.isRegistered(false)){
      this.requestHandler.get(Config.MOBILE_API_PATH + Config.APP_UUID + '/register/', this.handleRegister.bind(this));
      return false;
    }
    else {
      return true;
    }
  }

  static getContext(){
    if (!this.isRegistered(true)){
      return;
    }

    this.requestHandler.get(Config.MOBILE_API_PATH + Config.APP_UUID + '/context/', this.handleGetContext.bind(this));
  }

  static handleRegister(response){
    this.store.dispatch(actions.setWebId(response.data.context.web_id));
    this.store.dispatch(actions.setApiKey(response.data.context.api_key));
    this.getContext();
  };

  static handleGetContext(response){
    this.store.dispatch(actions.setContextVariables(response.data.context));
    // to remove
    this.initMicroApps();
  }

  static handlePostContext(response){}






  static isRegistered(performRegister=true){
    var registered = this.store.getState().reducers.WebId && this.store.getState().reducers.ApiKey;
    if (!registered && performRegister){
      this.register();
    }
    return registered;
  }
}
