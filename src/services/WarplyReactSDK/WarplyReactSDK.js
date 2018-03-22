// a library to wrap and simplify api calls
import * as WarpConfig from './config.js';
import * as WarpUtils from './utils/WarpUtils';
import RequestMiddleware from './RequestMiddleware';
import * as actions from './redux/actions/actions';
import SDKStore from './redux/stores/SDKStore';
import DeviceInfo from './micro_apps/DeviceInfo';
import Content from './micro_apps/Content';


export default class WarplyReactSDK {
  /*
  requests may be of 3 types
  1. ui blocking (eg warply register)
  2. queued (eg event, app info)
  3. direct (eg tag)
  */

  static eventsBatch = 2;

  init(){
    const self = this;
    this.microAppNames = {};
    this.microApps = {};

    this.tries = 3;

    return new Promise(function cb(resolve, reject){
      try {
        const store = SDKStore();

        Promise.all([store]).then(
          function(data){
            self.store = data[0];
            self.requestMiddleware = new RequestMiddleware(self.store);

            const registerComplete = self.requestMiddleware.register(self.handleRegister.bind(self));

            Promise.all([registerComplete]).then(function(){
              const contextComplete = self.requestMiddleware.getContext(self.handleGetContext.bind(self));

              Promise.all([contextComplete]).then(
                function(){
                  self.microAppsComplete = self.setMicroApps(true);
                  resolve(true);
                }
              ).catch(function () {
                self.handlePromiseExc(resolve, reject, cb);
              });

            }).catch(function () {
              self.handlePromiseExc(resolve, reject, cb);
            });
          }
        );
      } catch (e) {
        reject(e);
      }
    });
  }

  handlePromiseExc(resolve, reject, cb){
    if (--this.tries>0){
      self.store.dispatch({type: 'RESET'});
      cb(resolve, reject);
    }
    else{
      reject(false);
    }
  }



  // add listener on ContextVariables
  setMicroApps(persist=true){
    const self = this;
    return new Promise((resolve, reject) => {
      try {
        this.microAppNames = self.store.getState().reducers.MicroApps || self.store.getState().reducers.ContextVariables.enabled_microapps || ['MAPP_DEVICE_INFO','CONTENT'];
        if (persist){
          self.storeMicroApps();
        }
        self.initMicroApps();
        resolve(true);
      } catch (e) {
        reject(e);
      }
    });
  }

  storeMicroApps(){
    this.store.dispatch(actions.setMicroApps(this.microAppNames));
  }

  initMicroApps(){
    const devInfoMapp = new DeviceInfo(this.store, this.requestMiddleware);
    const contentMapp = new Content(this.store, this.requestMiddleware);

    this.microApps[devInfoMapp.rootKey] = devInfoMapp;
    this.microApps[contentMapp.rootKey] = contentMapp;
    console.log("microapps finished");
//    var mapp = null;
//    for (var i=0;i<this.microApps.length;i++){
//      mapp = this.microApps[i];
//      this.microAppsObjs[mapp.rootKey] = new mapp(this.store, this.requestMiddleware);
//    }
  }





  handleRegister(response){
    this.store.dispatch(actions.setWebId(response.data.context.web_id));
    this.store.dispatch(actions.setApiKey(response.data.context.api_key));
    // to remove and add as listener on webid changed
//    this.requestMiddleware.getContext(this.handleGetContext.bind(this));
  };

  handleGetContext(response){
    this.store.dispatch(actions.setContextVariables(response.data.context));
    // to remove and add as listener on variables changed
//    this.initMicroApps();
  }

  handlePostContext(response){}
}
