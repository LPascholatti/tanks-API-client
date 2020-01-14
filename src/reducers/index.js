import { combineReducers } from "redux";
import tanks from './tanks';
import tank from './tank';

export default combineReducers({
  tank,
  tanks
});