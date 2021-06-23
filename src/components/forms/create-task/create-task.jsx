import React from "react";
import "./create-task.scss";
import { AiFillCloseCircle } from "react-icons/ai";

const CreateTask = ({ handleCloseForm }) => {
	return (
		<div className="create-task-cont">
			<h3>Create new task</h3>
			<div className="close-icon" onClick={() => handleCloseForm()}>
				<AiFillCloseCircle />
			</div>
		</div>
	);
};

export default CreateTask;
