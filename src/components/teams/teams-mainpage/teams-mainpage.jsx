import React from "react";
import "./teams-mainpage.scss";
import TeamsNavbar from "../../teams/teams-navbar/teams-navbar";
import NewUserTeams from "../../teams/new-user-teams/new-user-teams";
import ExistUserTeams from "../../teams/exist-user-teams/exist-user-teams";
import { useSelector } from "react-redux";
import { selectAuth } from "../../../redux/user/user.selector";

const TeamsMainpage = ({ teams }) => {
	const auth = useSelector(selectAuth);

	return (
		<div className="teams-mainpage-container">
			<TeamsNavbar user={auth.userRes?.user} />
			<div className="user-teams-cont">
				{teams.length !== 0 ? (
					<ExistUserTeams teams={teams} username={auth.userRes?.user?.name} />
				) : (
					<NewUserTeams />
				)}
			</div>
		</div>
	);
};

export default TeamsMainpage;
