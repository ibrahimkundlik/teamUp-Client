import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import teamReducer from "./teams/teams.reducer";
import searchReducer from "./search/search.reducer";
import taskReducer from "./task/task.reducer";

export default combineReducers({
	auth: userReducer,
	teams: teamReducer,
	search: searchReducer,
	task: taskReducer,
});
