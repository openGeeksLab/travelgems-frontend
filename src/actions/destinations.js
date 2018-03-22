
import type { Action } from './types';

export const SET_DESTINATIONS = 'SET_DESTINATIONS';

export function setDestinations(payload):Action {
  return {
    type: SET_DESTINATIONS,
    payload: payload
  };
}
