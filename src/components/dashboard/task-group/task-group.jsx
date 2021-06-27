import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { seperateTasksAction } from "../../../redux/task/task.action";
import Task from "../task/task";
import "./task-group.scss";

const TaskGroup = ({ tasks }) => {
	const dispatch = useDispatch();
	const seperatedTasks = useSelector((state) => state.task.tasks);

	useEffect(() => {
		dispatch(seperateTasksAction(tasks));
	}, [dispatch, tasks]);

	return (
		<div className="task-group-cont">
			{seperatedTasks &&
				Object.entries(seperatedTasks).map(([key, value]) => (
					<div className="task-group" key={key}>
						<h3 className="task-group-head">{key}</h3>
						<p className="task-group-count">{value.length}</p>
						{value.map((task) => (
							<Task task={task} key={task._id} />
						))}
					</div>
				))}
		</div>
	);
};

export default TaskGroup;
