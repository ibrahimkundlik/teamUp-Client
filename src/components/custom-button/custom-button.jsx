import React from "react";
import "./custom-button.scss";

const CustomButton = ({ children, className, ...props }) => {
	return (
		<button
			className={`custom-button ${className ? className : ""}`}
			{...props}
		>
			{children}
		</button>
	);
};

export default CustomButton;
