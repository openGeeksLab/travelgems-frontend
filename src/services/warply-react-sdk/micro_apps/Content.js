import MicroApp from '../MicroApp';

export default class Content extends MicroApp {
  static permissions = ['ANONYMOUS','AUTH'];
  static mappName = 'CONTENT';
  rootKey = 'content';
  static allowedActions = ['retrieve'];

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
    if (action=='retrieve'){
      var body = this.defaultBody;
      body[this.rootKey]["action"] = action
      this.postContext(body, callback, permission);
      return true;
    }

    return false;
  }
}
