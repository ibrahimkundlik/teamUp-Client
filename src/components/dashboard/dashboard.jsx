import React from "react";
import "./dashboard.scss";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectAuthUser } from "../../redux/user/user.selector";
import TeamsNavbar from "../teams/teams-navbar/teams-navbar";

const Dashboard = ({ teams }) => {
	const { id } = useParams();
	const user = useSelector(selectAuthUser);

	if (teams.length === 0) {
		return <p>NO TEAMS TO SHOW</p>;
	}

	return (
		<div className="dashboard-container">
			<TeamsNavbar user={user} />
			<h3>{id}</h3>
		</div>
	);
};

export default Dashboard;
