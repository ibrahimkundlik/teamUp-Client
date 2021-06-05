import { teamActionType } from "./teams.type";
import * as api from "../../api/api-call";

const fetchError = (error) => {
	let errorMessage = error.message;
	if (error.response) {
		errorMessage = error.response.data.message;
	}
	return errorMessage;
};

export const getTeams = () => async (dispatch) => {
	try {
		dispatch({
			type: teamActionType.FETCH_START,
		});
		const { data } = await api.getTeams();
		dispatch({
			type: teamActionType.GET_TEAMS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: teamActionType.FETCH_FAILURE,
			payload: fetchError(error),
		});
	}
};
