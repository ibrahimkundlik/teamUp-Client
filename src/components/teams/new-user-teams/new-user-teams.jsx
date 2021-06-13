import React, { useState } from "react";
import CustomButton from "../../custom-button/custom-button";
import "./new-user-teams.scss";
import newTeamImg from "../../../images/create_team.svg";
import joinTeamImg from "../../../images/join_team.svg";
import { AiOutlinePlusCircle, AiOutlineAppstoreAdd } from "react-icons/ai";
import CreateTeam from "../../forms/create-team/create-team";
import JoinTeam from "../../forms/join-team/join-team";
import ErrorMessageModal from "../../message-modals/error-message-modal";

const NewUserTeams = ({ teams }) => {
	const [showCreateForm, setShowCreateForm] = useState(false);
	const [showJoinForm, setShowJoinForm] = useState(false);

	return (
		<>
			<div
				className={`new-user-teams-cont ${
					showCreateForm || showJoinForm ? "hide-teams-cont" : ""
				}`}
			>
				<h3 className="new-user-head">
					Welcome to <span>team</span>
					<span>Up</span>
				</h3>
				<p className="new-user-desc">
					Here are some things for you to get started.
				</p>
				{teams.errorRes && <ErrorMessageModal errorMssg={teams.errorRes} />}
				<div className="new-user-options">
					<article className="start-option">
						<img src={newTeamImg} alt="new-team" className="option-img" />
						<CustomButton
							className="create-btn"
							onClick={() => {
								window.scrollTo(0, 0);
								setShowCreateForm(true);
								setShowJoinForm(false);
							}}
						>
							<AiOutlinePlusCircle />
							<h4>Create new team</h4>
						</CustomButton>
					</article>
					<article className="start-option">
						<img className="option-img" src={joinTeamImg} alt="existing-team" />
						<CustomButton
							className="join-btn"
							onClick={() => {
								window.scrollTo(0, 0);
								setShowJoinForm(true);
								setShowCreateForm(false);
							}}
						>
							<AiOutlineAppstoreAdd />
							<h4>Join existing teams</h4>
						</CustomButton>
					</article>
				</div>
			</div>
			{
				<CreateTeam
					showCreateForm={showCreateForm}
					handleClose={setShowCreateForm}
				/>
			}
			{<JoinTeam showJoinForm={showJoinForm} handleClose={setShowJoinForm} />}
		</>
	);
};

export default NewUserTeams;
