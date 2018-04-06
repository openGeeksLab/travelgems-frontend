import * as WarpUtils from './utils/WarpUtils';
import * as WarpConfig from './config.js';

export default class MicroApp {
  constructor(store, requestMiddleware){
    this.requestMiddleware = requestMiddleware;
    this.store = store;
  }

  setDefaultBody(){
    this.defaultBody = {};
    this.defaultBody[this.rootKey] = {action:null};
  }

  postContext(data, callback=null, permission='ANONYMOUS'){
    var requestObj = permission=='ANONYMOUS' ? this.requestMiddleware : this.authRequestMiddleware;

    if (callback){
      var self = this;
      requestObj.postContext(data, (response)=>{
        self.handlePostCallback(response, callback);
      });
    }
    else{
      requestObj.postContext(data, this.handlePostContext.bind(this));
    }
  }

  handlePostContext(response){
    return this.parseResponse(response);
  }

  handlePostCallback(response, callback){
    response = this.parseResponse(response);
    callback(response);
  }

  parseResponse(response){
    if (response.status == 401){
      return {"status":401, "msg":"Unathorized"};
    }

    if (!response.data){
      return {"status":9999, "msg":"Internal Server Error"};
    }

    if (response.data.context){
      response = response.data.context;
      response = {
        data: response[this.constructor.mappName],
        status: response[this.constructor.mappName + '-status']
      };
    }
    else if (response.data.result){
      response = response.data;
      response = {
        msg: response.msg,
        data: response.result,
        status: response.status
      }
    }
    return response;
  }
}
