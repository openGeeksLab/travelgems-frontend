// a library to wrap and simplify api calls
import apisauce from 'apisauce'
import Config from 'react-native-config';
import sha256 from 'sha256'
console.log(Config);
// our "constructor"
// TODO add to .env
const app_uuid="0c1e8b90d78811e488300800200c9a66";
let api_key = null;
let web_id = null;
let generateHeaders=()=>{
  console.log('generateHeaders');
  let headers = {};
  let now = new Date();
  let date_format = now.getFullYear() + '-' + now.getMonth() + '-' + now.getDate() + ' ' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
  headers["loyalty-web-id"] = web_id;
  headers["loyalty-date"] = date_format;
  headers['loyalty-signature'] = sha256(api_key + date_format);
  headers['Channel','mobile'];
  return headers;
}
const create = (baseURL = Config.MOBILE_API) => {
  console.log('WarplpySDK constructor')
  console.log(baseURL);
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  console.log(sha256('message digest'))
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache'
    },
    // 10 second timeout...
    timeout: 10000
  })

  // ------
  // STEP 2
  // ------
  //
  // Define some functions that call the api.  The goal is to provide
  // a thin wrapper of the api layer providing nicer feeling functions
  // rather than "get", "post" and friends.
  //
  // I generally don't like wrapping the output at this level because
  // sometimes specific actions need to be take on `403` or `401`, etc.
  //
  // Since we can't hide from that, we embrace it by getting out of the
  // way at this level.
  //

  const register = () => api.get('api/mobile/v2/' + app_uuid + '/register/');
  const postContext = (data) => api.post('api/mobile/v2/'+app_uuid+'/context/',data,{headers:generateHeaders()});
  const setWebId = (webid) =>{ web_id = webid;}
  const setApiKey = (apikey) =>{ api_key = apikey;}




  // ------
  // STEP 3
  // ------
  //
  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  // methods in step 2.
  //
  // Notice we're not returning back the `api` created in step 1?  That's
  // because it is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.
  //
  return {
    // a list of the API functions from step 2
    postContext,
    register,
    setWebId,
    setApiKey,
  }
}

// let's return back our create method as the default.
export default {
  create
}
