import { teamActionType } from "./teams.type";

const INITIAL_STATE = {
	loading: false,
	errorRes: null,
	teamsRes: [],
};

const teamReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case teamActionType.FETCH_START:
			return { ...state, loading: true };
		case teamActionType.CREATE_TEAM:
		case teamActionType.GET_TEAMS:
			return {
				...state,
				loading: false,
				errorRes: null,
				teamsRes: action.payload,
			};
		case teamActionType.FETCH_FAILURE:
			return { ...state, loading: false, errorRes: action.payload };
		default:
			return state;
	}
};

export default teamReducer;
