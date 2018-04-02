import Config from 'react-native-config';

export const MERCHANT_ID = Config.MERCHANT_ID;
export const APP_UUID = Config.WARPLY_APP_UUID;

export const BASE_URL = 'https://engage.warp.ly/';
export const MOBILE_API_PATH = 'api/mobile/v2/' + Config.WARPLY_APP_UUID;
export const USER_API_PATH = 'user/';
export const OAUTH_API_PATH = 'oauth/';
export const CONTEXT_API_PATH = 'pay/';
