import { searchActionType } from "./search.type";
import * as api from "../../api/api-call";
import { userActionType } from "../user/user.type";

const catchError = (error) => {
	let errorMessage = error.message;
	if (error.response) {
		errorMessage = error.response.data.message;
	}
	return errorMessage;
};

export const searchCollectionAction =
	(query, collection) => async (dispatch) => {
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
			dispatch({
				type: searchActionType.SEARCH_FAILURE,
				payload: catchError(error),
			});
		}
	};

export const joinRequestAction = (details, adminId) => async (dispatch) => {
	try {
		dispatch({
			type: searchActionType.SEARCH_START,
		});
		const { data } = await api.joinRequest(details, adminId);
		dispatch({
			type: searchActionType.SEARCH_STOP,
		});
		dispatch({
			type: userActionType.UPDATE_AUTH_USER,
			payload: {
				field: "sentRequests",
				value: data.user,
			},
		});
	} catch (error) {
		dispatch({
			type: searchActionType.SEARCH_FAILURE,
			payload: catchError(error),
		});
	}
};
