import type { Action } from '../actions/types';
import { SET_PROFILE, SET_FAVOURITE_DESTINATIONS, SET_FAVOURITE_ACTIVITIES} from '../actions/profile';

export type State = {
  profileInfo: json,
  profileBadges: json,
  favouriteDestinations: array,
  favouriteActivities: array,
  purchasedPlans: array,
  purchasedActivities: array,
};

const initialState = {
  profileInfo: {},
  profileBadges: {},
  favouriteDestinations: [],
  favouriteActivities: [],
  purchasedPlans: [{
    'img_preview':"https://warply.s3.amazonaws.com/applications/696e7c69e5b0454d884dde40cb23c34c/images/destinations/destination_preview.png",
    'name':"Spetses",
    'id':"ac832a8b40484cc1834c7b4badeac01c",
    'favourite':true,
    'country':"Greece",
    'created':"2018-04-05 14:23:57.736193",
    'places':{
      '2018-07-25':[{
          'img_preview':"https://warply.s3.amazonaws.com/applications/696e7c69e5b0454d884dde40cb23c34c/images/places/place_preview.png",
          'name':"Agia Marina Beach",
          'id':"cc057825a99b44f1aa64e1c458808a5d",
          'tags':["type:beach"],
        },{
          'img_preview':"https://warply.s3.amazonaws.com/applications/696e7c69e5b0454d884dde40cb23c34c/images/places/place_preview.png",
          'name':"Agia Paraskevi",
          'id':"4f4686703b4448d392546dfdc8d3f2e6",
          'tags':["type:beach"],
        }],
      '2018-07-26':[{
          'img_preview':"https://warply.s3.amazonaws.com/applications/696e7c69e5b0454d884dde40cb23c34c/images/places/place_preview.png",
          'name':"Agioi Anargiroi",
          'id':"57381ba7ea9b4169821118a3b42f1f53",
          'tags':["type:beach"],
        },{
          'img_preview':"https://warply.s3.amazonaws.com/applications/696e7c69e5b0454d884dde40cb23c34c/images/places/place_preview.png",
          'name':"Agios Mamas",
          'id':"b73345ba38974ff4b8347ee5f9fe5154",
          'tags':["type:beach"],
        }],
    }
  }],
  purchasedActivities: [{
    "uuid":"bdc2476e5ebe4812814765ab611242c3",
    "created":"2018-04-05 14:23:57.736193",
    "photo":"https://warply.s3.amazonaws.com/applications/696e7c69e5b0454d884dde40cb23c34c/images/activities/activity_preview.png",
    "name":"Gastronomic taste trip",
    "tags":["country:Greece", "price:<200", "type:food"],
    "category_name":"Corfu",
    "price":"150",
    "currency":"€",
    "booked_date":"2018-07-26"
  }],
};

function parseProfile(data){
  var profileInfo = JSON.parse(JSON.stringify(data));
  var profileBadges = data.tags["behaviors"] ? data.tags["behaviors"] : [];
  delete profileInfo["tags"];

  return [profileInfo, profileBadges];
}

function parseFavouriteDestinations(data){
  var favouriteDestinations = [];

  var f_obj = null;
  for (var i=0;i<data.length;i++){
    if (data[i]["favourite"]){
      f_obj = _.pick(data[i],'img_preview','name','id','favourite');
      f_obj["country"] = data[i]["extra_fields"]["country"];
      favouriteDestinations.push(f_obj);
    }
  }

  return favouriteDestinations;
}

function parseFavouriteActivities(data){
  var favouriteActivities = [];
  var activity = null;
  for (var i=0;i<data.favourites.length;i++){
    try{
      activity = JSON.parse(JSON.stringify(data.activities[data.favourites[i]["uuid"]]));
      activity = _.pick(activity,'photo','name','uuid','category_name','tags','price','currency');
      favouriteActivities.push(activity);
    }catch(e){}
  }

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
