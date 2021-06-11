import { useState } from "react";

export const useInputState = (initialValue) => {
	const [value, setValue] = useState(initialValue);
	const reset = () => setValue(initialValue);
	const bind = {
		onChange: (e) => {
			setValue({ ...value, [e.target.name]: e.target.value });
		},
	};
	return [value, bind, reset];
};
