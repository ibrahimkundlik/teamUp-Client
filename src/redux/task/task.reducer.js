import { taskActionType } from "./task.type";

const INITIAL_STATE = {
	loading: false,
	errorRes: null,
	tasks: null,
	window: null,
};

const taskReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case taskActionType.REQ_START_TASK:
			return { ...state, loading: true, errorRes: null };

		case taskActionType.REQ_SUCCESS_TASK:
			return {
				...state,
				loading: false,
				errorRes: null,
			};

		case taskActionType.REQ_FAILURE_TASK:
			return {
				...state,
				loading: false,
				errorRes: action.payload,
			};

		case taskActionType.SEPERATE_TASKS:
			const taskModel = {
				backlog: [],
				progress: [],
				review: [],
				done: [],
			};
			for (let i = 0; i < action.payload.length; i++) {
				taskModel[action.payload[i].type].push(action.payload[i]);
			}
			return {
				...state,
				tasks: taskModel,
			};

		case taskActionType.SHOW_TASK_WINDOW:
			return {
				...state,
				window: action.payload,
			};

		case taskActionType.LOAD_IMAGES:
			return {
				...state,
				loading: false,
				errorRes: null,
				window: { ...state.window, attachments: action.payload },
			};

		case taskActionType.CLEAR_REQ_MSSG:
			return {
				...state,
				errorRes: null,
			};

		default:
			return state;
	}
};

export default taskReducer;
