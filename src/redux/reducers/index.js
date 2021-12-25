import { combineReducers } from "redux";
import alertReducer from "./alertReducer";
import authReducer from "./authReducer";
import eventReducer from "./eventReducer";

export default combineReducers({
  auth: authReducer,
  event: eventReducer,
  alert: alertReducer,
});
