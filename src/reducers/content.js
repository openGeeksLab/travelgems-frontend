
import type { Action } from '../actions/types';
import { OPEN_DRAWER, CLOSE_DRAWER } from '../actions/drawer';
import { SET_DESTINATIONS, SET_ACTIVITIES } from '../actions/content';

export type State = {
    destinationsArray: array,
    placesArray: array,
    activitiesArray: array,

    destinationsById: json,  // uuids to objects
    placesById: json,  // uuids to objects
    activitiesById: json,  // uuids to objects

    destinationsCustomIds: json, // custom ids to uuids
    destinationsPlaces: json, // destination uuids to place uuids
    destinationsActivities: json, // destination uuids to activities uuids
    destinationsTrips: json,
};

const initialState = {
  destinationsArray: [],
  placesArray: [],
  activitiesArray: [],

  destinationsById: {},
  placesById: {},
  activitiesById: {},

  destinationsCustomIds: {},
  destinationsPlaces: {},
  destinationsActivities: {},
  destinationsTrips: {},
};

function parseDestinations(data){
  var destinationsArray = [];
  var destinationsById = {};
  var destinationsCustomIds = {};
  var destinationsPlaces = {};
  var placesArray = [];
  var placesById = {};

  for (var i = 0; i < data.length; i++){
    if (data[i]["category_name"]=="destination"){
      destinationsArray.push(data[i]);
      destinationsById[data[i]["id"]] = data[i];
      destinationsCustomIds[data[i]["custom_id"].toString()] = data[i]["id"];
    }
    else {
      placesArray.push(data[i]);
      placesById[data[i]["id"]] = data[i];
      if (!destinationsPlaces.hasOwnProperty(data[i]["parent"])){
        destinationsPlaces[data[i]["parent"]] = [];
      }
      destinationsPlaces[data[i]["parent"]].push(data[i]["id"]);
    }
  }

  return [destinationsArray, destinationsById, destinationsCustomIds, destinationsPlaces, placesArray, placesById];
}

function parseProducts(data){
  var activitiesArray = [];
  var destinationsActivities = {};
  var destinationsTrips = {};
  var activitiesById = {};

  var productJson = {};
  for (var i = 0; i < data.length; i++){
    productJson = _.pick(data[i],'category_custom_id','category_name','created','description','extra_fields','id','merchant','name','price','sku','updated','uuid','currency');
    productJson["extra_fields"] = JSON.parse(productJson["extra_fields"]);

    if (productJson["category_name"]=="trip"){
      destinationsTrips[productJson["sku"].toString()] = productJson;
    }
    else{
      activitiesArray.push(productJson);
      activitiesById[productJson["uuid"]] = productJson;

      if (!destinationsActivities.hasOwnProperty(productJson["category_custom_id"].toString())){
        destinationsActivities[productJson["category_custom_id"].toString()] = [];
      }
      destinationsActivities[productJson["category_custom_id"].toString()].push(productJson["uuid"]);
    }
  }

  return [activitiesArray, activitiesById, destinationsActivities, destinationsTrips];
}

export default function (state:State = initialState, action:Action): State {
  var parsedValues = null;
  switch (action.type) {

    case SET_DESTINATIONS: {
      parsedValues = parseDestinations(action.payload);
      return {
        ...state,
        destinationsArray: parsedValues[0],
        destinationsById: parsedValues[1],
        destinationsCustomIds: parsedValues[2],
        destinationsPlaces: parsedValues[3],
        placesArray: parsedValues[4],
        placesById: parsedValues[5],
      };
    }

    case SET_ACTIVITIES: {
      parsedValues = parseProducts(action.payload);
      return {
        ...state,
        activitiesArray: parsedValues[0],
        activitiesById: parsedValues[1],
        destinationsActivities: parsedValues[2],
        destinationsTrips: parsedValues[3],
      };
    }

    default:
      return state;
  }
}
