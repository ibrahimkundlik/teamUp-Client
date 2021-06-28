import React, { useEffect, useState } from "react";
import CustomButton from "../../custom-button/custom-button";
import "./exist-user-teams.scss";
import {
	AiOutlinePlusCircle,
	AiOutlineAppstoreAdd,
	AiOutlineMergeCells,
	AiOutlineReconciliation,
} from "react-icons/ai";
import Members from "../../members/members";
import CreateTeam from "../../forms/create-team/create-team";
import JoinTeam from "../../forms/join-team/join-team";
import { useDispatch, useSelector } from "react-redux";
import { selectTeams } from "../../../redux/teams/teams.selector";
import MemberRequest from "../../forms/member-request/member-request";
import ErrorMessageModal from "../../message-modals/error-message-modal";
import { Link } from "react-router-dom";
import { clearMssgResAction } from "../../../redux/teams/teams.action";

const INITIAL_STATE = {
	newTeam: false,
	joinTeam: false,
	memberRequest: false,
};

const ExistUserTeams = ({ teams, username }) => {
	const [teamForm, setTeamForm] = useState(INITIAL_STATE);
	const { errorRes, successRes } = useSelector(selectTeams);
	const dispatch = useDispatch();

	const handleCloseForm = () => {
		setTeamForm(INITIAL_STATE);
		window.scrollTo(0, 0);
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		let timeout = setTimeout(() => {
			if (successRes) dispatch(clearMssgResAction());
		}, 3000);
		return () => {
			clearTimeout(timeout);
		};
	}, [successRes, dispatch]);

	return (
		<>
			<div
				className={`exist-user-teams-cont ${
					teamForm.newTeam || teamForm.joinTeam || teamForm.memberRequest
						? "hide-exist-teams"
						: ""
				}`}
			>
				<h2 className="exist-user-head">
					Hi {username.split(" ")[0]}{" "}
					<span role="img" aria-label="waving">
						👋
					</span>
				</h2>
				<div className="team-actions">
					<h4 className="disp-sm team-actions-head">Team actions:</h4>
					<CustomButton
						className="create-btn"
						onClick={() => {
							setTeamForm({ ...teamForm, newTeam: true });
							window.scrollTo(0, 0);
						}}
					>
						<AiOutlinePlusCircle />
						<h4 className="disp-lg">Create new team</h4>
						<h4 className="disp-sm">New</h4>
					</CustomButton>
					<CustomButton
						className="join-btn"
						onClick={() => {
							setTeamForm({ ...teamForm, joinTeam: true });
							window.scrollTo(0, 0);
						}}
					>
						<AiOutlineAppstoreAdd />
						<h4 className="disp-lg">Join existing teams</h4>
						<h4 className="disp-sm">Join</h4>
					</CustomButton>
					<CustomButton
						className="request-btn"
						onClick={() => {
							setTeamForm({ ...teamForm, memberRequest: true });
							window.scrollTo(0, 0);
						}}
					>
						<AiOutlineMergeCells />
						<h4 className="disp-lg">Team requests</h4>
						<h4 className="disp-sm">Requests</h4>
					</CustomButton>
				</div>
				<div>
					{errorRes && <ErrorMessageModal errorMssg={errorRes} />}
					{successRes && <p className="success-message-modal">{successRes}</p>}
				</div>
				<div className="current-teams">
					<h4 className="team-actions-head">Your current teams:</h4>
					<ul className="teams-list">
						{teams.map((team) => {
							const { name, description, members, _id } = team;
							return (
								<li key={_id} className="team">
									<h3>{name}</h3>
									<p className="team-description">{description}</p>
									<Members
										members={members.map((member) => ({
											_id: member._id._id,
											username: member._id.name,
										}))}
									/>
									<Link to={`/teams/dashboard/${_id}`}>
										<CustomButton>
											Dashboard
											<AiOutlineReconciliation />
										</CustomButton>
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
			<CreateTeam
				showCreateForm={teamForm.newTeam}
				handleClose={handleCloseForm}
			/>
			<JoinTeam
				showJoinForm={teamForm.joinTeam}
				handleClose={handleCloseForm}
			/>
			<MemberRequest
				showMemberRequest={teamForm.memberRequest}
				handleClose={handleCloseForm}
			/>
		</>
	);
};

export default ExistUserTeams;
