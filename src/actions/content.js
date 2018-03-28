
import type { Action } from './types';

export const SET_DESTINATIONS = 'SET_DESTINATIONS';
export const SET_ACTIVITIES = 'SET_ACTIVITIES';

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
