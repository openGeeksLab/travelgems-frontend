import WarplyReactSDK from './WarplyReactSDK';
import * as WarpUtils from './utils/WarpUtils';
import Config from 'react-native-config';

export default class MicroApp {

  postContext(data){
    if (!WarplyReactSDK.isRegistered(true)){
      return;
    }

    WarplyReactSDK.requestHandler.post(Config.MOBILE_API_PATH + Config.APP_UUID + '/context/', data, this.handlePostContext.bind(this));
  }

  handlePostContext(response){
    response = response.data.context;
    response = {
      "data":response[this.mappName],
      "status":response[this.mappName + '-status']
    };
    return response;
  }
}
