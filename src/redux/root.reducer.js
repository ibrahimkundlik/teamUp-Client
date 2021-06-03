import { combineReducers } from "redux";
import postReducer from "./posts/posts.reducer";
import userReducer from "./user/user.reducer";

export default combineReducers({
	posts: postReducer,
	auth: userReducer,
});
