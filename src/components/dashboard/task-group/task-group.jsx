import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { seperateTasksAction } from "../../../redux/task/task.action";
import Task from "../task/task";
import "./task-group.scss";
import { TiArrowMaximise, TiArrowMinimise } from "react-icons/ti";

const INITIAL_STATE = {
	backlog: false,
	progress: false,
	review: false,
	done: false,
};

const TaskGroup = ({ tasks }) => {
	const dispatch = useDispatch();
	const seperatedTasks = useSelector((state) => state.task.tasks);
	const [hideState, setHideState] = useState(INITIAL_STATE);

	useEffect(() => {
		dispatch(seperateTasksAction(tasks));
	}, [dispatch, tasks]);

	return (
		<div className="task-group-cont">
			{seperatedTasks &&
				Object.entries(seperatedTasks).map(([key, value]) => (
					<div className={`task-group ${key}`} key={key}>
						<h3 className="task-group-head">
							{key === "progress" || key === "review" ? `in ${key}` : key}
						</h3>
						<p className="task-group-count">{value.length}</p>
						<div
							className="arrow-icon"
							onClick={() => {
								setHideState({ ...hideState, [key]: !hideState[key] });
							}}
						>
							{hideState[key] ? <TiArrowMaximise /> : <TiArrowMinimise />}
						</div>
						<div
							className={`${hideState[key] ? "hide-group" : ""} task-category`}
						>
							{value.map((task) => (
								<Task task={task} key={task._id} />
							))}
						</div>
					</div>
				))}
		</div>
	);
};

export default TaskGroup;
