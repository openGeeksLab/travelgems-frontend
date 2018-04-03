import type { Action } from '../actions/types';
import { OPEN_DRAWER, CLOSE_DRAWER } from '../actions/drawer';
import { SET_DESTINATIONS, SET_ACTIVITIES } from '../actions/content';

export type State = {
  destinationsArray: array,
  placesArray: array,
  activitiesArray: array,

  destinationsById: json, // uuids to objects
  placesById: json, // uuids to objects
  activitiesById: json, // uuids to objects

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

function parseDestinations(data) {
  const destinationsArray = [];
  const destinationsById = {};
  const destinationsCustomIds = {};
  const destinationsPlaces = {};
  const placesArray = [];
  const placesById = {};

  for (let i = 0; i < data.length; i++) {
    if (data[i].category_name == 'destination') {
      data[i].extra_fields.latitude =
        data[i].extra_fields && data[i].extra_fields.latitude
          ? parseFloat(data[i].extra_fields.latitude.replace(',', '.'))
          : 0.0;
      data[i].extra_fields.longitude =
        data[i].extra_fields && data[i].extra_fields.longitude
          ? parseFloat(data[i].extra_fields.longitude.replace(',', '.'))
          : 0.0;
      destinationsArray.push(data[i]);
      destinationsById[data[i].id] = data[i];
      destinationsCustomIds[data[i].custom_id.toString()] = data[i].id;
    } else {
      data[i].extra_fields.latitude =
        data[i].extra_fields && data[i].extra_fields.latitude
          ? parseFloat(data[i].extra_fields.latitude.replace(',', '.'))
          : 0.0;
      data[i].extra_fields.longitude =
        data[i].extra_fields && data[i].extra_fields.longitude
          ? parseFloat(data[i].extra_fields.longitude.replace(',', '.'))
          : 0.0;
      placesArray.push(data[i]);
      placesById[data[i].id] = data[i];
      if (!destinationsPlaces.hasOwnProperty(data[i].parent)) {
        destinationsPlaces[data[i].parent] = [];
      }
      destinationsPlaces[data[i].parent].push(data[i].id);
    }
  }

  return [
    destinationsArray,
    destinationsById,
    destinationsCustomIds,
    destinationsPlaces,
    placesArray,
    placesById,
  ];
}

function parseProducts(content, data) {
  const activitiesArray = [];
  const destinationsActivities = {};
  const destinationsTrips = {};
  const activitiesById = {};

  let productJson = {};
  let destinationUUID = null;

  for (let i = 0; i < data.length; i++) {
    productJson = _.pick(
      data[i],
      'photo',
      'inner_photo',
      'category_custom_id',
      'category_name',
      'created',
      'description',
      'extra_fields',
      'id',
      'merchant',
      'name',
      'price',
      'sku',
      'updated',
      'uuid',
      'currency',
    );
    productJson.extra_fields = JSON.parse(productJson.extra_fields);

    if (productJson.category_name == 'trip') {
      destinationsTrips[productJson.sku.toString()] = productJson;
    } else {
      activitiesArray.push(productJson);
      activitiesById[productJson.uuid] = productJson;

      destinationUUID = content.destinationsCustomIds[productJson.category_custom_id.toString()];
      if (!destinationsActivities.hasOwnProperty(destinationUUID)) {
        destinationsActivities[destinationUUID] = [];
      }
      destinationsActivities[destinationUUID].push(_.pick(productJson, 'inner_photo', 'name', 'price', 'uuid', 'currency'));
    }
  }

  return [activitiesArray, activitiesById, destinationsActivities, destinationsTrips];
}

export default function (state: State = initialState, action: Action): State {
  let parsedValues = null;
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
      parsedValues = parseProducts(state, action.payload);
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
