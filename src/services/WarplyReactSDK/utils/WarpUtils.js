import * as WarpConfig from '../config.js';
import sha256 from 'sha256';
import apisauce from 'apisauce';


export function generateHeaders(web_id, api_key){
  if (!web_id || !api_key){
    return {};
  }
  let headers = {};
  let now = new Date();
  let date_format = now.getFullYear() + '-' + now.getMonth() + '-' + now.getDate() + ' ' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
  headers["loyalty-web-id"] = web_id;
  headers["loyalty-date"] = date_format;
  headers['loyalty-signature'] = sha256(api_key + date_format);
  headers['Channel','mobile'];
  return headers;
};

export function createHttpAPI(baseURL = WarpConfig.MOBILE_API){
  return apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache'
    },
    timeout: 60000
  })
};
