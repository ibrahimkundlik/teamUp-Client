import { taskActionType } from "./task.type";

const INITIAL_STATE = {
	loading: false,
	errorRes: null,
};

const taskReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case taskActionType.REQ_START:
			return { ...state, loading: true, errorRes: null };
		case taskActionType.REQ_SUCCESS:
			return {
				...state,
				loading: false,
				errorRes: null,
			};
		case taskActionType.REQ_FAILURE:
			return {
				...state,
				loading: false,
				errorRes: action.payload,
			};
		default:
			return state;
	}
};

export default taskReducer;
