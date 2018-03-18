import WarplyReactSDK from './WarplyReactSDK';
import * as WarpUtils from './utils/WarpUtils'
import Config from 'react-native-config';

export default class RequestHandler{

  constructor(baseURL = Config.MOBILE_API){
    this.HttpApi = WarpUtils.createHttpAPI();
  }

  get(url, callback, addHeaders=true){
    let config = {};
    if (addHeaders){
      config = {headers:WarpUtils.generateHeaders(WarplyReactSDK.store.getState().reducers.WebId, WarplyReactSDK.store.getState().reducers.ApiKey)};
    }
    this.HttpApi.get(url, null, config).then(
      (response) => callback(response)
    );
  }

  post(url, data, callback, addHeaders=true){
    let config = {};
    if (addHeaders){
      config = {headers:WarpUtils.generateHeaders(WarplyReactSDK.store.getState().reducers.WebId, WarplyReactSDK.store.getState().reducers.ApiKey)};
    }
    this.HttpApi.post(url,data,{headers:WarpUtils.generateHeaders(WarplyReactSDK.store.getState().reducers.WebId, WarplyReactSDK.store.getState().reducers.ApiKey)}).then(
      (response) => callback(response)
    );
  }
}
