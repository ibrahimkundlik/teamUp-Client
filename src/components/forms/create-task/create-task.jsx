import React, { useState } from "react";
import "./create-task.scss";
import { AiFillCloseCircle } from "react-icons/ai";
import CustomInput from "../../custom-input/custom-input";
import { BiTask, BiMessageDetail } from "react-icons/bi";
import CustomSelect from "../../custom-select/custom-select";
import CustomButton from "../../custom-button/custom-button";
import CustomTextarea from "../../custom-textarea/custom-textarea";
import AssignMembers from "../../assign-members/assign-members";
import { useInputState } from "../../../hooks/useInputState/useInputState";

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
	const [state, bindState] = useInputState(INITIAL_STATE);

	const handleSubmit = (e) => {
		e.preventDefault();
		const taskData = {
			...state,
			assigned,
			teamId,
			description: state.description.replaceAll("\n", " "),
		};
		console.log(taskData);
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
				<AssignMembers
					members={members}
					existingMembers={assigned}
					setAssigned={setAssigned}
				/>
				<CustomButton className="create-task-btn">Create Task</CustomButton>
			</form>
		</div>
	);
};

export default CreateTask;
