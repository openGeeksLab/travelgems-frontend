// a library to wrap and simplify api calls
import * as WarpConfig from './config.js';
import * as WarpUtils from './utils/WarpUtils';
import RequestMiddleware from './RequestMiddleware';
import * as actions from './redux/actions/actions';
import SDKStore from './redux/stores/SDKStore';
import micro_apps from './micro_apps';


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

  request(microApp, action, data, callback){
    this.microApps[microApp].dispatchAction(action, data, callback);
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
        self.microAppNames = self.store.getState().reducers.ContextVariables.enabled_microapps;
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
    var MappClasses = micro_apps();
    for (var i = 0; i < MappClasses.length; i++){
      console.log(MappClasses[i]);
      const classObj = new MappClasses[i](this.store, this.requestMiddleware);
      if (this.microAppNames.indexOf(classObj.constructor.mappName) > -1){
        this.microApps[classObj.rootKey] = classObj;
      }
    }

    console.log("microapps finished");
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
