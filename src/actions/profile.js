import type { Action } from './types';

export const SET_PROFILE = 'SET_PROFILE';
export const SET_FAVOURITE_DESTINATIONS = 'SET_FAVOURITE_DESTINATIONS';
export const SET_FAVOURITE_ACTIVITIES = 'SET_FAVOURITE_ACTIVITIES';


export function setFavouriteDestinations(payload):Action {
  return {
    type: SET_FAVOURITE_DESTINATIONS,
    payload: payload
  };
}

export function setFavouriteActivities(payload):Action {
  return {
    type: SET_FAVOURITE_ACTIVITIES,
    payload: payload
  };
}

export function setProfile(payload):Action {
  return {
    type: SET_PROFILE,
    payload: payload
  };
}
