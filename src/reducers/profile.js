import type { Action } from '../actions/types';
import { SET_PROFILE, SET_FAVOURITE_DESTINATIONS, SET_FAVOURITE_ACTIVITIES} from '../actions/profile';

export type State = {
  profileInfo: json,
  profileBadges: json,
  favouriteDestinations: array,
  favouriteActivities: array,
};

const initialState = {
  profileInfo: {},
  profileBadges: {},
  favouriteDestinations: [],
  favouriteActivities: [],
};

function parseProfile(data){
  debugger;
  var profileInfo = JSON.parse(JSON.stringify(data));
  var profileBadges = data.tags["custom"] || ["single","transportation","christmas"];
  delete profileInfo["tags"];

  return [profileInfo, profileBadges];
}

function parseFavouriteDestinations(data){
  var favouriteDestinations = [];

  var f_obj = null;
  for (var i=0;i<data.length;i++){
    if (i<10){  // if (data[i]["favourite"]){
      f_obj = _.pick(data[i],'img_preview','name','id');
      f_obj["country"] = data[i]["extra_fields"]["country"];
      favouriteDestinations.push(f_obj);
    }
  }

  return favouriteDestinations;
}

function parseFavouriteActivities(data){
  var favouriteActivities = [];
  debugger;

  return favouriteActivities;
}

export default function (state:State = initialState, action:Action): State {
  var parsedValues = null;
  switch (action.type) {

    case SET_PROFILE: {
      parsedValues = parseProfile(action.payload);
      return {
        ...state,
        profileInfo: parsedValues[0],
        profileBadges: parsedValues[1],
      };
    }

    case SET_FAVOURITE_DESTINATIONS: {
      return {
        ...state,
        favouriteDestinations: parseFavouriteDestinations(action.payload),
      };
    }

    case SET_FAVOURITE_ACTIVITIES: {
      return {
        ...state,
        favouriteActivities: parseFavouriteActivities(action.payload),
      };
    }

    default:
      return state;
  }
}
