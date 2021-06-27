import React from "react";
import "./task.scss";

const Task = ({ task }) => {
	return (
		<div className="task-main-cont">
			<h4 className="task-name">{task.name}</h4>
			<p className="task-attachments">{task.attachments.length}</p>
			<p className="task-priority">{task.priority}</p>
		</div>
	);
};

export default Task;
