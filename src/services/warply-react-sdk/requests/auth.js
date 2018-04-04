import * as WarpUtils from '../utils/WarpUtils'
import * as WarpConfig from '../config.js';
import * as actions from '../redux/actions/actions';

export default class AuthRequestMiddleware{

  constructor(store){
    this.store = store;
    this.HttpApi = WarpUtils.createHttpAPI();
  }

  post(url, data, callback, addHeaders=true){
    let config = {};
    if (addHeaders){
      config = {headers:WarpUtils.generateAuthHeaders(this.store.getState().auth.AccessToken)};
    }
    this.HttpApi.post(url, data, config).then(
      (response) => callback(response)
    );
  }


  login(data, callback, rememberMe=false, retry=true){
    var self = this;
    if (this.isAuthorized() && retry){
      const authorized = this.refreshAuthorization();
      Promise.all([authorized]).then(function(promiseData){
        if (!(promiseData && promiseData[0])){
          self.clearAuth();
          self.login(data, callback, rememberMe, false);
        }
        else{
          callback({"status":1, "msg":'Already authorized'});
        }
      });
      return;
    }

    data["channel"] = "mobile";
    data["app_uuid"] = WarpConfig.APP_UUID;

    this.post(WarpConfig.OAUTH_API_PATH + 'login', data, (response)=>{
      try{
        if (!response.data.status || response.data.status != "1"){
          callback(response.data);
        }
        else{
          const finished = self.authorize(data, response.data, rememberMe);

          Promise.all([finished]).then(function(){
            callback(_.pick(response.data,'consumer_uuid','email_verified','msisdn_verified','status'));
          });
        }
      } catch (e) {
        callback({"status":2, "msg":e});
      }
    }, false);
  }

  register(data, callback, autologin=false, rememberMe=false){
    if (this.isAuthorized()){
      callback({"status":1, "msg":'Already authorized'});
      return;
    }

    data["channel"] = "mobile";
    data["app_uuid"] = WarpConfig.APP_UUID;

    var self = this;
    this.post(WarpConfig.USER_API_PATH + 'register', data, (response)=>{
      try{
        if (!response.data.status || response.data.status != "1"){
          callback(response.data);
        }
        else{
          const finished = (autologin && response.data.message && response.data.message.client_id) ? self.authorize(data, response.data.message, rememberMe): true;

          Promise.all([finished]).then(function(){
            callback({"status":response.data.status, "consumer_uuid":response.data.consumer_uuid});
          });
        }
      } catch (e) {
        callback({"status":2, "msg":e});
      }
    }, false);
  }

  logout(callback){
    try{
      this.clearAuth();
      callback({"status":1, "msg":"success"});
    } catch (e){
      callback({"status":2, "msg":e});
    }
  }

  authorize(sentData, receivedData, rememberMe){
    var self = this;
    return new Promise(function cb(resolve, reject){
      const authorizeData = {"response_type":"code","scope":"email app_id", "client_id":receivedData["client_id"], "email":sentData["id"], "app_id":receivedData["app_id"], "confirm":"yes"};
      var tokenData = {"grant_type":"authorization_code","code":null,"client_id":receivedData["client_id"],"client_secret":receivedData["client_secret"],"scope":"email app_id","redirect_uri":WarpConfig.BASE_URL + WarpConfig.OAUTH_API_PATH + "authorized"};

      const authorization = new Promise(function cb(authResolve, authReject){
        self.post(WarpConfig.OAUTH_API_PATH + 'web_authorize', authorizeData, (response)=>{
          if (!response.data.code){
            resolve(false);
          }
          else{
            authResolve(response.data);
          }
        });
      }).catch(function (e) {
        resolve(false);
      });

      Promise.all([authorization]).then(function(data){
        if (!(data && data[0] && data[0]["code"])){
          resolve(false);
        }

        const accessTokens = new Promise(function cb(tokenResolve, tokenReject) {
          tokenData["code"] = data[0]["code"];
          self.post(WarpConfig.OAUTH_API_PATH + 'token', tokenData, (response)=>{
            if (!response.data.access_token){
              resolve(false);
            }
            else{
              tokenResolve(response.data);
            }
          });
        }).catch(function (e) {
          resolve(false);
        });

        Promise.all([accessTokens]).then(function(data){
          if (!(data && data[0] && data[0]["access_token"] && data[0]["refresh_token"])){
            resolve(false);
          }

          self.store.dispatch(actions.setAccessTokens({access_token: data[0].access_token,refresh_token: data[0].refresh_token}));

          if (rememberMe){
            self.store.dispatch(actions.setAuthClient({client_secret: receivedData["client_secret"], client_id: receivedData["client_id"]}));
          }

          resolve(true);
        }).catch(function (e) {
          resolve(false);
        });
      }).catch(function (e) {
        resolve(false);
      });;
    });
  }

  refreshAuthorization(){
    var self = this;
    return new Promise((resolve, reject) => {
      var requestData = {
        "grant_type":"refresh_token",
        "refresh_token":self.store.getState().auth.RefreshToken,
        "client_secret":self.store.getState().auth.ClientSecret,
        "client_id":self.store.getState().auth.ClientId
      };
      self.post(WarpConfig.OAUTH_API_PATH + 'token', requestData, (response)=>{
        if (!response.data.access_token){
          resolve(false);
        }
        else{
          self.store.dispatch(actions.setAccessTokens({access_token: response.data.access_token, refresh_token: response.data.refresh_token}));
          resolve(true);
        }
      });
    });
  }

  postContext(data, callback, retry=true){
    if (!this.isAuthorized()){
      callback(401);
      return;
    }

    var self = this;
    this.post(WarpConfig.CONTEXT_API_PATH + 'context', data, (response)=>{
      if (!response.status==200 || !response.data.status || response.data.status != "1"){
        self.handlePostExc(response, data, callback, retry);
      }
      else{
        callback(response);
      }
    });
  }

  handlePostExc(response, data, callback, retry){
    if (response.status==401){
      if (!retry){
        self.clearAuth();
        callback(401);
      }
      else {
        const authorized = this.refreshAuthorization();

        var self = this;
        Promise.all([authorized]).then(function(data){
          if (!(data && data[0])){
            self.clearAuth();
            callback(401);
          }
          else{
            self.postContext(data, callback, false);
          }
        });
      }
    }
    else{
      callback(response);
    }
  }

  clearAuth(){
    this.store.dispatch(actions.deleteAccessTokens());
    this.store.dispatch(actions.deleteAuthClient());
  }

  isAuthorized(){
    return this.store.getState().auth.AccessToken;
  }

}
