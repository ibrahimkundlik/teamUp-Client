import React from "react";
import "./dashboard.scss";
import { useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { selectAuthUser } from "../../redux/user/user.selector";
import TeamsNavbar from "../teams/teams-navbar/teams-navbar";
import { selectSuccessRes } from "../../redux/teams/teams.selector";

const Dashboard = ({ teams }) => {
	const { id } = useParams();
	const user = useSelector(selectAuthUser);
	const teamsLoaded = useSelector(selectSuccessRes);

	if (teamsLoaded === "All teams loaded successfully." && teams.length === 0) {
		return <Redirect to="/teams" />;
	}

	return (
		<div className="dashboard-container">
			<TeamsNavbar user={user} />
			<h3>{id}</h3>
		</div>
	);
};

export default Dashboard;
