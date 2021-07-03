import React, { useEffect, useState } from "react";
import "./task-window.scss";
import {
	RiCloseCircleFill,
	RiCalendarTodoFill,
	RiUserAddFill,
} from "react-icons/ri";
import Members from "../../members/members";
import { useDispatch, useSelector } from "react-redux";
import { taskActionType } from "../../../redux/task/task.type";
import Spinner from "../../spinner/spinner";
import ErrorMessageModal from "../../message-modals/error-message-modal";
import { selectAuthUser } from "../../../redux/user/user.selector";
import AssignMembers from "../../assign-members/assign-members";
import CustomButton from "../../custom-button/custom-button";
import CustomSelect from "../../custom-select/custom-select";
import { useInputState } from "../../../hooks/useInputState/useInputState";
import { updateTaskAction } from "../../../redux/task/task.action";

const TaskWindow = ({ handleCloseForm, task, teamName, teamId, members }) => {
	const taskStatus = useSelector((state) => state.task);
	const dispatch = useDispatch();
	const [allowUpdate, setAllowUpdate] = useState(false);
	const [addedMembers, setAddedMembers] = useState([]);
	const [showAssignMember, setShowAssignMember] = useState(false);
	const [state, bindState] = useInputState({
		type: task.type,
		priority: task.priority,
	});
	const currentUser = useSelector(selectAuthUser);
	const { taskType, taskPriority } = useSelector((state) => state.task.info);

	const clearTaskWindow = () => {
		dispatch({
			type: taskActionType.SHOW_TASK_WINDOW,
			payload: null,
		});
	};

	const handleTaskUpdate = () => {
		const updatedTask = {
			type: state.type,
			priority: state.priority,
			assigned: addedMembers,
			taskId: task._id,
		};
		dispatch(
			updateTaskAction(updatedTask, teamId, handleCloseForm, clearTaskWindow)
		);
	};

	useEffect(() => {
		if (task.assigned.find((member) => member._id === currentUser._id)) {
			setAllowUpdate(true);
		}
	}, [task, currentUser]);

	return (
		<div className="task-window-cont">
			<div className="task-nav">
				<h2 className="team-name">{teamName} Board</h2>
				<RiCloseCircleFill
					className="close-icon"
					onClick={() => {
						handleCloseForm();
						clearTaskWindow();
					}}
				/>
			</div>
			{allowUpdate &&
				(addedMembers.length ||
					state.type !== task.type ||
					state.priority !== task.priority) && (
					<>
						<CustomButton className="save-changes" onClick={handleTaskUpdate}>
							Save changes
							{taskStatus.loading && <Spinner />}
						</CustomButton>
						{taskStatus.errorRes && (
							<ErrorMessageModal errorMssg={taskStatus.errorRes} />
						)}
					</>
				)}
			<div className="task-name-cont">
				<h3 className="task-name">
					<RiCalendarTodoFill className="task-icon" />
					{task.name[0].toUpperCase() + task.name.substring(1)}
				</h3>
			</div>
			<div className="task-type-priority">
				{allowUpdate ? (
					<>
						<CustomSelect
							options={taskType.slice(1)}
							name="type"
							id="type-select"
							className="task-type"
							required
							{...bindState}
							value={state.type}
						/>
						<CustomSelect
							options={taskPriority.slice(1)}
							name="priority"
							id="priority-select"
							className={`task-priority ${state.priority}-clr`}
							required
							{...bindState}
							value={state.priority}
						/>
					</>
				) : (
					<>
						<h4 className="task-type">
							{task.type === "progress" || task.type === "review"
								? `in ${task.type}`
								: task.type}
						</h4>
						<h4 className={`task-priority ${task.priority}-clr`}>
							{task.priority}
						</h4>
					</>
				)}
			</div>
			<div
				className={`add-members-cont ${
					allowUpdate ? "allow-member-update" : ""
				}`}
			>
				<Members members={task.assigned} />
				{allowUpdate && (
					<RiUserAddFill
						className="add-member-icon"
						tabIndex={0}
						onClick={() => {
							setShowAssignMember(!showAssignMember);
							setAddedMembers([]);
						}}
					/>
				)}
				{showAssignMember && (
					<AssignMembers
						members={members.filter(
							(member) =>
								!task.assigned.find(
									(assignedMember) => assignedMember._id === member._id._id
								)
						)}
						existingMembers={addedMembers}
						setAssigned={setAddedMembers}
					/>
				)}
			</div>
			<div className="task-description-cont">
				<h5>Description:</h5>
				<p className="task-description">{task.description}</p>
			</div>
			<div className="task-attach-cont">
				<h5>Attachments:</h5>
				<ul
					className={`attachments ${
						task.attachments.length ? "attach-info" : ""
					}`}
				>
					{!task.attachments.length ? (
						<li className="no-attachments">
							No attachments added for this task.
						</li>
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
