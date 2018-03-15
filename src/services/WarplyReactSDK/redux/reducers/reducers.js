
import type { Action } from './types';
import * as actions from '../actions/actions';

export type State = {
    WebId: string,
    ApiKey: string,
    RequestQueue: array,
    EventQueue: array,
    ContextVariables: json
}

const initialState = {
  WebId: null,
  ApiKey: null,
  RequestQueue: [],
  EventQueue: [],
  ContextVariables: {}
};

export default function (state:State = initialState, action:Action): State {
  if (action.type === actions.SET_WEB_ID) {
    return {
      ...state,
      WebId: action.value,
    };
  }

  if (action.type === actions.SET_API_KEY) {
    return {
      ...state,
      ApiKey: action.value,
    };
  }

  if (action.type === actions.QUEUE_REQUEST) {
    return {
      ...state,
      RequestQueue: action.request,
    };
  }

  if (action.type === actions.QUEUE_EVENT) {
    return {
      ...state,
      EventQueue: action.event,
    };
  }

  if (action.type === actions.DEQUEUE_REQUEST) {
    return {
      ...state,
      RequestQueue: action.request,
    };
  }

  if (action.type === actions.EMPTY_EVENT_QUEUE) {
    return {
      ...state,
      EventQueue: [],
    };
  }

  if (action.type === actions.SET_CONTEXT_VARIABLES) {
    return {
      ...state,
      ContextVariables: action.variables,
    };
  }

  return state;
}
