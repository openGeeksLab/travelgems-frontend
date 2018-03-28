import MicroApp from '../MicroApp';

export default class Content extends MicroApp {
  static mappName = 'CONTENT';
  rootKey = 'content';
  static allowedActions = ['retrieve'];

  constructor(store, requestMiddleware){
    super(store, requestMiddleware);
    this.setDefaultBody();
  }

  dispatchAction(action, data, callback){
    if (this.constructor.allowedActions.indexOf(action)>-1){
      return this.handleAction(action, callback);
    }
    return false;
  }

  handleAction(action, callback=null){
    if (action=='retrieve'){
      var body = this.defaultBody;
      body[this.rootKey]["action"] = action
      this.postContext(body, callback);
      return true;
    }

    return false;
  }
}
