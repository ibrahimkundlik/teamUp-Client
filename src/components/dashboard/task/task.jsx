import React from "react";
import "./task.scss";
import { TiAttachment } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { taskActionType } from "../../../redux/task/task.type";

const Task = ({ task }) => {
	const dispatch = useDispatch();

	const setTaskWindow = () => {
		dispatch({
			type: taskActionType.SHOW_TASK_WINDOW,
			payload: task,
		});
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
