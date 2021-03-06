import React from "react";
import "./dashboard-team.scss";
import Members from "../../members/members";
import CustomButton from "../../custom-button/custom-button";
import { AiOutlineUserAdd } from "react-icons/ai";

const DashboardTeam = ({ loadTeam, openStateForm }) => {
	return (
		<div className="dashboard-team-cont">
			<h2 className="team-name">{loadTeam.name} board</h2>
			<div className="team-members-cont">
				<Members
					members={loadTeam.members.map((member) => ({
						_id: member._id._id,
						username: member._id.name,
					}))}
				/>
				<CustomButton onClick={() => openStateForm("addMember")}>
					<AiOutlineUserAdd />
					<p className="add-member-text">Add members</p>
				</CustomButton>
			</div>
		</div>
	);
};

export default DashboardTeam;
