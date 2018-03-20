import MicroApp from '../MicroApp';

export default class DeviceInfo extends MicroApp {
  mappName = 'MAPP_DEVICE_INFO';
  rootKey = 'device_info';
  static allowedActions = [];

  constructor(store, requestMiddleware){
    super(store, requestMiddleware);

    var devInfo = DeviceInfo.getDevInfo();
    var body = {};
    body[this.rootKey] = {
      advertising_id:"abcdefg"
    };
    this.postContext(body);
  }

  static getDevInfo(){
    return {};
  }

  dispatchAction(action){
    if (allowedActions.indexOf(action)>-1){
      this.handleAction(action)
    }
  }

  handleAction(action){
    if (action=='send'){
      this.postContext({});
    }
  }

  handlePostContext(response){
    response = super.handlePostContext(response);
  }
}
