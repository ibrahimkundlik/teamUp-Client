import { userActionType } from "./user.type";
import { generatePayload } from "./user.utils";

const INITIAL_STATE = {
	loading: false,
	userRes: null,
	errorRes: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case userActionType.CHECK_USER:
			return { ...state, userRes: action.payload };
		case userActionType.AUTH_START:
			return { ...state, loading: true };
		case userActionType.LOGIN_SUCCESS:
		case userActionType.SIGNUP_SUCCESS:
			localStorage.setItem(
				"profile",
				JSON.stringify({
					...action.payload,
				})
			);
			return {
				...state,
				loading: false,
				errorRes: null,
				userRes: action.payload,
			};
		case userActionType.AUTH_FAILURE:
			return { ...state, loading: false, errorRes: action.payload };
		case userActionType.LOGOUT:
			localStorage.clear();
			return { ...state, loading: false, userRes: null, errorRes: null };
		case userActionType.CLEAR_ERROR:
			return { ...state, errorRes: null };
		case userActionType.UPDATE_USER:
		case userActionType.UPDATE_TEAMS:
			const completePayload = {
				token: state.userRes?.token,
				user: generatePayload(action, state),
			};
			localStorage.setItem(
				"profile",
				JSON.stringify({
					...completePayload,
				})
			);
			return { ...state, userRes: completePayload };
		default:
			return state;
	}
};

export default userReducer;
