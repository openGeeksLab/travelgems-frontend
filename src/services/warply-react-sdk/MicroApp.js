import WarplyReactSDK from './WarplyReactSDK';
import * as WarpUtils from './utils/WarpUtils';
import RequestMiddleware from './RequestMiddleware';
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

  postContext(data, callback=null){
    if (callback){
      var self = this;
      this.requestMiddleware.postContext(data, (response)=>{
        self.handlePostCallback(response, callback);
      });
    }
    else{
      this.requestMiddleware.postContext(data, this.handlePostContext.bind(this));
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
    response = response.data.context;
    response = {
      data: response[this.constructor.mappName],
      status: response[this.constructor.mappName + '-status']
    };
    return response;
  }
}
