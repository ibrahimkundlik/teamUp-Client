import { userActionType } from "./user.type";
import { generatePayload, saveToLocalStorage } from "./user.utils";

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
			saveToLocalStorage("profile", action.payload);
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

		case userActionType.UPDATE_AUTH_USER:
			const completePayload = {
				token: state.userRes?.token,
				user: generatePayload(state, action.payload),
			};
			saveToLocalStorage("profile", completePayload);
			return { ...state, userRes: completePayload };

		default:
			return state;
	}
};

export default userReducer;
