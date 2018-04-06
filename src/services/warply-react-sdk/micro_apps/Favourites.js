import MicroApp from '../MicroApp';

export default class Favourites extends MicroApp {
  static permissions = ['AUTH'];
  static mappName = 'FAVOURITES';
  rootKey = 'favourites';
  static allowedActions = ['get','add'];

  constructor(store, requestMiddleware){
    super(store, requestMiddleware);
    this.setDefaultBody();
  }

  dispatchAction(action, data, callback, permission){
    if (this.constructor.allowedActions.indexOf(action)>-1){
      return this.handleAction(action, data, callback, permission);
    }
    return false;
  }

  handleAction(action, data, callback, permission){
    try{
      var body = JSON.parse(JSON.stringify(this.defaultBody));
      body[this.rootKey]["action"] = action;
      if (data){
        if (action=='add' && (data.product_id || data.product_uuid)){
           data["product"] = [JSON.parse(JSON.stringify(data))];
           delete data["product_id"];
           delete data["product_uuid"];
        }
        body[this.rootKey] = Object.assign(data, body[this.rootKey]);
      }
      this.postContext(body, callback, permission);
      return true;
    }catch(e){
      return false;
    }
  }
}
