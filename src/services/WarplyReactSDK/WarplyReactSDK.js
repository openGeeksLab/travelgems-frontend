// a library to wrap and simplify api calls
import * as WarpConfig from './config.js';
import * as WarpUtils from './utils/WarpUtils';
import RequestMiddleware from './RequestMiddleware';
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

  init(){
    const { persistor, store } = SDKStore(this.storeReady.bind(this));
    this.store = store;
    this.persistor = persistor;

    return new Promise((resolve, reject) => {
      try {
        resolve(true);
      } catch (e) {
        reject(e);
      }
    });
  }

  storeReady(){
    this.requestMiddleware = new RequestMiddleware(this.store);

    var already_registered = this.requestMiddleware.register(this.handleRegister.bind(this));
    this.microapps = {};
//    this.setMicroApps(false);
    if (already_registered){
      this.requestMiddleware.getContext(this.handleGetContext.bind(this));
//      this.initMicroApps();
    }
  }


  initMicroApps(){
//    this.microApps[DeviceInfo.rootKey] = new DeviceInfo(this.store, this.requestMiddleware);

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
  }



  // add listener on ContextVariables
  setMicroApps(persist=true){
    this.microapps = this.store.getState().reducers.MicroApps || {};
    if (persist){
      this.storeMicroApps();
    }
    this.initMicroApps();
  }

  storeMicroApps(){
    this.store.dispatch(actions.setMicroApps(this.microApps));
  }





  handleRegister(response){
    this.store.dispatch(actions.setWebId(response.data.context.web_id));
    this.store.dispatch(actions.setApiKey(response.data.context.api_key));
    this.requestMiddleware.getContext(this.handleGetContext.bind(this));
  };

  handleGetContext(response){
    this.store.dispatch(actions.setContextVariables(response.data.context));
    // to remove
    this.initMicroApps();
  }

  handlePostContext(response){}
}
