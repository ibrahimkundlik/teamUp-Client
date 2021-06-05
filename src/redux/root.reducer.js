import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import teamReducer from "./teams/teams.reducer";

export default combineReducers({
	auth: userReducer,
	teams: teamReducer,
});
