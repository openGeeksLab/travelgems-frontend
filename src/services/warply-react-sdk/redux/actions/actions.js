
import type { Action } from './types';

export const SET_WEB_ID = 'SET_WEB_ID';
export const SET_API_KEY = 'SET_API_KEY';
export const QUEUE_REQUEST = 'QUEUE_REQUEST';
export const QUEUE_EVENT = 'QUEUE_EVENT';
export const DEQUEUE_REQUEST = 'DEQUEUE_REQUEST';
export const EMPTY_EVENT_QUEUE = 'EMPTY_EVENT_QUEUE';
export const SET_CONTEXT_VARIABLES = 'SET_CONTEXT_VARIABLES';
export const SET_MICRO_APPS = 'SET_MICRO_APPS';


export function setWebId(WebId):Action {
  return {
    type: SET_WEB_ID,
    value: WebId
  };
}

export function setApiKey(ApiKey):Action {
  return {
    type: SET_API_KEY,
    value: ApiKey
  };
}

export function queueRequest(request):Action {
  return {
    type: QUEUE_REQUEST,
    request: request
  };
}

export function queueEvent(event):Action {
  return {
    type: QUEUE_EVENT,
    event: event
  };
}

export function dequeueRequest():Action {
  return {
    type: DEQUEUE_REQUEST,
    request: request
  };
}

export function emptyEventQueue():Action {
  return {
    type: EMPTY_EVENT_QUEUE
  };
}

export function setContextVariables(variables):Action {
  return {
    type: SET_CONTEXT_VARIABLES,
    variables: variables
  };
}

export function setMicroApps(mapps):Action {
  return {
    type: SET_MICRO_APPS,
    mapps: mapps
  };
}
