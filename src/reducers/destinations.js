
import type { Action } from '../actions/types';
import { OPEN_DRAWER, CLOSE_DRAWER } from '../actions/drawer';
import { SET_DESTINATIONS } from '../actions/destinations';

export type State = {
    destinationsArray: array,
    destinationsIds: json
}

const initialState = {
  destinationsArray: [],
  destinationsIds: {},
};

export default function (state:State = initialState, action:Action): State {
  if (action.type === SET_DESTINATIONS) {
    return {
      ...state,
      destinationsArray: action.payload,
      destinationsIds: action.payload
    };
  }

  return state;
}
