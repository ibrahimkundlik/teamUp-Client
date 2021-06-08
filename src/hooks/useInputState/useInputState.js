import { useState } from "react";

export const useInputState = (initialValue) => {
	const [state, setState] = useState(initialValue);
	const reset = () => setState(initialValue);
	const bind = {
		value,
		onChange: (e) => {
			setState({ ...state, [e.target.name]: e.target.value });
		},
	};
	return [value, bind, reset];
};
