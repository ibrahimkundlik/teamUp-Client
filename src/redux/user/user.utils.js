//utils

export const generatePayload = (state, payload) => {
	return { ...state.userRes?.user, [payload.field]: payload.value };
};

export const saveToLocalStorage = (key, value) => {
	localStorage.setItem(
		key,
		JSON.stringify({
			...value,
		})
	);
};
