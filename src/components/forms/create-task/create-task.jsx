import React, { useState } from "react";
import "./create-task.scss";
import { AiFillCloseCircle, AiOutlineFileSearch } from "react-icons/ai";
import CustomInput from "../../custom-input/custom-input";
import { BiTask, BiMessageDetail, BiInfoCircle } from "react-icons/bi";
import CustomSelect from "../../custom-select/custom-select";
import CustomButton from "../../custom-button/custom-button";
import CustomTextarea from "../../custom-textarea/custom-textarea";
import AssignMembers from "../../assign-members/assign-members";
import { useInputState } from "../../../hooks/useInputState/useInputState";
import { useDispatch, useSelector } from "react-redux";
import { createTaskAction } from "../../../redux/task/task.action";
import { taskActionType } from "../../../redux/task/task.type";
import ErrorMessageModal from "../../message-modals/error-message-modal";
import Spinner from "../../spinner/spinner";

const taskType = [
	{
		value: "",
		key: "blank-option",
		text: "--Choose an option--",
	},
	{
		value: "backlog",
		key: "backlog",
		text: "Backlog",
	},
	{
		value: "progress",
		key: "progress",
		text: "In Progress",
	},
	{
		value: "review",
		key: "review",
		text: "In Review",
	},
	{
		value: "done",
		key: "done",
		text: "Done",
	},
];

const taskPriority = [
	{
		value: "",
		key: "blank-option",
		text: "--Choose an option--",
	},
	{
		value: "high",
		key: "high",
		text: "High",
	},
	{
		value: "medium",
		key: "medium",
		text: "Medium",
	},
	{
		value: "low",
		key: "low",
		text: "Low",
	},
];

const INITIAL_STATE = {
	name: "",
	type: "",
	priority: "",
	description: "",
};

const CreateTask = ({ handleCloseForm, members, teamId }) => {
	const [assigned, setAssigned] = useState([]);
	const [attachments, setAttachments] = useState([]);
	const [state, bindState] = useInputState(INITIAL_STATE);
	const dispatch = useDispatch();
	const taskRequest = useSelector((state) => state.task);

	const handleSubmit = (e) => {
		e.preventDefault();
		const taskData = {
			...state,
			assigned,
			teamId,
			description: state.description.replaceAll("\n", " "),
		};

		if (taskData.assigned.length === 0) {
			dispatch({
				type: taskActionType.REQ_FAILURE,
				payload:
					"Currently no members are assigned to this task. Kindly add atleast 1 member.",
			});
			return;
		}

		const formData = new FormData();
		for (const each of attachments) {
			formData.append("attachments", each);
		}
		formData.append("taskData", JSON.stringify(taskData));

		dispatch(createTaskAction(formData, handleCloseForm));
	};

	return (
		<div className="create-task-cont">
			<h2>Create new task</h2>
			<div className="close-icon" onClick={() => handleCloseForm()}>
				<AiFillCloseCircle />
			</div>
			<form
				autoComplete="off"
				className="create-task-form"
				onSubmit={handleSubmit}
			>
				<CustomInput
					type="text"
					name="name"
					label="Task name"
					placeholder="Enter task name"
					required
					inputIcon={<BiTask />}
					className="task-name"
					{...bindState}
					value={state.name}
				/>
				<CustomSelect
					options={taskType}
					label="Type of task"
					name="type"
					id="type-select"
					required
					{...bindState}
					value={state.type}
				/>
				<CustomSelect
					options={taskPriority}
					label="Priority of task"
					name="priority"
					id="priority-select"
					required
					{...bindState}
					value={state.priority}
				/>
				<CustomTextarea
					name="description"
					label="Description"
					placeholder="Enter your task description"
					required
					inputIcon={<BiMessageDetail />}
					className="task-description"
					{...bindState}
					value={state.description}
				/>
				<CustomInput
					type="file"
					name="attachments"
					label="Attach task files"
					inputIcon={<AiOutlineFileSearch />}
					className="attachments file-input"
					id="attachments"
					multiple
					accept=".png, .jpeg, .jpg"
					onChange={(e) => setAttachments(e.target.files)}
				>
					<div className="info-cont">
						<BiInfoCircle />
						<div className="main-info-cont">
							<p>&gt; Files should be less than 1MB size</p>
							<p>&gt; Max upload of 5 files only</p>
							<p>&gt; .png, .jpeg, .jpg format allowed</p>
						</div>
					</div>
				</CustomInput>
				<AssignMembers
					members={members}
					existingMembers={assigned}
					setAssigned={setAssigned}
				/>
				{taskRequest.errorRes && (
					<ErrorMessageModal errorMssg={taskRequest.errorRes} />
				)}
				<CustomButton className="create-task-btn">
					<p>Create Task</p>
					{taskRequest.loading && <Spinner />}
				</CustomButton>
			</form>
		</div>
	);
};

export default CreateTask;
