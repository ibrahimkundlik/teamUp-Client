import React from "react";
import "./custom-input.scss";

const CustomInput = ({ name, label, inputIcon, ...otherProps }) => {
	return (
		<div className="custom-input">
			<label htmlFor={name}>{label}</label>
			<input name={name} {...otherProps} />
			<div className="input-icon">{inputIcon}</div>
		</div>
	);
};

export default CustomInput;