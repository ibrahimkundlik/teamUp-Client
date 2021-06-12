import React, { useEffect } from "react";
import "./teams-mainpage.scss";

import Spinner from "../../spinner/spinner";
import TeamsError from "../../teams/teams-error/teams-error";
import TeamsNavbar from "../../teams/teams-navbar/teams-navbar";
import NewUserTeams from "../../teams/new-user-teams/new-user-teams";
import ExistUserTeams from "../../teams/exist-user-teams/exist-user-teams";

import { useSelector, useDispatch } from "react-redux";
import { getTeams } from "../../../redux/teams/teams.action";
import { selectAuth } from "../../../redux/user/user.selector";
import { selectTeams } from "../../../redux/teams/teams.selector";

const TeamsMainpage = () => {
	const auth = useSelector(selectAuth);
	const teams = useSelector(selectTeams);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTeams());
	}, [dispatch]);

	return (
		<div className="teams-container">
			{teams.loading ? (
				<div className="spinner-fullscreen">
					<Spinner />
				</div>
			) : auth.userRes === null ? (
				<TeamsError teams={teams} />
			) : (
				<>
					<TeamsNavbar user={auth.userRes?.user} />
					<div className="user-teams-cont">
						{teams.teamsRes.length === 0 ? (
							<NewUserTeams teams={teams} />
						) : (
							<ExistUserTeams
								teams={teams.teamsRes}
								username={auth.userRes?.user?.name}
							/>
						)}
					</div>
				</>
			)}
		</div>
	);
};

export default TeamsMainpage;
