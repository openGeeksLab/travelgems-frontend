import * as WarpUtils from '../utils/WarpUtils'
import * as WarpConfig from '../config.js';
import * as actions from '../redux/actions/actions';

export default class RequestMiddleware{

  constructor(store){
    this.store = store;
    this.HttpApi = WarpUtils.createHttpAPI();
  }

  get(url, callback, addHeaders=true){
    let config = {};
    if (addHeaders){
      config = {headers:WarpUtils.generateHeaders(this.store.getState().anonymous.WebId, this.store.getState().anonymous.ApiKey)};
    }
    this.HttpApi.get(url, null, config).then(
      (response) => callback(response)
    );
  }


  post(url, data, callback, addHeaders=true){
    let config = {};
    if (addHeaders){
      config = {headers:WarpUtils.generateHeaders(this.store.getState().anonymous.WebId, this.store.getState().anonymous.ApiKey)};
    }
    this.HttpApi.post(url, data, config).then(
      (response) => callback(response)
    );
  }

  register(){
    if (!this.isRegistered()){
      const self = this;
      return new Promise((resolve, reject) => {
        this.get(WarpConfig.MOBILE_API_PATH + '/register/', (response)=>{
          try{
            if (!response.status==200 || !response.data.status || response.data.status != "1"){
              resolve(false);
            }
            else{
              self.store.dispatch(actions.setWebId(response.data.context.web_id));
              self.store.dispatch(actions.setApiKey(response.data.context.api_key));
              resolve(true);
            }
          } catch (e) {
            resolve(false);
          }
        });
      }).catch((e) => {
        return false;
      })
    }
    else {
      return true;
    }
  }

  getContext(){
    if (!this.isRegistered()){
      return false;
    }

    const self = this;
    return new Promise((resolve, reject) => {
      this.get(WarpConfig.MOBILE_API_PATH + '/context/', (response)=>{
        try{
          if (!response.status==200 || !response.data.status || response.data.status != "1"){
            if (response.data.status == "9"){
              self.clearAnonymous();
            }
            resolve(false);
          }
          else{
            self.store.dispatch(actions.setContextVariables(response.data.context));
            resolve(true);
          }
        } catch (e) {
          resolve(false);
        }
      });
    }).catch((e) => {
      return false;
    })
  }

  postContext(data, callback){
    if (!this.isRegistered()){
      callback(401);
      return;
    }

    var self = this;
    this.post(WarpConfig.MOBILE_API_PATH + '/context/', data, (response)=>{
      if (!response.status==200 || !response.data.status || response.data.status != "1"){
        self.handlePostExc(response, data, callback, retry);
      }
      else{
        callback(response);
      }
    });
  }

  handlePostExc(response, data, callback, retry){
    if (response.status==200 && response.data.status && response.data.status == "9"){
      if (!retry){
        self.clearAnonymous();
        callback(401);
      }
      else {
        const registered = this.register();

        const self = this;
        Promise.all([registered]).then(function(data){
          if (!(data && data[0])){
            self.clearAnonymous();
            callback(401);
          }
          else{
            self.postContext(data, callback, false);
          }
        });
      }
    }
    else{
      callback(response);
    }
  }

  clearAnonymous(){
    this.store.dispatch(actions.deleteAuthKeys());
  }

  isRegistered(){
    return this.store.getState().anonymous.WebId && this.store.getState().anonymous.ApiKey;
  }

}
