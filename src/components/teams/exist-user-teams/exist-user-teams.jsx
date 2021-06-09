import React from "react";
import CustomButton from "../../custom-button/custom-button";
import "./exist-user-teams.scss";
import {
	AiOutlinePlusCircle,
	AiOutlineAppstoreAdd,
	AiOutlineMergeCells,
	AiOutlineReconciliation,
} from "react-icons/ai";
import Members from "../../members/members";

const ExistUserTeams = ({ teams, username }) => {
	return (
		<div className="exist-user-teams-cont">
			<h2 className="exist-user-head">
				Hi {username.split(" ")[0]}{" "}
				<span role="img" aria-label="waving">
					👋
				</span>
			</h2>
			<div className="team-actions">
				<h4 className="disp-sm team-actions-head">Team actions:</h4>
				<CustomButton className="create-btn">
					<AiOutlinePlusCircle />
					<h4 className="disp-lg">Create new team</h4>
					<h4 className="disp-sm">New</h4>
				</CustomButton>
				<CustomButton className="join-btn">
					<AiOutlineAppstoreAdd />
					<h4 className="disp-lg">Join existing teams</h4>
					<h4 className="disp-sm">Join</h4>
				</CustomButton>
				<CustomButton className="request-btn">
					<AiOutlineMergeCells />
					<h4 className="disp-lg">Team requests</h4>
					<h4 className="disp-sm">Requests</h4>
				</CustomButton>
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
								<Members members={members} />
								<CustomButton>
									Dashboard
									<AiOutlineReconciliation />
								</CustomButton>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default ExistUserTeams;
