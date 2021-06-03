import * as api from "../../api/api-call";
import { userActionType } from "./user.type";

export const login = (formData) => async (dispatch) => {
	try {
		dispatch({
			type: userActionType.AUTH_START,
		});
		const { data } = await api.login(formData);
		dispatch({
			type: userActionType.LOGIN_SUCCESS,
			payload: data,
		});
	} catch (error) {
		let errorMessage = "Network Error";
		if (error.response) {
			errorMessage = error.response.data.message;
		}
		dispatch({
			type: userActionType.AUTH_FAILURE,
			payload: errorMessage,
		});
	}
};
