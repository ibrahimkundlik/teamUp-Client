import { taskActionType } from "./task.type";
import { fetchError } from "../teams/teams.action";
import * as api from "../../api/api-call";
import { teamActionType } from "../teams/teams.type";

export const createTaskAction =
	(formData, handleCloseForm) => async (dispatch) => {
		try {
			dispatch({
				type: taskActionType.REQ_START,
			});
			const { data } = await api.createTask(formData);
			console.log(data);
			dispatch({
				type: taskActionType.REQ_SUCCESS,
			});
			dispatch({
				type: teamActionType.ADD_TASK,
				payload: data,
			});
			handleCloseForm();
		} catch (error) {
			dispatch({
				type: taskActionType.REQ_FAILURE,
				payload: fetchError(error),
			});
		}
	};
