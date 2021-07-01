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

export const searchTaskAction = (query, tasks) => {
	const filtered = tasks.filter(
		(task) => task.name.toLowerCase().indexOf(query.trim().toLowerCase()) !== -1
	);

	return {
		type: taskActionType.SEPERATE_TASKS,
		payload: filtered,
	};
};

export const showTaskWindowAction = (task, keys) => async (dispatch) => {
	try {
		dispatch({
			type: taskActionType.SHOW_TASK_WINDOW,
			payload: task,
		});
		if (keys.attachments.length) {
			dispatch({
				type: taskActionType.REQ_START_TASK,
			});
			const { data } = await api.getAttachmentLinks(keys);
			dispatch({
				type: taskActionType.LOAD_IMAGES,
				payload: data.signedURLs,
			});
		}
	} catch (error) {
		dispatch({
			type: taskActionType.REQ_FAILURE_TASK,
			payload: fetchError(error),
		});
	}
};

export const addMemberByEmailAction =
	(userData, handleCloseForm) => async (dispatch) => {
		try {
			dispatch({
				type: taskActionType.REQ_START_TASK,
			});
			const { data } = await api.addMemberByEmail(userData);
			dispatch({
				type: taskActionType.REQ_SUCCESS_TASK,
			});
			dispatch({
				type: teamActionType.UPDATE_TEAM,
				payload: {
					field: "members",
					teamId: userData.teamId,
					value: data.updatedTeamMembers,
					successRes: `${userData.userMail} is successfully added to the team.`,
				},
			});
			handleCloseForm();
		} catch (error) {
			dispatch({
				type: taskActionType.REQ_FAILURE_TASK,
				payload: fetchError(error),
			});
		}
	};
