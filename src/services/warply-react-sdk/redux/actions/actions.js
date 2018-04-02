
import type { Action } from './types';


// --------------------------------------------------
// --------------------------------------------------
// ANONYMOUS ACTIONS
// --------------------------------------------------
// --------------------------------------------------

export const SET_WEB_ID = 'SET_WEB_ID';
export const SET_API_KEY = 'SET_API_KEY';
export const QUEUE_REQUEST = 'QUEUE_REQUEST';
export const QUEUE_EVENT = 'QUEUE_EVENT';
export const DEQUEUE_REQUEST = 'DEQUEUE_REQUEST';
export const EMPTY_EVENT_QUEUE = 'EMPTY_EVENT_QUEUE';
export const SET_CONTEXT_VARIABLES = 'SET_CONTEXT_VARIABLES';
export const SET_MICRO_APPS = 'SET_MICRO_APPS';
export const DELETE_AYTH_KEYS = 'DELETE_AYTH_KEYS';


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

export function deleteAuthKeys():Action {
  return {
    type: DELETE_AYTH_KEYS,
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



// --------------------------------------------------
// --------------------------------------------------
// AUTH ACTIONS
// --------------------------------------------------
// --------------------------------------------------


export const SET_ACCESS_TOKENS = 'SET_ACCESS_TOKENS';
export const DELETE_ACCESS_TOKENS = 'DELETE_ACCESS_TOKENS';
export const SET_AUTH_CLIENT = 'SET_AUTH_CLIENT';
export const DELETE_AUTH_CLIENT = 'DELETE_AUTH_CLIENT';


export function setAccessTokens(tokens):Action {
  return {
    type: SET_ACCESS_TOKENS,
    tokens: tokens
  };
}

export function deleteAccessTokens():Action {
  return {
    type: DELETE_ACCESS_TOKENS,
  };
}

export function setAuthClient(data):Action {
  return {
    type: SET_AUTH_CLIENT,
    data: data
  };
}

export function deleteAuthClient():Action {
  return {
    type: DELETE_AUTH_CLIENT,
  };
}
