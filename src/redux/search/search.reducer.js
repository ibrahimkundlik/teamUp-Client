import { searchActionType } from "./search.type";

const INITIAL_STATE = {
	loading: false,
	searchRes: null,
	errorRes: null,
};

const searchReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case searchActionType.SEARCH_START:
			return { ...state, loading: true, errorRes: null };
		case searchActionType.SEARCH_SUCCESS:
			return {
				...state,
				loading: false,
				searchRes: action.payload,
				errorRes: null,
			};
		case searchActionType.SEARCH_FAILURE:
			return { ...state, loading: false, errorRes: action.payload };
		default:
			return state;
	}
};

export default searchReducer;
