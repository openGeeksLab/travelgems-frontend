import MicroApp from '../MicroApp';
import * as WarpConfig from '../config.js';

export default class Products extends MicroApp {
  static permissions = ['ANONYMOUS'];
  static mappName = 'MAPP_PRODUCTS';
  rootKey = 'products';
  static allowedActions = ['get_all_raw'];

  constructor(store, requestMiddleware){
    super(store, requestMiddleware);
    this.setDefaultBody();
  }

  dispatchAction(action, data, callback){
    if (this.constructor.allowedActions.indexOf(action)>-1){
      return this.handleAction(action, data, callback);
    }
    return false;
  }

  handleAction(action, data, callback){
    try{
      var body = JSON.parse(JSON.stringify(this.defaultBody));
      body[this.rootKey]["action"] = action;
      body[this.rootKey]["merchant_id"] = WarpConfig.MERCHANT_ID;
      if (data){
        body[this.rootKey] = Object.assign(data, body[this.rootKey]);
      }
      this.postContext(body, callback);
      return true;
    }
    catch(e){
      return false;
    }
  }
}
