import { combineReducers } from "redux";
import postReducer from "./posts/posts.reducer";

export default combineReducers({
	posts: postReducer,
});
