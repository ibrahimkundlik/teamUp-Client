import { userActionType } from "./user.type";
import { generatePayload, saveToLocalStorage } from "./user.utils";

const INITIAL_STATE = {
	loading: false,
	userRes: null,
	errorRes: null,
	successRes: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case userActionType.CHECK_USER:
			return { ...state, userRes: action.payload };

		case userActionType.REQ_START:
			return { ...state, loading: true, successRes: null, errorRes: null };

		case userActionType.LOGIN_SUCCESS:
		case userActionType.SIGNUP_SUCCESS:
			saveToLocalStorage("profile", action.payload);
			return {
				...state,
				loading: false,
				errorRes: null,
				userRes: action.payload,
			};

		case userActionType.REQ_FAILURE:
			return { ...state, loading: false, errorRes: action.payload };

		case userActionType.LOGOUT:
			localStorage.clear();
			return { ...state, loading: false, userRes: null, errorRes: null };

		case userActionType.CLEAR_MESSAGE_RES:
			return { ...state, errorRes: null, successRes: null };

		case userActionType.UPDATE_AUTH_USER:
			const completePayload = {
				token: state.userRes?.token,
				user: generatePayload(state, action.payload),
			};
			saveToLocalStorage("profile", completePayload);
			return {
				...state,
				loading: false,
				userRes: completePayload,
				successRes: action.payload?.mssg ? action.payload?.mssg : null,
			};

		default:
			return state;
	}
};

export default userReducer;
