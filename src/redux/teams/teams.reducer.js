import { teamActionType } from "./teams.type";
import { generateUpdatedTeams } from "./teams.utils";

const INITIAL_STATE = {
	loading: false,
	teamsRes: [],
	errorRes: null,
	successRes: null,
};

const teamReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case teamActionType.FETCH_START:
			return { ...state, loading: true, successRes: null };

		case teamActionType.CREATE_TEAM:
			return {
				...state,
				loading: false,
				errorRes: null,
				teamsRes: [...state.teamsRes, action.payload],
				successRes: "New team created successfully.",
			};

		case teamActionType.GET_TEAMS:
			return {
				...state,
				loading: false,
				errorRes: null,
				teamsRes: action.payload,
				successRes: "All teams loaded successfully.",
			};

		case teamActionType.FETCH_FAILURE:
			return { ...state, loading: false, errorRes: action.payload };

		case teamActionType.UPDATE_TEAM:
			return {
				...state,
				loading: false,
				errorRes: null,
				teamsRes: generateUpdatedTeams(state.teamsRes, action.payload),
				successRes: null,
			};

		default:
			return state;
	}
};

export default teamReducer;
