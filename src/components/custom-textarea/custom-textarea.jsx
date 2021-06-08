import React from "react";
import "./custom-textarea.scss";

const CustomTextarea = ({
	name,
	label,
	className,
	inputIcon,
	...otherProps
}) => {
	return (
		<div className={`${className ? className : ""} custom-textarea`}>
			<label>{label}</label>
			<div className="input-icon">{inputIcon}</div>
			<textarea name={name} {...otherProps}></textarea>
		</div>
	);
};

export default CustomTextarea;
