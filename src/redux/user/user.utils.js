import { userActionType } from "./user.type";

export const generatePayload = (action, state) => {
	if (action.type === userActionType.UPDATE_USER) {
		return action.payload;
	}
	if (action.type === userActionType.UPDATE_TEAMS) {
		return { ...state.userRes?.user, teams: action.payload };
	}
};
