import React from "react";
import "./task.scss";
import { TiAttachment } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { showTaskWindowAction } from "../../../redux/task/task.action";

const Task = ({ task }) => {
	const dispatch = useDispatch();

	const setTaskWindow = () => {
		dispatch(
			showTaskWindowAction(task, {
				attachments: task.attachments,
			})
		);
	};

	return (
		<div className="task-main-cont" onClick={setTaskWindow}>
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
