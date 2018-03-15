import MicroApp from '../MicroApp';

export default class DeviceInfo extends MicroApp {
  mappName = 'MAPP_DEVICE_INFO';
  rootKey = 'device_info';

  constructor(){
    super();
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

  handleAction(action){
    if (action=='send'){
      this.postContext({});
    }
  }

  postContext(data){
    super.postContext(data);
  }

  handlePostContext(response){
    response = super.handlePostContext(response);
  }
}
