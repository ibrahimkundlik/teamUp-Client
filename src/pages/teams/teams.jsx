import React, { useEffect } from "react";
import "./teams.scss";
import Spinner from "../../components/spinner/spinner";
import TeamsError from "../../components/teams/teams-error/teams-error";
import TeamsNavbar from "../../components/teams/teams-navbar/teams-navbar";
import TeamsList from "../../components/teams/teams-list/teams-list";
//redux
import { useSelector, useDispatch } from "react-redux";
import { getTeams } from "../../redux/teams/teams.action";
import { selectAuth } from "../../redux/user/user.selector";
import { selectTeams } from "../../redux/teams/teams.selector";

const Teams = () => {
	const auth = useSelector(selectAuth);
	const teams = useSelector(selectTeams);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTeams());
	}, [dispatch]);

	return (
		<div className="teams-container">
			{teams.loading ? (
				<Spinner />
			) : auth.userRes === null ? (
				<TeamsError teams={teams} />
			) : (
				<>
					<TeamsNavbar user={auth.userRes?.user} />
					<TeamsList teams={teams.teamsRes} />
				</>
			)}
		</div>
	);
};

export default Teams;
