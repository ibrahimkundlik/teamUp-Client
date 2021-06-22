import React from "react";
import "./dashboard-team.scss";
import Members from "../../members/members";
import CustomButton from "../../custom-button/custom-button";
import CustomSelect from "../../custom-select/custom-select";
import { AiOutlinePlus } from "react-icons/ai";

const DashboardTeam = ({ loadTeam }) => {
	return (
		<div className="dashboard-team-cont">
			<h2 className="team-name">{loadTeam.name} board</h2>
			<CustomSelect
				options={["All Tasks", "Backlog", "Progress", "Review", "Done"]}
			/>
			<div className="team-members-cont">
				<Members members={loadTeam.members} />
				<CustomButton>
					<AiOutlinePlus />
					<p>Add members</p>
				</CustomButton>
			</div>
		</div>
	);
};

export default DashboardTeam;
