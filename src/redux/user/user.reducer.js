import { userActionType } from "./user.type";

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
		default:
			return state;
	}
};

export default userReducer;
