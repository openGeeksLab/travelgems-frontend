import { combineReducers } from "redux";
import anonymous from "./anonymous";
import auth from "./auth";

export default combineReducers({
  anonymous,
  auth
});
