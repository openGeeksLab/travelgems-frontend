// a library to wrap and simplify api calls
import * as WarpConfig from './config.js';
import * as WarpUtils from './utils/WarpUtils';
import RequestMiddleware from './requests/anonymous';
import AuthRequestMiddleware from './requests/auth';
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
  microAppNames = {};
  microApps = {};

  init(enableAuth=false){
    const self = this;
    this.tries = 3;

    return new Promise(function cb(resolve, reject){
      try {
        const store = SDKStore();

        Promise.all([store]).then(
          function(data){
            if (!(data && data[0])){
              reject(false);
            }
            if (!self.store){
              self.store = data[0];
            }

            if (!self.requestMiddleware){
              self.requestMiddleware = new RequestMiddleware(self.store);
            }
            if (enableAuth && !self.authRequestMiddleware){
              self.authRequestMiddleware = new AuthRequestMiddleware(self.store);
            }

            const registerComplete = self.requestMiddleware.register();

            Promise.all([registerComplete]).then(function(data){
              if (!(data && data[0])){
                self.handleInitExc(resolve, reject, cb);
                return;
              }
              const contextComplete = self.requestMiddleware.getContext();

              Promise.all([contextComplete]).then(
                function(data){
                  if (!(data && data[0])){
                    self.handleInitExc(resolve, reject, cb);
                    return;
                  }
                  self.microAppsComplete = self.setMicroApps(true);
                  resolve(true);
                }
              ).catch(function () {
                self.handleInitExc(resolve, reject, cb);
              });

            }).catch(function () {
              self.handleInitExc(resolve, reject, cb);
            });
          }
        );
      } catch (e) {
        reject(e);
      }
    });
  }

  initAuth(){
    const self = this;

    return new Promise(function cb(resolve, reject){
      try {
        const store = SDKStore();

        Promise.all([store]).then(
          function(data){
            if (!(data && data[0])){
              reject(false);
            }
            if (!self.store){
              self.store = data[0];
            }

            if (!self.authRequestMiddleware){
              self.authRequestMiddleware = new AuthRequestMiddleware(self.store);
            }

            if (!self.microAppsComplete){
              self.microAppsComplete = self.setMicroApps();
            }
            resolve(true);
          }
        );
      } catch (e) {
        reject(e);
      }
    });
  }

  login(data, callback, rememberMe=false){
    return this.authRequestMiddleware.login(data, callback, rememberMe);
  }

  register(data, callback, autologin=false, rememberMe=false){
    return this.authRequestMiddleware.register(data, callback, autologin, rememberMe);
  }

  request(microApp, action, data=null, callback=null, permission='ANONYMOUS'){
    this.microApps[microApp].dispatchAction(action, data, callback, permission);
  }

  handleInitExc(resolve, reject, cb){
    if (--this.tries>0){
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
        self.microAppNames = self.store.getState().anonymous.ContextVariables.enabled_microapps;
        if (persist){
          self.storeMicroApps();
        }
        self.initMicroApps();
        resolve(true);
      } catch (e) {
        resolve(false);
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
      if (classObj.constructor.permissions.indexOf("AUTH") > -1 || this.microAppNames.indexOf(classObj.constructor.mappName) > -1){
        if (classObj.constructor.permissions.indexOf("AUTH") > -1){
          classObj.authRequestMiddleware = this.authRequestMiddleware;
        }
        this.microApps[classObj.rootKey] = classObj;
      }
    }

    console.log("microapps finished");
  }
}
