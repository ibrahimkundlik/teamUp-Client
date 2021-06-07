import React from "react";
import "./custom-icon.scss";

const CustomIcon = ({ children, className, ...props }) => {
	return (
		<div
			className={`${className ? className : ""} custom-icon-cont`}
			{...props}
		>
			{children}
		</div>
	);
};

export default CustomIcon;
