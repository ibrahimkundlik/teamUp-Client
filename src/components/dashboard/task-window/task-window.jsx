import React from "react";
import "./task-window.scss";

const TaskWindow = ({ handleCloseForm, task }) => {
	return (
		<div className="task-window-cont">
			Task Window
			<p onClick={() => handleCloseForm()}>Close</p>
		</div>
	);
};

export default TaskWindow;
