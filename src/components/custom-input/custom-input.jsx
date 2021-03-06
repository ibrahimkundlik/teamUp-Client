import React from "react";
import "./custom-input.scss";

const CustomInput = ({
	children,
	name,
	label,
	className,
	inputIcon,
	...otherProps
}) => {
	return (
		<div className={`${className ? className : ""} custom-input`}>
			{label && (
				<label
					htmlFor={name}
					className={`${
						otherProps?.required ? "ip-required" : "ip-not-required"
					}`}
				>
					{label}
				</label>
			)}
			<input name={name} {...otherProps} />
			<div className="input-icon">{inputIcon}</div>
			{children && children}
		</div>
	);
};

export default CustomInput;
