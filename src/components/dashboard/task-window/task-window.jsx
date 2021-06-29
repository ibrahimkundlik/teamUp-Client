import React from "react";
import "./task-window.scss";
import { RiDashboardLine, RiCloseCircleLine } from "react-icons/ri";
import Members from "../../members/members";

const TaskWindow = ({ handleCloseForm, task, teamName }) => {
	return (
		<div className="task-window-cont">
			<div className="task-nav">
				<RiDashboardLine className="dashboard-icon" />
				<h3 className="team-name">{teamName} Board</h3>
				<RiCloseCircleLine
					className="close-icon"
					onClick={() => handleCloseForm()}
				/>
			</div>
			<h3 className="task-name">
				{task.name[0].toUpperCase() + task.name.substring(1)}
			</h3>
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
					{task.attachments.map((url) => (
						<li key={url} className="attachment">
							<a href={url} download>
								<img src={url} alt="attachment" style={{ maxWidth: "60px" }} />
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default TaskWindow;
