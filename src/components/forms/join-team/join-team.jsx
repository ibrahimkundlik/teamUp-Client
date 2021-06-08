import React from "react";
import "./join-team.scss";
import { AiFillCloseCircle } from "react-icons/ai";

const JoinTeam = ({ showJoinForm, handleClose }) => {
	return (
		<div className={`${showJoinForm ? "form-visible " : ""}abs-form-cont`}>
			<h3>Join new team</h3>
			<div className="close-icon" onClick={() => handleClose(false)}>
				<AiFillCloseCircle />
			</div>
		</div>
	);
};

export default JoinTeam;
