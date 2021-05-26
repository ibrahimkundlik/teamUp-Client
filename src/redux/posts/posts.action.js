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
