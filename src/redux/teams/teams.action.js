import { teamActionType } from "./teams.type";
import * as api from "../../api/api-call";

const fetchError = (error) => {
	let errorMessage = error.message;
	if (error.response) {
		errorMessage = error.response.data;
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
			payload: data.teams,
		});
	} catch (error) {
		dispatch({
			type: teamActionType.FETCH_FAILURE,
			payload: fetchError(error),
		});
	}
};

export const createTeam = (teamData) => async (dispatch) => {
	try {
		dispatch({
			type: teamActionType.FETCH_START,
		});
		const { data } = await api.createTeam(teamData);
		dispatch({
			type: teamActionType.CREATE_TEAM,
			payload: data.team,
		});
	} catch (error) {
		dispatch({
			type: teamActionType.FETCH_FAILURE,
			payload: fetchError(error),
		});
	}
};
