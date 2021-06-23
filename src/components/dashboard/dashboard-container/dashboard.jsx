import React, { useEffect, useState } from "react";
import "./dashboard.scss";
import createTaskImg from "../../../images/create_task.svg";
import { useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { selectAuthUser } from "../../../redux/user/user.selector";
import TeamsNavbar from "../../teams/teams-navbar/teams-navbar";
import { selectSuccessRes } from "../../../redux/teams/teams.selector";
import DashboardTeam from "../dashboard-team/dashboard-team";
import CustomButton from "../../custom-button/custom-button";
import { AiOutlinePlus } from "react-icons/ai";

const Dashboard = ({ teams }) => {
	const { id } = useParams();
	const user = useSelector(selectAuthUser);
	const teamsLoaded = useSelector(selectSuccessRes);
	const [team, setTeam] = useState(null);

	useEffect(() => {
		setTeam(teams.find((team) => team._id === id));
	}, [teams, id]);

	if (teamsLoaded === "All teams loaded successfully." && teams.length === 0) {
		return <Redirect to="/teams" />;
	}

	return (
		<div className="dashboard-container">
			<TeamsNavbar user={user} />
			{!team ? (
				<p>Invalid team id provided.</p>
			) : team?.tasks.length === 0 ? (
				<div className="dashboard-no-tasks">
					<DashboardTeam loadTeam={team} />
					<div className="create-task-img">
						<img src={createTaskImg} alt="create-task" />
					</div>
					<div className="no-task-desc">
						<p>Currently there are no tasks added in this team.</p>
						<CustomButton className="new-task-btn">
							<AiOutlinePlus />
							<p>Add New Task</p>
						</CustomButton>
					</div>
				</div>
			) : (
				<div className="dashboard-with-tasks">
					<DashboardTeam loadTeam={team} />
					<p>Tasks Present -- Edit Needed</p>
				</div>
			)}
		</div>
	);
};

export default Dashboard;
