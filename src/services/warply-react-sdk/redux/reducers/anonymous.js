
import type { Action } from './types';
import * as actions from '../actions/actions';


export type State = {
    WebId: string,
    ApiKey: string,
    RequestQueue: array,
    EventQueue: array,
    ContextVariables: json,
    MicroApps: array
}

const initialState = {
  WebId: null,
  ApiKey: null,
  RequestQueue: [],
  EventQueue: [],
  ContextVariables: {},
  MicroApps: []
};

export default function (state:State = initialState, action:Action): State {
  switch(action.type) {
    case actions.SET_WEB_ID:
      return {
        ...state,
        WebId: action.value,
      }

    case actions.SET_API_KEY:
      return {
        ...state,
        ApiKey: action.value,
      }

    case actions.QUEUE_REQUEST:
      return {
        ...state,
        RequestQueue: action.request,
      }

    case actions.QUEUE_EVENT:
      return {
        ...state,
        EventQueue: action.event,
      }

    case actions.DEQUEUE_REQUEST:
      return {
        ...state,
        RequestQueue: action.request,
      }

    case actions.EMPTY_EVENT_QUEUE:
      return {
        ...state,
        EventQueue: [],
      }

    case actions.SET_CONTEXT_VARIABLES:
      return {
        ...state,
        ContextVariables: action.variables,
      }

    case actions.SET_MICRO_APP:
      return {
        ...state,
        MicroApps: action.mapps,
      }

    case actions.DELETE_AYTH_KEYS:
      return {
        ...state,
        WebId: null,
        ApiKey: null
      }

    default:
      return state
  }
}
