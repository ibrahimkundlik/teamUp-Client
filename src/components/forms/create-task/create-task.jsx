import React from "react";
import "./create-task.scss";
import { AiFillCloseCircle } from "react-icons/ai";
import CustomInput from "../../custom-input/custom-input";
import { BiTask, BiMessageDetail } from "react-icons/bi";
import CustomSelect from "../../custom-select/custom-select";
import CustomButton from "../../custom-button/custom-button";
import CustomTextarea from "../../custom-textarea/custom-textarea";

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

const CreateTask = ({ handleCloseForm, members }) => {
	return (
		<div className="create-task-cont">
			<h3>Create new task</h3>
			<div className="close-icon" onClick={() => handleCloseForm()}>
				<AiFillCloseCircle />
			</div>
			<form autoComplete="off" className="create-task-form">
				<CustomInput
					type="text"
					name="name"
					label="Task name"
					// onChange={handleChange}
					// value={formData.name}
					required
					inputIcon={<BiTask />}
					className="task-name"
				/>
				<CustomSelect
					options={taskType}
					label="Type of task"
					name="type"
					id="type-select"
					required
				/>
				<CustomSelect
					options={taskPriority}
					label="Priority of task"
					name="priority"
					id="priority-select"
					required
				/>
				<CustomTextarea
					name="description"
					label="Description"
					placeholder="Enter your task description"
					// onChange={handleChange}
					// value={formData.description}
					required
					inputIcon={<BiMessageDetail />}
					className="task-description"
				/>
				<div className="assign-members-cont">
					<p>Assign Members</p>
					<ul className="members-list">
						{members.map((member) => {
							const { _id, name } = member._id;
							return (
								<li className="member" key={_id}>
									{name}
								</li>
							);
						})}
					</ul>
				</div>
				<CustomButton>Create task</CustomButton>
			</form>
		</div>
	);
};

export default CreateTask;

// {
// 	"name": "new task 2 22 222",
// 	"type": "pending",
// 	"difficulty": "medium",
// 	"assigned": [
// 			{
// 					"username": "Clark Kent",
// 					"userId": "60c4ebb319133a44a8fb1526"
// 			},
// 			{
// 					"username": "Bruce Wayne",
// 					"userId": "60c458f833b9ba19288892c7"
// 			}
// 	],
// 	"description": "nxcm nxmcn mxncm mxncm mnxcm nxmcn",
// 	"teamId": "60c4ec8419133a44a8fb152a"
// }
