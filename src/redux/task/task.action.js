import { taskActionType } from "./task.type";
import { fetchError } from "../teams/teams.action";
import * as api from "../../api/api-call";

export const createTaskAction = (formData) => async (dispatch) => {
	try {
		dispatch({
			type: taskActionType.REQ_START,
		});
		const { data } = await api.createTask(formData);
		console.log(data);
		dispatch({
			type: taskActionType.REQ_SUCCESS,
		});
	} catch (error) {
		dispatch({
			type: taskActionType.REQ_FAILURE,
			payload: fetchError(error),
		});
	}
};
