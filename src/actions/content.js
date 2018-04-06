
import type { Action } from './types';

export const SET_DESTINATIONS = 'SET_DESTINATIONS';
export const SET_ACTIVITIES = 'SET_ACTIVITIES';
export const SET_POLL = 'SET_POLL';
export const SET_CONTENT_PERMISSION = 'SET_CONTENT_PERMISSION';

export function setDestinations(payload):Action {
  return {
    type: SET_DESTINATIONS,
    payload: payload
  };
}

export function setActivities(payload):Action {
  return {
    type: SET_ACTIVITIES,
    payload: payload.result
  };
}

export function setPoll(payload):Action {
  return {
    type: SET_POLL,
    payload: payload
  };
}

export function setContentPermission(permission):Action {
  return {
    type: SET_CONTENT_PERMISSION,
    permission: permission
  };
}
