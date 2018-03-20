import WarplyReactSDK from './WarplyReactSDK';
import * as WarpUtils from './utils/WarpUtils';
import RequestMiddleware from './RequestMiddleware';
import * as WarpConfig from './config.js';

export default class MicroApp {

  constructor(store, requestMiddleware){
    this.requestMiddleware = requestMiddleware;
    this.store = store;
  }

  postContext(data){
    this.requestMiddleware.postContext(data, this.handlePostContext.bind(this));
  }

  handlePostContext(response){
    var response = response.data.context;
    var response = {
      data: response[this.mappName],
      status: response[this.mappName + '-status']
    };
    return response;
  }
}
