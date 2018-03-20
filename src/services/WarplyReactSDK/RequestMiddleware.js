import * as WarpUtils from './utils/WarpUtils'
import * as WarpConfig from './config.js';

export default class RequestMiddleware{

  constructor(store){
    this.store = store;
    this.HttpApi = WarpUtils.createHttpAPI();
  }


  get(url, callback, addHeaders=true){
    let config = {};
    if (addHeaders){
      config = {headers:WarpUtils.generateHeaders(this.store.getState().reducers.WebId, this.store.getState().reducers.ApiKey)};
    }
    this.HttpApi.get(url, null, config).then(
      (response) => callback(response)
    );
  }


  post(url, data, callback, addHeaders=true){
    let config = {};
    if (addHeaders){
      config = {headers:WarpUtils.generateHeaders(this.store.getState().reducers.WebId, this.store.getState().reducers.ApiKey)};
    }
    this.HttpApi.post(url, data, config).then(
      (response) => callback(response)
    );
  }


  register(callback){
    if (!this.isRegistered(false)){
      this.get(WarpConfig.MOBILE_API_PATH + '/register/', callback);
      return false;
    }
    else {
      return true;
    }
  }


  getContext(callback){
    if (!this.isRegistered(true)){
      return;
    }

    this.get(WarpConfig.MOBILE_API_PATH + '/context/', callback);
  }


  postContext(data, callback){
    if (!this.isRegistered(true)){
      return;
    }

    this.post(WarpConfig.MOBILE_API_PATH + '/context/', data, callback);
  }


  isRegistered(performRegister=true){
    var registered = this.store.getState().reducers.WebId && this.store.getState().reducers.ApiKey;
    if (!registered && performRegister){
      this.register();
    }
    return registered;
  }
}
