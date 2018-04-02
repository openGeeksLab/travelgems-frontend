import MicroApp from '../MicroApp';

export default class DeviceInfo extends MicroApp {
  static permissions = ['ANONYMOUS'];
  static mappName = 'MAPP_DEVICE_INFO';
  rootKey = 'device_info';
  static allowedActions = [];

  constructor(store, requestMiddleware){
    super(store, requestMiddleware);
    this.setDefaultBody();
    this.handleAction('send_info');
  }

  static getDevInfo(){
    return {};
  }

  dispatchAction(action, data){
    if (DeviceInfo.allowedActions.indexOf(action)>-1){
      this.handleAction(action, data)
    }
  }

  async handleAction(action, data){
    if (action=='send_info'){
      var devInfo = DeviceInfo.getDevInfo();
      var body = {};
      body[this.rootKey] = {
        advertising_id:"abcdefg"
      };
//      this.postContext(body);
    }
  }

  handlePostContext(response){
    var response = super.handlePostContext(response);
  }
}
