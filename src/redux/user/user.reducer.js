import { userActionType } from "./user.type";

const INITIAL_STATE = {
	loading: false,
	userRes: null,
	errorRes: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case userActionType.AUTH_START:
			return { ...state, loading: true };
		case userActionType.LOGIN_SUCCESS:
			return {
				...state,
				loading: false,
				errorRes: null,
				userRes: action.payload,
			};
		case userActionType.AUTH_FAILURE:
			return { ...state, loading: false, errorRes: action.payload };
		default:
			return state;
	}
};

export default userReducer;
