import React from "react";
import "./join-team.scss";
import { AiFillCloseCircle, AiOutlineFileSearch } from "react-icons/ai";
import CustomInput from "../../custom-input/custom-input";
import CustomButton from "../../custom-button/custom-button";
import { useInputState } from "../../../hooks/useInputState/useInputState";

const JoinTeam = ({ showJoinForm, handleClose }) => {
	const [state, bindState, resetState] = useInputState({ searchQuery: "" });

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(state);
		resetState();
	};

	return (
		<div
			className={`${
				showJoinForm ? "form-visible " : ""
			}abs-form-cont join-team-cont`}
		>
			<h3>Join new team</h3>
			<div className="close-icon" onClick={() => handleClose(false)}>
				<AiFillCloseCircle />
			</div>
			<form
				autoComplete="off"
				className="search-teams-form"
				onSubmit={handleSubmit}
			>
				<CustomInput
					type="search"
					name="searchQuery"
					placeholder="Enter team name"
					value={state.searchQuery}
					{...bindState}
					required
					inputIcon={<AiOutlineFileSearch />}
					className="search-teams"
				/>
				<CustomButton type="submit">Search</CustomButton>
			</form>
			<div className="search-teams-result">
				<p>Search results:</p>
			</div>
		</div>
	);
};

export default JoinTeam;
