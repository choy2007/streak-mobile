import { combineReducers } from "redux";
import NavigationReducer from "./reducer_navigation";
import UserReducer from "./reducer_user";
import GameReducer from "./reducer_games";

const AppReducer = combineReducers({
  nav: NavigationReducer,
  auth: UserReducer,
  game: GameReducer


});

export default AppReducer;
