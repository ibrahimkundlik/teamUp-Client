import React from "react";
import "./task.scss";
import { TiAttachment } from "react-icons/ti";

const Task = ({ task }) => {
	return (
		<div className="task-main-cont">
			<h4 className="task-name">
				{task.name[0].toUpperCase() + task.name.substring(1)}
			</h4>
			<div className="task-attachments">
				<TiAttachment />
				<p>{task.attachments.length}</p>
			</div>
			<p className={`task-priority ${task.priority}-clr`}>{task.priority}</p>
		</div>
	);
};

export default Task;
