import * as api from "../../api/api-call";
import { postAction } from "./posts.type";

export const getPosts = () => async (dispatch) => {
	try {
		const { data } = await api.fetchPosts();
		dispatch({
			type: postAction.FETCH_ALL,
			payload: data,
		});
	} catch (error) {
		console.log(error.message);
	}
};

export const createPost = (post) => async (dispatch) => {
	try {
		const { data } = await api.createPost(post);
		dispatch({
			type: postAction.CREATE_POST,
			payload: data,
		});
	} catch (error) {
		console.log(error.message);
	}
};
