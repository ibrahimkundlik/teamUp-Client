import React from "react";
import "./dashboard.scss";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectAuthUser } from "../../redux/user/user.selector";
import TeamsNavbar from "../teams/teams-navbar/teams-navbar";

const Dashboard = () => {
	const { id } = useParams();
	const user = useSelector(selectAuthUser);

	return (
		<div className="dashboard-cont">
			<TeamsNavbar user={user} />
			<h5>{id}</h5>
		</div>
	);
};

export default Dashboard;
