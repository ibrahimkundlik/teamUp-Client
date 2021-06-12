import React, { useState } from "react";
import "./create-team.scss";
import CustomInput from "../../custom-input/custom-input";
import { RiTeamLine, RiMessage2Line } from "react-icons/ri";
import CustomButton from "../../custom-button/custom-button";
import CustomTextarea from "../../custom-textarea/custom-textarea";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthUser } from "../../../redux/user/user.selector";
import { AiFillCloseCircle } from "react-icons/ai";
import { createTeam } from "../../../redux/teams/teams.action";

const INITIAL_DATA = {
	name: "",
	description: "",
	members: [],
};

const CreateTeam = ({ showCreateForm, handleClose }) => {
	const [formData, setFormData] = useState(INITIAL_DATA);
	const [inputError, setInputError] = useState(null);
	const user = useSelector(selectAuthUser);
	const dispatch = useDispatch();

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const newTeamData = {
			...formData,
			description: formData.description.replaceAll("\n", " "),
			members: [
				{
					_id: user._id,
					level: "admin",
				},
			],
		};
		if (newTeamData.name.trim().length === 0) {
			setInputError("team name");
			return;
		}
		if (newTeamData.description.trim().length === 0) {
			setInputError("team description");
			return;
		}

		dispatch(createTeam(newTeamData));
		setInputError(null);
	};

	return (
		<div
			className={`${
				showCreateForm ? "form-visible " : ""
			}abs-form-cont create-team-cont`}
		>
			<h3>Create new team</h3>
			<div className="close-icon" onClick={() => handleClose(false)}>
				<AiFillCloseCircle />
			</div>
			<form
				autoComplete="off"
				onSubmit={handleSubmit}
				className="create-team-form"
			>
				<CustomInput
					type="text"
					name="name"
					label="Name"
					placeholder="Enter your team name"
					onChange={handleChange}
					value={formData.name}
					required
					inputIcon={<RiTeamLine />}
					className="team-name"
				/>
				<CustomTextarea
					name="description"
					label="Description"
					placeholder="Enter your team description"
					onChange={handleChange}
					value={formData.description}
					required
					inputIcon={<RiMessage2Line />}
					className="team-description"
				/>
				{inputError && (
					<p className="error-message-modal">
						Kindly enter your{" "}
						<span className="error-highlight">{inputError}</span> correctly.
						Currently only spaces are detected.
					</p>
				)}
				<CustomButton type="submit">Create new team</CustomButton>
			</form>
		</div>
	);
};

export default CreateTeam;

// <div className="added-users">
// 	<p>Added members:</p>
// 	{formData.members.length < 2 ? (
// 		<p className="no-users-added">
// 			Currently no team members added ...
// 		</p>
// 	) : (
// 		<p>added</p>
// 	)}
// </d
// <div className="search-user-cont">
// 	<CustomInput
// 		type="search"
// 		name="searchUser"
// 		label="Add team members"
// 		placeholder="Enter user's name"
// 		onChange={(e) => setSearchQuery(e.target.value)}
// 		value={searchQuery}
// 		inputIcon={<RiUserSearchLine />}
// 		className="search-user"
// 	/>
// 	<CustomButton type="button">Search</CustomButton>
// 	<div className="search-user-result">
// 		<p>Search results:</p>
// 	</div>
// </div>
