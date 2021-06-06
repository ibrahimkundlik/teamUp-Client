import * as api from "../../api/api-call";
import { userActionType } from "./user.type";

export const checkUser = () => {
	let userData = null;
	const user = JSON.parse(localStorage.getItem("profile"));
	if (user) {
		userData = user;
	}
	return {
		type: userActionType.CHECK_USER,
		payload: userData,
	};
};

const authError = (error) => {
	let errorMessage = error.message;
	if (error.response) {
		errorMessage = error.response.data.message;
	}
	return errorMessage;
};

export const startLogin = (formData, history) => async (dispatch) => {
	try {
		dispatch({
			type: userActionType.AUTH_START,
		});
		const { data } = await api.login(formData);
		dispatch({
			type: userActionType.LOGIN_SUCCESS,
			payload: data,
		});
		history.push("/teams");
	} catch (error) {
		dispatch({
			type: userActionType.AUTH_FAILURE,
			payload: authError(error),
		});
	}
};

export const startSignup = (formData, history) => async (dispatch) => {
	try {
		dispatch({
			type: userActionType.AUTH_START,
		});
		const { data } = await api.signup(formData);
		dispatch({
			type: userActionType.SIGNUP_SUCCESS,
			payload: data,
		});
		history.push("/teams");
	} catch (error) {
		dispatch({
			type: userActionType.AUTH_FAILURE,
			payload: authError(error),
		});
	}
};

export const logout = (history) => async (dispatch) => {
	dispatch({
		type: userActionType.LOGOUT,
	});
	history.push("/");
};
