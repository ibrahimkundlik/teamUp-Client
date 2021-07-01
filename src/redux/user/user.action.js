import * as api from "../../api/api-call";
import { teamActionType } from "../teams/teams.type";
import { userActionType } from "./user.type";

export const checkUser = () => {
	return {
		type: userActionType.CHECK_USER,
		payload: JSON.parse(localStorage.getItem("profile")),
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
			type: userActionType.REQ_START,
		});
		const { data } = await api.login(formData);
		dispatch({
			type: userActionType.LOGIN_SUCCESS,
			payload: data,
		});
		history.push("/teams");
	} catch (error) {
		dispatch({
			type: userActionType.REQ_FAILURE,
			payload: authError(error),
		});
	}
};

export const startSignup = (formData, history) => async (dispatch) => {
	try {
		dispatch({
			type: userActionType.REQ_START,
		});
		const { data } = await api.signup(formData);
		dispatch({
			type: userActionType.SIGNUP_SUCCESS,
			payload: data,
		});
		history.push("/teams");
	} catch (error) {
		dispatch({
			type: userActionType.REQ_FAILURE,
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

export const clearMessageResAction = () => {
	return {
		type: userActionType.CLEAR_MSSG_USER,
	};
};

export const memberRequestAction = (requestData) => async (dispatch) => {
	try {
		dispatch({
			type: userActionType.REQ_START,
		});
		const { data } = await api.memberRequest(requestData);
		dispatch({
			type: userActionType.UPDATE_AUTH_USER,
			payload: {
				field: "joinRequests",
				value: data.admin,
				mssg: `User request ${requestData.type}ed.`,
			},
		});
		if (requestData.type === "accept") {
			dispatch({
				type: teamActionType.UPDATE_TEAM,
				payload: {
					field: "members",
					value: data.team,
					teamId: requestData.teamId,
					successRes: null,
				},
			});
		}
	} catch (error) {
		dispatch({
			type: userActionType.REQ_FAILURE,
			payload: authError(error),
		});
	}
};
