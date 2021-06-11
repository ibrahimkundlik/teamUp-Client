import { searchActionType } from "./search.type";
import * as api from "../../api/api-call";

export const searchCollection = (query, collection) => async (dispatch) => {
	try {
		dispatch({
			type: searchActionType.SEARCH_START,
		});
		const { data } = await api.searchCollection(query, collection);
		dispatch({
			type: searchActionType.SEARCH_SUCCESS,
			payload: data.result,
		});
	} catch (error) {
		let errorMessage = error.message;
		if (error.response) {
			errorMessage = error.response.data.message;
		}
		dispatch({
			type: searchActionType.SEARCH_FAILURE,
			payload: errorMessage,
		});
	}
};
