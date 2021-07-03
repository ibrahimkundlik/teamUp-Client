import React from "react";
import "./task.scss";
import { TiAttachment } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { showTaskWindowAction } from "../../../redux/task/task.action";
import { selectAuthUser } from "../../../redux/user/user.selector";
import { RiShieldUserLine } from "react-icons/ri";

const Task = ({ task }) => {
	const dispatch = useDispatch();
	const currentUser = useSelector(selectAuthUser);

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
			{task.assigned.find((member) => member._id === currentUser._id) && (
				<RiShieldUserLine className="task-assigned" />
			)}
		</div>
	);
};

export default Task;
