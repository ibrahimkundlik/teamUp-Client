import React from "react";

const ErrorMessageModal = ({ errorMssg }) => {
	return (
		<p className="error-message-modal">
			Could not complete the previous request.{" "}
			<span className="error-highlight">
				{typeof errorMssg === "string" && errorMssg}
			</span>
		</p>
	);
};

export default ErrorMessageModal;
