import type { Action } from '../actions/types';
import { SET_DESTINATIONS, SET_ACTIVITIES, SET_POLL, SET_CONTENT_PERMISSION } from '../actions/content';

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

    activitiesFilters: array,
    destinationsFilters: array,

    poll: json,

    contentPermission: string,
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

  activitiesFilters: [],
  destinationsFilters: [],

  poll: {},

  contentPermission: null
};

function parseDestinations(data){
  var destinationsArray = [];
  var destinationsById = {};
  var destinationsCustomIds = {};
  var destinationsPlaces = {};
  var placesArray = [];
  var placesById = {};
  var destinationsFilters = [];

  for (var i = 0; i < data.length; i++){
    data[i]["tags"] = data[i]["tags"] ? data[i]["tags"].map(t => t.name) : [];
    destinationsFilters = destinationsFilters.concat(data[i]["tags"]);
    if (data[i]["category_name"]=="destination"){
      data[i]["extra_fields"]["latitude"] = (data[i]["extra_fields"] && data[i]["extra_fields"]["latitude"]) ? parseFloat(data[i]["extra_fields"]["latitude"].replace(',', '.')) : 0.00;
      data[i]["extra_fields"]["longitude"] = (data[i]["extra_fields"] && data[i]["extra_fields"]["longitude"]) ? parseFloat(data[i]["extra_fields"]["longitude"].replace(',', '.')) : 0.00;
      destinationsArray.push(data[i]);
      destinationsById[data[i]["id"]] = data[i];
      destinationsCustomIds[data[i]["custom_id"].toString()] = data[i]["id"];
    }
    else {
      data[i]["extra_fields"]["latitude"] = (data[i]["extra_fields"] && data[i]["extra_fields"]["latitude"]) ? parseFloat(data[i]["extra_fields"]["latitude"].replace(',', '.')) : 0.00;
      data[i]["extra_fields"]["longitude"] = (data[i]["extra_fields"] && data[i]["extra_fields"]["longitude"]) ? parseFloat(data[i]["extra_fields"]["longitude"].replace(',', '.')) : 0.00;
      placesArray.push(data[i]);
      placesById[data[i]["id"]] = data[i];
      if (!destinationsPlaces.hasOwnProperty(data[i]["parent"])){
        destinationsPlaces[data[i]["parent"]] = [];
      }
      destinationsPlaces[data[i]["parent"]].push(data[i]["id"]);
    }
  }

  destinationsFilters = [...new Set(destinationsFilters)];

  return [destinationsArray, destinationsById, destinationsCustomIds, destinationsPlaces, placesArray, placesById, destinationsFilters];
}

function parseProducts(content, data){
  var activitiesArray = [];
  var destinationsActivities = {};
  var destinationsTrips = {};
  var activitiesById = {};
  var activitiesFilters = [];

  var productJson = {};
  var destinationUUID = null;
  for (var i = 0; i < data.length; i++){
    productJson = _.pick(data[i],'photo','inner_photo','category_custom_id','category_name','created','description','extra_fields','id','merchant','name','price','sku','updated','uuid','currency','tags');
    productJson["extra_fields"] = JSON.parse(productJson["extra_fields"]);

    productJson["tags"] = productJson["tags"] ? productJson["tags"] : [];

    activitiesFilters = activitiesFilters.concat(productJson["tags"]);
    if (productJson["category_name"]=="trip"){
      destinationsTrips[productJson["sku"].toString()] = productJson;
    }
    else{
      activitiesArray.push(productJson);
      activitiesById[productJson["uuid"]] = productJson;

      destinationUUID = content.destinationsCustomIds[productJson["category_custom_id"].toString()];
      if (!destinationsActivities.hasOwnProperty(destinationUUID)){
        destinationsActivities[destinationUUID] = [];
      }
      destinationsActivities[destinationUUID].push(_.pick(productJson,'photo','inner_photo','name','price','uuid','currency','tags'));
    }
  }

  activitiesFilters = [...new Set(activitiesFilters)];

  return [activitiesArray, activitiesById, destinationsActivities, destinationsTrips, activitiesFilters];
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
        destinationsFilters: parsedValues[6]
      };
    }

    case SET_CONTENT_PERMISSION: {
      return {
        ...state,
        contentPermission: action.permission
      };
    }

    case SET_ACTIVITIES: {
      parsedValues = parseProducts(state, action.payload);
      return {
        ...state,
        activitiesArray: parsedValues[0],
        activitiesById: parsedValues[1],
        destinationsActivities: parsedValues[2],
        destinationsTrips: parsedValues[3],
        activitiesFilters: parsedValues[4],
      };
    }

    case SET_POLL: {
      return {
        ...state,
        poll: action.payload,
      };
    }

    default:
      return state;
  }
}
