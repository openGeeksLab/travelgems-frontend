
import type { Action } from './types';
import * as actions from '../actions/actions';


export type State = {
    AccessToken: string,
    RefreshToken: string,
    ClientId: string,
    ClientSecret: string,
}
export const SET_ACCESS_TOKENS = 'SET_ACCESS_TOKENS';
export const DELETE_ACCESS_TOKENS = 'DELETE_ACCESS_TOKENS';
export const SET_AUTH_CLIENT = 'SET_AUTH_CLIENT';
export const DELETE_AUTH_CLIENT = 'DELETE_AUTH_CLIENT';

const initialState = {
    AccessToken: null,
    RefreshToken: null,
    ClientId: null,
    ClientSecret: null,
};

export default function (state:State = initialState, action:Action): State {
  switch(action.type) {
    case actions.SET_ACCESS_TOKENS:
      return {
        ...state,
        AccessToken: action.tokens["access_token"],
        RefreshToken: action.tokens["refresh_token"],
      }

    case actions.DELETE_ACCESS_TOKENS:
      return {
        ...state,
        AccessToken: null,
        RefreshToken: null
      }

    case actions.SET_AUTH_CLIENT:
      return {
        ...state,
        ClientId: action.data["client_id"],
        ClientSecret: action.data["client_secret"],
      }

    case actions.DELETE_AUTH_CLIENT:
      return {
        ...state,
        ClientId: null,
        ClientSecret: null,
      }

    default:
      return state
  }
}
