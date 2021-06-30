import React from "react";
import "./task-window.scss";
import { RiDashboardLine, RiCloseCircleLine } from "react-icons/ri";
import Members from "../../members/members";
import { useDispatch, useSelector } from "react-redux";
import { taskActionType } from "../../../redux/task/task.type";
import Spinner from "../../spinner/spinner";
import ErrorMessageModal from "../../message-modals/error-message-modal";

const TaskWindow = ({ handleCloseForm, task, teamName }) => {
	const taskStatus = useSelector((state) => state.task);
	const dispatch = useDispatch();
	const clearTaskWindow = () => {
		dispatch({
			type: taskActionType.SHOW_TASK_WINDOW,
			payload: null,
		});
	};

	return (
		<div className="task-window-cont">
			<div className="task-nav">
				<RiDashboardLine className="dashboard-icon" />
				<h3 className="team-name">{teamName} Board</h3>
				<RiCloseCircleLine
					className="close-icon"
					onClick={() => {
						handleCloseForm();
						clearTaskWindow();
					}}
				/>
			</div>
			<div className="task-name-cont">
				<h5>Task:</h5>
				<h3>{task.name[0].toUpperCase() + task.name.substring(1)}</h3>
			</div>
			<div className="task-type-priority">
				<h4 className="task-type">
					{task.type === "progress" || task.type === "review"
						? `in ${task.type}`
						: task.type}
				</h4>
				<h4 className={`task-priority ${task.priority}-clr`}>
					{task.priority}
				</h4>
			</div>
			<Members members={task.assigned} />
			<div className="task-description-cont">
				<h5>Description:</h5>
				<p className="task-description">{task.description}</p>
			</div>
			<div className="task-attach-cont">
				<h5>Attachments:</h5>
				<ul className="attachments">
					{!task.attachments.length ? (
						<li>No attachments added for this task.</li>
					) : taskStatus.loading ? (
						<Spinner />
					) : taskStatus.errorRes ? (
						<ErrorMessageModal errorMssg={taskStatus.errorRes} />
					) : (
						task.attachments.map((url) => (
							<li key={url} className="attachment">
								<a
									href={url}
									download
									target="_blank"
									rel="noreferrer"
									className="attachment-link"
								>
									<img src={url} alt="attachment" className="attachment-img" />
								</a>
							</li>
						))
					)}
				</ul>
			</div>
		</div>
	);
};

export default TaskWindow;
