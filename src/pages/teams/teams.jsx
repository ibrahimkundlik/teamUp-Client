import React, { useEffect } from "react";
import "./teams.scss";
import Spinner from "../../components/spinner/spinner";
import TeamsError from "../../components/teams/teams-error/teams-error";
import TeamsNavbar from "../../components/teams/teams-navbar/teams-navbar";
//redux
import { useSelector, useDispatch } from "react-redux";
import { getTeams } from "../../redux/teams/teams.action";
import { selectAuth } from "../../redux/user/user.selector";
import { selectTeams } from "../../redux/teams/teams.selector";
import NewUserTeams from "../../components/teams/new-user-teams/new-user-teams";
import ExistUserTeams from "../../components/teams/exist-user-teams/exist-user-teams";

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
					<div className="user-teams-cont">
						{teams.teamsRes.length === 0 ? (
							<NewUserTeams teams={teams} />
						) : (
							<ExistUserTeams />
						)}
					</div>
				</>
			)}
		</div>
	);
};

export default Teams;
