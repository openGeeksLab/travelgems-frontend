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
    if (!this.isRegistered()){
      return new Promise((resolve, reject) => {
        this.get(WarpConfig.MOBILE_API_PATH + '/register/', (response)=>{
          try{
            if (response.data.status != "1"){
              reject(false);
            }
            else{
              callback(response);
              resolve(true);
            }
          } catch (e) {
            reject(e);
          }
        });
      })
    }
    else {
      return true;
    }
  }

  getContext(callback){
    if (!this.isRegistered()){
      return;
    }

    return new Promise((resolve, reject) => {
      this.get(WarpConfig.MOBILE_API_PATH + '/context/', (response)=>{
        try{
          if (response.data.status != "1"){
            reject(false);
          }
          else{
            callback(response);
            resolve(true);
          }
        } catch (e) {
          reject(e);
        }
      });
    })
  }

  postContext(data, callback){
    if (!this.isRegistered()){
      return;
    }

    return new Promise((resolve, reject) => {
      this.post(WarpConfig.MOBILE_API_PATH + '/context/', data, (response)=>{
        try{
          if (response.data.status != "1"){
            reject(false);
          }
          else{
            callback(response);
            resolve(true);
          }
        } catch (e) {
          reject(e);
        }
      });
    })
  }



  isRegistered(){
    return this.store.getState().reducers.WebId && this.store.getState().reducers.ApiKey;
  }
}
