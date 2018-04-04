import MicroApp from '../MicroApp';

export default class ConsumerData extends MicroApp {
  static permissions = ['AUTH'];
  static mappName = 'CONSUMER_DATA';
  rootKey = 'consumer_data';
  static allowedActions = ['handle_user_details'];

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
    if (action=='handle_user_details'){
      var body = this.defaultBody;
      body[this.rootKey]["action"] = action
      if (data){
        body[this.rootKey] = Object.assign(data, body[this.rootKey]);
      }
      this.postContext(body, callback, permission);
      return true;
    }

    return false;
  }
}
