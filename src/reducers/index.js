import { combineReducers } from "redux";
import NavigationReducer from "./reducer_navigation";
import UserReducer from "./reducer_user";


const AppReducer = combineReducers({
  nav: NavigationReducer,
  auth: UserReducer,

});

export default AppReducer;
