import React from "react";
import CustomButton from "../../custom-button/custom-button";
import "./exist-user-teams.scss";
import {
	AiOutlinePlusCircle,
	AiOutlineAppstoreAdd,
	AiOutlineMergeCells,
} from "react-icons/ai";
import Members from "../../members/members";

const ExistUserTeams = ({ teams, username }) => {
	return (
		<div className="exist-user-teams-cont">
			<h2>
				Hi {username.split(" ")[0]}{" "}
				<span role="img" aria-label="waving">
					👋
				</span>
			</h2>
			<div className="team-actions">
				<h4>Team actions:</h4>
				<CustomButton className="create-btn">
					<AiOutlinePlusCircle />
					<h4>Create new team</h4>
				</CustomButton>
				<CustomButton className="join-btn">
					<AiOutlineAppstoreAdd />
					<h4>Join existing teams</h4>
				</CustomButton>
				<CustomButton className="request-btn">
					<AiOutlineMergeCells />
					<h4>Team requests</h4>
				</CustomButton>
			</div>
			<div className="current-teams">
				<h4>Your current teams:</h4>
				<ul className="teams-list">
					{teams.map((team) => {
						const { name, description, members, _id } = team;
						return (
							<li key={_id} className="team">
								<h3>{name}</h3>
								<p>{description}</p>
								<Members members={members} />
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default ExistUserTeams;
