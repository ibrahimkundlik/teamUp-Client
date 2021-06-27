import { taskActionType } from "./task.type";
import { fetchError } from "../teams/teams.action";
import * as api from "../../api/api-call";
import { teamActionType } from "../teams/teams.type";

export const createTaskAction =
	(formData, handleCloseForm) => async (dispatch) => {
		try {
			dispatch({
				type: taskActionType.REQ_START_TASK,
			});
			const { data } = await api.createTask(formData);
			dispatch({
				type: taskActionType.REQ_SUCCESS_TASK,
			});
			dispatch({
				type: teamActionType.ADD_TASK,
				payload: data,
			});
			handleCloseForm();
		} catch (error) {
			dispatch({
				type: taskActionType.REQ_FAILURE_TASK,
				payload: fetchError(error),
			});
		}
	};

export const seperateTasksAction = (tasks) => {
	return {
		type: taskActionType.SEPERATE_TASKS,
		payload: tasks,
	};
};
